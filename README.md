# amazon-automation-testing

## Introduction
Basic automation testing to verify main functionalities of the [Amazon](https://www.amazon.com/-/es/) homepage using Cypress & Mocha. 

## Scope
The purpose of this project is to peform low level functional and E2E testing by verifying the following:
- Application loads correctly.
- URL is correct.
- Important elements are present with expected text values.
- Links aren't broken.
- Main categories exist.
- Check language changes.
- Search functionality works well.
- Verify Add to cart.

## Execute tests & display results
- Install [nodejs](https://nodejs.org)
- Clone this repository: <code>git clone https://github.com/iandav/amazon-automation-testing/</code>
- Run <code>npm install</code> in the root folder
- Execute tests <code>npx cypress run</code>

## View tests (code)
If you are interested in how I wrote the test cases in JavaScript, go to <code>"cypress/integration/amazon-homepage/homepage_tests.js"</code>
