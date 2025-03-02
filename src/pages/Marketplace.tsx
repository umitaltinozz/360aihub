import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Tag, 
  Filter, 
  Star, 
  ChevronRight, 
  ShoppingCart, 
  ShoppingBag, 
  Store, 
  CheckCircle2, 
  FileText, 
  BadgeCheck, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoryFilter from "@/components/CategoryFilter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Marketplace = () => {
  const { toast } = useToast();
  const [sellerInfoOpen, setSellerInfoOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const products = [
    {
      id: "1",
      name: "SEO Odaklı Blog Yazı Promptları",
      category: "SEO ve İçerik",
      price: 9.99,
      rating: 4.5,
      seller: "Yapay Zeka Uzmanı",
      image: "https://images.unsplash.com/photo-1587620962725-ead37c8b6fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["SEO", "Blog", "İçerik", "Prompt"]
    },
    {
      id: "2",
      name: "Profesyonel Logo Tasarım Şablonları",
      category: "Görsel Tasarım",
      price: 14.99,
      rating: 4.8,
      seller: "Grafik Tasarımcı",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tags: ["Logo", "Tasarım", "Şablon", "Grafik"]
    },
    {
      id: "3",
      name: "E-ticaret Pazarlama Stratejileri",
      category: "Pazarlama",
      price: 19.99,
      rating: 4.2,
      seller: "Pazarlama Gurusu",
      image: "https://images.unsplash.com/photo-1507883235614-69c940935544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBheGFybGFtYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      tags: ["E-ticaret", "Pazarlama", "Strateji"]
    },
    {
      id: "4",
      name: "Python ile Yapay Zeka Uygulamaları",
      category: "Kodlama ve Geliştirme",
      price: 24.99,
      rating: 4.9,
      seller: "Yapay Zeka Mühendisi",
      image: "https://images.unsplash.com/photo-1555905924-95071242f6ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHV0aG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["Python", "Yapay Zeka", "Kodlama"]
    },
    {
      id: "5",
      name: "Finansal Analiz Excel Şablonları",
      category: "İş ve Finans",
      price: 12.99,
      rating: 4.0,
      seller: "Finans Uzmanı",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tags: ["Finans", "Excel", "Şablon"]
    },
    {
      id: "6",
      name: "Sosyal Medya Yönetimi İçerik Takvimi",
      category: "Pazarlama",
      price: 7.99,
      rating: 4.6,
      seller: "Sosyal Medya Yöneticisi",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e4a0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tags: ["Sosyal Medya", "İçerik", "Takvim"]
    },
  ];
  
  const handleBecomeSellerClick = () => {
    setSellerInfoOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Marketplace</h1>
            <p className="text-white/70">
              Özel olarak hazırlanmış AI ürünlerini, şablonları ve diğer kaynakları keşfedin
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link to="/marketplace/checkout">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Sepet (0)
              </Button>
            </Link>
            <Button 
              onClick={handleBecomeSellerClick}
              className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
            >
              <Store className="h-4 w-4 mr-2" />
              Satıcı Olmak İstiyorum
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
              <Input
                type="text"
                placeholder="Ürün veya kategori ara..."
                className="pl-9 bg-[#252525] border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* Price Range Filter (Example) */}
            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader>
                <CardTitle>Fiyat Aralığı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Fiyat aralığına göre filtreleme özelliği yakında eklenecektir.
                </p>
              </CardContent>
            </Card>

            {/* Additional Filters */}
            <Button 
              variant="outline" 
              className="w-full border-white/10 hover:bg-white/5"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Ek Filtreler
            </Button>

            {isFilterOpen && (
              <Card className="bg-[#1A1A1A] border-white/10 mt-4">
                <CardContent>
                  <p className="text-white/70">
                    Ek filtreleme seçenekleri burada olacak (örneğin, derecelendirme, satış sayısı vb.).
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Öne Çıkan Ürünler</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                      Tümünü Gör
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Daha fazla ürün keşfet
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="bg-[#1A1A1A] border-white/10">
                  <CardHeader>
                    <Badge className="mb-2">{product.category}</Badge>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="aspect-video overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
                    <Link to={`/marketplace/${product.id}`}>
                      <Button size="sm" className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90">
                        İncele
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Become a Seller Dialog */}
        <Dialog open={sellerInfoOpen} onOpenChange={setSellerInfoOpen}>
          <DialogContent className="bg-[#1A1A1A] border-white/10 max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center text-xl">
                <Store className="h-5 w-5 mr-2 text-[#00BFFF]" />
                AIHUB360 Marketplace'te Satıcı Olun
              </DialogTitle>
              <DialogDescription>
                Bilgi ve uzmanlığınızı paraya çevirin, AI promptlarınızı ve içeriklerinizi satışa sunun
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 my-4">
              <div className="bg-[#252525] rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Satıcı Gereksinimleri</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Doğrulanmış Profil</h4>
                      <p className="text-sm text-white/70">
                        Geçerli bir e-posta adresi ve telefon numarası doğrulaması gereklidir.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <FileText className="h-5 w-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Satıcı Sözleşmesi</h4>
                      <p className="text-sm text-white/70">
                        Satıcı koşullarını ve şartlarını kabul etmeniz gerekir.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <BadgeCheck className="h-5 w-5 text-[#8A2BE2]" />
                    </div>
                    <div>
                      <h4 className="font-medium">Kalite Standartları</h4>
                      <p className="text-sm text-white/70">
                        Satışa sunduğunuz ürünler AIHUB360 kalite standartlarına uygun olmalıdır.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Tag className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Ödeme Bilgileri</h4>
                      <p className="text-sm text-white/70">
                        Ödemelerin yapılabilmesi için geçerli bir banka hesabı veya ödeme yöntemi gereklidir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#252525] rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Satıcı Avantajları</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#2A2A2A] p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <ShoppingBag className="h-4 w-4 mr-2 text-[#00BFFF]" />
                      Ek Gelir Kaynağı
                    </h4>
                    <p className="text-sm text-white/70 mt-1">
                      Uzmanlığınızı ve içeriklerinizi paraya çevirin
                    </p>
                  </div>
                  
                  <div className="bg-[#2A2A2A] p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-400" />
                      Geniş Kitle
                    </h4>
                    <p className="text-sm text-white/70 mt-1">
                      Binlerce potansiyel alıcıya erişim sağlayın
                    </p>
                  </div>
                  
                  <div className="bg-[#2A2A2A] p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-[#8A2BE2]" />
                      Marka Bilinirliği
                    </h4>
                    <p className="text-sm text-white/70 mt-1">
                      AI alanında uzman olarak tanınırlığınızı artırın
                    </p>
                  </div>
                  
                  <div className="bg-[#2A2A2A] p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-green-400" />
                      Düşük Komisyon
                    </h4>
                    <p className="text-sm text-white/70 mt-1">
                      Sektördeki en düşük komisyon oranlarından yararlanın
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-white/10" />
            
            <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full sm:w-auto" onClick={() => setSellerInfoOpen(false)}>
                Daha Sonra
              </Button>
              <Link to="/marketplace/sell" className="w-full sm:w-auto">
                <Button className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90 w-full">
                  Satıcı Olmak İstiyorum
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </>
  );
};

export default Marketplace;
