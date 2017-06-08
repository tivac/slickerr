"use strict";

var xml = require("xml"),
    
    respond = require("../respond.js");

module.exports = (query) =>
    respond({
        status : 203,
        body : {
            error : {
                _attr : {
                    code : 203,
                    description : "Function not available"
                }
            }
        }
    });
