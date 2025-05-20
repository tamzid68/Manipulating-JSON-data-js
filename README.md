# Manipulating-JSON-data-js

A simple Node.js Express API for serving and manipulating product data stored in a JSON file.  
Includes basic rate limiting and user-agent filtering middleware.

---

## Features

- **List all products** (summarized view)
- **Get product by ID** (detailed view)
- **Rate limiting** (limits requests per IP)
- **User-Agent filtering** (blocks common bots and scripts)
- **JSON file as data source** (no database required)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:
    ```sh
    git clone <repo-url>
    cd Manipulating-JSON-data-js
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node app.js
    ```
    The server will run on [http://localhost:4000](http://localhost:4000).

---

## API Endpoints

All endpoints are prefixed with `/api`.

### Get All Products (Summarized)

- **GET** `/api/get/product`
- **Response:** Array of products with summary fields.

### Get Product by ID

- **GET** `/api/product/:id`
- **Params:**  
  `id` — Product ID (integer)
- **Response:** Full product details or 404 if not found.

---

## Middleware

### Rate Limiting

- Limits each IP to 5 requests per 10 seconds.
- Returns HTTP 429 if limit exceeded.

### User-Agent Filtering

- Blocks requests from common bots and scripts (e.g., curl, wget, python-requests).
- Returns HTTP 400 with a custom message if blocked.

---

## Project Structure

```
.
├── app.js
├── data.json
├── controllers
│   └── con_productController.js
├── middLeware
│   ├── mid_checkUser.js
│   └── mid_rateLimit.js
├── routes
│   └── rou_product.js
└── package.json
```

---

## Example Request

**Get all products:**
```sh
curl http://localhost:4000/api/get/product
```

**Get product by ID:**
```sh
curl http://localhost:4000/api/product/1
```

---

## License

MIT

---

**Note:**  
This project is for learning/demo purposes and uses a flat JSON file as the data source. For production, consider using a database and more robust validation/authentication.