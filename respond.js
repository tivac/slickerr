"use strict";

var xml = require("xml");

module.exports = (resp) =>
    Object.assign(
        {
            status  : 200,
            headers : {
                "Content-Type": "text/xml; charset=utf-8"
            }
        },
        resp,
        {
            body : xml(resp.body, { declaration : true })
        }
    );
