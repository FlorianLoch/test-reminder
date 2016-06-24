# test-reminder

> Reminds you to run your testsuite

Whenever there is no CI which runs your test after every check-in or nightly, there is a chance to forget to run the tests.
This litte helper reminds you that your tests are overdue.
A poor man's CI so to speak.

If you can't run your tests locally, e.g. if tests are run in a docker container or vm, and still want to use your local git,
this might be helpfull.
Or if for any reason you don't want to run your testsuite in a precommit-hook, but tent to forget to run in at all ;)

## CLI

```sh
$ npm install --save-dev test-reminder
```

```sh
$ test-reminder --help

  reminds you to run your testsuite

  Usage:
    test-reminder [-r|-c] [options]

  Options:
    -r, --record       Call if tests ran successfully
                         Default: true
    -c, --check        Check if last test-run is below threshold
                         Default: false
    -t, --threshold    Threshold to show error message and fail
                         Default: 10 (in minutes)
    -h, --help         print usage information
    -v, --version      show version info and exit

  Examples:
    $ test-reminder -e 30
    $ test-reminder -r
```

## Deployment

### Record
```json
{
  "name": "yourPackage",
  "scripts": {
     "posttest": "test-reminder --record"
  }
}
```

### Remind
```json
{
  "name": "yourPackage",
  "scripts": {
     "remind": "test-reminder --check --threshold 30"
  },
  "pre-commit": {
     "remind"
  }
}
```
For alternative pre-commit synatx, check [pre-commit](https://www.npmjs.com/package/pre-commit)

## License

MIT © [Florian Loch](https://fdlo.ch/) & [Christoph Häfner](https://christophhaefner.de)

