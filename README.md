# Dynamic Cypress Config 🚀

This is a simple way of running `suite` and `sanity` tests using Cypress.

The way it works is simple:

- There is a [config.js](cypress/config.js) file which contains all tests to be run in across different platforms.
- Each platform can have `suite` or `sanity` tests.

There is no limit on the amount of tests per platform, just make sure to use the relative path on each test,
it is used at the time of populating the [integration](cypress/integration/).

## CLI

We need to provide two arguments when using the cli 👇️ both of them `string type`

- `--platform` and `--type`

something like 👇️ would work.

```sh
node test-app-script.js --platform=platformA --type=sanity
```
