# ZAVERO

A full-stack e-commerce web application built with the MERN stack:

- MongoDB
- Express.js
- React.js
- Node.js

ZAVERO is being developed through a seven-phase production-shaped roadmap,
covering backend architecture, authentication, product catalogue, cart,
checkout, payments, storefront UI, administration, security, testing,
and deployment.

---

## Project Status

### Phase 1 — Project Scaffolding & Tooling

- [x] Monorepo structure
- [x] npm workspaces
- [x] Express server
- [x] Environment configuration with dotenv
- [x] CORS configuration
- [x] Morgan request logging
- [x] Axios API client
- [x] Health endpoint
- [x] 404 middleware
- [x] Global error handler
- [x] ESLint
- [x] Prettier
- [x] Client/server development scripts

### Upcoming Phases

- [ ] Phase 2 — Database Design & Mongoose Models
- [ ] Phase 3 — Authentication & User Accounts
- [ ] Phase 4 — Product Catalogue & Cart
- [ ] Phase 5 — Orders, Checkout & Payments
- [ ] Phase 6 — React Storefront UI
- [ ] Phase 7 — Admin Console, Hardening & Deployment

---

## Architecture

```text
ZAVERO/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── utils/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validators/
│   │   ├── uploads/
│   │   ├── tests/
│   │   └── server.js
│   └── package.json
│
├── diagrams/
│
├── .env.example
├── .gitignore
├── .prettierrc
├── .prettierignore
├── package.json
└── README.md
