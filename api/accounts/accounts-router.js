const express = require('express')
const Accounts = require('./accounts-model')
const router = express.Router()

const {
  errorHandling,
  checkAccountNameUnique, 
  checkAccountId,
  checkAccountPayload,
} = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  try {
    const data = await Accounts.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId,  (req, res) => {
  res.status(200).json(req.account)
  
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
  res.status(err.status || 500).json({
    note: "something went wrong in the accounts router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
