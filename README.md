#  SU Curries - Complete Restaurant Management System

A comprehensive full-stack restaurant management system with customer ordering, admin dashboard, and delivery management.

##  Features

###  **Multi-Role System**
- **Customer Interface**: Browse menu, place orders, make reservations
- **Admin Dashboard**: Comprehensive management with real-time analytics
- **Driver Portal**: Delivery management and tracking

###  **Customer Features**
- Product catalog with search and filtering
- Shopping cart with persistence
- Secure checkout with address management
- Order history and tracking
- Table booking system
- User profile management

###  **Admin Features**
- Real-time dashboard with analytics
- Order management and status tracking
- User management with statistics
- Inventory management
- Booking management
- Marketing campaigns and promotions
- Comprehensive reporting

###  **Driver Features**
- Delivery dashboard
- Order pickup and delivery workflow
- Real-time status updates
- Delivery notes and tracking

##  Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router v6** for navigation
- **Context API** for state management
- **i18n** for internationalization

### Backend
- **NestJS** framework
- **TypeORM** for database operations
- **PostgreSQL 15** database
- **JWT** authentication
- **Swagger** API documentation

##  Quick Start

### Prerequisites
- Node.js (v16+)
- PostgreSQL 15
- npm or yarn

### 1. Database Setup
```bash
# Run the database setup script
.\setup-fresh-database.bat
```

### 2. Start Development Servers
```bash
# Start both frontend and backend
.\start-dev.bat
```

### 3. Access the Application
- **Customer Interface**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **Driver Portal**: http://localhost:3000/driver

##  Demo Accounts

### Admin Account
- **Email**: admin@sucurries.com
- **Password**: admin123
- **Access**: Full admin dashboard and management

### Customer Accounts
- **John Doe**: john.doe@example.com / password123
- **Jane Smith**: jane.smith@example.com / password123
- **Mike Johnson**: mike.johnson@example.com / password123
- **Sarah Wilson**: sarah.wilson@example.com / password123
- **David Brown**: david.brown@example.com / password123

### Driver Account
- **Email**: driver@sucurries.com
- **Password**: driver123
- **Access**: Delivery management dashboard

##  Mock Data

The system includes comprehensive test data:
- **100+ Orders** distributed across customer accounts
- **25+ Table Bookings** with realistic scheduling
- **7 User Accounts** (5 customers, 1 admin, 1 driver)
- **4 Marketing Campaigns** with engagement metrics
- **4 Promotional Codes** with usage tracking

##  Database Configuration

### PostgreSQL Setup
- **Host**: localhost:5432
- **Database**: su_foods_db
- **User**: su_foods_user
- **Password**: su_foods_password

##  Project Structure

```
su-curries/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── store/           # State management
│   │   ├── data/            # Mock data
│   │   └── utils/           # Utility functions
│   └── package.json         # Frontend dependencies
│
├── backend/                 # NestJS backend application
│   ├── src/                 # Source code
│   │   ├── auth/            # Authentication module
│   │   ├── users/           # User management
│   │   ├── products/        # Product management
│   │   ├── orders/          # Order management
│   │   ├── bookings/        # Booking management
│   │   └── config/          # Configuration
│   └── package.json         # Backend dependencies
│
├── Assets/                  # Project assets and images
├── start-dev.bat           # Development startup script
├── setup-fresh-database.bat # Database setup script
└── README.md               # This file
```

##  Development Scripts

### Root Level Scripts
- `start-dev.bat` - Start both frontend and backend servers
- `build.bat` - Build the entire application for production
- `setup-fresh-database.bat` - Reset and setup PostgreSQL database
- `test-application.bat` - Testing guide and checklist

### Frontend Scripts
```bash
cd frontend
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

### Backend Scripts
```bash
cd backend
npm run start:dev  # Start development server
npm run build      # Build for production
npm run start:prod # Start production server
```

##  Design System

### Color Palette
- **Primary**: #ff6b35 (Orange)
- **Background**: #0a0a0a (Dark)
- **Surface**: #1a1a1a (Dark Gray)
- **Border**: #404040 (Medium Gray)
- **Text**: #ffffff (White)
- **Secondary Text**: #cccccc (Light Gray)

### Theme
- Consistent dark theme throughout
- Professional orange accent color
- Modern, clean interface design
- Mobile-responsive layout

##  Security Features

- JWT-based authentication
- Role-based access control
- Input validation and sanitization
- Secure password hashing
- CORS protection
- Rate limiting

##  Analytics & Reporting

The admin dashboard provides comprehensive analytics:
- Real-time revenue tracking
- Order statistics and trends
- User engagement metrics
- Product performance analysis
- Marketing campaign effectiveness
- Booking patterns and insights

##  Testing

### Test Data
- Realistic order history spanning 6 months
- Multiple customer personas with different ordering patterns
- Various order statuses and payment methods
- Comprehensive booking scenarios

### Testing Checklist
- [ ] Customer registration and login
- [ ] Product browsing and ordering
- [ ] Admin dashboard functionality
- [ ] Order management workflow
- [ ] Driver delivery process
- [ ] User data isolation
- [ ] Real-time analytics accuracy

##  Production Deployment

1. **Build the application**:
   ```bash
   .\build.bat
   ```

2. **Configure production environment**:
   - Update database credentials
   - Set production URLs
   - Configure email settings

3. **Deploy backend**:
   ```bash
   cd backend
   npm run start:prod
   ```

4. **Serve frontend**:
   The built frontend is served from the backend's public folder.

##  Support

For technical support or questions about the application:
- Check the comprehensive documentation
- Review the test application guide
- Use the demo accounts for testing

##  Key Achievements

 **Complete Restaurant System** - Full-featured ordering and management
 **Multi-Role Architecture** - Customer, Admin, Driver interfaces
 **Real-Time Analytics** - Live dashboard with actual data insights
 **Professional UI/UX** - Consistent dark theme and modern design
 **Comprehensive Testing** - Extensive mock data for thorough testing
 **Production Ready** - Scalable architecture and security features
 **PostgreSQL Integration** - Professional database setup
 **Zero Static Data** - All information calculated from real data

---

**SU Curries** - A complete restaurant management solution built with modern technologies and best practices. 