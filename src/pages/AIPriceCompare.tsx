
import { useState } from "react";
import {
  Search,
  Filter,
  BarChart2,
  ArrowUpDown,
  Star,
  Check,
  X,
  ChevronDown,
  CornerDownRight,
  DollarSign,
  Info,
  ArrowRight,
  Link,
  User,
  Cpu,
  Zap,
  HelpCircle,
  Clock,
  PlusCircle,
  MinusCircle,
  ExternalLink,
  PlayCircle,
  ArrowLeft,
  EyeOff,
  Building,
  Bitcoin,
  Image,
  Sparkles,
  Code
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sahte veri - AI modelleri ve fiyatları
const aiPricingData = [
  {
    id: "openai-gpt4",
    provider: "OpenAI",
    model: "GPT-4o",
    type: "Dil Modeli",
    apiPrice: 0.01, // $ / 1K token
    batchPrice: null,
    freeTier: {
      available: false,
      limit: null
    },
    features: [
      { name: "Maksimum Input", value: "128K token" },
      { name: "Rate Limit", value: "500 istek/dakika" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Mevcut" },
      { name: "Latency", value: "Düşük" }
    ],
    performanceScore: 9.5,
    pricePerformanceScore: 8.7,
    bestFor: ["İşletme", "Araştırma", "Yaratıcı İçerik"],
    limitations: ["Yüksek maliyet", "Dil sınırlamaları"],
    releaseDate: "2024-05",
    websiteUrl: "https://openai.com"
  },
  {
    id: "openai-gpt35",
    provider: "OpenAI",
    model: "GPT-3.5 Turbo",
    type: "Dil Modeli",
    apiPrice: 0.0015, // $ / 1K token
    batchPrice: null,
    freeTier: {
      available: true,
      limit: "5,000 mesaj/gün"
    },
    features: [
      { name: "Maksimum Input", value: "16K token" },
      { name: "Rate Limit", value: "300 istek/dakika" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Mevcut" },
      { name: "Latency", value: "Çok Düşük" }
    ],
    performanceScore: 8.1,
    pricePerformanceScore: 9.4,
    bestFor: ["Genel Kullanım", "Kod Yazma", "İçerik Oluşturma"],
    limitations: ["Bilgi kesme noktası", "Kompleks görevlerde zayıf"],
    releaseDate: "2023-11",
    websiteUrl: "https://openai.com"
  },
  {
    id: "anthropic-claude",
    provider: "Anthropic",
    model: "Claude 3 Opus",
    type: "Dil Modeli",
    apiPrice: 0.015, // $ / 1K token
    batchPrice: null,
    freeTier: {
      available: false,
      limit: null
    },
    features: [
      { name: "Maksimum Input", value: "200K token" },
      { name: "Rate Limit", value: "450 istek/dakika" },
      { name: "Fine-Tuning", value: "Sınırlı" },
      { name: "Bellek Yönetimi", value: "Gelişmiş" },
      { name: "Latency", value: "Orta" }
    ],
    performanceScore: 9.7,
    pricePerformanceScore: 8.5,
    bestFor: ["Uzun Form İçerik", "Detaylı Analiz", "İşletme"],
    limitations: ["Yüksek maliyet", "Fine-tuning sınırlamaları"],
    releaseDate: "2024-03",
    websiteUrl: "https://anthropic.com"
  },
  {
    id: "google-gemini",
    provider: "Google",
    model: "Gemini Pro",
    type: "Dil Modeli",
    apiPrice: 0.0025, // $ / 1K token
    batchPrice: null,
    freeTier: {
      available: true,
      limit: "10,000 istek/ay"
    },
    features: [
      { name: "Maksimum Input", value: "32K token" },
      { name: "Rate Limit", value: "300 istek/dakika" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Mevcut" },
      { name: "Latency", value: "Düşük" }
    ],
    performanceScore: 8.9,
    pricePerformanceScore: 9.2,
    bestFor: ["Çok Modlu", "Araştırma", "Genel Kullanım"],
    limitations: ["Entegrasyon sorunları", "Sınırlı model çeşitliliği"],
    releaseDate: "2023-12",
    websiteUrl: "https://ai.google.dev"
  },
  {
    id: "meta-llama",
    provider: "Meta",
    model: "Llama 3 70B",
    type: "Dil Modeli",
    apiPrice: 0.0009, // $ / 1K token
    batchPrice: null,
    freeTier: {
      available: true,
      limit: "Açık kaynak, self-hosting"
    },
    features: [
      { name: "Maksimum Input", value: "8K token" },
      { name: "Rate Limit", value: "Self-host" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Temel" },
      { name: "Latency", value: "Değişken" }
    ],
    performanceScore: 8.5,
    pricePerformanceScore: 9.8,
    bestFor: ["Self-hosting", "Araştırma", "Özelleştirme"],
    limitations: ["Kurulum karmaşıklığı", "Donanım gereksinimi"],
    releaseDate: "2024-04",
    websiteUrl: "https://ai.meta.com"
  },
  {
    id: "stability-sd3",
    provider: "Stability AI",
    model: "Stable Diffusion 3",
    type: "Görsel Üretim",
    apiPrice: 0.02, // $ / image
    batchPrice: 0.015, // $ / image for batch
    freeTier: {
      available: true,
      limit: "25 görsel/gün"
    },
    features: [
      { name: "Çözünürlük", value: "1024×1024" },
      { name: "Rate Limit", value: "150 istek/dakika" },
      { name: "Stil Kontrolü", value: "Gelişmiş" },
      { name: "Negativ Prompt", value: "Mevcut" },
      { name: "Latency", value: "Orta" }
    ],
    performanceScore: 9.0,
    pricePerformanceScore: 9.3,
    bestFor: ["Yaratıcı Görsel Üretimi", "Tasarım", "Prototipleme"],
    limitations: ["Tutarsız kalite", "İnsan anatomisi sorunları"],
    releaseDate: "2023-10",
    websiteUrl: "https://stability.ai"
  },
  {
    id: "openai-dalle",
    provider: "OpenAI",
    model: "DALL-E 3",
    type: "Görsel Üretim",
    apiPrice: 0.04, // $ / image
    batchPrice: 0.03, // $ / image for batch
    freeTier: {
      available: false,
      limit: null
    },
    features: [
      { name: "Çözünürlük", value: "1024×1024" },
      { name: "Rate Limit", value: "100 istek/dakika" },
      { name: "Stil Kontrolü", value: "Temel" },
      { name: "Negativ Prompt", value: "Mevcut" },
      { name: "Latency", value: "Düşük" }
    ],
    performanceScore: 9.2,
    pricePerformanceScore: 8.0,
    bestFor: ["Gerçekçi Görseller", "Sanatsal Tasarımlar", "İçerik Üretimi"],
    limitations: ["Yüksek maliyet", "Tasarım esnekliği sınırlamaları"],
    releaseDate: "2023-09",
    websiteUrl: "https://openai.com/dall-e-3"
  },
  {
    id: "mistral-mixtral",
    provider: "Mistral AI",
    model: "Mixtral 8x7B",
    type: "Dil Modeli",
    apiPrice: 0.0007, // $ / 1K token
    batchPrice: null,
    freeTier: {
      available: true,
      limit: "5,000 istek/ay"
    },
    features: [
      { name: "Maksimum Input", value: "16K token" },
      { name: "Rate Limit", value: "250 istek/dakika" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Temel" },
      { name: "Latency", value: "Düşük" }
    ],
    performanceScore: 8.3,
    pricePerformanceScore: 9.9,
    bestFor: ["Maliyet Optimizasyonu", "Kod Yazma", "Genel Kullanım"],
    limitations: ["Performans tutarsızlığı", "Sınırlı bellek"],
    releaseDate: "2023-12",
    websiteUrl: "https://mistral.ai"
  },
  {
    id: "azure-openai",
    provider: "Microsoft Azure",
    model: "Azure OpenAI Service",
    type: "Platform",
    apiPrice: 0.02, // $ / 1K token (varies)
    batchPrice: null,
    freeTier: {
      available: true,
      limit: "Deneme hesabı kredisi"
    },
    features: [
      { name: "Maksimum Input", value: "Model bağımlı" },
      { name: "Rate Limit", value: "Özelleştirilebilir" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Gelişmiş" },
      { name: "Latency", value: "Çok Düşük" }
    ],
    performanceScore: 9.1,
    pricePerformanceScore: 8.8,
    bestFor: ["Kurumsal", "Güvenlik Odaklı", "Ölçeklenebilir"],
    limitations: ["Karmaşık fiyatlandırma", "Bölgesel erişim kısıtlamaları"],
    releaseDate: "2023-06",
    websiteUrl: "https://azure.microsoft.com/services/openai/"
  },
  {
    id: "huggingface-inference",
    provider: "Hugging Face",
    model: "Inference API",
    type: "Platform",
    apiPrice: 0.0009, // $ / 1K token (average)
    batchPrice: 0.0007,
    freeTier: {
      available: true,
      limit: "30,000 istek/ay"
    },
    features: [
      { name: "Model Seçenekleri", value: "10,000+" },
      { name: "Rate Limit", value: "100 istek/dakika" },
      { name: "Fine-Tuning", value: "Mevcut" },
      { name: "Bellek Yönetimi", value: "Temel" },
      { name: "Latency", value: "Değişken" }
    ],
    performanceScore: 8.0,
    pricePerformanceScore: 9.6,
    bestFor: ["Araştırma", "Prototipleme", "Özel Modeller"],
    limitations: ["Model tutarsızlığı", "Dokümantasyon eksiklikleri"],
    releaseDate: "2022-10",
    websiteUrl: "https://huggingface.co"
  }
];

// Kullanım durumu kategorileri
const useCases = [
  { id: "general", name: "Genel Kullanım", description: "Temel metin işleme ve genel istek yanıt görevleri" },
  { id: "creative", name: "Yaratıcı İçerik", description: "İçerik oluşturma, hikaye yazma ve yaratıcı projeler" },
  { id: "code", name: "Kod Geliştirme", description: "Kod yazma, hata ayıklama ve yazılım geliştirme" },
  { id: "visual", name: "Görsel Üretim", description: "Resim, grafik ve görsel içerikler oluşturma" },
  { id: "business", name: "İşletme", description: "Raporlama, analiz ve kurumsal kullanım senaryoları" },
  { id: "research", name: "Araştırma", description: "Bilimsel araştırma, veri analizi ve akademik kullanım" },
  { id: "integration", name: "Entegrasyon", description: "Mevcut sistemlere entegre edilecek AI çözümleri" }
];

const AIPriceCompare = () => {
  const { toast } = useToast();
  
  // Durum Yönetimi
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "pricePerformanceScore",
    direction: "desc" as "asc" | "desc"
  });
  const [filterType, setFilterType] = useState("all");
  const [showFreeTier, setShowFreeTier] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  
  // Filtreleme ve Sıralama
  const filteredData = aiPricingData.filter(model => {
    const matchesSearch = model.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          model.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === "all" || model.type === filterType;
    
    const matchesFreeTier = !showFreeTier || model.freeTier.available;
    
    return matchesSearch && matchesType && matchesFreeTier;
  });
  
  // Sıralama
  const sortedData = [...filteredData].sort((a, b) => {
    // @ts-ignore
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    // @ts-ignore
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  
  // Sıralama fonksiyonu
  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  
  // Kullanım Durumu Seçimi
  const handleUseCaseSelect = (useCaseId: string) => {
    setSelectedUseCase(useCaseId);
    
    toast({
      title: "Kullanım Senaryosu Seçildi",
      description: `Senaryonuza göre en uygun modeller öneriliyor.`,
    });
  };
  
  // Modele Git
  const handleViewModelDetails = (modelId: string) => {
    setSelectedModel(modelId);
    
    // Sayfa başına kaydır
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // En iyi model önerisi
  const getBestModelForUseCase = (useCaseId: string) => {
    if (!useCaseId) return null;
    
    switch (useCaseId) {
      case "general":
        return sortedData.find(model => model.id === "openai-gpt35");
      case "creative":
        return sortedData.find(model => model.id === "anthropic-claude");
      case "code":
        return sortedData.find(model => model.id === "openai-gpt4");
      case "visual":
        return sortedData.find(model => model.id === "stability-sd3");
      case "business":
        return sortedData.find(model => model.id === "azure-openai");
      case "research":
        return sortedData.find(model => model.id === "google-gemini");
      case "integration":
        return sortedData.find(model => model.id === "huggingface-inference");
      default:
        return sortedData[0];
    }
  };
  
  const selectedModelData = selectedModel 
    ? aiPricingData.find(model => model.id === selectedModel)
    : null;
  
  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gradient">AI Fiyat Karşılaştırma</h1>
            <p className="text-white/70 mt-2">
              Farklı AI modellerini ve hizmetlerini karşılaştırın, ihtiyacınıza en uygun çözümü bulun
            </p>
          </div>
          
          {selectedModelData ? (
            // Model Detay Görünümü
            <div className="space-y-6">
              <Button
                variant="outline"
                onClick={() => setSelectedModel(null)}
                className="border-white/10 hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Karşılaştırma Tablosuna Dön
              </Button>
              
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge className="mb-2">
                        {selectedModelData.type}
                      </Badge>
                      <CardTitle className="text-2xl flex items-center">
                        {selectedModelData.model}
                        <Badge variant="outline" className="ml-3 bg-white/5">
                          {selectedModelData.provider}
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        Yayınlanma: {selectedModelData.releaseDate}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-yellow-500 text-yellow-500 mr-1" />
                        <span className="text-xl font-bold">{selectedModelData.performanceScore.toFixed(1)}</span>
                        <span className="text-sm text-white/60 ml-1">/ 10</span>
                      </div>
                      <p className="text-sm text-white/60">Performans Puanı</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Fiyatlandırma</h3>
                        <div className="space-y-3 bg-[#252525] p-4 rounded-md">
                          {selectedModelData.apiPrice && (
                            <div className="flex justify-between items-center">
                              <p className="text-white/70">API Fiyatı:</p>
                              <p className="font-medium">
                                ${selectedModelData.apiPrice.toFixed(4)}
                                <span className="text-sm text-white/60 ml-1">
                                  {selectedModelData.type === "Görsel Üretim" ? "/ görsel" : "/ 1K token"}
                                </span>
                              </p>
                            </div>
                          )}
                          
                          {selectedModelData.batchPrice && (
                            <div className="flex justify-between items-center">
                              <p className="text-white/70">Toplu İşlem Fiyatı:</p>
                              <p className="font-medium">
                                ${selectedModelData.batchPrice.toFixed(4)}
                                <span className="text-sm text-white/60 ml-1">
                                  {selectedModelData.type === "Görsel Üretim" ? "/ görsel" : "/ 1K token"}
                                </span>
                              </p>
                            </div>
                          )}
                          
                          <div className="flex justify-between items-center">
                            <p className="text-white/70">Ücretsiz Katman:</p>
                            <div className="flex items-center">
                              {selectedModelData.freeTier.available ? (
                                <Badge className="bg-green-500/20 text-green-500 border-green-500/30 flex items-center gap-1">
                                  <Check className="h-3 w-3" />
                                  <span>Mevcut</span>
                                </Badge>
                              ) : (
                                <Badge className="bg-red-500/20 text-red-500 border-red-500/30 flex items-center gap-1">
                                  <X className="h-3 w-3" />
                                  <span>Yok</span>
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {selectedModelData.freeTier.available && (
                            <div className="flex justify-between items-center">
                              <p className="text-white/70">Ücretsiz Limit:</p>
                              <p className="font-medium">{selectedModelData.freeTier.limit}</p>
                            </div>
                          )}
                          
                          <Separator className="bg-white/10 my-3" />
                          
                          <div className="flex justify-between items-center">
                            <p className="text-white/70">Fiyat/Performans Oranı:</p>
                            <div className="flex items-center">
                              <Progress value={selectedModelData.pricePerformanceScore * 10} className="w-24 h-2 mr-2" />
                              <p className="font-medium">{selectedModelData.pricePerformanceScore.toFixed(1)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Özellikler</h3>
                        <div className="space-y-2 bg-[#252525] p-4 rounded-md">
                          {selectedModelData.features.map((feature, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <p className="text-white/70">{feature.name}:</p>
                              <p className="font-medium">{feature.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Kullanım Alanları</h3>
                        <div className="bg-[#252525] p-4 rounded-md">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {selectedModelData.bestFor.map((use, index) => (
                              <Badge key={index} variant="outline" className="bg-[#00BFFF]/10 text-[#00BFFF] border-[#00BFFF]/30">
                                {use}
                              </Badge>
                            ))}
                          </div>
                          
                          <h4 className="text-sm font-medium mb-2 text-white/70">Sınırlamalar:</h4>
                          <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                            {selectedModelData.limitations.map((limitation, index) => (
                              <li key={index}>{limitation}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-3">Performans Özeti</h3>
                        <div className="space-y-4 bg-[#252525] p-4 rounded-md">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Doğruluk</span>
                              <span>{Math.round(selectedModelData.performanceScore * 9.5)}%</span>
                            </div>
                            <Progress value={selectedModelData.performanceScore * 9.5} className="h-2" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Hız</span>
                              <span>{Math.round(selectedModelData.performanceScore * 8.7)}%</span>
                            </div>
                            <Progress value={selectedModelData.performanceScore * 8.7} className="h-2" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Maliyet Etkinliği</span>
                              <span>{Math.round(selectedModelData.pricePerformanceScore * 10)}%</span>
                            </div>
                            <Progress value={selectedModelData.pricePerformanceScore * 10} className="h-2" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>API Kullanım Kolaylığı</span>
                              <span>{Math.round(selectedModelData.performanceScore * 7.5)}%</span>
                            </div>
                            <Progress value={selectedModelData.performanceScore * 7.5} className="h-2" />
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Dokümantasyon</span>
                              <span>{Math.round(selectedModelData.performanceScore * 8.2)}%</span>
                            </div>
                            <Progress value={selectedModelData.performanceScore * 8.2} className="h-2" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Model Demo</h3>
                        <div className="bg-[#252525] p-4 rounded-md flex flex-col items-center justify-center h-64">
                          <Cpu className="h-12 w-12 text-white/20 mb-3" />
                          <p className="text-white/60 text-center mb-4">Bu modelin demosunu test edin</p>
                          <Button className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90">
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Demo Başlat
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Örnek Kullanım Senaryoları</h3>
                        <div className="bg-[#252525] p-4 rounded-md space-y-3">
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-white/10">
                              <AccordionTrigger className="hover:no-underline hover:bg-white/5 px-3 rounded-md">
                                <div className="flex items-center">
                                  <CornerDownRight className="h-4 w-4 mr-2 text-[#00BFFF]" />
                                  <span>Temel Uygulama</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-white/70 pb-4">
                                <pre className="text-xs bg-[#1A1A1A] p-3 rounded-md overflow-x-auto">
                                  <code>
                                    {`// JavaScript ile API örneği
fetch("https://${selectedModelData.provider.toLowerCase()}.com/api/v1/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "${selectedModelData.model.toLowerCase().replace(/\s+/g, '-')}",
    prompt: "Merhaba, dünya!",
    max_tokens: 100
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
                                  </code>
                                </pre>
                              </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-2" className="border-white/10">
                              <AccordionTrigger className="hover:no-underline hover:bg-white/5 px-3 rounded-md">
                                <div className="flex items-center">
                                  <CornerDownRight className="h-4 w-4 mr-2 text-[#8A2BE2]" />
                                  <span>İleri Seviye Entegrasyon</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-white/70 pb-4">
                                <p className="mb-2">Bu model için ileri seviye entegrasyon seçenekleri:</p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                  <li>Çoklu-sorgu yapısı</li>
                                  <li>Stream yanıt desteği</li>
                                  <li>Rate-limit yönetimi</li>
                                  <li>Hata işleme</li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                            
                            <AccordionItem value="item-3" className="border-white/10">
                              <AccordionTrigger className="hover:no-underline hover:bg-white/5 px-3 rounded-md">
                                <div className="flex items-center">
                                  <CornerDownRight className="h-4 w-4 mr-2 text-[#00BFFF]" />
                                  <span>Maliyet Optimizasyonu</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="text-white/70 pb-4">
                                <p className="mb-2">Maliyet optimizasyonu için öneriler:</p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                  <li>Daha kısa prompt kullanımı</li>
                                  <li>Batch istek optimizasyonu</li>
                                  <li>Önbellekleme stratejileri</li>
                                  <li>Token sayısı izleme ve kota yönetimi</li>
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between gap-4 pt-4">
                    <Button 
                      variant="outline"
                      className="border-white/10 hover:bg-white/5"
                      onClick={() => window.open(selectedModelData.websiteUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Resmi Sayfaya Git
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-white/10 hover:bg-white/5">
                        <EyeOff className="h-4 w-4 mr-2" />
                        Karşılaştırmadan Çıkar
                      </Button>
                      <Button 
                        className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                      >
                        <Link className="h-4 w-4 mr-2" />
                        Kullanmaya Başla
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Benzer Modeller</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {aiPricingData
                      .filter(model => model.id !== selectedModel && model.type === selectedModelData.type)
                      .slice(0, 3)
                      .map(model => (
                        <Card key={model.id} className="bg-[#252525] border-white/10 hover:bg-[#303030]">
                          <CardHeader className="pb-2">
                            <Badge variant="outline" className="bg-white/5 mb-1">
                              {model.provider}
                            </Badge>
                            <CardTitle className="text-lg">{model.model}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                                <span>{model.performanceScore.toFixed(1)}</span>
                              </div>
                              <p className="text-sm text-white/70">
                                ${model.apiPrice.toFixed(4)}
                                <span className="text-xs text-white/50">
                                  {model.type === "Görsel Üretim" ? "/görsel" : "/1K token"}
                                </span>
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {model.bestFor.slice(0, 2).map((use, index) => (
                                <Badge key={index} variant="outline" className="text-xs bg-[#303030]">
                                  {use}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button 
                              variant="outline" 
                              className="w-full border-white/10 hover:bg-white/5"
                              onClick={() => handleViewModelDetails(model.id)}
                            >
                              Detayları Gör
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Karşılaştırma Ana Görünümü
            <div className="space-y-6">
              <Card className="bg-[#1A1A1A] border-white/10 p-6">
                <h2 className="text-xl font-medium mb-4">Kullanım Senaryonuzu Seçin</h2>
                <p className="text-white/70 mb-6">
                  İhtiyaçlarınıza en uygun AI modelini bulmak için kullanım senaryonuzu seçin
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {useCases.map((useCase) => (
                    <Card 
                      key={useCase.id}
                      className={`bg-[#252525] border-white/10 cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                        selectedUseCase === useCase.id ? 'ring-2 ring-[#00BFFF]' : ''
                      }`}
                      onClick={() => handleUseCaseSelect(useCase.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#8A2BE2]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                          {useCase.id === "general" && <User className="h-6 w-6 text-[#00BFFF]" />}
                          {useCase.id === "creative" && <Sparkles className="h-6 w-6 text-[#8A2BE2]" />}
                          {useCase.id === "code" && <Code className="h-6 w-6 text-[#00BFFF]" />}
                          {useCase.id === "visual" && <Image className="h-6 w-6 text-[#8A2BE2]" />}
                          {useCase.id === "business" && <Building className="h-6 w-6 text-[#00BFFF]" />}
                          {useCase.id === "research" && <Search className="h-6 w-6 text-[#8A2BE2]" />}
                          {useCase.id === "integration" && <Link className="h-6 w-6 text-[#00BFFF]" />}
                        </div>
                        <h3 className="font-medium mb-2">{useCase.name}</h3>
                        <p className="text-sm text-white/60">{useCase.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {selectedUseCase && (
                  <div className="mt-8 p-6 bg-[#252525] rounded-lg border border-[#00BFFF]/30">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <Badge variant="outline" className="bg-[#00BFFF]/10 text-[#00BFFF] border-[#00BFFF]/30 mb-2">
                          Önerilen
                        </Badge>
                        <h3 className="text-lg font-medium mb-1">
                          Size en uygun AI modeli:
                        </h3>
                        <p className="text-white/70">
                          "{useCases.find(uc => uc.id === selectedUseCase)?.name}" kullanım senaryonuz için aşağıdaki model öneriliyor
                        </p>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                        onClick={() => {
                          const bestModel = getBestModelForUseCase(selectedUseCase);
                          if (bestModel) {
                            handleViewModelDetails(bestModel.id);
                          }
                        }}
                      >
                        <Zap className="h-4 w-4 mr-2" />
                        Önerilen Modeli Gör
                      </Button>
                    </div>
                    
                    {selectedUseCase && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {(() => {
                          const bestModel = getBestModelForUseCase(selectedUseCase);
                          if (!bestModel) return null;
                          
                          return (
                            <Card className="bg-[#303030] border-white/10">
                              <CardHeader className="pb-2">
                                <Badge className="bg-[#00BFFF]/10 text-[#00BFFF] border-[#00BFFF]/30 mb-1">
                                  #1 Öneri
                                </Badge>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <CardTitle className="text-lg">{bestModel.model}</CardTitle>
                                    <CardDescription>{bestModel.provider}</CardDescription>
                                  </div>
                                  <div className="flex items-center">
                                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                                    <span className="font-bold">{bestModel.performanceScore.toFixed(1)}</span>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="pb-3">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-white/70">Fiyat:</span>
                                  <span className="font-medium">
                                    ${bestModel.apiPrice.toFixed(4)}
                                    <span className="text-xs text-white/60 ml-1">
                                      {bestModel.type === "Görsel Üretim" ? "/ görsel" : "/ 1K token"}
                                    </span>
                                  </span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-white/70">Ücretsiz Katman:</span>
                                  <span className="font-medium">
                                    {bestModel.freeTier.available ? (
                                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                                        Mevcut
                                      </Badge>
                                    ) : (
                                      <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
                                        Yok
                                      </Badge>
                                    )}
                                  </span>
                                </div>
                                <div className="mt-3">
                                  <h4 className="text-sm font-medium mb-2">Öne Çıkan Özellikler:</h4>
                                  <ul className="text-sm text-white/70 space-y-1">
                                    {bestModel.features.slice(0, 3).map((feature, index) => (
                                      <li key={index} className="flex justify-between">
                                        <span>{feature.name}:</span>
                                        <span>{feature.value}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </CardContent>
                              <CardFooter>
                                <Button
                                  className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                                  onClick={() => handleViewModelDetails(bestModel.id)}
                                >
                                  Detayları Gör
                                </Button>
                              </CardFooter>
                            </Card>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                )}
              </Card>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                    <Input
                      placeholder="Model ara..."
                      className="pl-9 bg-[#252525] border-white/10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-full md:w-48 bg-[#252525] border-white/10">
                      <SelectValue placeholder="Model Türü" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252525] border-white/10">
                      <SelectItem value="all">Tüm Türler</SelectItem>
                      <SelectItem value="Dil Modeli">Dil Modeli</SelectItem>
                      <SelectItem value="Görsel Üretim">Görsel Üretim</SelectItem>
                      <SelectItem value="Platform">Platform</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-full md:w-auto flex gap-4">
                  <Button
                    variant="outline"
                    className={`w-full md:w-auto border-white/10 ${showFreeTier ? 'bg-green-500/20 text-green-500' : 'hover:bg-white/5'}`}
                    onClick={() => setShowFreeTier(!showFreeTier)}
                  >
                    <span className={`mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full border ${showFreeTier ? 'border-green-500 bg-green-500 text-white' : 'border-white/60'}`}>
                      {showFreeTier && <Check className="h-3 w-3" />}
                    </span>
                    Sadece Ücretsiz Katman
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full md:w-auto border-white/10 hover:bg-white/5">
                        <Filter className="h-4 w-4 mr-2" />
                        Sırala
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#252525] border-white/10">
                      <DropdownMenuItem 
                        className="hover:bg-white/5 cursor-pointer"
                        onClick={() => setSortConfig({ key: "pricePerformanceScore", direction: "desc" })}
                      >
                        Fiyat/Performans (En İyi)
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="hover:bg-white/5 cursor-pointer"
                        onClick={() => setSortConfig({ key: "performanceScore", direction: "desc" })}
                      >
                        Performans (En İyi)
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="hover:bg-white/5 cursor-pointer"
                        onClick={() => setSortConfig({ key: "apiPrice", direction: "asc" })}
                      >
                        Fiyat (Düşükten Yükseğe)
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="hover:bg-white/5 cursor-pointer"
                        onClick={() => setSortConfig({ key: "apiPrice", direction: "desc" })}
                      >
                        Fiyat (Yüksekten Düşüğe)
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader className="pb-0">
                  <CardTitle>AI Model Karşılaştırması</CardTitle>
                  <CardDescription>
                    Farklı AI modelleri ve hizmetlerinin karşılaştırmalı tablosu
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {sortedData.length > 0 ? (
                    <div className="overflow-x-auto">
                      <Table className="w-full">
                        <TableHeader>
                          <TableRow className="hover:bg-transparent">
                            <TableHead className="w-[180px]">Model</TableHead>
                            <TableHead className="w-[120px]">
                              <div 
                                className="flex items-center cursor-pointer"
                                onClick={() => requestSort("provider")}
                              >
                                Sağlayıcı
                                <ArrowUpDown className="ml-1 h-4 w-4" />
                              </div>
                            </TableHead>
                            <TableHead>
                              <div 
                                className="flex items-center cursor-pointer"
                                onClick={() => requestSort("type")}
                              >
                                Tür
                                <ArrowUpDown className="ml-1 h-4 w-4" />
                              </div>
                            </TableHead>
                            <TableHead>
                              <div 
                                className="flex items-center cursor-pointer"
                                onClick={() => requestSort("apiPrice")}
                              >
                                API Fiyatı
                                <ArrowUpDown className="ml-1 h-4 w-4" />
                              </div>
                            </TableHead>
                            <TableHead>Ücretsiz Katman</TableHead>
                            <TableHead>
                              <div 
                                className="flex items-center cursor-pointer"
                                onClick={() => requestSort("performanceScore")}
                              >
                                Performans
                                <ArrowUpDown className="ml-1 h-4 w-4" />
                              </div>
                            </TableHead>
                            <TableHead>
                              <div 
                                className="flex items-center cursor-pointer"
                                onClick={() => requestSort("pricePerformanceScore")}
                              >
                                Fiyat/Performans
                                <ArrowUpDown className="ml-1 h-4 w-4" />
                              </div>
                            </TableHead>
                            <TableHead className="text-right">İşlemler</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sortedData.map((model) => (
                            <TableRow key={model.id} className="hover:bg-[#252525] cursor-pointer">
                              <TableCell className="font-medium">{model.model}</TableCell>
                              <TableCell>{model.provider}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-[#252525]">
                                  {model.type}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                ${model.apiPrice.toFixed(4)}
                                <span className="text-xs text-white/60 ml-1">
                                  {model.type === "Görsel Üretim" ? "/görsel" : "/1K token"}
                                </span>
                              </TableCell>
                              <TableCell>
                                {model.freeTier.available ? (
                                  <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                                    Mevcut
                                  </Badge>
                                ) : (
                                  <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
                                    Yok
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                                  <span>{model.performanceScore.toFixed(1)}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress value={model.pricePerformanceScore * 10} className="h-2 w-12" />
                                  <span>{model.pricePerformanceScore.toFixed(1)}</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 px-2 text-[#00BFFF]"
                                  onClick={() => handleViewModelDetails(model.id)}
                                >
                                  <Info className="h-4 w-4 mr-1" />
                                  Detaylar
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <HelpCircle className="h-12 w-12 mx-auto text-white/20 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Eşleşen model bulunamadı</h3>
                      <p className="text-white/60 max-w-md mx-auto mb-6">
                        Arama kriterlerinize uygun bir AI modeli bulunamadı. Filtreleri değiştirmeyi deneyin.
                      </p>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/5"
                      >
                        Filtreleri Temizle
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIPriceCompare;
