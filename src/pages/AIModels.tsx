
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, SlidersHorizontal, Zap, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

// Mock AI models data
const aiModelsData = [
  {
    id: "1",
    name: "OpenAI GPT-4",
    company: "OpenAI",
    description: "Gelişmiş dil anlama ve üretme yetenekleri ile çoklu görevlerde etkin.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    releaseDate: "2023-03-14",
    strengths: ["Dil Anlama", "Kod Yazma", "Çok Modlu"],
    rating: 4.9,
    free: false,
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: true,
  },
  {
    id: "2",
    name: "Gemini Pro",
    company: "Google",
    description: "Metin, görsel ve çoklu veri formatlarını anlayabilen güçlü model.",
    imageUrl: "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    releaseDate: "2023-12-06",
    strengths: ["Multimodal", "Bilgi Sorgulama", "Muhakeme"],
    rating: 4.7,
    free: true,
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: true,
  },
  {
    id: "3",
    name: "Claude 3 Opus",
    company: "Anthropic",
    description: "Uzun bağlam anlama ve detaylı açıklamalarda güçlü performans.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    releaseDate: "2024-03-04",
    strengths: ["Uzun Bağlam", "Doğruluk", "Güvenlik"],
    rating: 4.8,
    free: false,
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: true,
  },
  {
    id: "4",
    name: "Stable Diffusion XL",
    company: "Stability AI",
    description: "Metinden görsel üreten güçlü açık kaynaklı AI modeli.",
    imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    releaseDate: "2023-07-26",
    strengths: ["Görsel Üretme", "Düşük Gecikme", "Özelleştirilebilir"],
    rating: 4.6,
    free: true,
    type: "Görsel Üretme",
    category: "Görüntü AI",
    featured: false,
  },
  {
    id: "5",
    name: "Mistral 7B",
    company: "Mistral AI",
    description: "Boyutuna göre son derece verimli ve güçlü açık model.",
    imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    releaseDate: "2023-09-27",
    strengths: ["Verimlilik", "Açık Kaynak", "Düşük Kaynak Gereksinimi"],
    rating: 4.5,
    free: true,
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: false,
  },
  {
    id: "6",
    name: "LLaMA 2",
    company: "Meta",
    description: "Açık araştırma ve ticari kullanım için tasarlanmış güçlü dil modeli.",
    imageUrl: "https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    releaseDate: "2023-07-18",
    strengths: ["Güvenlik", "Açık Kaynak", "Geliştirilebilirlik"],
    rating: 4.4,
    free: true,
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: false,
  },
];

// Create a ModelCard component to be used inline since we're missing the import
const ModelCard = ({
  id,
  name,
  company,
  description,
  imageUrl,
  strengths,
  rating,
  free,
  featured,
  onClick
}: {
  id: string;
  name: string;
  company: string;
  description: string;
  imageUrl: string;
  strengths: string[];
  rating: number;
  free: boolean;
  featured: boolean;
  onClick: () => void;
}) => {
  return (
    <Card 
      className={`glass card-hover h-full flex flex-col overflow-hidden ${featured ? 'border-aihub-blue/50 shadow-[0_0_15px_rgba(0,191,255,0.15)]' : 'border-white/10'}`}
      onClick={onClick}
    >
      {featured && (
        <div className="absolute top-0 right-0 z-10">
          <div className="m-2 bg-aihub-blue text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            Öne Çıkan
          </div>
        </div>
      )}
      
      <div className="relative h-40 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {free && (
          <div className="absolute top-2 left-2">
            <div className="bg-green-500/90 border-0 text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              Ücretsiz
            </div>
          </div>
        )}
      </div>
      
      <div className="pb-2 p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-medium mb-1">{name}</h3>
            <p className="text-sm text-white/70">{company}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
            <span className="text-white">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-4 pt-0">
        <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {strengths.map((strength, index) => (
            <div 
              key={index} 
              className="bg-white/5 text-white/80 border-white/10 text-xs inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
              {strength}
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 pt-0">
        <Button 
          className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10"
          variant="outline"
        >
          İncele
        </Button>
      </div>
    </Card>
  );
};

// Filter categories
const categories = ["Tümü", "Üretken AI", "Görüntü AI", "Ses AI", "Video AI", "Çok Modlu"];
const types = ["Tümü", "Dil Modeli", "Görsel Üretme", "Görsel Algılama", "Ses Üretme", "Ses Algılama"];
const companies = ["Tümü", "OpenAI", "Google", "Anthropic", "Meta", "Stability AI", "Mistral AI"];

const AIModels = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedType, setSelectedType] = useState("Tümü");
  const [selectedCompany, setSelectedCompany] = useState("Tümü");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleModelSelect = (modelId: string) => {
    navigate(`/model/${modelId}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCompareClick = () => {
    toast({
      title: "Karşılaştırma Özelliği",
      description: "Model karşılaştırma özelliği yakında aktif olacak!",
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const filteredModels = aiModelsData.filter((model) => {
    // Filter by search term
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          model.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          model.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === "Tümü" || model.category === selectedCategory;
    
    // Filter by type
    const matchesType = selectedType === "Tümü" || model.type === selectedType;
    
    // Filter by company
    const matchesCompany = selectedCompany === "Tümü" || model.company === selectedCompany;
    
    // Filter free/paid
    const matchesFree = !showFreeOnly || model.free;
    
    return matchesSearch && matchesCategory && matchesType && matchesCompany && matchesFree;
  });

  // Featured models first, then sort by rating
  const sortedModels = [...filteredModels].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.rating - a.rating;
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-animation">
          <div className="loading-spinner"></div>
          <div className="loading-text">AI Modelleri Yükleniyor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <CustomNavbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-indigo-900/20 via-gray-900 to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 page-heading">AI Modelleri & Teknolojileri</h1>
              <p className="text-white/90 high-contrast-text max-w-3xl mx-auto">
                En son yapay zeka modellerini keşfedin, karşılaştırın ve test edin. Hangi AI modelinin ihtiyaçlarınıza en uygun olduğunu öğrenin.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Model adı, şirket veya özellik ara..."
                  className="pl-10 bg-white/5 border-white/10"
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-white/10 hover:bg-white/5"
                      onClick={handleCompareClick}
                    >
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Karşılaştır
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Modelleri yan yana karşılaştırın</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {showFilters && (
              <Card className="mt-4 p-4 max-w-3xl mx-auto bg-white/5 border-white/10 animate-in fade-in-0 zoom-in-95">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-white high-contrast-text">Kategori</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          size="sm"
                          variant="ghost"
                          className={selectedCategory === category 
                            ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" 
                            : "bg-white/5 hover:bg-white/10 text-white/70"}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-white high-contrast-text">Model Tipi</h3>
                    <div className="flex flex-wrap gap-2">
                      {types.map((type) => (
                        <Button
                          key={type}
                          size="sm"
                          variant="ghost"
                          className={selectedType === type 
                            ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" 
                            : "bg-white/5 hover:bg-white/10 text-white/70"}
                          onClick={() => setSelectedType(type)}
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-white high-contrast-text">Şirket</h3>
                    <div className="flex flex-wrap gap-2">
                      {companies.map((company) => (
                        <Button
                          key={company}
                          size="sm"
                          variant="ghost"
                          className={selectedCompany === company 
                            ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" 
                            : "bg-white/5 hover:bg-white/10 text-white/70"}
                          onClick={() => setSelectedCompany(company)}
                        >
                          {company}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="free-only"
                      className="rounded bg-white/5 border-white/20 text-blue-500 focus:ring-blue-500/50 mr-2"
                      checked={showFreeOnly}
                      onChange={() => setShowFreeOnly(!showFreeOnly)}
                    />
                    <label htmlFor="free-only" className="text-sm text-white high-contrast-text">Sadece ücretsiz modelleri göster</label>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("Tümü");
                      setSelectedType("Tümü");
                      setSelectedCompany("Tümü");
                      setShowFreeOnly(false);
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

        {/* Models Grid Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold page-heading">
                {sortedModels.length} AI Modeli Bulundu
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedModels.length > 0 ? (
                sortedModels.map((model) => (
                  <ModelCard
                    key={model.id}
                    id={model.id}
                    name={model.name}
                    company={model.company}
                    description={model.description}
                    imageUrl={model.imageUrl}
                    strengths={model.strengths}
                    rating={model.rating}
                    free={model.free}
                    featured={model.featured}
                    onClick={() => handleModelSelect(model.id)}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <p className="text-white/90 high-contrast-text text-lg">
                    Arama kriterlerinize uygun model bulunamadı.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-white/10 hover:bg-white/5"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Tümü");
                      setSelectedType("Tümü");
                      setSelectedCompany("Tümü");
                      setShowFreeOnly(false);
                    }}
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIModels;
