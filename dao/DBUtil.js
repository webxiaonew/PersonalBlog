var mysql = require("mysql")

function createConnection(){
    var connection  = mysql.createConnection({
        host:"192.168.1.8",
        port:"3306",
        user:"root",
        password:"15733097205.",
        database:"my_blog"
    });
    return connection;
}
createConnection()

module.exports= {"createConnection":createConnection};