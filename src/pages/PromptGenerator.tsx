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
  Download,
  Code,
  Upload,
  Folder,
  ChevronRight,
  Info,
  CheckCircle,
  MoreHorizontal
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

interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  author: {
    name: string;
    avatar: string;
  };
  isPremium: boolean;
}

const initialPrompts: Prompt[] = [
  {
    id: "1",
    title: "Etkileyici Bir Blog Yazısı İçin Başlık Oluşturucu",
    description:
      "Bu prompt, blog yazınızın konusuna göre dikkat çekici başlıklar oluşturmanıza yardımcı olur.",
    category: "Blog",
    tags: ["başlık", "blog yazısı", "SEO"],
    upvotes: 120,
    downvotes: 15,
    author: {
      name: "Yapay Zeka Uzmanı",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: false,
  },
  {
    id: "2",
    title: "Sosyal Medya İçin Viral İçerik Üreticisi",
    description:
      "Sosyal medya platformlarında paylaşmak için ilgi çekici ve viral içerikler oluşturun.",
    category: "Sosyal Medya",
    tags: ["sosyal medya", "viral", "içerik"],
    upvotes: 95,
    downvotes: 8,
    author: {
      name: "Sosyal Medya Gurusu",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: true,
  },
  {
    id: "3",
    title: "E-ticaret Ürün Açıklaması Yazarı",
    description:
      "E-ticaret sitenizdeki ürünler için SEO uyumlu ve satış odaklı açıklamalar yazın.",
    category: "E-ticaret",
    tags: ["e-ticaret", "ürün açıklaması", "SEO"],
    upvotes: 78,
    downvotes: 5,
    author: {
      name: "E-ticaret Danışmanı",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: false,
  },
  {
    id: "4",
    title: "Yapay Zeka ile Logo Tasarımı İçin Prompt",
    description:
      "Yapay zeka kullanarak özgün ve akılda kalıcı logo tasarımları oluşturmak için promptlar.",
    category: "Logo Tasarımı",
    tags: ["logo", "tasarım", "yapay zeka"],
    upvotes: 63,
    downvotes: 3,
    author: {
      name: "Grafik Tasarımcı",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: true,
  },
  {
    id: "5",
    title: "Mobil Uygulama Tanıtım Metni Oluşturucu",
    description:
      "Mobil uygulamanızın özelliklerini ve faydalarını vurgulayan etkili tanıtım metinleri oluşturun.",
    category: "Mobil Uygulama",
    tags: ["mobil uygulama", "tanıtım", "pazarlama"],
    upvotes: 52,
    downvotes: 2,
    author: {
      name: "Mobil Pazarlama Uzmanı",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: false,
  },
  {
    id: "6",
    title: "Eğlenceli ve Yaratıcı Hikaye Başlangıçları",
    description:
      "Yaratıcılığınızı harekete geçirecek ve okuyucuyu hemen içine çekecek hikaye başlangıçları oluşturun.",
    category: "Hikaye",
    tags: ["hikaye", "yaratıcılık", "yazarlık"],
    upvotes: 45,
    downvotes: 1,
    author: {
      name: "Yazar",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: true,
  },
  {
    id: "7",
    title: "SEO Uyumlu Anahtar Kelime Önerileri",
    description:
      "Web siteniz veya içeriğiniz için en uygun anahtar kelimeleri bulun ve SEO stratejinizi geliştirin.",
    category: "SEO",
    tags: ["SEO", "anahtar kelime", "optimizasyon"],
    upvotes: 38,
    downvotes: 0,
    author: {
      name: "SEO Uzmanı",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: false,
  },
  {
    id: "8",
    title: "E-posta Pazarlama Kampanyaları İçin Konu Başlıkları",
    description:
      "E-posta kampanyalarınızın açılma oranlarını artıracak ilgi çekici konu başlıkları oluşturun.",
    category: "E-posta Pazarlama",
    tags: ["e-posta", "pazarlama", "konu başlığı"],
    upvotes: 32,
    downvotes: 0,
    author: {
      name: "E-posta Pazarlama Uzmanı",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: true,
  },
  {
    id: "9",
    title: "Oyun Geliştirme İçin Karakter ve Dünya Tasarımı",
    description:
      "Oyununuz için benzersiz karakterler ve etkileyici dünyalar tasarlamak için yapay zeka promptları.",
    category: "Oyun Geliştirme",
    tags: ["oyun", "karakter", "dünya"],
    upvotes: 27,
    downvotes: 0,
    author: {
      name: "Oyun Geliştirici",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: false,
  },
  {
    id: "10",
    title: "Yapay Zeka ile Müzik Besteleme İçin Prompt",
    description:
      "Yapay zeka kullanarak farklı türlerde müzikler bestelemek için ilham verici promptlar.",
    category: "Müzik",
    tags: ["müzik", "beste", "yapay zeka"],
    upvotes: 23,
    downvotes: 0,
    author: {
      name: "Müzisyen",
      avatar: "https://github.com/shadcn.png",
    },
    isPremium: true,
  },
];

const PromptGenerator = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [promptText, setPromptText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [prompts, setPrompts] = useState(initialPrompts);
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = ["all", "Blog", "Sosyal Medya", "E-ticaret", "Logo Tasarımı", "Mobil Uygulama", "Hikaye", "SEO", "E-posta Pazarlama", "Oyun Geliştirme", "Müzik"];

  const filteredPrompts = prompts.filter((prompt) => {
    const categoryMatch = categoryFilter === "all" || prompt.category === categoryFilter;
    const searchMatch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        prompt.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const handleCategoryChange = (category: string) => {
    setCategoryFilter(category);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleCreatePrompt = () => {
    if (promptText.trim() === "") {
      toast({
        title: "Uyarı",
        description: "Lütfen bir prompt metni girin.",
        variant: "destructive", // "warning" yerine "destructive" kullanıldı
      });
      return;
    }

    // Yeni prompt oluşturma mantığı burada olacak
    toast({
      title: "Başarılı",
      description: "Yeni prompt başarıyla oluşturuldu!",
    });
    setPromptText(""); // Inputu temizle
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopyalandı",
      description: "Prompt panoya kopyalandı!",
    });
  };

  const handleSavePrompt = (promptId: string) => {
    // Prompt kaydetme mantığı burada olacak
    toast({
      title: "Kaydedildi",
      description: "Prompt başarıyla kaydedildi!",
    });
  };

  const handleSharePrompt = (promptId: string) => {
    // Prompt paylaşma mantığı burada olacak
    toast({
      title: "Paylaşıldı",
      description: "Prompt başarıyla paylaşıldı!",
    });
  };

  const handleUpvote = (promptId: string) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((prompt) =>
        prompt.id === promptId ? { ...prompt, upvotes: prompt.upvotes + 1 } : prompt
      )
    );
    toast({
      title: "Oy Verildi",
      description: "Prompt'a yukarı oy verdiniz!",
    });
  };

  const handleDownvote = (promptId: string) => {
    setPrompts((prevPrompts) =>
      prevPrompts.map((prompt) =>
        prompt.id === promptId ? { ...prompt, downvotes: prompt.downvotes + 1 } : prompt
      )
    );
    toast({
      title: "Oy Verildi",
      description: "Prompt'a aşağı oy verdiniz!",
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
            {/* Sekme Başlıkları */}
            <TabsList>
              <TabsTrigger value="create">Oluştur</TabsTrigger>
              <TabsTrigger value="library">Kütüphane</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            </TabsList>
            
            {/* Prompt Oluşturucu Sekmesi */}
            <TabsContent value="create" className="space-y-4">
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Prompt Oluştur</CardTitle>
                  <CardDescription>
                    Yapay zeka modelleri için özel promptlar oluşturun
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Oluşturmak istediğiniz prompt'u buraya yazın..."
                    className="bg-[#252525] border-white/10 focus:border-[#00BFFF]/50"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                  />
                  <Button 
                    className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                    onClick={handleCreatePrompt}
                  >
                    Oluştur
                  </Button>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Prompt İpuçları</CardTitle>
                      <CardDescription>
                        Daha etkili promptlar oluşturmak için ipuçları
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2 text-white/70">
                        <li>
                          Açık ve net olun: Ne istediğinizi tam olarak belirtin.
                        </li>
                        <li>
                          Bağlam sağlayın: Modelin anlayabileceği bir çerçeve sunun.
                        </li>
                        <li>
                          Örnekler kullanın: İstenen çıktının nasıl olması gerektiğine dair örnekler verin.
                        </li>
                        <li>
                          Anahtar kelimeler ekleyin: İlgili terimleri kullanarak modelin odaklanmasına yardımcı olun.
                        </li>
                        <li>
                          Sınırları belirtin: Modelin ne yapmaması gerektiğini açıkça ifade edin.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Prompt Kategorileri</CardTitle>
                      <CardDescription>
                        Farklı kullanım alanlarına göre prompt örnekleri
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-white/70">
                        <li>Blog Yazıları</li>
                        <li>Sosyal Medya İçeriği</li>
                        <li>E-ticaret Ürün Açıklamaları</li>
                        <li>Reklam Metinleri</li>
                        <li>Senaryo ve Hikaye Yazımı</li>
                      </ul>
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
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Prompt Kütüphanesi</h2>
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Kategori Seçin" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Input
                type="search"
                placeholder="Prompt ara..."
                className="bg-[#252525] border-white/10 focus:border-[#00BFFF]/50"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              
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
                            <DropdownMenuItem className="hover:bg-white/5" onClick={() => handleCopyToClipboard(prompt.description)}>
                              <Copy className="h-4 w-4 mr-2" />
                              <span>Kopyala</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5" onClick={() => handleSavePrompt(prompt.id)}>
                              <Star className="h-4 w-4 mr-2" />
                              <span>Favorilere Ekle</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5" onClick={() => handleSharePrompt(prompt.id)}>
                              <Share className="h-4 w-4 mr-2" />
                              <span>Paylaş</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <CardTitle className="text-lg">{prompt.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 text-white/70">
                      {prompt.description}
                    </CardContent>
                    <CardFooter className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={prompt.author.avatar} alt={prompt.author.name} />
                          <AvatarFallback>{prompt.author.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span>{prompt.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" onClick={() => handleUpvote(prompt.id)}>
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{prompt.upvotes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDownvote(prompt.id)}>
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>{prompt.downvotes}</span>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filteredPrompts.length === 0 && (
                <div className="text-center text-white/70">
                  Aradığınız kriterlere uygun prompt bulunamadı.
                </div>
              )}
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
                            onClick={() => navigate("/prompt-generator/sell")}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Satışa Çıkar
                          </Button>
                          <p className="text-xs text-white/50 ml-4">
                            <Info className="h-3 w-3 inline mr-1" />
                            Komisyon oranı: %5
                          </p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Filter className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-[#252525] border-white/10">
                            <DropdownMenuItem className="hover:bg-white/5">
                              En Popüler
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5">
                              En Yeni
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5">
                              En Çok Satılan
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="bg-[#252525] border-white/10">
                          <CardHeader>
                            <CardTitle>Prompt Başlığı</CardTitle>
                            <CardDescription>Açıklama</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-white/70">
                              Fiyat: $9.99
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">Satın Al</Button>
                          </CardFooter>
                        </Card>
                        <Card className="bg-[#252525] border-white/10">
                          <CardHeader>
                            <CardTitle>Prompt Başlığı</CardTitle>
                            <CardDescription>Açıklama</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-white/70">
                              Fiyat: $14.99
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full">Satın Al</Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>Nasıl Çalışır?</CardTitle>
                      <CardDescription>
                        Prompt marketplace hakkında daha fazla bilgi edinin
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="list-disc pl-5 space-y-2 text-white/70">
                        <li>
                          Kendi promptlarınızı oluşturun ve satışa çıkarın.
                        </li>
                        <li>
                          Diğer kullanıcıların promptlarını keşfedin ve satın alın.
                        </li>
                        <li>
                          Geri bildirimler ile promptlarınızı geliştirin.
                        </li>
                        <li>
                          Yüksek kaliteli promptlar ile gelir elde edin.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <Card className="bg-[#1A1A1A] border-white/10">
                    <CardHeader>
                      <CardTitle>En Çok Satanlar</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                            <AvatarFallback>AD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Kullanıcı Adı
                            </p>
                            <p className="text-xs text-white/50">
                              Satış: 123
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Profili Gör</Button>
                      </div>
                      <Separator className="bg-white/10" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                            <AvatarFallback>AD</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              Kullanıcı Adı
                            </p>
                            <p className="text-xs text-white/50">
                              Satış: 98
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Profili Gör</Button>
                      </div>
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
                        onClick={() => navigate("/prompt-generator/sell")}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Satışa Başla
                      </Button>
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

export default PromptGenerator;
