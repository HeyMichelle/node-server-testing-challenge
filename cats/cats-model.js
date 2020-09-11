
const db = require('../data/dbConfig.js')


function getCats() {
  return db('cats').where({ id }).limit(10) // not sure?
}

function getCatById(id) {
  return db('cats').where({ id }).first()
}

async function addNewCat(cat) {
    const [id] = await db('cats').insert(cat)
    return getCatById(id)
} 

function removeCatById(id) {
  return db('cats').where({ id }).del()
}

module.exports = {
  getCats,
  getCatById,
  addNewCat,
  removeCatById
}