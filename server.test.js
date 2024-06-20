import { test } from "node:test";
import assert from "assert/strict";
import supertest from "supertest";
import app from "./server.js";

test("/ returns fixed data", async (t) => {
	const res = await supertest(app).get("/");
	assert.deepEqual(res.body, { test: "data" });
});
