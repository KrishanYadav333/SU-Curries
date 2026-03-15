# SU Curries Backend API

A comprehensive NestJS-based backend API for the SU Curries e-commerce platform, featuring product management, order processing, user authentication, and business services.

##  Features

### Core Business Features
- **Product Catalog System**: Complete product and category management with search, filtering, and inventory tracking
- **E-Commerce Engine**: Shopping cart, order processing, payment integration ready
- **User Profile Management**: User registration, authentication, profile management, and address book
- **Booking System**: Cooking class scheduling and management (coming soon)
- **Catering Services**: Custom catering order management (coming soon)

### Technical Features
- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Database**: PostgreSQL with TypeORM for robust data management
- **API Documentation**: Comprehensive Swagger/OpenAPI documentation
- **Validation**: Request validation with class-validator
- **Security**: Password hashing, CORS, rate limiting ready
- **Internationalization**: Multi-language support ready

##  Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

##  Installation & Setup

1. **Clone and install dependencies:**
```bash
cd backend
npm install
```

2. **Environment Configuration:**
```bash
cp .env.example .env
```

3. **Configure your `.env` file:**
```env
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=su_curries

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# App
PORT=3000
NODE_ENV=development
```

4. **Database Setup:**
```bash
# Make sure PostgreSQL is running
# Create your database
createdb su_curries

# Run migrations (when available)
npm run migration:run
```

5. **Start the application:**
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

##  API Documentation

Once running, access the interactive API documentation:
- **Swagger UI**: http://localhost:3000/api
- **JSON Schema**: http://localhost:3000/api-json

##  Testing the API

Use the provided test file with REST Client extension in VS Code:

1. Open `test-api.http`
2. Update the variables section with your tokens
3. Execute requests directly from VS Code

### Key Endpoints

#### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh JWT token

#### Products & Categories
- `GET /products` - List products with filtering
- `GET /products/featured` - Get featured products
- `GET /categories` - List categories
- `POST /products` - Create product (admin)
- `POST /categories` - Create category (admin)

#### Orders
- `POST /orders/calculate` - Calculate cart totals
- `POST /orders` - Create order (authenticated)
- `POST /orders/guest` - Create order as guest
- `GET /orders` - Get user orders
- `PATCH /orders/:id/cancel` - Cancel order

#### User Management
- `GET /users/profile` - Get user profile
- `PATCH /users/profile` - Update profile
- `POST /users/profile/addresses` - Add address
- `PATCH /users/profile/password` - Change password

##  Project Structure

```
backend/
├── src/
│   ├── auth/                 # Authentication & authorization
│   ├── users/                # User management
│   ├── products/             # Product catalog system
│   ├── orders/               # Order processing
│   ├── bookings/             # Cooking class bookings
│   ├── catering/             # Catering services
│   ├── health/               # Health check endpoints
│   ├── config/               # Configuration files
│   ├── common/               # Shared utilities
│   └── main.ts               # Application entry point
├── test/                     # Test files
├── test-api.http            # API testing file
└── package.json
```

##  Authentication & Authorization

The API uses JWT-based authentication with role-based access control:

### Roles
- **CUSTOMER**: Regular users who can place orders
- **ADMIN**: Full access to manage products, orders, and users

### Protected Routes
- Most `GET` endpoints are public
- `POST`, `PATCH`, `DELETE` operations require authentication
- Admin-only endpoints are clearly marked in the documentation

##  Database Schema

### Core Entities
- **Users**: User accounts with profiles and addresses
- **Products**: Product catalog with categories
- **Orders**: Order processing with items
- **Categories**: Product categorization
- **UserAddresses**: User shipping/billing addresses

### Relationships
- Users can have multiple addresses and orders
- Products belong to categories
- Orders contain multiple order items
- Each order item references a product

##  Deployment

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:port/database
JWT_SECRET=your-production-jwt-secret
PORT=3000
```

### Docker Support (Optional)
```dockerfile
# Dockerfile example
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

##  Development

### Available Scripts
```bash
npm run start:dev      # Development mode with hot reload
npm run build          # Build for production
npm run start:prod     # Production mode
npm run test           # Run tests
npm run test:e2e       # End-to-end tests
npm run lint           # Lint code
npm run format         # Format code
```

### Code Quality
- ESLint configuration for code quality
- Prettier for code formatting
- TypeScript for type safety
- Class-validator for request validation

##  Configuration

### Database Configuration
Located in `src/config/database.config.ts` - supports PostgreSQL with TypeORM.

### JWT Configuration
Located in `src/config/jwt.config.ts` - configurable token expiration and secrets.

### CORS Configuration
Configured in `main.ts` - adjust for your frontend domain.

##  Performance & Scalability

- Database indexing on frequently queried fields
- Pagination for large datasets
- Efficient query optimization with TypeORM
- Ready for caching layer integration
- Stateless JWT authentication for horizontal scaling

##  Contributing

1. Follow the existing code structure
2. Add proper validation to DTOs
3. Include Swagger documentation for new endpoints
4. Write tests for new features
5. Follow TypeScript best practices

##  License

This project is proprietary software for SU Curries.

---

**Need help?** Check the API documentation at `/api` or review the test file for usage examples.