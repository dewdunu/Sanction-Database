const sql = require("./db.js");

// constructor
const User = function(user) {
  this.Name = user.Name;
  this.Address = user.Address;
  this.Sanction = user.Sanction;
  this.Other_Name_Logo = user.Other_Name_Logo;
  this.Nationality = user.Nationality;
  this.Effect_Date_Lapse_Date = user.Effect_Date_Lapse_Date;
  this.Grounds = user.Grounds;
};

User.getAll = result => {
  sql.query("SELECT * FROM details", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

module.exports = User;
