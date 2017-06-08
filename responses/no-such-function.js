"use strict";

var respond = require("../respond.js");

module.exports = (query) =>
    respond({
        status : 202,
        body : {
            error : {
                _attr : {
                    code : 202,
                    description : "No such function"
                }
            }
        }
    });
