
import { useState } from "react";
import { CheckCircle2, AlertTriangle, CreditCard, ChevronRight, Sparkles, Zap, Rocket, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const planFeatures = {
  free: [
    "AI Haberleri",
    "Basit AI Modelleri",
    "Prompt Test Etme",
    "Topluluk Forumuna Erişim",
    "5.000 Token/Ay",
    "Temel Müşteri Desteği",
  ],
  pro: [
    "Tüm Ücretsiz Özellikler",
    "Premium Eğitimler",
    "Gelişmiş API Erişimi",
    "Daha Hızlı AI İşlemleri",
    "100.000 Token/Ay",
    "Öncelikli Müşteri Desteği",
  ],
  ultimate: [
    "Tüm Pro Özellikler",
    "VIP AI Danışmanlık",
    "Özel AI Modelleri",
    "Beta AI Araçlarına Erişim",
    "1.000.000 Token/Ay",
    "7/24 Premium Destek",
  ],
};

const planIcons = {
  free: [<></>, <></>, <></>, <></>, <></>, <></>],
  pro: [<></>, <></>, <></>, <></>, <></>, <></>],
  ultimate: [<></>, <></>, <></>, <></>, <></>, <></>],
};

type BillingInterval = "monthly" | "yearly";

const SubscriptionPlans = () => {
  const { toast } = useToast();
  const [billingInterval, setBillingInterval] = useState<BillingInterval>("monthly");
  
  const handleIntervalChange = (interval: BillingInterval) => {
    setBillingInterval(interval);
  };
  
  const getPrice = (plan: string) => {
    switch (plan) {
      case "free":
        return 0;
      case "pro":
        return billingInterval === "monthly" ? 19.99 : 199.9;
      case "ultimate":
        return billingInterval === "monthly" ? 49.99 : 499.9;
      default:
        return 0;
    }
  };
  
  const handleFreeTrial = () => {
    toast({
      title: "Ücretsiz Deneme Başlatıldı",
      description: "7 günlük AI Pro denemeniz aktifleştirildi. Keyifle kullanın!",
    });
  };
  
  const handleSubscribe = (plan: string) => {
    toast({
      title: "Ödeme Sayfasına Yönlendiriliyorsunuz",
      description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} plan için ödeme sayfasına yönlendiriliyorsunuz.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Abonelik Planları</h1>
            <p className="text-white/70 mb-8">
              İhtiyaçlarınıza uygun planı seçin ve AI dünyasının tüm avantajlarından yararlanın
            </p>
            
            {/* Billing Interval Selector */}
            <div className="inline-flex items-center bg-white/5 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => handleIntervalChange("monthly")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  billingInterval === "monthly"
                    ? "bg-gradient-to-r from-aihub-blue to-aihub-purple text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Aylık
              </button>
              <button
                onClick={() => handleIntervalChange("yearly")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  billingInterval === "yearly"
                    ? "bg-gradient-to-r from-aihub-blue to-aihub-purple text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Yıllık
                <span className="ml-1 text-xs font-bold py-0.5 px-1.5 rounded-full bg-green-500/20 text-green-400">
                  %17 Tasarruf
                </span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Free Plan */}
            <Card className="relative overflow-hidden flex flex-col bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Rocket className="mr-2 h-5 w-5 text-green-400" />
                      Free
                    </h3>
                    <p className="text-white/60 text-sm mt-1">Başlangıç AI keşifleri için</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">₺0</div>
                    <p className="text-white/60 text-xs">Daima ücretsiz</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {planFeatures.free.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <Button
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10"
                  variant="outline"
                  onClick={() => handleSubscribe("free")}
                >
                  Ş