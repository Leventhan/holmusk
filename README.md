holmusk
========

![](http://piclair.com/data/0ya6x.jpg)

> This `README` documents whatever steps are necessary to get the application up and running.

## Getting Started

Have Node.js installed.

Fork this project, and do a `git clone` from your fork. The project directory should look as follows (some details omitted):

```
|-- scraper/
		|-- lib/
		|-- test/
		|-- index.js
    |-- package.json
|-- backend/
		|-- api/
			 |-- controllers/
			 |-- models/
       |-- responses/
		|-- config/
    |-- test/
    |-- app.js
    |-- package.json
|-- README.md

```

First, set up the API component:

```
cd backend
npm install
sails lift
```

Start scraping:

```
cd scraper
npm install
node index.js {number of pages to scrape} {brand}
```
> You can call `node index.js` without arguments to use the default 1, 'generic' parameters. Each page contains 20 food items.

At this point, the food objects will have been saved into the database.

## Local Development DB setup

In your `local.js` file, you'll need to define an additional connections settings. Below is an example:

> /backend/config/local.js

```
  connections: {
    postgres: {
      adapter: 'sails-postgresql',
      host: 'localhost',
      port: 5432,
      user: '<your username>',
      password: '<your password>',
      database: 'holmusk'
    }
  }

```

Production settings are specified through environment variables.

## Code Style Enforcement with JSCS

For a software team to be sure everyone follows consistent code style and conventions, it's important to have an automated linters to enforce best practices. To do this, we're using the [JSCS](https://github.com/SublimeLinter/SublimeLinter-jscs/) linter. This project enforces the [Google Javascript Style Guide](https://github.com/jscs-dev/node-jscs/blob/master/presets/google.json).

![](https://github.com/SublimeLinter/SublimeLinter-jscs/raw/master/demo.gif)

If you're developing this project, you **must** have this installed. Plugins are available on all major code editors.


## API Routes

| API Endpoint                           | Description                       |
|----------------------------------------|-----------------------------------|
| GET /api/v1/foods/autocomplete?q=:term | Search Foods by :term             |
| GET /api/v1/foods                      | Get all Foods                     |
| GET /api/v1/foods/:id                  | Find a single Food of a given :id |
| POST /api/v1/foods                     | Create a new Food                 |

> For convenient testing, use [Postman](https://www.getpostman.com) and import [this Postman collection](https://www.getpostman.com/collections/fec63667ea5bceeec5b0). Postman is a desktop API testing tool.

![](http://i.imgur.com/3UQ0qIW.gif)

## API HTTP Status Codes

| Status Code               | Meaning                                                                                                                |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|
| 200 OK                    | Generic successful execution.                                                                                          |
| 201 Created               | Used as a response to POST method execution to indicate successful creation of a resource.                             |
| 400 Bad Request           | Your request could not be understood by the server. This may be due to the data payload is not in the expected format. |
| 401 Unauthorized          | The request requires authentication and none was provided.                                                             |
| 403 Forbidden             | Request failed because you do not have authorization to access a specific resource.                                    |
| 404 Not Found             | The specified object could not be found.                                                                               |
| 500 Internal Server Error | We had a problem with our server. Report the issue or try again later.                                                 |

## Running Tests
Developers are strongly encouraged to write unit tests for new code, and to submit new unit tests for old code. To run unit/integration tests, run:

```
npm test
```

Both the `scraper` and `backend` components are covered by tests.

## Credits

Contributors:

- Yos Riady ([http://yosriady.com](http://yosriady.com))

