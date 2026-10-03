# ZAVERO 🛍️

### MERN Stack E-Commerce Platform

ZAVERO is a full-stack e-commerce application built with the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It is being developed with a modular backend architecture, secure authentication, and a scalable foundation for product management, shopping carts, orders, and payments.

> 🚧 **Status:** In Development — Phases 1–3 completed; Phase 4 is next.

## ✨ Features

### Implemented

- User registration and login
- Password hashing and verification with bcrypt
- JWT-based authentication using HTTP-only cookies
- Protected routes and role-based access middleware
- Logout and authenticated-user retrieval
- User profile retrieval and updates
- Avatar upload support
- Password updates with current-password verification
- Address create, read, update, and delete operations
- Address ownership validation
- Admin endpoint for retrieving users
- MongoDB integration with Mongoose
- User, address, product, category, cart, order, review, and coupon models
- Database seeder with sample users, categories, and products
- Centralized API error handling and request-validation foundation
- Manual integration testing for authentication, authorization, profile, and address endpoints

### Planned

- Product catalogue with search, filtering, pagination, and sorting
- Product detail endpoints and category counts
- Admin product management and soft deletion
- Product reviews and aggregate ratings
- Persistent shopping cart and guest-cart merge
- Stock validation and server-side cart totals
- Checkout and order management
- Payment integration
- Admin dashboard
- Automated testing, hardening, and deployment

## 🛠️ Tech Stack

**Frontend**
- React
- Vite
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- express-validator
- cookie-parser

**Development Tools**
- ESLint
- Prettier
- npm Workspaces
- concurrently
- Git & GitHub
- Postman

## 📁 Project Structure

```text
ZAVERO/
├── client/                 # React + Vite frontend
├── server/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request controllers
│   │   ├── middleware/     # Authentication and shared middleware
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── validators/     # Request validation
│   │   ├── seeder.js       # Sample database data
│   │   ├── app.js          # Express application
│   │   └── ...
│   └── .env                # Local environment variables (not committed)
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB Atlas](https://www.mongodb.com/atlas) or a local MongoDB instance
- Git

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

Replace the example values with your own. Never commit `.env` files or expose database credentials, JWT secrets, real passwords, or authentication tokens.

### Run the Application

Start the development environment using the configured root script:

```bash
npm run dev
```

The current development servers are configured for:

- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:5000`

Backend health check:

`http://localhost:5000/api/health`

If your local scripts or ports differ, follow the values in your current project configuration.

### Seed the Database

Populate the database with sample categories, products, and users:

```bash
npm run seed
```

Remove seeded data:

```bash
npm run seed:destroy
```

Use the destroy command carefully, especially when working with a database containing data you want to keep.

## 🔐 Authentication & User API

The following endpoints have been implemented:

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and set the authentication cookie |
| POST | `/api/auth/logout` | Clear the authentication cookie |
| GET | `/api/auth/me` | Retrieve the authenticated user |
| GET | `/api/users/me` | Retrieve the authenticated user's profile |
| PUT | `/api/users/me` | Update the authenticated user's profile |
| PUT | `/api/users/password` | Update the account password |
| GET | `/api/users` | Admin: retrieve users |
| POST | `/api/addresses` | Add an address |
| GET | `/api/addresses` | List the authenticated user's addresses |
| PUT | `/api/addresses/:id` | Update an owned address |
| DELETE | `/api/addresses/:id` | Delete an owned address |

Authentication uses JWT verification and HTTP-only cookies. Protected routes require a valid token, and admin-specific access is controlled through role-based middleware.

## 🗃️ Database Models

The project currently includes these Mongoose models:

- **User:** Account information, credentials, and roles
- **Address:** User delivery addresses
- **Category:** Product categories and parent categories
- **Product:** Product details, pricing, stock, and ratings
- **Cart:** User shopping cart and item quantities
- **Order:** Purchase records and order status
- **Review:** Product ratings and comments
- **Coupon:** Discount codes and usage limits

Cart items and order items are embedded within their parent documents.

## 🧭 Development Roadmap

| Phase | Focus | Status |
| --- | --- | --- |
| 1 | Project Scaffolding & Tooling | ✅ Completed |
| 2 | Database Design & Mongoose Models | ✅ Completed |
| 3 | Authentication & User Accounts | ✅ Completed |
| 4 | Product Catalogue & Cart | 🔜 Next |
| 5 | Orders, Checkout & Payments | ⏳ Planned |
| 6 | React Storefront UI | ⏳ Planned |
| 7 | Admin Console, Hardening & Deployment | ⏳ Planned |

## 🔒 Security

Current security measures include:

- Hashing and verifying passwords with bcrypt
- Using JWTs for authentication
- Storing authentication tokens in HTTP-only cookies
- Verifying JWT signatures on protected routes
- Applying role-based authorization
- Enforcing ownership checks for user addresses
- Keeping environment variables and credentials out of version control
- Validating incoming request data

Automated testing, additional production hardening, and deployment are still to come.

## 🤝 Contributing

This project is currently under active development. Suggestions, feedback, and contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request describing your changes.

## 👨‍💻 Author

**Mohamed Abdelnasser**

- GitHub: [@abonasserdotwork](https://github.com/abonasserdotwork)

---

<p align="center">
  Built with ❤️ using the MERN Stack
</p>