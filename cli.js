#!/usr/bin/env node
"use strict";

const cli = require('commander'),
      pkg = require('./package.json');
const testReminder = require('./lib/test-reminder.js');
const chalk = require('chalk'),
      error = chalk.red.bold;

cli
  .version(pkg.version)
  .option('-r, --record', 'Call if tests ran successfully')
  .option('-c, --check', 'Check if last test-run is below threshold')
  .option('-t, --threshold', 'Threshold to show error message and fail (provide number in minutes)', parseInt)
  .option('-h, --help', 'print usage information')
  .option('-v, --version', 'show version info and exit')
  .parse(process.argv);

if(cli.check) {
	if(!testReminder.check(cli.t)) {
		console.log(error(`Tests ran over ${cli.t} minutes ago!`)+"\nRemember to run \"test-reminder --record\" after a successfull test-suite run."+);
		process.exit(1);
	} else {
		process.exit(0);
	}
}

testReminder.record();
