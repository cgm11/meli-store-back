# Meli Store Back

In this API you are allow to search different products from Mercado Libre api.

## Endpoints used:

* Get items: https://api.mercadolibre.com/sites/MLA/search?q=
* Get categories tree: https://api.mercadolibre.com/categories/
* Get item details: https://api.mercadolibre.com/items/

## Technologies and packages used for development

- Node.js
- express (framework for running javascript code in server side, allow to create a http server).
- typescript and ts-node-dev (for development, allow run node code with typescript code)
- @types/express and @types/node (kind of express data and node)
- axios (promise based HTTP client for the browser and node.js)

# Getting Started

This README.md will guide you on how to install and use this API.

## Installation and initialization

### Clone the repository or download the zip:

```bash
$ git clone https://github.com/cgm11/meli-store-back.git
```

## To install the dependencies

Use **npm** or **yarn** to install the dependencies.

```bash
$ npm install
```

```bash
$ yarn install
```

## Dependencies used

```json
  "dependencies": {
        "axios": "^0.27.2",
        "express": "^4.18.1"
    },
    "devDependencies": {
        "@types/express": "^4.17.13",
        "ts-node-dev": "^2.0.0",
        "typescript": "^4.7.4"
    }
```

## Initialize the server

```bash
npm start or npm run dev
```

If everything is ok you will get the next messages:

- _"Server runnig on port 3001"_
