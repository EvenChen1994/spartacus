#!/usr/bin/env bash
set -e
set -o pipefail

echo "-----"

echo "Running unit tests and code coverage for cds"

nx test cds --no-watch --source-map --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for CDS library"

npm --prefix integration-libs/cds run test:schematics -- --coverage

echo "Running unit tests and code coverage for product-configurator library"

nx test product-configurator --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for product-configurator library"

npm --prefix feature-libs/product-configurator run test:schematics -- --coverage

echo "Running unit tests and code coverage for CDC"

nx test cdc --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for cdc library"

npm --prefix integration-libs/cdc run test:schematics -- --coverage

echo "Running unit tests and code coverage for Digital-Payments"

nx test digital-payments --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for Digital-Payments library"

npm --prefix integration-libs/digital-payments run test:schematics -- --coverage

echo "Running unit tests and code coverage for EPD Visualization"

nx test epd-visualization --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for EPD Visualization library"

npm --prefix integration-libs/epd-visualization run test:schematics -- --coverage

echo "Running unit tests and code coverage for storefinder library"

nx test storefinder --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for storefinder library"

npm --prefix feature-libs/storefinder run test:schematics -- --coverage

echo "Running unit tests and code coverage for qualtrics library"

nx test qualtrics --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for qualtrics library"

npm --prefix feature-libs/qualtrics run test:schematics -- --coverage

echo "Running unit tests and code coverage for asm library"

nx test asm --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for asm library"

npm --prefix feature-libs/asm run test:schematics -- --coverage

echo "Running unit tests and code coverage for tracking"

nx test tracking --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for tracking library"

npm --prefix feature-libs/tracking run test:schematics -- --coverage

echo "Running unit tests and code coverage for pickup-in-store library"

nx test pickup-in-store --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for pickup-in-store library"

npm --prefix feature-libs/pickup-in-store run test:schematics -- --coverage

echo "Running unit tests and code coverage for customer-ticketing"

nx test customer-ticketing --source-map --no-watch --code-coverage --browsers ChromeHeadless

echo "Running schematics unit tests and code coverage for customer-ticketing"

npm --prefix feature-libs/customer-ticketing run test:schematics -- --coverage

echo "Running unit tests and code coverage for schematics library"

npm --prefix projects/schematics run test --runInBand -- --coverage

echo "Running unit tests and code coverage for eslint-rules"

nx test eslint-rules --source-map --no-watch --code-coverage --browsers ChromeHeadless
