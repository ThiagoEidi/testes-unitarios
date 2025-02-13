all: test coverage run

test:
	npm test

coverage:
	npm test -- --coverage

run:
	npx live-server --open=calculator.html
