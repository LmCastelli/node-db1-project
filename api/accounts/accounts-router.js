
const {
  errorHandling,
  checkAccountNameUnique, 
  checkAccountId,
  checkAccountPayload,
} = require('./accounts-middleware')

const Accounts = require('./accounts-model')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const data = await Accounts.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId,  (req, res) => {
  res.json(req.account)
})

router.post('/', checkAccountPayload, async (req, res, next) => {
  try {
    const data = await Accounts.create(req.body)
    res.json(data)
  } catch (err) {
    next (err)
  }
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

router.use(errorHandling);

module.exports = router;
