# Node.js + TypeScript + MongoDB Boilerplate

A boilerplate project for building backend applications using **Node.js**, **TypeScript**, and **MongoDB**. This repository provides a well-structured foundation with commonly used features and configurations.

---

## **Features**

- **TypeScript** for type-safe development.
- **Express.js** for building RESTful APIs.
- **MongoDB** integration with the official MongoDB driver.
- Modular folder structure for scalability.
- Environment-based configurations using `.env`.
- Seeder support for initializing data.
- Predefined scripts for development, building, and seeding.

---

## **Folder Structure**

```
project-root/
|-- dist/                   # Compiled JavaScript files
|-- src/                    # Main source files
|   |-- configs/            # Configuration files
|   |-- constants/          # App constants
|   |-- controllers/        # Route controllers
|   |-- emails/             # Email-related functionality
|   |-- middlewares/        # Express middlewares
|   |-- models/             # MongoDB models
|   |-- routes/             # API routes
|   |-- seeder/             # Data seeders
|   |-- services/           # Business logic services
|   |-- types/              # TypeScript types
|   |-- utils/              # Utility functions
|   |-- validators/         # Input validation logic
|   |-- app.ts              # Express app configuration
|   |-- server.ts           # Starting point of the server
|-- .env.example            # Environment variable example
|-- package.json            # Project dependencies and scripts
|-- tsconfig.json           # TypeScript configuration
```

---

## **Important Packages**

### **Core Dependencies**
- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `mongodb`: Official MongoDB driver for Node.js.
- `mongoose`: Elegant MongoDB object modeling for Node.js.
- `multer`: Middleware for handling `multipart/form-data` for file uploads.
- `winston`: Versatile logging library.

### **Validation**
- `joi`: Schema description language and data validator for JavaScript.

### **Dev Dependencies**
- `typescript`: TypeScript compiler.
- `ts-node`: TypeScript execution environment for Node.js.
- `nodemon`: Monitors changes and restarts the server automatically during development.
- `eslint`: Pluggable JavaScript linter.
- `@typescript-eslint/*`: Linting for TypeScript files.
- `@types/*`: TypeScript definitions for the required packages (e.g., `@types/express`, `@types/mongodb`, etc.).

---

## **Getting Started**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cluster)
- [npm](https://www.npmjs.com/)

### **Setup Instructions**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/itsahmadawais/node-ts-mongo-starter.git
   cd node-ts-mongo-starter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy the `.env.example` file and rename it to `.env`.
   - Set the required variables:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/your-database-name
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:<PORT>`.

---

## **Scripts**

| Command       | Description                                  |
|---------------|----------------------------------------------|
| `npm run build` | Compile TypeScript to JavaScript in `/dist` |
| `npm start`    | Start the production server                 |
| `npm run dev`  | Start the development server with `nodemon` |
| `npm run seed` | Seed the database with initial data         |

---

## **Usage**

### **Routes**
Define your routes in `src/routes/` and corresponding logic in `src/controllers/`.

### **Database Models**
Define MongoDB models in `src/models/` using the MongoDB Node.js driver.

### **Middlewares**
Add custom middleware in `src/middlewares/`.

### **Seeders**
Use the `src/seeder/` directory to create scripts for initializing the database with default data.
Run them using:
```bash
npm run seed
```

---

## **Contributing**

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit.
4. Push to your branch and create a pull request.

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/license/mit).

---

## **Acknowledgments**

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/)

---

Happy coding!

