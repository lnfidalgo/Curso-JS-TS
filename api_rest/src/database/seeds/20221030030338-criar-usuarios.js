const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Lucas",
          email: "teste8@email.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Soares",
          email: "teste7@email.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jhon deer",
          email: "teste4@email.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "New Holand",
          email: "teste6@email.com",
          password_hash: await bcryptjs.hash("1234567", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down() {},
};
