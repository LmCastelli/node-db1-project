
const Accounts = require('./accounts-model')

const checkAccountPayload = (req, res, next) => {
  if (req.body.name || !req.body.budget) {
    next({status: 400, message: " name and budget are required "})
  } else if (typeof req.body.name !== 'string') {
    next({status: 400, message: "name of account must be a string"})
  } else if (req.body.name.trim().length < 3 || req.body.name.trim().length > 100) {
    next({status: 400, message: "name of account must be between 3 and 100"})
  } else if (typeof req.body.budget !== 'number') {
    next({status: 400, message: "budget of account must be a number"})
  } else if (req.body.budget < '0' || req.body.budget > '1,000,000') {
    next({status: 400, message: "budget of account is too large or too small"})
  } else {
    next();
  }
}

const checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

async function checkAccountId(req, res, next)  {
  try {
    const account = await Accounts.getById(req.params.id)
    if (account) {
      req.account = account
      next();
    } else  {
        next({status: 404, message: "account not found"})
    }
  } catch (err) {
    next(err);
  }
}
 
function errorHandling (err, req, res, next) { //eslint-disable-line
  res.status(err.status || 500).json({
    message: `There was an error: ${err.message}`,
    stack: err.stack
  });
}
module.exports = {
  errorHandling, 
  checkAccountId, 
  checkAccountNameUnique, 
  checkAccountPayload,
};