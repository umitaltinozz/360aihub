
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
                  Şimdi Başla
                </Button>
              </div>
            </Card>
            
            {/* Pro Plan */}
            <Card className="relative overflow-hidden flex flex-col bg-black/30 backdrop-blur-sm border border-aihub-blue/30 rounded-xl shadow-[0_0_20px_rgba(0,191,255,0.2)] hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] transition-all duration-300">
              <div className="absolute top-0 right-0 z-10">
                <div className="m-2 bg-gradient-to-r from-aihub-blue to-aihub-purple text-white inline-flex items-center rounded-full border-0 px-2.5 py-0.5 text-xs font-semibold">
                  Popüler
                </div>
              </div>
              
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-aihub-blue" />
                      AI Pro
                    </h3>
                    <p className="text-white/60 text-sm mt-1">Gelişmiş AI kullanımı için</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      ₺{getPrice('pro').toFixed(2)}
                      <span className="text-sm font-normal text-white/60">
                        /{billingInterval === "monthly" ? "ay" : "yıl"}
                      </span>
                    </div>
                    {billingInterval === "yearly" && (
                      <p className="text-green-400 text-xs">₺40 tasarruf</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {planFeatures.pro.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-aihub-blue mr-2 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0 space-y-3">
                <Button
                  className="w-full bg-gradient-to-r from-aihub-blue to-aihub-purple hover:opacity-90"
                  onClick={() => handleSubscribe('pro')}
                >
                  Şimdi Başla
                </Button>
                
                <Button
                  className="w-full bg-transparent hover:bg-white/5 text-aihub-blue border border-aihub-blue/30"
                  variant="outline"
                  onClick={handleFreeTrial}
                >
                  7 Gün Ücretsiz Dene
                </Button>
              </div>
            </Card>
            
            {/* Ultimate Plan */}
            <Card className="relative overflow-hidden flex flex-col bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300">
              <div className="p-6 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Award className="mr-2 h-5 w-5 text-purple-400" />
                      AI Ultimate
                    </h3>
                    <p className="text-white/60 text-sm mt-1">Profesyonel kullanıcılar için</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      ₺{getPrice('ultimate').toFixed(2)}
                      <span className="text-sm font-normal text-white/60">
                        /{billingInterval === "monthly" ? "ay" : "yıl"}
                      </span>
                    </div>
                    {billingInterval === "yearly" && (
                      <p className="text-green-400 text-xs">₺100 tasarruf</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-4">
                  {planFeatures.ultimate.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <Button
                  className="w-full bg-gradient-to-r from-aihub-purple to-purple-600 hover:opacity-90"
                  onClick={() => handleSubscribe('ultimate')}
                >
                  Şimdi Başla
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Payment Methods */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Ödeme Yöntemleri</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-white/70" />
                <span>Kredi Kartı</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.023-.024.13a.804.804 0 0 1-.794.679h-2.52a.5.5 0 0 1-.495-.58l.002-.012 1.33-8.404a.647.647 0 0 1 .64-.548h2.168c.085 0 .15.014.192.042.053.035.086.098.101.201a.57.57 0 0 1-.044.4.626.626 0 0 1-.195.215 2.29 2.29 0 0 1-.335.13 4.75 4.75 0 0 1-.368.09 1.536 1.536 0 0 0-.191.046.28.28 0 0 0-.126.095.26.26 0 0 0-.01.235c.036.123.102.225.195.304.13.11.263.187.401.232.139.045.334.068.586.068h.273c1.35 0 2.403-.355 3.16-1.066.77-.711 1.241-1.692 1.415-2.94a.351.351 0 0 0-.033-.205.355.355 0 0 0-.143-.145 1.35 1.35 0 0 0-.24-.099 1.183 1.183 0 0 0-.26-.038h-3.956a.736.736 0 0 1-.728-.63L12.26 8.47a.596.596 0 0 1 .095-.456.661.661 0 0 1 .452-.199h5.783c.095 0 .182.01.26.028.078.019.15.049.218.09a.982.982 0 0 1 .309.263c.063.09.113.199.15.323l.002.007a1.177 1.177 0 0 1-.462-.048zM12.137 3.75a.703.703 0 0 1 .695-.625h2.708c.424 0 .797.287.935.7l.814 3.241a.606.606 0 0 1-.505.734.576.576 0 0 1-.117.006H13.32a.59.59 0 0 1-.581-.513l-.602-3.543z" />
                </svg>
                <span>PayPal</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center">
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.638 14.904l-1.327-6.533a9.976 9.976 0 0 0-.812-2.162C20.172 3.053 16.706 1 12.87 1 8.28 1 4.29 3.92 3.086 7.91a10.38 10.38 0 0 0-.35 2.457L.363 17.41s-.25.588.351.826c.603.239 1.005-.301 1.005-.301.603-.351 1.105-.803 1.506-1.304 1.105 1.003 2.611 1.605 4.318 1.605.7 0 1.355-.1 1.957-.301.5.752 1.304 1.304 2.259 1.505.25.05.5.05.803.05 1.655 0 3.011-1.104 3.414-2.56a4.02 4.02 0 0 0 3.514-1.655c.603.2 1.255.301 1.907.301 1.907 0 3.614-.803 4.72-2.158.351.401.803.802 1.355 1.053.603.2 1.055-.351.803-.853l-4.287-9.775zm-2.26 2.76c-1.255 1.154-2.86 1.756-4.518 1.756-.853 0-1.656-.15-2.358-.401L15.63 6.505c.05-.15.15-.301.351-.352.2-.05.402 0 .553.15a.711.711 0 0 1 .251.502l.301 1.656h1.456l-.251-1.957c-.1-1.003-.953-1.856-2.008-1.906-.15 0-.251 0-.401.05-.903.1-1.655.652-1.957 1.455l-1.204 3.312L10.16 3.76c-.05-.2-.15-.351-.301-.4-.15-.051-.351-.051-.502.05-.15.1-.25.25-.25.4l-.05 7.018-2.46-4.518c-.451-.853-1.555-1.254-2.509-.803-.401.2-.702.552-.903.953-.2.4-.25.853-.15 1.304l1.304 6.031c-.05 0-.05 0-.1-.05-.853-.501-1.907-.703-2.91-.552-1.605.25-2.96 1.304-3.614 2.76L.615 15.1l2.559-8.524c.351-2.41 1.506-4.568 3.262-6.073C8.245 2.002 10.461 1.2 12.87 1.2c4.518 0 8.384 2.86 9.739 6.984.05.1.05.25.1.351.15.552.3 1.104.402 1.655l.953 4.769c-.653.25-1.355.401-2.058.401-.401 0-.803-.05-1.154-.15l.753-1.706a.711.711 0 0 0-.251-.903.755.755 0 0 0-.954.2l-1.905 4.116c-.451.05-.853.05-1.304 0-.702-.15-1.254-.652-1.555-1.304l.15-.05 1.706-3.814a.694.694 0 0 0-.351-.903.694.694 0 0 0-.904.351l-1.655 3.714-.1.05c-.753.351-1.606.351-2.41 0-.301-.15-.552-.35-.702-.602l3.162-8.875 2.459 4.518c.05.1.15.2.3.25.152.05.302.05.452-.05.15-.1.251-.2.302-.351.05-.15.05-.301-.05-.452l-.803-1.505h.05l.05-3.513 1.706 5.973c.051.15.15.301.301.351.152.05.352.05.502-.05.15-.1.251-.2.302-.351v-.05l1.655-4.518c.1.201.15.402.15.602l-.1 1.003-.954 2.158z" />
                </svg>
                <span>Kripto (BTC, ETH, USDT)</span>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">İstediğim zaman abonelik planımı değiştirebilir miyim?</h3>
                <p className="text-white/70">
                  Evet, istediğiniz zaman abonelik planınızı yükseltebilir veya düşürebilirsiniz. Yükseltmeler anında gerçekleşir ve ek özelliklerden hemen yararlanmaya başlarsınız. Düşürmeler ise mevcut fatura döneminin sonunda geçerli olur.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">7 günlük ücretsiz deneme nasıl çalışır?</h3>
                <p className="text-white/70">
                  AI Pro planımızı 7 gün boyunca ücretsiz deneyebilirsiniz. Deneme süresi sonunda otomatik olarak ücretlendirme başlar, ancak istediğiniz zaman iptal edebilirsiniz. İptal ederseniz, deneme süresi sonuna kadar hizmetlerimizi kullanmaya devam edebilirsiniz.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-2">Token nedir ve nasıl kullanılır?</h3>
                <p className="text-white/70">
                  Tokenlar, AI modellerini kullanırken harcanan birimlerdir. Her istek veya işlem, metin uzunluğuna ve karmaşıklığına bağlı olarak belirli miktarda token tüketir. Daha uzun metinler ve daha karmaşık işlemler daha fazla token gerektirir. Her abonelik planı, aylık belirli miktarda token kullanım hakkı sunar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubscriptionPlans;
