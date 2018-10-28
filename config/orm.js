var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, vals) {
        var queryString = "INSERT INTO ?? VALUES ?? ";
        connection.query(queryString, [tableInput, vals], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, col1, val1, valO) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, col1, val1, col1, valO], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

}

module.exports = orm;