import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ProtectedRoute from './components/common/ProtectedRoute';
import ErrorBoundary from './components/common/ErrorBoundary';
import SplashScreen from './components/common/SplashScreen';
import { NotificationProvider } from './components/common/NotificationSystem';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { usePerformanceMonitoring } from './hooks/usePerformanceMonitoring';
import { lazyWithRetry } from './utils/lazyWithRetry';
import './App.css';

const HomePage = lazyWithRetry(() => import('./pages/HomePage'), 'HomePage');
const StorePage = lazyWithRetry(() => import('./pages/StorePage'), 'StorePage');
const ProductDetailPage = lazyWithRetry(() => import('./pages/ProductDetailPage'), 'ProductDetailPage');
const CartPage = lazyWithRetry(() => import('./pages/CartPage'), 'CartPage');
const BookTablePage = lazyWithRetry(() => import('./pages/BookTablePage'), 'BookTablePage');
const MenuPage = lazyWithRetry(() => import('./pages/MenuPage'), 'MenuPage');
const RegisterPage = lazyWithRetry(() => import('./pages/RegisterPage'), 'RegisterPage');
const LoginPage = lazyWithRetry(() => import('./pages/LoginPage'), 'LoginPage');
const CateringPage = lazyWithRetry(() => import('./pages/CateringPage'), 'CateringPage');

const CheckoutPage = lazyWithRetry(() => import('./pages/CheckoutPage'), 'CheckoutPage');
const ProfilePage = lazyWithRetry(() => import('./pages/ProfilePage'), 'ProfilePage');
// Admin routes with separate chunk for better code splitting
const AdminDashboard = lazyWithRetry(() => import(/* webpackChunkName: "admin" */ './pages/admin/AdminDashboard'), 'AdminDashboard');
const OrderConfirmationPage = lazyWithRetry(() => import('./pages/OrderConfirmationPage'), 'OrderConfirmationPage');
const TermsOfServicePage = lazyWithRetry(() => import('./pages/TermsOfServicePage'), 'TermsOfServicePage');
const PrivacyPolicyPage = lazyWithRetry(() => import('./pages/PrivacyPolicyPage'), 'PrivacyPolicyPage');
const AboutPage = lazyWithRetry(() => import('./pages/AboutPage'), 'AboutPage');
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'), 'ContactPage');
const OrdersPage = lazyWithRetry(() => import('./pages/OrdersPage'), 'OrdersPage');
const BookingsPage = lazyWithRetry(() => import('./pages/BookingsPage'), 'BookingsPage');
const FavouritesPage = lazyWithRetry(() => import('./pages/FavouritesPage'), 'FavouritesPage');
const DriverDashboard = lazyWithRetry(() => import('./pages/DriverDashboard'), 'DriverDashboard');
const ForgotPasswordPage = () => <div className="text-center text-2xl">Forgot Password Page - To be implemented</div>;

const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage'), 'NotFoundPage');

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize performance monitoring
  const { startMeasurement, endMeasurement } = usePerformanceMonitoring({
    enabled: true,
    reportToAnalytics: process.env.NODE_ENV === 'production'
  });

  useEffect(() => {
    startMeasurement('app-initialization');
    
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
      endMeasurement('app-initialization');
    }, 2000);

    return () => clearTimeout(timer);
  }, [startMeasurement, endMeasurement]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <Router>
                <Suspense fallback={<div className="flex justify-center items-center h-full"><LoadingSpinner /></div>}>
                  <Routes>
                {/* Public Routes with Layout */}
                <Route element={<Layout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/book-table" element={<BookTablePage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />

                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/orders/:orderId" element={<OrderConfirmationPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/catering" element={<CateringPage />} />
                  
                  {/* Protected Routes within Layout */}
                  <Route element={<ProtectedRoute />}>
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/bookings" element={<BookingsPage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                  </Route>
                </Route>
                
                {/* Admin Routes */}
                <Route path="/admin" element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                
                {/* Driver Routes */}
                <Route path="/driver" element={<DriverDashboard />} />
                
                {/* Catch all route */}
                <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </Router>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}

export default App;
