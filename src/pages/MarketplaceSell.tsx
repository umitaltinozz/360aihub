
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Plus, 
  Upload, 
  Tag, 
  HelpCircle, 
  Check,
  AlertCircle,
  ChevronRight,
  Info,
  Image,
  FileText,
  FileCode,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Tag {
  id: string;
  name: string;
}

const MarketplaceSell = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [itemName, setItemName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [itemType, setItemType] = useState<string>("prompt");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  const categories = [
    "SEO ve İçerik",
    "Yaratıcı Yazı",
    "Görsel Tasarım",
    "Kodlama ve Geliştirme",
    "Pazarlama",
    "Eğitim",
    "İş ve Finans",
    "Diğer"
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleAddTag = () => {
    if (currentTag.trim() !== "" && !tags.some(tag => tag.name.toLowerCase() === currentTag.toLowerCase())) {
      setTags([...tags, { id: Date.now().toString(), name: currentTag.trim() }]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (id: string) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!itemName || !description || !category || !price) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm gerekli alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Başarılı",
        description: "Ürününüz incelemeye gönderildi.",
      });
      navigate("/dashboard/marketplace-items");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 py-8 mt-20">
        <div className="mb-6">
          <Link to="/marketplace" className="flex items-center text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Marketplace'e Dön
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ürün Oluştur ve Sat</h1>
            <p className="text-white/70">
              Yüksek kaliteli AI promptlarınızı, özelleştirmelerinizi ve içeriklerinizi AIHUB360 Marketplace'te satışa sunun
            </p>
          </div>
          <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Önizleme
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1A1A1A] border-white/10 max-w-3xl">
              <DialogHeader>
                <DialogTitle>Ürün Önizleme</DialogTitle>
                <DialogDescription>Satışa çıkaracağınız ürünün görünümü</DialogDescription>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                <div className="bg-[#252525] rounded-lg p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <Badge className="mb-2">{category || "Kategori"}</Badge>
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {tags.map(tag => (
                            <Badge key={tag.id} variant="outline" className="bg-[#303030]">
                              {tag.name}
                            </Badge>
                          ))}
                        </div>
                      )}
                      <h2 className="text-xl font-bold">{itemName || "Ürün Adı"}</h2>
                    </div>
                    <div className="text-lg font-bold">${Number(price || 0).toFixed(2)}</div>
                  </div>
                  <p className="text-white/80 mb-4">
                    {description || "Ürün açıklaması burada görünecek..."}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm text-white/70">Yeni Ürün</span>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                      size="sm"
                    >
                      Satın Al
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setPreviewOpen(false)} className="border-white/10 hover:bg-white/5">
                  Kapat
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader>
                <CardTitle>Ürün Bilgileri</CardTitle>
                <CardDescription>
                  Lütfen satacağınız ürünle ilgili ayrıntılı bilgileri girin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="item-type">Ürün Tipi</Label>
                      <Tabs defaultValue="prompt" onValueChange={setItemType} className="w-full">
                        <TabsList className="grid grid-cols-3 w-full">
                          <TabsTrigger value="prompt" className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Prompt
                          </TabsTrigger>
                          <TabsTrigger value="code" className="flex items-center gap-2">
                            <FileCode className="h-4 w-4" />
                            Kod
                          </TabsTrigger>
                          <TabsTrigger value="template" className="flex items-center gap-2">
                            <Image className="h-4 w-4" />
                            Şablon
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Ürün Adı</Label>
                      <Input
                        id="name"
                        placeholder="Örn: SEO Odaklı Blog Yazı Promptları"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="bg-[#252525] border-white/10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Açıklama</Label>
                      <Textarea
                        id="description"
                        placeholder="Ürününüzün ne işe yaradığını, özelliklerini ve avantajlarını açıklayın..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="min-h-32 bg-[#252525] border-white/10"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Kategori</Label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger id="category" className="bg-[#252525] border-white/10">
                            <SelectValue placeholder="Kategori seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#252525] border-white/10">
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="price">Fiyat (USD)</Label>
                        <Input
                          id="price"
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="bg-[#252525] border-white/10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Etiketler</Label>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Yeni etiket ekle..."
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddTag();
                            }
                          }}
                          className="bg-[#252525] border-white/10"
                        />
                        <Button 
                          type="button" 
                          onClick={handleAddTag}
                          variant="outline"
                          className="border-white/10 hover:bg-white/5"
                        >
                          <Plus className="h-4 w-4" />
                          Ekle
                        </Button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag) => (
                          <Badge key={tag.id} variant="outline" className="flex items-center gap-1 bg-[#252525]">
                            {tag.name}
                            <button 
                              type="button" 
                              onClick={() => handleRemoveTag(tag.id)}
                              className="ml-1 text-white/70 hover:text-white"
                            >
                              <ChevronRight className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Dosya Yükle</Label>
                      <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-white/40 mb-3" />
                        <p className="text-white/60 mb-4">
                          Dosyalarınızı sürükleyip bırakın veya aşağıdaki butonu kullanın
                        </p>
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <label htmlFor="file-upload">
                          <Button 
                            type="button" 
                            variant="outline"
                            className="border-white/10 hover:bg-white/5"
                            onClick={() => document.getElementById('file-upload')?.click()}
                          >
                            Dosya Seç
                          </Button>
                        </label>
                      </div>
                      
                      {files.length > 0 && (
                        <div className="mt-4 space-y-2">
                          <p className="text-sm font-medium">Yüklenen Dosyalar:</p>
                          <ul className="space-y-2">
                            {files.map((file, index) => (
                              <li key={index} className="flex justify-between items-center bg-[#252525] p-2 rounded">
                                <span className="truncate">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(index)}
                                  className="text-white/70 hover:text-red-500"
                                >
                                  <AlertCircle className="h-4 w-4" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2 pt-4">
                    <Button 
                      type="button"
                      variant="outline"
                      className="border-white/10 hover:bg-white/5"
                      onClick={() => navigate("/marketplace")}
                    >
                      İptal
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Gönderiliyor..." : "Satışa Çıkar"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader>
                <CardTitle>Satış Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-[#252525] rounded-lg">
                  <Info className="h-5 w-5 text-[#00BFFF]" />
                  <div>
                    <p className="text-sm">Komisyon Oranı:</p>
                    <p className="font-medium">%5</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#252525] rounded-lg">
                  <Tag className="h-5 w-5 text-[#00BFFF]" />
                  <div>
                    <p className="text-sm">Minimum Fiyat:</p>
                    <p className="font-medium">$4.99</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#252525] rounded-lg">
                  <Check className="h-5 w-5 text-[#00BFFF]" />
                  <div>
                    <p className="text-sm">Onay Süreci:</p>
                    <p className="text-xs text-white/70">24-48 saat içinde incelenir</p>
                  </div>
                </div>

                <Separator className="bg-white/10 my-2" />

                <div>
                  <p className="text-sm font-medium mb-2">Fiyatlandırma Önerileri:</p>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-1" />
                      Basit promptlar: $4.99 - $9.99
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-1" />
                      Kapsamlı paketler: $14.99 - $29.99
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3 w-3 text-green-500 mr-1" />
                      Özel çözümler: $39.99+
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader>
                <CardTitle>Satış İpuçları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <p className="text-sm font-medium">Detaylı Açıklama Yazın</p>
                  </div>
                  <p className="text-xs text-white/70 pl-6">
                    Ürününüzün ne işe yaradığını, hangi sorunu çözdüğünü ve nasıl kullanılacağını açıkça belirtin.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <p className="text-sm font-medium">Doğru Etiketler Kullanın</p>
                  </div>
                  <p className="text-xs text-white/70 pl-6">
                    İlgili anahtar kelimeleri ve etiketleri kullanarak ürününüzün daha kolay bulunmasını sağlayın.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <p className="text-sm font-medium">Örnek Sonuçlar Gösterin</p>
                  </div>
                  <p className="text-xs text-white/70 pl-6">
                    Promptlarınızla elde edilebilecek sonuçlardan örnekler paylaşın. Görselleştirmeler her zaman dikkat çeker.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <p className="text-sm font-medium">Düzenli Güncellemeler Yapın</p>
                  </div>
                  <p className="text-xs text-white/70 pl-6">
                    Ürününüzü güncel tutun ve alıcılardan gelen geri bildirimlere göre iyileştirmeler yapın.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#00BFFF]/20 to-[#8A2BE2]/20 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-[#00BFFF] mr-2" />
                  Yardıma mı ihtiyacınız var?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm mb-4">
                  Satış süreciyle ilgili sorularınız varsa, destek ekibimizle iletişime geçebilirsiniz.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-white/10 hover:bg-white/5"
                >
                  Destek Talebi Oluştur
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketplaceSell;
