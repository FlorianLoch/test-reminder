# test-reminder

> Reminds you to run your testsuite

Whenever there is no CI which runs your test after every check-in or nightly, there is a chance to forget to run the tests.
This litte helper reminds you that your tests are overdue.
A poor man's CI so to speak.

## CLI

```sh
$ npm install --save-dev test-reminder
```

```sh
$ test-reminder --help

  reminds you to run your testsuite

  Usage:
    test-reminder [options]

  Options:
    -w, --warning      Treshold to show warning sign
                         Default: 5m
    -e, --error        Treshold to show error message and fail
                         Default: 10m
    -h, --help         print usage information
    -v, --version      show version info and exit

  Examples:
    $ test-reminder
```

## Deployment
 * After every testrun via npm run script "posttest"
 * Befor every commit via [pre-commit](https://www.npmjs.com/package/pre-commit)

## License

MIT © [Florian Loch](https://fdlo.ch/) & [Christoph Häfner](https://christophhaefner.de)
