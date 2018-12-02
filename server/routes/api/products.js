const Blacklist = require('../../models/Blacklist')
const Product = require('../../models/Product')
const axios = require('axios')

const errs = require('../../../common/CustomError')
let wasProductListUpdated = false


async function fillDBWithProducts(endpoint) {
  if(!wasProductListUpdated){
    console.log("--> fillDBWithProducts")
    Product.deleteMany({ brand: 'URG!arino' }, (err) => {
      err => next(err)
    })
    .then(() => getProducts(endpoint))
    .then(({ data: { items }}) => {
      Product.create(items.map(e => ({
        id: e.id,
        description: e.description.toLowerCase(),
        brand: 'URG!arino'
      })))
    }).then(
      wasProductListUpdated = true
    )
  }
}

async function getProducts(endpoint) {
  return await axios.get(`${endpoint}/products`)
}

async function getProductDetails(endpoint, productId) {
  return await axios.get(`${endpoint}/products/${productId}`)
}

async function getBlacklist() {
  console.log("--> getBlacklist")
  return await Blacklist.find({enabled: false})
      .lean()
      .exec()
      .then(blacklist => blacklist.map(i => i.id))
}

async function getIfBlacklisted(productId) {
  console.log("--> getIfBlacklisted")
  return await Blacklist.findOne({ id: productId, enabled: false })
      .lean()
      .exec()
      .then(e => ({id: e.id, enabled: e.enabled}))
}

async function asyncProcessBlacklist(products, blacklist, isAdmin) {
  const [pro, bla] = await Promise.all([products, blacklist])
  
  return {
    items: [...pro.data.items].map((i) => {
      return {...i, enabled: !bla.includes(i.id)}
    }).filter(
      i => isAdmin || i.enabled
    )
  }
}

async function getIfBlacklisted(productId) {
  return await Blacklist.findOne({ id: productId })
}

module.exports = (app, endpoint, apiKey) => {
  const isAdmin = (req) => req.header('x-api-key') === apiKey

  app.get('/api/products', (req, res, next) => {
    fillDBWithProducts(endpoint)

    asyncProcessBlacklist( getProducts(endpoint), getBlacklist(), isAdmin(req) )
    .then((result) => {
      res.json(result)
    })
    .catch(err => next(err))
  })

  app.get('/api/products/:id', (req, res, next) => {
    if(isAdmin(req)) getProductDetails(endpoint, req.params.id).then(r => res.json(r.data)).catch(err => next(err))

    const [details, blacklist] = Promise.all([
      getProductDetails(endpoint, req.params.id).then(r => r.data),
      getIfBlacklisted(req.params.id).then(b => b.enabled)
    ]).then(results => {
      if(results[1]) res.json(results[0])

      next(new errs.NotFoundError())
    }).catch(() => {next(new errs.InternalServerError())})
    
    next(new errs.NotFoundError())
  })

  app.patch('/api/products/:id', (req, res, next) => {
    if(!isAdmin(req))
      next(new errs.UnauthorizedError())

    if(!req.body.hasOwnProperty('enabled') || !typeof req.body.enabled === 'boolean')
      next(new errs.BadRequestError())

    Blacklist.findOneAndUpdate({ id: req.params.id },
      { enabled: req.body.enabled },
      { upsert: true })
      .then((b) => res.json(b))
      .catch(err => next(new errs.InternalServerError()))
  })
}
