
import { useState, useEffect } from "react";
import { Search, Filter, ShoppingCart, Star, Download, DollarSign, Tags, TrendingUp, Clock, Gift, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock marketplace items data
const marketplaceItems = [
  // AI Models
  {
    id: "m1",
    name: "SentimentAI",
    description: "Türkçe metinler için duygu analizi yapan özelleştirilmiş model. %92 doğruluk oranı.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "TechNova Labs",
    price: 249,
    rating: 4.7,
    totalReviews: 56,
    downloads: 283,
    type: "model",
    category: "NLP",
    featured: true,
  },
  {
    id: "m2",
    name: "MediScan",
    description: "Tıbbi görüntülerde anormallikleri tespit eden özel eğitilmiş görüntü sınıflandırma modeli.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "HealthTech AI",
    price: 499,
    rating: 4.9,
    totalReviews: 42,
    downloads: 155,
    type: "model",
    category: "Sağlık",
    featured: true,
  },
  {
    id: "m3",
    name: "FinDetect",
    description: "Finansal dolandırıcılık tespiti için özelleştirilmiş anomali tespit modeli.",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "SecureAI",
    price: 349,
    rating: 4.6,
    totalReviews: 38,
    downloads: 172,
    type: "model",
    category: "Finans",
    featured: false,
  },
  {
    id: "m4",
    name: "LocalSpeech",
    description: "Türkçe konuşma tanıma için optimize edilmiş ses modeli. Lehçe ve şive tanıma özellikleri.",
    imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "SpeechLab",
    price: 299,
    rating: 4.5,
    totalReviews: 27,
    downloads: 134,
    type: "model",
    category: "Ses",
    featured: false,
  },
  
  // Prompts
  {
    id: "p1",
    name: "Master SEO Writer",
    description: "SEO odaklı içerik üretimi için optimize edilmiş prompt koleksiyonu. Anahtar kelime entegrasyonu, meta açıklamalar ve başlık optimizasyonu.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "ContentWizard",
    price: 49,
    rating: 4.8,
    totalReviews: 124,
    downloads: 876,
    type: "prompt",
    category: "İçerik Üretimi",
    featured: true,
  },
  {
    id: "p2",
    name: "Code Assistant Pro",
    description: "Yazılım geliştirme için kapsamlı prompt seti. Hata ayıklama, kod optimizasyonu ve mimari tasarım promptları içerir.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "DevGenius",
    price: 79,
    rating: 4.9,
    totalReviews: 156,
    downloads: 1254,
    type: "prompt",
    category: "Yazılım Geliştirme",
    featured: true,
  },
  {
    id: "p3",
    name: "Legal Document Generator",
    description: "Hukuki belge oluşturma için özelleştirilmiş promptlar. Sözleşmeler, anlaşmalar ve yasal bildirimler.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "LegalAI",
    price: 99,
    rating: 4.7,
    totalReviews: 85,
    downloads: 523,
    type: "prompt",
    category: "Hukuk",
    featured: false,
  },
  {
    id: "p4",
    name: "Art Director",
    description: "Stable Diffusion ve Midjourney için mükemmel görsel üretimi sağlayan prompt teknikleri ve şablonları.",
    imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "VisualCreator",
    price: 39,
    rating: 4.6,
    totalReviews: 192,
    downloads: 1876,
    type: "prompt",
    category: "Görsel Üretim",
    featured: false,
  },
  {
    id: "p5",
    name: "Marketing Specialist",
    description: "Pazarlama kampanyaları için kapsamlı prompt seti. Sosyal medya paylaşımları, reklamlar ve e-posta kampanyaları.",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "MarketBoost",
    price: 59,
    rating: 4.5,
    totalReviews: 110,
    downloads: 745,
    type: "prompt",
    category: "Pazarlama",
    featured: false,
  },
  
  // Free items
  {
    id: "f1",
    name: "Sentiment Analysis Starter",
    description: "Basit duygu analizi için başlangıç düzeyinde bir model. Eğitim ve öğrenme amaçlı idealdir.",
    imageUrl: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "AI Community",
    price: 0,
    rating: 4.2,
    totalReviews: 74,
    downloads: 2345,
    type: "model",
    category: "NLP",
    featured: false,
  },
  {
    id: "f2",
    name: "Creative Writing Prompts",
    description: "Yaratıcı yazı üretimi için temel prompt koleksiyonu. Hikaye, şiir ve diyalog oluşturma promptları.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "WritersHub",
    price: 0,
    rating: 4.4,
    totalReviews: 215,
    downloads: 5678,
    type: "prompt",
    category: "İçerik Üretimi",
    featured: false,
  },
];

// Categories for filters
const allCategories = [...new Set(marketplaceItems.map(item => item.category))];
const categories = ["Tümü", ...allCategories];

const Marketplace = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeTab, setActiveTab] = useState("all"); // "all", "models", "prompts", "free"
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular"); // "popular", "newest", "price-low", "price-high"
  const [items, setItems] = useState(marketplaceItems);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter items based on filters
    let filtered = marketplaceItems;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by tab
    if (activeTab === "models") {
      filtered = filtered.filter(item => item.type === "model");
    } else if (activeTab === "prompts") {
      filtered = filtered.filter(item => item.type === "prompt");
    } else if (activeTab === "free") {
      filtered = filtered.filter(item => item.price === 0);
    }
    
    // Filter by category
    if (activeCategory !== "Tümü") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Sort items
    if (sortBy === "popular") {
      filtered = [...filtered].sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "newest") {
      // In a real app, this would sort by date
      filtered = [...filtered].sort((a, b) => b.id.localeCompare(a.id));
    } else if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    setItems(filtered);
  }, [searchTerm, activeTab, activeCategory, sortBy]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    toast({
      title: "Sıralama değiştirildi",
      description: sort === "popular" 
        ? "En popüler ürünler gösteriliyor" 
        : sort === "newest" 
          ? "En yeni ürünler gösteriliyor" 
          : sort === "price-low" 
            ? "En düşük fiyattan yükseğe sıralanıyor" 
            : "En yüksek fiyattan düşüğe sıralanıyor",
    });
  };

  const handleSaveItem = (itemId: string) => {
    if (savedItems.includes(itemId)) {
      setSavedItems(savedItems.filter(id => id !== itemId));
      toast({
        title: "Kaydedilenlerden Kaldırıldı",
        description: "Ürün kaydedilenler listenizden kaldırıldı.",
      });
    } else {
      setSavedItems([...savedItems, itemId]);
      toast({
        title: "Kaydedilenlere Eklendi",
        description: "Ürün kaydedilenler listenize eklendi.",
      });
    }
  };

  const handleBuyItem = (item: any) => {
    toast({
      title: item.price === 0 ? "İndiriliyor" : "Satın Alma İşlemi",
      description: item.price === 0 
        ? "Ürün indiriliyor, lütfen bekleyin..." 
        : `${item.name} için satın alma işleminiz başlatılıyor.`,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aihub-dark">
        <div className="text-3xl font-bold text-gradient animate-pulse">Marketplace Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-amber-500/20 via-aihub-dark to-aihub-dark py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Marketplace</h1>
              <p className="text-white/70 max-w-3xl mx-auto">
                En iyi AI modellerini ve prompt'larını keşfedin, satın alın veya kendi ürünlerinizi satışa sunun.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Model ya da prompt ara..."
                  className="pl-10 bg-white/5 border-white/10 focus:border-amber-500 focus:ring-amber-500/50"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <Button 
                variant="outline" 
                className="border-white/10 hover:bg-white/5"
                onClick={toggleFilters}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtreler
              </Button>
            </div>
            
            {showFilters && (
              <Card className="mt-4 p-4 max-w-3xl mx-auto bg-white/5 border-white/10 animate-scale-in">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sıralama</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className={sortBy === "popular" 
                          ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" 
                          : "bg-white/5 hover:bg-white/10 text-white/70"}
                        onClick={() => handleSortChange("popular")}
                      >
                        <TrendingUp className="h-4 w-4 mr-2" />
                        En Popüler
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className={sortBy === "newest" 
                          ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" 
                          : "bg-white/5 hover:bg-white/10 text-white/70"}
                        onClick={() => handleSortChange("newest")}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        En Yeni
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className={sortBy === "price-low" 
                          ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" 
                          : "bg-white/5 hover:bg-white/10 text-white/70"}
                        onClick={() => handleSortChange("price-low")}
                      >
                        <DollarSign className="h-4 w-4 mr-2" />
                        Fiyat: Düşük → Yüksek
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className={sortBy === "price-high" 
                          ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" 
                          : "bg-white/5 hover:bg-white/10 text-white/70"}
                        onClick={() => handleSortChange("price-high")}
                      >
                        <DollarSign className="h-4 w-4 mr-2" />
                        Fiyat: Yüksek → Düşük
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Kategori</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          size="sm"
                          variant="ghost"
                          className={activeCategory === category 
                            ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30" 
                            : "bg-white/5 hover:bg-white/10 text-white/70"}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setActiveCategory("Tümü");
                      setSortBy("popular");
                      setSearchTerm("");
                      setActiveTab("all");
                    }}
                    className="text-white/70 hover:text-white"
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="pt-8 px-6">
          <div className="max-w-7xl mx-auto">
            <Tabs 
              defaultValue="all" 
              value={activeTab} 
              className="w-full"
              onValueChange={handleTabChange}
            >
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  Tümü
                </TabsTrigger>
                <TabsTrigger 
                  value="models"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  AI Modelleri
                </TabsTrigger>
                <TabsTrigger 
                  value="prompts"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  Promptlar
                </TabsTrigger>
                <TabsTrigger 
                  value="free"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Ücretsiz
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Items Grid */}
        <section className="section-padding pt-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {activeTab === "models" 
                  ? "AI Modelleri" 
                  : activeTab === "prompts" 
                    ? "Promptlar" 
                    : activeTab === "free" 
                      ? "Ücretsiz Ürünler" 
                      : "Tüm Ürünler"} 
                <span className="text-white/50">({items.length})</span>
              </h2>
            </div>
            
            {items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <Card key={item.id} className="glass card-hover overflow-hidden flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-3">
                        <Badge className={`${item.type === "model" ? "bg-aihub-blue" : "bg-aihub-purple"} text-white`}>
                          {item.type === "model" ? "Model" : "Prompt"}
                        </Badge>
                        
                        {item.featured && (
                          <Badge className="bg-amber-500 text-white">
                            Öne Çıkan
                          </Badge>
                        )}
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-3 right-3 h-8 w-8 rounded-full p-0 bg-black/30 hover:bg-black/50 text-white"
                        onClick={() => handleSaveItem(item.id)}
                      >
                        <Bookmark className={`h-4 w-4 ${savedItems.includes(item.id) ? "fill-amber-500 text-amber-500" : ""}`} />
                      </Button>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-medium mb-1">{item.name}</h3>
                          <p className="text-sm text-white/70">Geliştirici: {item.creator}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="font-medium">{item.rating}</span>
                          <span className="text-xs text-white/50 ml-1">({item.totalReviews})</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-sm text-white/80 mb-4 line-clamp-3">{item.description}</p>
                      
                      <div className="flex items-center text-sm text-white/70">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{item.downloads} indirme</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <div className="flex w-full justify-between items-center">
                        <div className="text-lg font-bold">
                          {item.price === 0 ? (
                            <span className="text-green-400">Ücretsiz</span>
                          ) : (
                            <span>{item.price} ₺</span>
                          )}
                        </div>
                        
                        <Button 
                          className="bg-amber-500 hover:bg-amber-600 text-white"
                          onClick={() => handleBuyItem(item)}
                        >
                          {item.price === 0 ? (
                            <span className="flex items-center">
                              <Download className="h-4 w-4 mr-2" />
                              İndir
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Satın Al
                            </span>
                          )}
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-white/70 mb-4">Arama kriterlerinize uygun ürün bulunamadı.</p>
                <Button 
                  variant="outline" 
                  className="border-white/10 hover:bg-white/5"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Tümü");
                    setActiveTab("all");
                    setSortBy("popular");
                  }}
                >
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Sell Your Own */}
        <section className="py-16 px-6 bg-gradient-to-b from-amber-500/5 to-aihub-dark">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Kendi AI Ürünlerinizi Satışa Sunun
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto mb-8">
              Geliştirdiğiniz AI modellerini veya oluşturduğunuz premium promptları AIHUB360 Marketplace'de satışa sunarak gelir elde edin.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <Card className="bg-white/5 border-white/10 text-center py-6 px-4">
                <DollarSign className="h-10 w-10 mx-auto text-amber-500 mb-4" />
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-medium">Kazanç Sağlayın</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Ürünleriniz için belirlediğiniz fiyatlandırma ile düzenli gelir elde edin.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-center py-6 px-4">
                <Tags className="h-10 w-10 mx-auto text-amber-500 mb-4" />
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-medium">Geniş Kitleye Ulaşın</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    AI topluluğuna ve binlerce potansiyel müşteriye ulaşma imkanı elde edin.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 text-center py-6 px-4">
                <ShoppingCart className="h-10 w-10 mx-auto text-amber-500 mb-4" />
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-medium">Kolay Satış</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Ödeme işlemleri ve satış sonrası destek hizmetlerini biz yönetiyoruz.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">
              Satıcı Olmak İstiyorum
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
