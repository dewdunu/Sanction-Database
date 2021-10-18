module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    // Retrieve all Customers
    app.get("/users", users.findAll);
  };
