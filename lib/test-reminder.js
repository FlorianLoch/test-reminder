"use strict";

const tsStorage = require("./timestamp-storage");

const RECORD_FILE = "last_successfull_test";

exports.check = function (thresholdMinutes) {
    const timestamp = tsStorage.readLastTimestamp(RECORD_FILE);

    const delta = ((Date.now() / 1000) - timestamp) / 60;

    return delta <= thresholdMinutes;
};

exports.record = function () {
    tsStorage.writeTimestamp(RECORD_FILE);
};
