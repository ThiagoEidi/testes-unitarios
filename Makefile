all: test run

test:
	npm test

run:
	npx live-server --open=calculator.html
