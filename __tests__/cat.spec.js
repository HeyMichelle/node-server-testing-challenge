const supertest = require("supertest")
const server = require("../server")
const db = require("../data/dbConfig")

beforeEach(async () => {
	// run the seeds programatically before each test to start fresh
	await db.seed.run()
})

afterAll(async () => {
	// close the database connection so the test process doesn't hang or give a warning
	await db.destroy()
})

describe("cats integration tests", () => {
	it("GET /cats", async () => {
		const res = await supertest(server).get("/cats")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.length).toBeGreaterThanOrEqual(4)
		expect(res.body[0].name).toBe("sam")
	})

	it("GET /cats/:id", async () => {
		const res = await supertest(server).get("/cats/2")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("frodo")
	})

	it("GET /cats/:id - not found", async () => {
		const res = await supertest(server).get("/cats/50")
		expect(res.statusCode).toBe(404)
	})

	it("POST /cats", async () => {
		const res = await supertest(server)
			.post("/cats")
			.send({ name: "bilbo" })
		expect(res.statusCode).toBe(201)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("bilbo")
	})
})