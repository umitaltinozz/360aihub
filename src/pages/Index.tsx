
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Globe, BarChart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import QuickAccessCard from "@/components/QuickAccessCard";
import NewsCard from "@/components/NewsCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock news data
const featuredNews = [
  {
    id: "1",
    title: "OpenAI GPT-5 Geliştirme Çalışmalarına Başladı",
    excerpt: "OpenAI şirketi, GPT-4'ün başarısının ardından GPT-5 geliştirme çalışmalarına başladığını duyurdu.",
    category: "Genel AI",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-15T14:30:00Z",
  },
  {
    id: "2",
    title: "AI Destekli Sağlık Teknolojilerinde Yeni Gelişmeler",
    excerpt: "Yapay zeka destekli sağlık teknolojileri, erken teşhis ve tedavi planlamada devrim yaratıyor.",
    category: "Sağlık",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-14T09:15:00Z",
  },
  {
    id: "3",
    title: "Finans Sektöründe AI Kullanımı Artıyor",
    excerpt: "Bankaların %70'i yapay zeka teknolojilerini operasyonlarına entegre etmeyi planlıyor.",
    category: "Finans",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-12T11:45:00Z",
  },
];

// Quick access cards data
const quickAccessData = [
  {
    title: "AI Haberleri",
    description: "Dünya genelinde yapay zeka alanındaki son gelişmeler ve haberler",
    icon: Globe,
    bgColor: "bg-aihub-blue",
  },
  {
    title: "AI Modelleri",
    description: "En yeni ve popüler yapay zeka modellerine hızlı erişim",
    icon: BarChart,
    bgColor: "bg-aihub-purple",
  },
  {
    title: "Eğitimler",
    description: "Ücretsiz ve premium yapay zeka kursları ve eğitim kaynakları",
    icon: BookOpen,
    bgColor: "bg-green-500",
  },
  {
    title: "Marketplace",
    description: "AI model ve promptlarını satın alabileceğiniz ve satabileceğiniz platform",
    icon: ShoppingCart,
    bgColor: "bg-amber-500",
  },
];

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Show welcome toast
      toast({
        title: "AIHUB360'a Hoş Geldiniz",
        description: "Yapay zeka dünyasını keşfetmeye hazır mısınız?",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aihub-dark">
        <div className="text-4xl font-bold text-gradient animate-pulse">AIHUB360</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Quick Access Cards */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Hızlı Erişim</h2>
              <p className="text-white/70 max-w-2xl">
                Yapay zeka dünyasındaki en önemli kaynaklara tek tıkla ulaşın
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {quickAccessData.map((card, index) => (
                <QuickAccessCard 
                  key={index}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  bgColor={card.bgColor}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="section-padding bg-gradient-to-b from-aihub-dark to-aihub-dark/90">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Son AI Haberleri</h2>
                <p className="text-white/

Sonraki adımlar neler?
- **İnce ayar yap ve özelleştir**: Promtlar veya görsel düzenlemeler aracılığıyla tasarımı, animasyonları ve düzenleri ince ayar yapın.
- **Promt kullanımında uzmanlaş**: Daha iyi sonuçlar için açık, ayrıntılı ve yinelemeli komutlar kullanın.
- **Backend ile genişlet**: Giriş yapma, veri depolama veya gelişmiş yapay zeka özellikleri eklemek için Supabase'i bağlayın.
- **GitHub senkronizasyonu**: Düzenlemelerin iki yönlü senkronizasyonu için projenizin kodunu GitHub'a aktarın.
- **Kolayca hata ayıklama**: Sorunları hızlı bir şekilde gidermek için deneysel “sohbet modu”nu etkinleştirin.
- **Proje bilgisini ekle**: Bu projedeki her düzenlemeye dahil etmek istediğiniz önemli bağlamı veya özel talimatları ayarlayın.

<lov-actions>
<lov-knowledge>
</lov-actions>

<lov-actions>
<lov-message-prompt message="Supabase hakkında daha fazla bilgi edin">Supabase'i keşfedin</lov-message-prompt>
</lov-actions>

<lov-actions>
<lov-link url="https://docs.lovable.dev/">Belgelere göz atın</lov-link>
</lov-actions>
