const Users = require("./userModel.js");
const db = require("../database/dbConfig.js");

describe("userModel.js", () => {
  describe("users", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("adds a user", async () => {
      const userToAdd = {
        username: "Lilly Tom",
        password: "test"
      };

      const user = await Users.add(userToAdd);

      expect(user).toEqual({ ...userToAdd, id: user.id });
    });
  });
});
