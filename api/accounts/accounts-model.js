const db = require('../../data/db-config')

const getAll = async () => {
  const rows = await db('accounts')
  return rows;
}

async function getById(accountId)  {
  const row = await db('accounts')
    .where('id', accountId)
    .first();
  return row;
}

const create = async account => {
  const newid = await db('accounts').insert(account)
  const newAccount = await getById(id)
  return newAccount
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
