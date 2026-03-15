#  SU Curries - Easy Setup Guide

## For Non-Technical Users

This restaurant website is designed to be **super easy** to run! No complex database setup required.

##  What You Get

- **Complete Restaurant Website** with online ordering
- **Admin Panel** to manage products, orders, and bookings
- **Table Booking System** for restaurant reservations
- **PostgreSQL Database** - professional database for better performance

##  Quick Start (3 Steps)

### Step 1: Install Requirements (One Time Only)
- Install **Node.js** from [nodejs.org](https://nodejs.org) (choose LTS version)
- Install **PostgreSQL 15** from [postgresql.org](https://www.postgresql.org/download/)
- During PostgreSQL installation, remember your password for the 'postgres' user

### Step 2: Setup Database (One Time Only)
**Easy way**: Double-click `setup-database.bat` and enter your PostgreSQL password when prompted.

**Manual way**:
1. Open **pgAdmin** (comes with PostgreSQL)
2. Connect to your PostgreSQL server
3. Create a new database called `su_foods_db`
4. Create a user called `su_foods_user` with password `su_foods_password`
5. Grant all privileges on `su_foods_db` to `su_foods_user`

### Step 3: Install Dependencies (One Time Only)
```bash
# In the main folder, run:
npm install

# Then install frontend dependencies:
cd frontend
npm install

# Then install backend dependencies:
cd ../backend
npm install
```

### Step 4: Start Your Website
**Double-click `start-dev.bat`** - That's it! 

The script will:
-  Connect to PostgreSQL database
-  Start the backend server (API)
-  Start the frontend website
-  Open everything in your browser

##  Access Your Website

After starting:
- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **API**: http://localhost:3001

##  Demo Accounts

**Admin Account** (Full Access):
- Email: `admin@sucurries.com`
- Password: `admin123`

**Customer Account**:
- Email: `user@sucurries.com`
- Password: `user123`

##  Database Information

Your restaurant data is stored in PostgreSQL:
- **Host**: localhost:5432
- **Database**: su_foods_db
- **User**: su_foods_user
- **Password**: su_foods_password

This database contains:
- Products and categories
- Customer orders
- Table bookings
- User accounts

** Tip**: Use pgAdmin to backup your database regularly!

##  Easy Management

### Adding Products
1. Go to http://localhost:3000/admin
2. Login with admin account
3. Click "Products" tab
4. Add your curry products with prices and descriptions

### Managing Orders
1. Go to admin panel
2. Click "Orders" tab
3. See all customer orders
4. Update order status

### Table Bookings
1. Customers can book tables at http://localhost:3000/book-table
2. View all bookings in admin panel
3. Manage reservations easily

##  Troubleshooting

**If something doesn't work:**

1. **Close all browser windows**
2. **Stop the servers** (close the command windows)
3. **Run `start-dev.bat` again**

**If you see "port already in use":**
- Close all command windows and try again
- Or restart your computer

##  Support

The system uses:
- **PostgreSQL Database** - Professional database for better performance and scalability
- **Node.js Backend** - Handles orders, bookings, authentication
- **React Frontend** - Modern, fast website

Everything is designed to work reliably with professional-grade database!

##  Features

 **Product Catalog** - Add/edit curry products
 **Shopping Cart** - Customers can order online
 **Table Booking** - Restaurant reservation system
 **Order Management** - Track all orders
 **User Accounts** - Customer registration/login
 **Admin Panel** - Full management interface
 **Mobile Friendly** - Works on phones and tablets
 **PostgreSQL Database** - Professional, scalable database

---

**Need help?** The system is designed to be self-explanatory, but all features are accessible through the admin panel at http://localhost:3000/admin