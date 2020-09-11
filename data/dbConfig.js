const knex = require("knex")
const knexfile = require("../knexfile")

const env = process.env.NODE_ENV || "development"

module.exports = knex(knexfile[env])


// const knex = require("knex")
// const knexfile = require("../knexfile")

// module.exports = knex(knexfile)

console.log(NODE_ENV) 