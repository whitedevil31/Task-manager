const request = require("supertest");

const app = require("../src/app");
test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "nandahjd",
      email: "newda@gmail.com",
      password: "rajesvdh1234",
    })
    .expect(201);
});
