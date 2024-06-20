import { test } from "node:test";
import supertest from "supertest";
import app from "./server.js";

test("/ returns fixed data", async (t) => {
	const res = await supertest(app).get("/");
	t.assert.deepEqual(res.body, { test: "data" });
});
