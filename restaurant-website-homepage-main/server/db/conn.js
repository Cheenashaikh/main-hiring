const mysql  = require("mysql2");

const conn  = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"admin1234",
    database:"userimageupload"
});

conn.connect((error) => {
    if(error) throw error;
    console.log("connected  ! ")
})

module.exports = conn