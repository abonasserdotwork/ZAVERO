# ZAVERO 🛍️

### MERN Stack E-Commerce Platform

ZAVERO is a full-stack e-commerce application built with the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). The project is being developed with a modular backend architecture, secure authentication, and a scalable foundation for product management, shopping carts, orders, and payments.

> 🚧 **Status:** In Development

## ✨ Features

### Implemented

* User registration and login
* Password hashing with bcrypt
* JWT-based authentication
* HTTP-only authentication cookies
* Protected routes and role-based access middleware
* User profile retrieval
* MongoDB integration with Mongoose
* Product, category, cart, order, review, address, and coupon models
* Database seeder with sample users, categories, and products
* Centralized API error handling and validation foundation

### Planned

* User profile editing and avatar upload
* Password updates
* Address management
* Admin user management
* Product catalogue with search, filtering, and sorting
* Persistent shopping cart
* Checkout and order management
* Payment integration
* Product reviews and ratings
* Admin dashboard

## 🛠️ Tech Stack

**Frontend**

* React
* Vite
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcrypt
* express-validator
* cookie-parser

**Development Tools**

* ESLint
* Prettier
* npm Workspaces
* Git & GitHub
* Postman

## 📁 Project Structure

```text
ZAVERO/
├── client/                 # React + Vite frontend
├── server/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request controllers
│   │   ├── middleware/    # Authentication and middleware
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── validators/    # Request validation
│   │   ├── seeder.js      # Sample database data
│   │   ├── app.js         # Express application
│   │   └── ...
│   └── .env
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* [MongoDB Atlas](https://www.mongodb.com/atlas) or a local MongoDB instance
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/abonasserdotwork/ZAVERO.git
cd ZAVERO
```

Install dependencies from the project root:

```bash
npm install
```

### Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_strong_random_secret
JWT_EXPIRES_IN=15m

SEED_ADMIN_NAME=Admin
SEED_ADMIN_EMAIL=admin@example.com
SEED_ADMIN_PASSWORD=your_secure_password

SEED_CUSTOMER_NAME=Test Customer
SEED_CUSTOMER_EMAIL=customer@example.com
SEED_CUSTOMER_PASSWORD=your_secure_password
```

Replace the example values with your own. Never commit `.env` or expose database credentials, JWT secrets, or real passwords.

### Run the Application

Start the development environment using the configured root script:

```bash
npm run dev
```

The development servers are configured for:

* **Frontend:** `http://localhost:5173`
* **Backend:** `http://localhost:5000`

### Seed the Database

To populate the database with sample categories, products, and users:

```bash
npm run seed
```

To remove the seeded data:

```bash
npm run seed:destroy
```

Use these commands carefully, especially when working with a database containing data you want to keep.

## 🔐 Authentication API

The authentication endpoints currently implemented include:

| Method | Endpoint             | Description                               |
| ------ | -------------------- | ----------------------------------------- |
| POST   | `/api/auth/register` | Register a new user                       |
| POST   | `/api/auth/login`    | Log in and receive a JWT                  |
| POST   | `/api/auth/logout`   | Clear the authentication cookie           |
| GET    | `/api/auth/me`       | Retrieve the authenticated user           |
| GET    | `/api/users/me`      | Retrieve the authenticated user's profile |

Authentication uses JWT verification and HTTP-only cookies. Protected routes require a valid authentication token, while admin-specific access is controlled through role-based middleware.

## 🗃️ Database Models

The project currently includes the following Mongoose models:

* **User:** Account information, credentials, and roles
* **Address:** User delivery addresses
* **Category:** Product categories and parent categories
* **Product:** Product details, pricing, stock, and ratings
* **Cart:** User shopping cart and item quantities
* **Order:** Purchase records and order status
* **Review:** Product ratings and comments
* **Coupon:** Discount codes and usage limits

Cart items and order items are embedded within their parent documents.

## 🧭 Development Roadmap

| Phase | Focus                                 | Status         |
| ----- | ------------------------------------- | -------------- |
| 1     | Project Scaffolding & Tooling         | ✅ Completed    |
| 2     | Database Design & Mongoose Models     | ✅ Completed    |
| 3     | Authentication & User Accounts        | 🚧 In Progress |
| 4     | Product Catalogue & Cart              | ⏳ Planned      |
| 5     | Orders, Checkout & Payments           | ⏳ Planned      |
| 6     | React Storefront UI                   | ⏳ Planned      |
| 7     | Admin Console, Hardening & Deployment | ⏳ Planned      |

## 🔒 Security

Security considerations include:

* Hashing passwords with bcrypt
* Using JWTs for authentication
* Storing authentication tokens in HTTP-only cookies
* Verifying JWT signatures on protected routes
* Applying role-based authorization
* Keeping environment variables and credentials out of version control
* Validating incoming request data

Further hardening, automated tests, and production deployment are planned.

## 🤝 Contributing

This project is currently under active development. Suggestions, feedback, and contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request describing your changes.

## 👨‍💻 Author

**Mohamed Abdelnasser**

* GitHub: [@abonasserdotwork](https://github.com/abonasserdotwork)

---

<p align="center">
  Built with ❤️ using the MERN Stack
</p>
