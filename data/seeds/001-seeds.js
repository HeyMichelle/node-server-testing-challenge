exports.seed = async function(knex) {
	await knex("cats").truncate()
	await knex("cats").insert([
		{ name: "sam" },
		{ name: "frodo" },
		{ name: "pippin" },
		{ name: "merry" },
	])
}