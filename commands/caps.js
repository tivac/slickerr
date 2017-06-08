"use strict";

var respond = require("../respond.js"),
    
    pkg = require("read-pkg-up").sync(),
    
    yes = "yes",
    no  = "no";

module.exports = (query) =>
    respond({
        body : {
            caps : [
                {
                    server : {
                        _attr : {
                            version   : pkg.version,
                            title     : pkg.name,
                            strapline : pkg.description,
                            email     : pkg.author
                        }
                    }
                },

                {
                    registration : {
                        _attr : {
                            available : no,
                            open : no
                        }
                    }
                },

                // TODO: This should be per-config, not hardcoded
                {
                    searching : [
                        {
                            search : {
                                _attr : {
                                    available : yes,
                                    supportedParams : "q,group"
                                }
                            }
                        },

                        {
                            "tv-search" : {
                                _attr : {
                                    available : yes,
                                    supportedParams : "q,season,ep"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    });
