
import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, CreditCard, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

type PlanType = "monthly" | "annual";
type PlanTier = "free" | "starter" | "pro" | "enterprise";

interface PricingPlan {
  id: PlanTier;
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: {
    text: string;
    tooltip?: string;
    included: boolean;
  }[];
  highlight?: boolean;
  badge?: string;
}

const PricingPlans = () => {
  const { toast } = useToast();
  const [planType, setPlanType] = useState<PlanType>("monthly");
  
  const handlePlanTypeChange = (checked: boolean) => {
    setPlanType(checked ? "annual" : "monthly");
  };
  
  const plans: PricingPlan[] = [
    {
      id: "free",
      name: "Ücretsiz",
      description: "Temel AI işlevlerini deneyimlemek için",
      price: {
        monthly: 0,
        annual: 0,
      },
      features: [
        { text: "100K Token/ay", included: true },
        { text: "GPT-3.5 modeli", included: true },
        { text: "API anahtar erişimi", included: false },
        { text: "Gelişmiş modeller", included: false },
        { text: "Özel eğitimli modeller", included: false },
        { text: "7/24 Destek", included: false },
      ],
    },
    {
      id: "starter",
      name: "Başlangıç",
      description: "Projeleriniz için AI erişimi",
      price: {
        monthly: 49,
        annual: 39,
      },
      features: [
        { text: "500K Token/ay", included: true },
        { text: "GPT-3.5 & 4 modelleri", included: true },
        { text: "API anahtar erişimi", included: true },
        { text: "3 API anahtarı", included: true },
        { text: "E-posta desteği", included: true },
        { text: "Özel eğitimli modeller", included: false },
      ],
      badge: "Populer",
      highlight: true,
    },
    {
      id: "pro",
      name: "Pro",
      description: "İleri düzey AI özellikleri",
      price: {
        monthly: 99,
        annual: 79,
      },
      features: [
        { text: "1.5M Token/ay", included: true },
        { text: "Tüm AI modelleri", included: true },
        { text: "10 API anahtarı", included: true },
        { text: "Öncelikli erişim", tooltip: "Yeni özelliklere erken erişim ve daha hızlı işlem sırası", included: true },
        { text: "7/24 Destek", included: true },
        { text: "Özel eğitimli model (1 adet)", included: true },
      ],
    },
    {
      id: "enterprise",
      name: "Kurumsal",
      description: "Büyük ölçekli organizasyonlar için",
      price: {
        monthly: 299,
        annual: 249,
      },
      features: [
        { text: "5M+ Token/ay", included: true },
        { text: "Tüm mevcut ve gelecek modeller", included: true },
        { text: "Sınırsız API anahtarı", included: true },
        { text: "Özel destek ekibi", included: true },
        { text: "Özel model eğitimi (5 adet)", included: true },
        { text: "Özel SLA garantisi", included: true },
      ],
    },
  ];
  
  const handlePurchase = (planId: PlanTier) => {
    if (planId === "free") {
      toast({
        title: "Ücretsiz Plan Etkinleştirildi",
        description: "Ücretsiz planınız başarıyla etkinleştirildi.",
      });
    } else {
      toast({
        title: "Ödeme Sayfasına Yönlendiriliyorsunuz",
        description: `${plans.find(p => p.id === planId)?.name} planı için ödeme sayfasına yönlendiriliyorsunuz.`,
      });
      // Burada ödeme sayfasına yönlendirme yapılacak
    }
  };
  
  const handleFreeTrial = () => {
    toast({
      title: "7 Gün Ücretsiz Deneme Aktif",
      description: "Pro planınızın 7 günlük ücretsiz denemesi başladı!",
    });
  };
  
  return (
    <div className="py-16 bg-aihub-dark min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Planları Keşfedin</h1>
          <p className="text-white/60 text-lg mb-8">
            İhtiyaçlarınıza ve bütçenize uygun AI çözümlerimizi inceleyin
          </p>
          
          <div className="flex items-center justify-center space-x-3 mb-12">
            <span className={`text-sm ${planType === "monthly" ? "text-white" : "text-white/60"}`}>Aylık</span>
            <Switch
              checked={planType === "annual"}
              onCheckedChange={handlePlanTypeChange}
            />
            <div className="flex items-center">
              <span className={`text-sm ${planType === "annual" ? "text-white" : "text-white/60"}`}>Yıllık</span>
              <Badge variant="outline" className="ml-2 bg-aihub-blue/20 text-aihub-blue border-aihub-blue/30">%20 İndirim</Badge>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-xl bg-black/30 backdrop-blur-xl border transition-all ${
                plan.highlight 
                  ? "border-aihub-blue shadow-lg shadow-aihub-blue/20 scale-105" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="p-6">
                {plan.badge && (
                  <Badge className="mb-4 bg-aihub-blue text-white border-0">{plan.badge}</Badge>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{planType === "monthly" ? plan.price.monthly : plan.price.annual}</span>
                  <span className="text-white/60"> TL/</span>
                  <span className="text-white/60">{planType === "monthly" ? "ay" : "ay (yıllık)"}</span>
                </div>
                
                <Button
                  onClick={() => handlePurchase(plan.id)}
                  className={`w-full mb-6 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-aihub-blue to-aihub-purple text-white"
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {plan.id === "free" ? "Ücretsiz Başla" : "Planı Seç"}
                  {plan.id !== "free" && <CreditCard className="ml-2 h-4 w-4" />}
                </Button>
                
                {plan.id === "pro" && (
                  <Button
                    onClick={handleFreeTrial}
                    variant="outline"
                    className="w-full mb-6 border-aihub-blue/30 text-aihub-blue hover:bg-aihub-blue/10"
                  >
                    7 Gün Ücretsiz Dene
                  </Button>
                )}
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <div className="h-5 w-5 border border-white/20 rounded-full mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-sm" : "text-sm text-white/40"}>
                        {feature.text}
                      </span>
                      {feature.tooltip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-white/40 ml-1 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-black border border-white/10 text-white p-2">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto mt-16 p-8 rounded-xl bg-black/30 backdrop-blur-xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-center">Kurumsal Çözümler</h3>
          <p className="text-white/60 text-center mb-6">
            Özel ihtiyaçlarınız için size özel fiyatlandırma ve çözümler sunarız
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-white/5 hover:bg-white/10 border border-white/10">
                Bizimle İletişime Geçin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
