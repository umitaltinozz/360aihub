
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import CustomNavbar from "@/components/CustomNavbar";
import QuickAccessCard from "@/components/QuickAccessCard";
import CategoryFilter from "@/components/CategoryFilter";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Zap, ShieldCheck, Users } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <CustomNavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Quick Access Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Hızlı Erişim</h2>
                <p className="text-white/70">En popüler hizmet ve kaynaklara kolayca erişin.</p>
              </div>
              <Link to="/ai-models">
                <Button variant="link" className="text-aihub-blue pl-0 flex items-center mt-4 sm:mt-0">
                  <span>Tümünü Gör</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <QuickAccessCard 
                title="AI Modelleri" 
                description="En gelişmiş yapay zeka modellerini keşfedin."
                link="/ai-models"
                icon={<Sparkles size={24} />}
                color="blue"
              />
              <QuickAccessCard 
                title="AI Eğitimleri" 
                description="Yapay zeka ile ilgili kapsamlı eğitimler."
                link="/training"
                icon={<BookOpen size={24} />}
                color="purple"
              />
              <QuickAccessCard 
                title="Marketplace" 
                description="AI araçları ve hazır çözümler için pazar yeri."
                link="/marketplace"
                icon={<Zap size={24} />}
                color="green"
              />
              <QuickAccessCard 
                title="Admin Paneli" 
                description="Yönetici arayüzüne erişim sağlayın."
                link="/admin"
                icon={<ShieldCheck size={24} />}
                color="orange"
              />
            </div>
          </div>
        </section>
        
        {/* Latest AI News Section */}
        <section className="py-16 px-6 bg-aihub-gray">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">AI Dünyasından Son Haberler</h2>
                <p className="text-white/70">Yapay zeka alanındaki en güncel gelişmeleri takip edin.</p>
              </div>
              <Link to="/ai-news">
                <Button variant="link" className="text-aihub-purple pl-0 flex items-center mt-4 sm:mt-0">
                  <span>Tüm Haberleri Gör</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <CategoryFilter 
              categories={["Tümü", "AI Modelleri", "Araştırmalar", "Şirket Haberleri", "Etik", "Uygulamalar"]} 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <NewsCard 
                id="1"
                title="OpenAI GPT-5 Modelini Duyurdu: 'Düşünme Yetenekleri Geliştirildi'"
                excerpt="OpenAI, merakla beklenen GPT-5 modelini duyurdu. Yeni model, önceki sürümlere göre geliştirilmiş düşünme yetenekleri ve muhakeme..."
                imageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBicmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                category="AI Modelleri"
                publishedAt="2024-06-15"
              />
              <NewsCard 
                id="2"
                title="Google, Yeni Gemini 2.0 Modelini Tanıttı: 'Multimodal Kabiliyetler Artırıldı'"
                excerpt="Google, merakla beklenen Gemini 2.0 modelini tanıttı. Yeni model, metin, görsel ve ses verilerini daha etkili bir şekilde anlayabiliyor..."
                imageUrl="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWklMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                category="AI Modelleri"
                publishedAt="2024-06-12"
              />
              <NewsCard 
                id="3"
                title="AB'den Yapay Zeka Düzenlemeleri: Yeni AI Yasası Yürürlüğe Girdi"
                excerpt="Avrupa Birliği'nin kapsamlı yapay zeka düzenlemesi olan AI Act resmen yürürlüğe girdi. Yasa, yapay zeka sistemlerini risk seviyelerine göre sınıflandırıyor..."
                imageUrl="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV1cm9wZWFuJTIwdW5pb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                category="Etik"
                publishedAt="2024-06-10"
              />
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/ai-news">
                <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white px-6 py-6 rounded-md hover:opacity-90 transition-all">
                  <span className="mr-2">Daha Fazla Haber</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured AI Models */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Öne Çıkan AI Modelleri</h2>
                <p className="text-white/70">En çok kullanılan ve popüler yapay zeka modelleri.</p>
              </div>
              <Link to="/ai-models">
                <Button variant="link" className="text-aihub-blue pl-0 flex items-center mt-4 sm:mt-0">
                  <span>Tüm Modelleri Gör</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass rounded-xl overflow-hidden card-hover">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="OpenAI GPT-4"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 m-2">
                    <div className="bg-aihub-blue text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Popüler
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">OpenAI GPT-4</h3>
                  <p className="text-white/70 text-sm mb-3">Gelişmiş dil anlama ve üretme yetenekleri ile çoklu görevlerde etkin.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Dil Modeli</span>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Kod Yazma</span>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Çok Modlu</span>
                  </div>
                  <Link to="/model/1">
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                      İncele
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="glass rounded-xl overflow-hidden card-hover">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Claude 3 Opus"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Claude 3 Opus</h3>
                  <p className="text-white/70 text-sm mb-3">Uzun bağlam anlama ve detaylı açıklamalarda güçlü performans.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Dil Modeli</span>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Doğruluk</span>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Güvenlik</span>
                  </div>
                  <Link to="/model/3">
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                      İncele
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="glass rounded-xl overflow-hidden card-hover">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Stable Diffusion XL"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Ücretsiz
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">Stable Diffusion XL</h3>
                  <p className="text-white/70 text-sm mb-3">Metinden görsel üreten güçlü açık kaynaklı AI modeli.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Görsel Üretme</span>
                    <span className="bg-white/10 text-xs px-2 py-1 rounded-full">Düşük Gecikme</span>
                  </div>
                  <Link to="/model/4">
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                      İncele
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* User Stats Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-aihub-gray to-aihub-dark">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-2">AIHUB360 Topluluğu</h2>
              <p className="text-white/70 max-w-2xl mx-auto">Yapay zeka dünyasının öncü topluluğuna katılın ve en son teknolojilerden yararlanın.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-4xl font-bold mb-2 text-gradient">2.5M+</div>
                <p className="text-white/70">Toplam Kullanıcı</p>
              </div>
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-4xl font-bold mb-2 text-gradient">120+</div>
                <p className="text-white/70">AI Modeli</p>
              </div>
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-4xl font-bold mb-2 text-gradient">500+</div>
                <p className="text-white/70">Eğitim İçeriği</p>
              </div>
              <div className="glass p-6 rounded-xl text-center card-hover">
                <div className="text-4xl font-bold mb-2 text-gradient">50M+</div>
                <p className="text-white/70">Aylık API Çağrısı</p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">Hemen kaydolun ve yapay zeka dünyasını keşfetmeye başlayın!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth/signup">
                  <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white px-6 py-6 rounded-md hover:opacity-90 transition-all">
                    <Users size={16} className="mr-2" />
                    <span>Ücretsiz Kaydol</span>
                  </Button>
                </Link>
                <Link to="/subscription/plans">
                  <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 px-6 py-6">
                    <span className="mr-2">Abonelik Planları</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

import { useState } from "react";

export default Index;
