
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Star,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  ChevronDown,
  Copy,
  Save,
  Share,
  Sparkles,
  Tag,
  Zap,
  Flame,
  Clock,
  Download
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
import { Textarea } from "@/components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sahte veri - AI Model türleri
const aiModels = [
  { id: "gpt4", name: "GPT-4" },
  { id: "gpt3.5", name: "GPT-3.5" },
  { id: "claude3", name: "Claude 3" },
  { id: "gemini", name: "Gemini" },
  { id: "llama3", name: "Llama 3" },
  { id: "mistral", name: "Mistral" },
  { id: "stable-diffusion", name: "Stable Diffusion" },
  { id: "midjourney", name: "Midjourney" },
  { id: "dalle", name: "DALL-E" },
];

// Sahte veri - Kullanım alanları
const useCases = [
  { id: "writing", name: "İçerik Yazımı" },
  { id: "coding", name: "Kod Geliştirme" },
  { id: "seo", name: "SEO Optimizasyonu" },
  { id: "marketing", name: "Pazarlama" },
  { id: "image", name: "Görsel Oluşturma" },
  { id: "data", name: "Veri Analizi" },
  { id: "education", name: "Eğitim" },
  { id: "business", name: "İş Süreçleri" },
  { id: "creative", name: "Yaratıcı Çalışmalar" },
];

// Sahte veri - Hazır promptlar
const samplePrompts = [
  {
    id: "1",
    title: "SEO Optimizasyonlu Blog Yazısı",
    prompt: "Aşağıdaki konuda, SEO dostu, Google'ın ilk sayfa sonuçlarında çıkabilecek bir blog yazısı oluştur. Başlık, H2 ve H3 alt başlıklar, giriş, gelişme, sonuç bölümlerini içersin. İlgili anahtar kelimeleri doğal bir şekilde metin içine yerleştir. 1500 kelime uzunluğunda olsun. Konu: [KONU]",
    category: "ChatGPT Promptları",
    tags: ["Blog", "SEO", "İçerik"],
    author: {
      name: "Ahmet Yılmaz",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    rating: 4.8,
    votes: 154,
    usageCount: 2547,
    isPremium: false,
    createdAt: "2024-04-15"
  },
  {
    id: "2",
    title: "Gerçekçi Portre Fotoğrafı",
    prompt: "Create a photorealistic portrait of a [AGE] [GENDER] with [HAIR COLOR], [EYE COLOR], wearing [CLOTHING]. The lighting should be [LIGHTING STYLE] and the background should be [BACKGROUND]. Make sure the image has a [MOOD/EMOTION] feel to it. The person should be looking [DIRECTION] with a [FACIAL EXPRESSION] expression.",
    category: "Stable Diffusion Görsel Promptları",
    tags: ["Görsel", "Portre", "Fotoğraf"],
    author: {
      name: "Zeynep Kaya",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    rating: 4.9,
    votes: 203,
    usageCount: 3621,
    isPremium: true,
    createdAt: "2024-05-02"
  },
  {
    id: "3",
    title: "Full-Stack Web Uygulaması Yapısı",
    prompt: "Ben bir [PROJE TÜRÜ] web uygulaması geliştirmek istiyorum. Frontend için React, backend için Node.js/Express kullanacağım ve veritabanı olarak MongoDB tercih ediyorum. Bana şunları oluştur:\n1. Projenin dosya ve klasör yapısını\n2. Temel API endpoint'leri ve şemalarını\n3. Frontend component yapısını\n4. Örnek bir authentication sistemi\n5. Uygulamanın ana özelliklerinin kod örneklerini\n\nProjenin amacı: [AMAÇ]",
    category: "Kodlama Promptları",
    tags: ["Kod", "Web Geliştirme", "Full-Stack"],
    author: {
      name: "Burak Demir",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    rating: 4.7,
    votes: 178,
    usageCount: 2134,
    isPremium: false,
    createdAt: "2024-03-20"
  },
  {
    id: "4",
    title: "E-Ticaret Ürün Açıklaması",
    prompt: "Aşağıdaki ürün için satış odaklı, ikna edici, müşterinin ilgisini çekecek ve SEO dostu bir ürün açıklaması yaz. Açıklama ürünün özelliklerini, faydalarını, kullanım alanlarını ve neden tercih edilmesi gerektiğini içermeli. Ürün: [ÜRÜN]",
    category: "ChatGPT Promptları",
    tags: ["E-Ticaret", "Pazarlama", "Satış"],
    author: {
      name: "Elif Aydın",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    rating: 4.6,
    votes: 129,
    usageCount: 1865,
    isPremium: false,
    createdAt: "2024-04-05"
  },
  {
    id: "5",
    title: "Fantasy Kahramanı İllüstrasyonu",
    prompt: "Create a detailed fantasy character illustration of a [CHARACTER TYPE] with [DISTINCTIVE FEATURE]. They should be wearing [ARMOR/CLOTHING STYLE] and holding [WEAPON/ITEM]. Include [MAGICAL ELEMENT] effects around them. The art style should be [ART STYLE], with a [MOOD] atmosphere set in a [LOCATION] background.",
    category: "Stable Diffusion Görsel Promptları",
    tags: ["Görsel", "Fantastik", "Karakter"],
    author: {
      name: "Can Yılmaz",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    rating: 4.9,
    votes: 217,
    usageCount: 2986,
    isPremium: true,
    createdAt: "2024-05-10"
  },
  {
    id: "6",
    title: "Kapsamlı API Servisi",
    prompt: "Bir [SERVIS TÜRÜ] API servisi geliştirmek istiyorum. Servis, aşağıdaki temel fonksiyonları desteklemeli: [TEMEL FONKSİYONLAR]. Node.js ve Express kullanarak, aşağıdakileri oluştur:\n1. RESTful API endpoint yapısı\n2. Middleware fonksiyonları\n3. Veritabanı bağlantısı ve model şemaları\n4. Auth servislerini\n5. Error handling\n6. Rate limiting ve güvenlik önlemleri\n7. Temel controller fonksiyonları\n8. Test kodları",
    category: "Kodlama Promptları",
    tags: ["API", "Backend", "Nodejs"],
    author: {
      name: "Mehmet Koç",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    rating: 4.8,
    votes: 145,
    usageCount: 1923,
    isPremium: false,
    createdAt: "2024-04-18"
  }
];

// Ana kategoriler
const categories = [
  "Tümü",
  "ChatGPT Promptları",
  "Stable Diffusion Görsel Promptları",
  "Kodlama Promptları"
];

// İş akışı entegrasyonları
const workflowIntegrations = [
  {
    id: "chatgpt",
    name: "ChatGPT'ye aktar",
    icon: <MessageSquare className="h-4 w-4" />,
    url: "https://chat.openai.com"
  },
  {
    id: "github",
    name: "GitHub'da uygula",
    icon: <Zap className="h-4 w-4" />,
    url: "https://github.com"
  },
  {
    id: "cursor",
    name: "Cursor ile geliştir",
    icon: <Code className="h-4 w-4" />,
    url: "https://cursor.sh"
  },
  {
    id: "vercel",
    name: "Vercel ile yayınla",
    icon: <Upload className="h-4 w-4" />,
    url: "https://vercel.com"
  }
];

const PromptGenerator = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Durum Yönetimi
  const [activeTab, setActiveTab] = useState("create");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  
  const [formData, setFormData] = useState({
    purpose: "",
    model: "",
    useCase: "",
    details: ""
  });
  
  // Form verilerini güncelle
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  // Prompt oluştur
  const handleGeneratePrompt = () => {
    // Gerçek uygulamada burada API çağrısı yapılır
    const samplePromptResult = `Aşağıdaki kriterlere göre bir ${formData.useCase || "[KULLANIM ALANI]"} için prompt oluştur:

1. AI Modeli: ${formData.model || "[MODEL]"}
2. Amaç: ${formData.purpose || "[AMAÇ]"}
${formData.details ? `3. Ek Detaylar: ${formData.details}` : ""}

Prompt şu formatı izlemeli:
- Net bir talimat
- İstenen çıktının formatı
- Gerekli tüm parametreler
- Kaçınılması gereken şeyler

Sonuç yüksek kaliteli ve belirtilen modelin yetenekleriyle uyumlu olmalıdır.`;
    
    setGeneratedPrompt(samplePromptResult);
    
    toast({
      title: "Prompt Oluşturuldu",
      description: "İstediğiniz kriterlere göre promptunuz hazırlandı.",
    });
  };
  
  // Promptu kopyala
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt);
    
    toast({
      title: "Kopyalandı!",
      description: "Prompt panoya kopyalandı.",
    });
  };
  
  // Promptu kaydet
  const handleSavePrompt = () => {
    // Gerçek uygulamada burada API çağrısı yapılır
    
    toast({
      title: "Kaydedildi",
      description: "Prompt kütüphanenize eklendi.",
    });
  };
  
  // Filtrelenmiş promptlar
  const filteredPrompts = samplePrompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "Tümü" || prompt.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Promptu iş akışına entegre et
  const integratePrompt = (integration: any) => {
    // Gerçek uygulamada burada entegrasyon işlemi yapılır
    
    toast({
      title: "Entegre Edildi",
      description: `Promptunuz ${integration.name} servisine aktarıldı.`,
    });
  };
  
  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Prompt Oluşturucu</h1>
            <p className="text-white/70 mt-2">
              Yapay zeka promptları oluşturun, keşfedin ve paylaşın
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex justify-between items-center">
              <TabsList className="bg-[#222]">
                <TabsTrigger value="create" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00BFFF] data-[state=active]:to-[#8A2BE2] data-[state=active]:text-white">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Prompt Oluştur
                </TabsTrigger>
                <TabsTrigger value="library" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00BFFF] data-[state=active]:to-[#8A2BE2] data-[state=active]:text-white">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Prompt Kütüphanesi
                </TabsTrigger>
                <TabsTrigger value="marketplace" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00BFFF] data-[state=active]:to-[#8A2BE2] data-[state=active]:text-white">
                  <Tag className="h-4 w-4 mr-2" />
                  Prompt Marketplace
                </TabsTrigger>
              </TabsList>
              
              <Button
                variant="outline"
                className="hidden md:flex border-white/10 hover:bg-white/5"
                onClick={() => navigate("/prompt-generator/my-prompts")}
              >
                <Folder className="h-4 w-4 mr-2" />
                Promptlarım
              </Button>
            </div>
            
            {/* Prompt Oluşturucu Sekmesi */}
            <TabsContent value="create" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Yeni Prompt Oluştur</CardTitle>
                      <CardDescription>
                        Aşağıdaki alanları doldurarak amacınıza uygun bir prompt oluşturun
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="purpose" className="text-sm font-medium">
                          Prompt'un Amacı
                        </label>
                        <Input
                          id="purpose"
                          placeholder="Örn: Blog yazısı oluşturmak, kod geliştirmek, resim çizmek..."
                          className="bg-[#252525] border-white/10"
                          value={formData.purpose}
                          onChange={(e) => handleInputChange("purpose", e.target.value)}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="model" className="text-sm font-medium">
                            AI Model Türü
                          </label>
                          <Select
                            value={formData.model}
                            onValueChange={(value) => handleInputChange("model", value)}
                          >
                            <SelectTrigger className="bg-[#252525] border-white/10">
                              <SelectValue placeholder="Model seçin" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252525] border-white/10">
                              {aiModels.map((model) => (
                                <SelectItem key={model.id} value={model.id}>
                                  {model.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="useCase" className="text-sm font-medium">
                            Kullanım Alanı
                          </label>
                          <Select
                            value={formData.useCase}
                            onValueChange={(value) => handleInputChange("useCase", value)}
                          >
                            <SelectTrigger className="bg-[#252525] border-white/10">
                              <SelectValue placeholder="Alan seçin" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252525] border-white/10">
                              {useCases.map((useCase) => (
                                <SelectItem key={useCase.id} value={useCase.id}>
                                  {useCase.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="details" className="text-sm font-medium">
                          Ek Detaylar & İstekler
                        </label>
                        <Textarea
                          id="details"
                          placeholder="Promptunuzla ilgili spesifik detayları buraya yazın..."
                          className="min-h-32 bg-[#252525] border-white/10"
                          value={formData.details}
                          onChange={(e) => handleInputChange("details", e.target.value)}
                        />
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                        onClick={handleGeneratePrompt}
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Prompt Oluştur
                      </Button>
                    </CardContent>
                  </Card>
                  
                  {generatedPrompt && (
                    <Card className="bg-[#1A1A1A] border-white/10">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                          <CardTitle>Oluşturulan Prompt</CardTitle>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white/10 hover:bg-white/5"
                              onClick={handleCopyPrompt}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Kopyala
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-white/10 hover:bg-white/5"
                              onClick={handleSavePrompt}
                            >
                              <Save className="h-4 w-4 mr-2" />
                              Kaydet
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="p-4 bg-[#252525] rounded-md whitespace-pre-line font-mono text-sm">
                          {generatedPrompt}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-white/10 pt-3">
                        <div className="w-full">
                          <p className="text-sm text-white/60 mb-3">İş Akışına Entegre Et:</p>
                          <div className="flex flex-wrap gap-2">
                            {workflowIntegrations.map((integration) => (
                              <Button
                                key={integration.id}
                                variant="outline"
                                size="sm"
                                className="border-white/10 hover:bg-white/5"
                                onClick={() => integratePrompt(integration)}
                              >
                                {integration.icon}
                                <span className="ml-2">{integration.name}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  )}
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Öneri Alanı</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/70 text-sm">
                        Daha etkili promptlar için öneriler:
                      </p>
                      <div className="space-y-3">
                        <div className="p-3 bg-[#252525] rounded-md flex items-start">
                          <Sparkles className="h-4 w-4 text-[#00BFFF] mt-1 mr-2" />
                          <div>
                            <p className="text-sm text-white font-medium">Net talimatlar verin</p>
                            <p className="text-xs text-white/60">Spesifik isteğinizi açıkça belirtin</p>
                          </div>
                        </div>
                        <div className="p-3 bg-[#252525] rounded-md flex items-start">
                          <Sparkles className="h-4 w-4 text-[#8A2BE2] mt-1 mr-2" />
                          <div>
                            <p className="text-sm text-white font-medium">Format belirtin</p>
                            <p className="text-xs text-white/60">Çıktının nasıl yapılandırılmasını istediğinizi açıklayın</p>
                          </div>
                        </div>
                        <div className="p-3 bg-[#252525] rounded-md flex items-start">
                          <Sparkles className="h-4 w-4 text-[#00BFFF] mt-1 mr-2" />
                          <div>
                            <p className="text-sm text-white font-medium">Bağlam ekleyin</p>
                            <p className="text-xs text-white/60">Konu hakkında bilgi verin ve amacı açıklayın</p>
                          </div>
                        </div>
                        <div className="p-3 bg-[#252525] rounded-md flex items-start">
                          <Sparkles className="h-4 w-4 text-[#8A2BE2] mt-1 mr-2" />
                          <div>
                            <p className="text-sm text-white font-medium">Uygun AI modeli seçin</p>
                            <p className="text-xs text-white/60">Her model farklı güçlü yönlere sahiptir</p>
                          </div>
                        </div>
                      </div>
                      
                      <Separator className="bg-white/10" />
                      
                      <div>
                        <p className="text-sm font-medium mb-3">Popüler Kullanım Alanları</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                            SEO için blog yazıları
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                            Programlama yardımcısı
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                            Pazarlama metinleri
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                            Görsel tasarım
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                            Veri analizi
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-[#00BFFF]/20 to-[#8A2BE2]/20 border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Flame className="h-5 w-5 text-orange-400 mr-2" />
                        Premium Özellikler
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/70 text-sm">
                        Premium üyelik ile daha fazla özelliğe erişin:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Özel AI model eğitimi
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Sınırsız prompt oluşturma
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          Premium prompt kütüphanesi
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          API entegrasyonları
                        </li>
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90">
                        Premium'a Geç
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Prompt Kütüphanesi Sekmesi */}
            <TabsContent value="library" className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    placeholder="Prompt ara..."
                    className="pl-9 bg-[#252525] border-white/10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[200px] bg-[#252525] border-white/10">
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2 text-white/60" />
                      <SelectValue placeholder="Kategori" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrompts.map((prompt) => (
                  <Card key={prompt.id} className="bg-[#1A1A1A] border-white/10 overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <div>
                          <Badge variant="outline" className="bg-white/5 mb-2">
                            {prompt.category}
                          </Badge>
                          {prompt.isPremium && (
                            <Badge className="ml-2 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#252525] border-white/10">
                            <DropdownMenuItem className="hover:bg-white/5">
                              <Copy className="h-4 w-4 mr-2" />
                              <span>Kopyala</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5">
                              <Star className="h-4 w-4 mr-2" />
                              <span>Favorilere Ekle</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5">
                              <Share className="h-4 w-4 mr-2" />
                              <span>Paylaş</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardTitle className="text-lg">{prompt.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-24 overflow-hidden text-white/70 text-sm">
                        {prompt.prompt.substring(0, 150)}...
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {prompt.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-[#252525]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 pt-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-7 w-7 mr-2">
                          <AvatarImage src={prompt.author.avatar} />
                          <AvatarFallback>{prompt.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-white/70">{prompt.author.name}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center space-x-1 mr-3">
                          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                          <span className="text-xs">{prompt.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-3 w-3 text-white/60" />
                          <span className="text-xs text-white/60">{prompt.usageCount}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-white/10 hover:bg-white/5">
                  <Plus className="h-4 w-4 mr-2" />
                  Daha Fazla Yükle
                </Button>
              </div>
            </TabsContent>
            
            {/* Prompt Marketplace Sekmesi */}
            <TabsContent value="marketplace" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Prompt Satış & Paylaşım</CardTitle>
                      <CardDescription>
                        Kendi prompt'larınızı satın, paylaşın ve diğer kullanıcılardan geri bildirim alın
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Button 
                            className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Satışa Çıkar
                          </Button>
                          <p className="text-xs text-white/50 ml-4">
                            <InfoCircle className="h-3 w-3 inline mr-1" />
                            Komisyon oranı: %5
                          </p>
                        </div>
                        <Select defaultValue="latest">
                          <SelectTrigger className="w-[180px] bg-[#252525] border-white/10">
                            <SelectValue placeholder="Sıralama" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#252525] border-white/10">
                            <SelectItem value="latest">En Yeni</SelectItem>
                            <SelectItem value="popular">En Popüler</SelectItem>
                            <SelectItem value="price-asc">Fiyat (Artan)</SelectItem>
                            <SelectItem value="price-desc">Fiyat (Azalan)</SelectItem>
                            <SelectItem value="top-rated">En Yüksek Puanlı</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredPrompts.slice(0, 4).map((prompt) => (
                          <Card key={prompt.id} className="bg-[#252525] border-white/10">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between">
                                <Badge className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white">
                                  {prompt.isPremium ? "$4.99" : "$2.99"}
                                </Badge>
                                <div className="flex items-center">
                                  <ThumbsUp className="h-4 w-4 text-white/60 hover:text-green-400 cursor-pointer mr-2" />
                                  <ThumbsDown className="h-4 w-4 text-white/60 hover:text-red-400 cursor-pointer" />
                                </div>
                              </div>
                              <CardTitle className="text-base">{prompt.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="py-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Avatar className="h-6 w-6 mr-2">
                                    <AvatarImage src={prompt.author.avatar} />
                                    <AvatarFallback>{prompt.author.name.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                  <p className="text-xs text-white/70">{prompt.author.name}</p>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                  <span className="text-xs">{prompt.rating}</span>
                                  <span className="text-xs text-white/40">({prompt.votes})</span>
                                </div>
                              </div>
                            </CardContent>
                            <CardFooter className="pt-2">
                              <Button 
                                className="w-full text-sm h-8 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                              >
                                Satın Al
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="flex justify-center mt-4">
                        <Button variant="outline" className="border-white/10 hover:bg-white/5">
                          <Plus className="h-4 w-4 mr-2" />
                          Daha Fazla Göster
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Yorumlar ve Değerlendirmeler</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 bg-[#252525] rounded-md space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={`https://i.pravatar.cc/150?img=${10 + i}`} />
                                <AvatarFallback>U{i}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">Kullanıcı{i}</p>
                                <div className="flex items-center mt-1">
                                  {Array(5).fill(null).map((_, j) => (
                                    <Star key={j} className={`h-3 w-3 ${j < 5 - i % 2 ? 'fill-yellow-500 text-yellow-500' : 'text-white/20'}`} />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-white/40">{i} gün önce</p>
                          </div>
                          <p className="text-sm text-white/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam facilisis, nisl nunc ultricies nunc, quis aliquet ipsum nisl quis nunc.
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-white/40">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span>{12 - i}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-7 text-xs hover:bg-white/5">
                              Yanıtla
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-4">
                        <Textarea
                          placeholder="Yorum yazın..."
                          className="bg-[#252525] border-white/10 min-h-24"
                        />
                        <div className="flex justify-end mt-3">
                          <Button 
                            className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                          >
                            Yorum Yap
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Populer Prompt'lar</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {samplePrompts.slice(0, 3).map((prompt, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-[#252525] rounded-md">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium truncate">{prompt.title}</p>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                              <span className="text-xs">{prompt.rating}</span>
                              <span className="mx-2 text-white/30">•</span>
                              <Download className="h-3 w-3 text-white/60 mr-1" />
                              <span className="text-xs text-white/60">{prompt.usageCount}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="ml-auto h-8 w-8 p-0">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      
                      <Button 
                        variant="outline"
                        className="w-full mt-2 border-white/10 hover:bg-white/5"
                      >
                        Tümünü Gör
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Satış Yap</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/70 text-sm">
                        Kendi oluşturduğunuz kaliteli promptları satarak gelir elde edin.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm">Kolay arayüz ile prompt oluştur</p>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm">Fiyatını kendin belirle</p>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm">Düşük komisyon oranı</p>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm">Anında ödeme al</p>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Satışa Başla
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Tag className="h-5 w-5 mr-2 text-[#00BFFF]" />
                        Popüler Etiketler
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          ChatGPT
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          SEO
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          İçerik
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          Kod
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          Görsel
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          Pazarlama
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          E-ticaret
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          Blog
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          API
                        </Badge>
                        <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                          Sosyal Medya
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Eksik bileşenleri tanımla
import { Code, Upload, Folder, ChevronRight, InfoCircle } from "lucide-react";

export default PromptGenerator;
