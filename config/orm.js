var connection = require("./connection.js");

// ?? is used for table and column names, it escapes them with backticks. ? is for ordinary values.

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;

            }
            else {
                cb(result)
            }
        });
    },
    insertOne: function (tableInput, vals, cb) {
        var queryString = "INSERT INTO ?? VALUES ?";
        connection.query(queryString, [tableInput, vals], function (err, result) {
            if (err) { throw err }
            else {
                cb(result)
            }
        });
    },
    updateOne: function (tableInput, objColVals, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ?";
        connection.query(queryString, [tableInput, objColVals, condition], function (err, result) {
            if (err) {
                throw err;
            }
            else {
                cb(result)
            }
        });
    }

}

module.exports = orm;