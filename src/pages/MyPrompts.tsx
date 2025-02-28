
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Star,
  MessageSquare,
  Edit,
  Trash2,
  Copy,
  Share,
  ChevronDown,
  Clock,
  Tag,
  CheckCircle,
  Info
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sahte prompt verileri
const myPrompts = [
  {
    id: "p1",
    title: "SEO Blog Yazısı",
    prompt: "Aşağıdaki konuda, SEO dostu, Google'ın ilk sayfa sonuçlarında çıkabilecek bir blog yazısı oluştur...",
    tags: ["SEO", "Blog", "İçerik"],
    model: "GPT-4",
    lastUsed: "2 gün önce",
    createdAt: "15.05.2024",
    isFavorite: true,
    isPublished: false
  },
  {
    id: "p2",
    title: "Full-Stack Web Projesi",
    prompt: "Ben bir [PROJE TÜRÜ] web uygulaması geliştirmek istiyorum. Frontend için React, backend için Node.js/Express kullanacağım...",
    tags: ["Kod", "Web Geliştirme", "Full-Stack"],
    model: "GPT-4",
    lastUsed: "4 gün önce",
    createdAt: "10.05.2024",
    isFavorite: false,
    isPublished: true
  },
  {
    id: "p3",
    title: "Fantasy Karakter İllüstrasyonu",
    prompt: "Create a detailed fantasy character illustration of a [CHARACTER TYPE] with [DISTINCTIVE FEATURE]...",
    tags: ["Görsel", "Fantastik", "Karakter"],
    model: "Stable Diffusion 3",
    lastUsed: "1 hafta önce",
    createdAt: "05.05.2024",
    isFavorite: true,
    isPublished: true
  },
  {
    id: "p4",
    title: "E-Ticaret Ürün Açıklaması",
    prompt: "Aşağıdaki ürün için satış odaklı, ikna edici, müşterinin ilgisini çekecek ve SEO dostu bir ürün açıklaması...",
    tags: ["E-Ticaret", "Pazarlama", "Satış"],
    model: "GPT-3.5",
    lastUsed: "3 gün önce",
    createdAt: "12.05.2024",
    isFavorite: false,
    isPublished: false
  },
  {
    id: "p5",
    title: "API Geliştirme",
    prompt: "Bir [SERVIS TÜRÜ] API servisi geliştirmek istiyorum. Servis, aşağıdaki temel fonksiyonları desteklemeli...",
    tags: ["Kod", "API", "Backend"],
    model: "Claude 3",
    lastUsed: "6 gün önce",
    createdAt: "07.05.2024",
    isFavorite: false,
    isPublished: false
  }
];

// Filtreleme kategorileri
const categories = ["Tümü", "SEO", "Kod", "İçerik", "Görsel", "Pazarlama"];

const MyPrompts = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Durum Yönetimi
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filterPublished, setFilterPublished] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState<any>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [promptToDelete, setPromptToDelete] = useState<string | null>(null);
  
  // Prompt filtreleme
  const filteredPrompts = myPrompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "Tümü" || 
                           prompt.tags.some(tag => tag === selectedCategory);
    
    const matchesFavorites = !filterFavorites || prompt.isFavorite;
    
    const matchesPublished = !filterPublished || prompt.isPublished;
    
    return matchesSearch && matchesCategory && matchesFavorites && matchesPublished;
  });
  
  // Prompt düzenleme
  const handleEditPrompt = (prompt: any) => {
    setEditingPrompt({...prompt});
  };
  
  // Prompt düzenlemeyi kaydet
  const handleSaveEdit = () => {
    // Gerçek uygulamada burada API çağrısı yapılır
    
    toast({
      title: "Prompt Güncellendi",
      description: "Promptunuz başarıyla güncellendi.",
    });
    
    setEditingPrompt(null);
  };
  
  // Prompt silme dialog'u
  const handleDeletePrompt = (promptId: string) => {
    setPromptToDelete(promptId);
    setIsDeleteDialogOpen(true);
  };
  
  // Prompt silme onayı
  const confirmDelete = () => {
    // Gerçek uygulamada burada API çağrısı yapılır
    
    toast({
      title: "Prompt Silindi",
      description: "Promptunuz başarıyla silindi.",
    });
    
    setIsDeleteDialogOpen(false);
    setPromptToDelete(null);
  };
  
  // Marketplace'de yayınla
  const publishToMarketplace = (promptId: string) => {
    // Gerçek uygulamada burada API çağrısı yapılır
    
    toast({
      title: "Marketplace'de Yayınlandı",
      description: "Promptunuz Marketplace'de yayınlandı.",
    });
  };
  
  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gradient">Promptlarım</h1>
              <p className="text-white/70 mt-2">
                Oluşturduğunuz ve kaydettiğiniz tüm promptları yönetin
              </p>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
              onClick={() => navigate("/prompt-generator")}
            >
              <Plus className="h-4 w-4 mr-2" />
              Yeni Prompt Oluştur
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
              <Input
                placeholder="Prompt ara..."
                className="pl-9 bg-[#252525] border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[180px] bg-[#252525] border-white/10">
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
            
            <Button
              variant="outline"
              className={`w-full md:w-auto border-white/10 ${filterFavorites ? 'bg-amber-500/20 text-amber-500' : 'hover:bg-white/5'}`}
              onClick={() => setFilterFavorites(!filterFavorites)}
            >
              <Star className={`h-4 w-4 mr-2 ${filterFavorites ? 'fill-amber-500' : ''}`} />
              Favoriler
            </Button>
            
            <Button
              variant="outline"
              className={`w-full md:w-auto border-white/10 ${filterPublished ? 'bg-green-500/20 text-green-500' : 'hover:bg-white/5'}`}
              onClick={() => setFilterPublished(!filterPublished)}
            >
              <Share className="h-4 w-4 mr-2" />
              Yayınlananlar
            </Button>
          </div>
          
          <div className="space-y-4">
            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Prompt Kütüphanem ({filteredPrompts.length})</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                        <Filter className="h-4 w-4 mr-2" />
                        Sırala
                        <ChevronDown className="h-4 w-4 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#252525] border-white/10">
                      <DropdownMenuItem className="hover:bg-white/5">
                        En Son Oluşturulan
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-white/5">
                        En Son Kullanılan
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-white/5">
                        İsme Göre (A-Z)
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                {filteredPrompts.length > 0 ? (
                  <div className="space-y-4">
                    {filteredPrompts.map((prompt) => (
                      <Card key={prompt.id} className="bg-[#252525] border-white/10 hover:bg-[#303030] transition-colors">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex items-start gap-3">
                              <div>
                                <MessageSquare className="h-6 w-6 text-[#00BFFF]" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h3 className="font-medium">{prompt.title}</h3>
                                  {prompt.isFavorite && (
                                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                                  )}
                                  {prompt.isPublished && (
                                    <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/30">
                                      Yayında
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline" className="bg-white/5">
                                    {prompt.model}
                                  </Badge>
                                  <p className="text-xs text-white/60">
                                    <Clock className="h-3 w-3 inline mr-1" />
                                    {prompt.lastUsed}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0 text-white/60 hover:text-white hover:bg-white/10"
                                onClick={() => handleEditPrompt(prompt)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0 text-white/60 hover:text-red-500 hover:bg-red-500/10"
                                onClick={() => handleDeletePrompt(prompt.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-white/70 line-clamp-2">{prompt.prompt}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {prompt.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="bg-[#303030]">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 flex justify-between">
                          <p className="text-xs text-white/50">
                            Oluşturulma: {prompt.createdAt}
                          </p>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 border-white/10 hover:bg-white/5"
                              onClick={() => {
                                navigator.clipboard.writeText(prompt.prompt);
                                toast({
                                  title: "Kopyalandı",
                                  description: "Prompt panoya kopyalandı.",
                                });
                              }}
                            >
                              <Copy className="h-4 w-4 mr-2" />
                              Kopyala
                            </Button>
                            {!prompt.isPublished ? (
                              <Button 
                                size="sm" 
                                className="h-8 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                                onClick={() => publishToMarketplace(prompt.id)}
                              >
                                <Share className="h-4 w-4 mr-2" />
                                Paylaş
                              </Button>
                            ) : (
                              <Button 
                                size="sm"
                                variant="outline" 
                                className="h-8 border-white/10 hover:bg-white/5"
                              >
                                <Tag className="h-4 w-4 mr-2" />
                                Satışta
                              </Button>
                            )}
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 mx-auto text-white/20 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Hiç prompt bulunamadı</h3>
                    <p className="text-white/60 max-w-md mx-auto mb-6">
                      Arama kriterlerinize uygun bir prompt bulunamadı. Filtreleri temizlemeyi veya yeni bir prompt oluşturmayı deneyin.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                      onClick={() => navigate("/prompt-generator")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Yeni Prompt Oluştur
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-[#00BFFF] mr-2" />
                  Promptlarınızı Monetize Edin
                </CardTitle>
                <CardDescription>
                  Kaliteli promptlarınızı Marketplace'de satarak gelir elde edebilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#252525] rounded-md text-center space-y-3">
                    <div className="bg-amber-500/20 text-amber-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <Tag className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium">Fiyatlandırın</h3>
                    <p className="text-sm text-white/70">Promptlarınıza değerlerine göre fiyat belirleyin</p>
                  </div>
                  <div className="p-4 bg-[#252525] rounded-md text-center space-y-3">
                    <div className="bg-green-500/20 text-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <Share className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium">Yayınlayın</h3>
                    <p className="text-sm text-white/70">Marketplace'de yayınlayarak tüm kullanıcılara ulaşın</p>
                  </div>
                  <div className="p-4 bg-[#252525] rounded-md text-center space-y-3">
                    <div className="bg-purple-500/20 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium">Kazanın</h3>
                    <p className="text-sm text-white/70">Her satış sonrası direkt gelir elde edin</p>
                  </div>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="flex justify-end">
                  <Button
                    onClick={() => navigate("/marketplace")}
                    className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                  >
                    Marketplace'i Keşfet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Düzenleme Modalı */}
      {editingPrompt && (
        <Dialog open={!!editingPrompt} onOpenChange={() => setEditingPrompt(null)}>
          <DialogContent className="bg-[#1A1A1A] border-white/10 max-w-2xl">
            <DialogHeader>
              <DialogTitle>Prompt Düzenle</DialogTitle>
              <DialogDescription>
                Promptunuzu düzenleyin ve kaydedin.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Başlık
                </label>
                <Input
                  id="title"
                  value={editingPrompt.title}
                  onChange={(e) => setEditingPrompt({...editingPrompt, title: e.target.value})}
                  className="bg-[#252525] border-white/10"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">
                  Prompt
                </label>
                <Textarea
                  id="prompt"
                  value={editingPrompt.prompt}
                  onChange={(e) => setEditingPrompt({...editingPrompt, prompt: e.target.value})}
                  className="min-h-32 bg-[#252525] border-white/10"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="tags" className="text-sm font-medium">
                  Etiketler
                </label>
                <Input
                  id="tags"
                  value={editingPrompt.tags.join(", ")}
                  onChange={(e) => setEditingPrompt({...editingPrompt, tags: e.target.value.split(", ")})}
                  className="bg-[#252525] border-white/10"
                  placeholder="Etiketleri virgülle ayırın"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="model" className="text-sm font-medium">
                  Model
                </label>
                <Select
                  value={editingPrompt.model}
                  onValueChange={(value) => setEditingPrompt({...editingPrompt, model: value})}
                >
                  <SelectTrigger id="model" className="bg-[#252525] border-white/10">
                    <SelectValue placeholder="Model seçin" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    <SelectItem value="GPT-4">GPT-4</SelectItem>
                    <SelectItem value="GPT-3.5">GPT-3.5</SelectItem>
                    <SelectItem value="Claude 3">Claude 3</SelectItem>
                    <SelectItem value="Stable Diffusion 3">Stable Diffusion 3</SelectItem>
                    <SelectItem value="Midjourney">Midjourney</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="favorite"
                  checked={editingPrompt.isFavorite}
                  onChange={(e) => setEditingPrompt({...editingPrompt, isFavorite: e.target.checked})}
                  className="rounded bg-[#252525] border-white/10"
                />
                <label htmlFor="favorite" className="text-sm font-medium cursor-pointer">
                  <Star className={`h-4 w-4 inline mr-2 ${editingPrompt.isFavorite ? 'fill-amber-500 text-amber-500' : 'text-white/60'}`} />
                  Favorilere Ekle
                </label>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setEditingPrompt(null)}
                className="border-white/10 hover:bg-white/5"
              >
                İptal
              </Button>
              <Button
                onClick={handleSaveEdit}
                className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
              >
                Değişiklikleri Kaydet
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Silme Onay Modalı */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="bg-[#1A1A1A] border-white/10 max-w-md">
          <DialogHeader>
            <DialogTitle>Promptu Sil</DialogTitle>
            <DialogDescription>
              Bu promptu silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="border-white/10 hover:bg-white/5"
            >
              İptal
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
            >
              Sil
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default MyPrompts;
