const Product = require('../../models/Product');
const ImaTeapotError = require('../../../common/CustomError').ImaTeapotError

module.exports = (app) => {
  app.get('/api/search/tetera', (req, res, next) => {
    next(new ImaTeapotError())
  })

  app.get('/api/search', (req, res, next) => {
    Product.find({description: new RegExp(req.query.q, 'i')}, '-_id -__v -brand', {limit: 10})
      .exec()
      .then((product) => res.json(product))
      .catch((err) => next(err))
  })
}
