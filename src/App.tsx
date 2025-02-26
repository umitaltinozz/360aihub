
import { Route, Routes } from "react-router-dom";

// Ana Sayfalar
import Index from "@/pages/Index";
import AIModels from "@/pages/AIModels";
import AINews from "@/pages/AINews";
import Marketplace from "@/pages/Marketplace";
import Training from "@/pages/Training";
import ModelDetail from "@/pages/ModelDetail";
import NewsDetail from "@/pages/NewsDetail";
import NotFound from "@/pages/NotFound";

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

import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* Ana Sayfalar */}
        <Route path="/" element={<Index />} />
        <Route path="/ai-models" element={<AIModels />} />
        <Route path="/ai-news" element={<AINews />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/training" element={<Training />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        
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
        
        {/* 404 Sayfası */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Toaster />
    </>
  );
}

export default App;
