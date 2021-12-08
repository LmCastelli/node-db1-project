const db = require('../../data/db-config')

const getAll = async () => {
  const rows = await db('accounts')
  return rows;
}

const getById = (id) => {
    return db("accounts").where({ id }).first();
};


const create =  account => {
  return db('accounts')
    .insert(account)
    .then(([id]) => getById(id))
}

const updateById = async (id, account) => {
  await db('accounts')
    .update(account)
    .where('id', '=', id)
  const updated = await getById(id)
  return updated
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
