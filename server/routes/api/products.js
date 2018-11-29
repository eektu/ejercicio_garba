const Blacklist = require('../../models/Blacklist')
const axios = require('axios')

const garba_endpoint = 'http://garbarino-mock-api.s3-website-us-east-1.amazonaws.com'
const apiKey = 'que-hacemos-gon?'


async function getProducts() {
  return axios.get(`${garba_endpoint}/products`)
}

async function getBlacklist() {
  const result = await Blacklist.find()
      .lean()
      .exec()
      .then(blacklist => blacklist.filter(
        i => !!i.id
      ))
      .catch((err) => console.log('hubo un error'))
  return result
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


module.exports = (app) => {
  const isAdmin = (req) => req.header('x-api-key') === apiKey

  app.get('/api/products', (req, res, next) => {
    const response = asyncProcessBlacklist( getProducts(), getBlacklist(), isAdmin(req) )
    .then((result) => {
      res.json(result)
    })
    .catch((error) => res.json({code:error.code, message:'paso algo feo'}))
  });

  app.patch('/api/products/:id', function (req, res, next) {
    const blacklist = new Blacklist({id: req.params.id});

    blacklist.save()
      .then(() => res.json(blacklist))
      .catch((err) => next(err));
  });
};
