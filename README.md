holmusk 
========

> This `README` documents whatever steps are necessary to get the application up and running.

## Getting Started

Have Node.js installed.

Fork this project, and do a `git clone` from your fork. The project directory should look as follows (some details omitted):

```
|-- scraper/
		|-- lib/
		|-- test/
		|-- index.js
|-- backend/
		|-- api/
			 |-- controllers/
			 |-- models/
		|-- config/

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

At this point, the food objects will have been saved into the API database. 

## API Routes

| API Endpoint                           | Description                       |
|----------------------------------------|-----------------------------------|
| GET /api/v1/foods/autocomplete?q=:term | Search Foods by :term             |
| GET /api/v1/foods                      | Get all Foods                     |
| GET /api/v1/foods/:id                  | Find a single Food of a given :id |
| POST /api/v1/foods                     | Create a new Food                 |
| DELETE /api/v1/foods/:id               | Delete a single Food of given :id |

For convenient testing, use [Postman](https://www.getpostman.com) and import [this Postman collection](https://www.getpostman.com/collections/fec63667ea5bceeec5b0).


## Running Tests

To run tests, run:

```
mocha
```
