"use strict";

const fs = require("fs");

exports.readLastTimestamp = function (filename) {
    try {
        const content = fs.readFileSync(filename, {
            encoding: "utf8"
        });

        const match = /^([0-9]+?):.*/.exec(content);
        if (typeof match[1] != "string") {
            throw new Error("Record of last successfull test seems to be invalid!");
        }

        return match[1];
    } catch (err) {
        console.debug("");
        return Number.NEGATIVE_INFINITY;
    }
};

exports.writeTimestamp = function (filename) {
    const content = (Date.now() / 1000) + 
    fs.writeFileSync(filename, Date.now() / 1000);
};