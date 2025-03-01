
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

// Marketplace Sayfaları
import MarketplaceItemDetail from "@/pages/MarketplaceItemDetail";
import MarketplaceCheckout from "@/pages/MarketplaceCheckout";
import MarketplaceSell from "@/pages/MarketplaceSell";

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
import UserSettings from "@/pages/Dashboard/UserSettings";
import Usage from "@/pages/Dashboard/Usage";
import UserDocumentation from "@/pages/Dashboard/UserDocumentation";
import UserModels from "@/pages/Dashboard/UserModels";
import UserPrompts from "@/pages/Dashboard/UserPrompts";
import UserNotifications from "@/pages/Dashboard/UserNotifications";

// Abonelik
import SubscriptionPlans from "@/pages/Subscription/SubscriptionPlans";
import PricingPlans from "@/pages/Subscription/PricingPlans";
import PaymentPage from "@/pages/Subscription/PaymentPage";
import ManageSubscription from "@/pages/Subscription/ManageSubscription";
import BillingHistory from "@/pages/Subscription/BillingHistory";

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

// Yeni Eğitim ve Topluluk Sayfaları
import Documentation from "@/pages/Education/Documentation";
import Tutorials from "@/pages/Education/Tutorials";
import Webinars from "@/pages/Education/Webinars";
import Courses from "@/pages/Education/Courses";
import Guides from "@/pages/Resources/Guides";
import Templates from "@/pages/Resources/Templates";
import Datasets from "@/pages/Resources/Datasets";
import Tools from "@/pages/Resources/Tools";
import Forum from "@/pages/Community/Forum";
import Events from "@/pages/Community/Events";
import Showcase from "@/pages/Community/Showcase";
import Contribute from "@/pages/Community/Contribute";

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
        
        {/* Marketplace Sayfaları */}
        <Route path="/marketplace/:id" element={<MarketplaceItemDetail />} />
        <Route path="/marketplace/checkout" element={<MarketplaceCheckout />} />
        <Route path="/marketplace/sell" element={<MarketplaceSell />} />
        
        {/* Kimlik Doğrulama */}
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/2fa" element={<TwoFactorAuth />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        
        {/* Kullanıcı Paneli */}
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route index element={<Usage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="api-keys" element={<APIKeys />} />
          <Route path="payments" element={<PaymentHistory />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="usage" element={<Usage />} />
          <Route path="docs" element={<UserDocumentation />} />
          <Route path="models" element={<UserModels />} />
          <Route path="prompts" element={<UserPrompts />} />
          <Route path="notifications" element={<UserNotifications />} />
        </Route>
        
        {/* Abonelik */}
        <Route path="/subscription/plans" element={<SubscriptionPlans />} />
        <Route path="/subscription/pricing" element={<PricingPlans />} />
        <Route path="/subscription/payment" element={<PaymentPage />} />
        <Route path="/subscription/manage" element={<ManageSubscription />} />
        <Route path="/subscription/billing" element={<BillingHistory />} />
        
        {/* Eğitim ve Kaynaklar */}
        <Route path="/docs" element={<Documentation />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources/guides" element={<Guides />} />
        <Route path="/resources/templates" element={<Templates />} />
        <Route path="/resources/datasets" element={<Datasets />} />
        <Route path="/resources/tools" element={<Tools />} />
        
        {/* Topluluk */}
        <Route path="/community/forum" element={<Forum />} />
        <Route path="/community/events" element={<Events />} />
        <Route path="/community/showcase" element={<Showcase />} />
        <Route path="/community/contribute" element={<Contribute />} />
        
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
