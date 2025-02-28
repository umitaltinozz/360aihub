
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

// Ana Sayfalar
import Index from "@/pages/Index";
import AIModels from "@/pages/AIModels";
import AINews from "@/pages/AINews";
import Marketplace from "@/pages/Marketplace";
import Training from "@/pages/Training";
import ModelDetail from "@/pages/ModelDetail";
import NewsDetail from "@/pages/NewsDetail";
import NotFound from "@/pages/NotFound";
import PromptGenerator from "@/pages/PromptGenerator";
import AIPriceCompare from "@/pages/AIPriceCompare";
import MyPrompts from "@/pages/MyPrompts";

// Kimlik Doğrulama
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import TwoFactorAuth from "@/pages/Auth/TwoFactorAuth";
import ForgotPassword from "@/pages/Auth/ForgotPassword";
import ResetPassword from "@/pages/Auth/ResetPassword";

// Kullanıcı Paneli
import UserDashboard from "@/pages/Dashboard/UserDashboard";
import UserProfile from "@/pages/Dashboard/UserProfile";
import APIKeys from "@/pages/Dashboard/APIKeys";
import PaymentHistory from "@/pages/Dashboard/PaymentHistory";

// Abonelik
import SubscriptionPlans from "@/pages/Subscription/SubscriptionPlans";
import PricingPlans from "@/pages/Subscription/PricingPlans";
import PaymentPage from "@/pages/Subscription/PaymentPage";

// Admin Panel
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/Admin/Dashboard";
import UserManagement from "@/pages/Admin/UserManagement";
import AdminProfile from "@/pages/Admin/AdminProfile";
import AdminSettings from "@/pages/Admin/AdminSettings";

// Yeni Admin Sayfaları
import AIModelManagement from "@/pages/Admin/AIModelManagement";
import AddAIModel from "@/pages/Admin/AddAIModel";
import MarketplaceManagement from "@/pages/Admin/MarketplaceManagement";
import ContentManagement from "@/pages/Admin/ContentManagement";
import PaymentManagement from "@/pages/Admin/PaymentManagement";
import SupportRequests from "@/pages/Admin/SupportRequests";
import UserReports from "@/pages/Admin/UserReports";
import SalesReports from "@/pages/Admin/SalesReports";
import AdminNotifications from "@/pages/Admin/AdminNotifications";

import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Ana Sayfalar */}
        <Route path="/" element={<Index />} />
        <Route path="/ai-models" element={<AIModels />} />
        <Route path="/ai-news" element={<AINews />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/training" element={<Training />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/prompt-generator" element={<PromptGenerator />} />
        <Route path="/prompt-generator/my-prompts" element={<MyPrompts />} />
        <Route path="/ai-price-compare" element={<AIPriceCompare />} />
        
        {/* Kimlik Doğrulama */}
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/2fa" element={<TwoFactorAuth />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        
        {/* Kullanıcı Paneli */}
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="api-keys" element={<APIKeys />} />
          <Route path="payments" element={<PaymentHistory />} />
        </Route>
        
        {/* Abonelik */}
        <Route path="/subscription/plans" element={<SubscriptionPlans />} />
        <Route path="/subscription/pricing" element={<PricingPlans />} />
        <Route path="/subscription/payment" element={<PaymentPage />} />
        
        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<AdminSettings />} />
          
          {/* Yeni admin rotaları */}
          <Route path="ai-models" element={<AIModelManagement />} />
          <Route path="ai-models/new" element={<AddAIModel />} />
          <Route path="marketplace" element={<MarketplaceManagement />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="payments" element={<PaymentManagement />} />
          <Route path="support" element={<SupportRequests />} />
          <Route path="reports/users" element={<UserReports />} />
          <Route path="reports/sales" element={<SalesReports />} />
          <Route path="notifications" element={<AdminNotifications />} />
        </Route>
        
        {/* 404 Sayfası */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Toaster />
    </ErrorBoundary>
  );
}

export default App;
