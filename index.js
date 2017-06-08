"use strict";

var http = require("http"),

    load   = require("import-modules"),
    route  = require("spirit-router"),
    spirit = require("spirit").node,

    commands = load("./commands", { camelize : false }),

    nope = require("./responses/no-such-function.js"),

    app, server;

app = route.define([
    route.get("*", [ "query" ], (query) => {
        if(query.t in commands) {
            return commands[query.t](query);
        }

        return nope();
    })
]);

server = http.createServer(spirit.adapter(app));

server.listen(9999);

console.log("Server listening on :9999");
