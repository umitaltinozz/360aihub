
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowUpDown, Edit, Trash2, Copy, MessageSquare, Clock, Tag } from "lucide-react";

const UserPrompts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Sample prompt data
  const prompts = [
    {
      id: 1,
      title: "SEO Makale Üretimi",
      content: "Aşağıdaki anahtar kelimeler için SEO uyumlu bir makale yaz: {keywords}. Makale en az 500 kelime olmalı, H2 ve H3 başlıklar içermeli.",
      category: "Content Writing",
      createdAt: "15.06.2024",
      usageCount: 24,
      isFavorite: true
    },
    {
      id: 2,
      title: "Ürün Açıklaması",
      content: "Aşağıdaki ürün için ikna edici ve SEO uyumlu bir e-ticaret ürün açıklaması oluştur: {product_name}. Özellikler, faydalar ve hedef kitle bilgilerini içermeli.",
      category: "E-commerce",
      createdAt: "10.06.2024",
      usageCount: 18,
      isFavorite: false
    },
    {
      id: 3,
      title: "Python Kod Açıklama",
      content: "Aşağıdaki Python kodunu satır satır analiz et ve ne yaptığını açıkla: {code}. Ayrıca kodun nasıl iyileştirilebileceğine dair öneriler sun.",
      category: "Programming",
      createdAt: "05.06.2024",
      usageCount: 12,
      isFavorite: true
    },
    {
      id: 4,
      title: "Sosyal Medya Gönderisi",
      content: "Aşağıdaki konu için 3 farklı stil ve uzunlukta Instagram gönderisi metni oluştur: {topic}. Hashtag önerileri de ekle.",
      category: "Social Media",
      createdAt: "02.06.2024",
      usageCount: 32,
      isFavorite: false
    },
    {
      id: 5,
      title: "Hizmet Şartları Özeti",
      content: "Aşağıdaki Hizmet Şartları dökümanını kısalt ve basitleştir, önemli noktaları madde madde çıkar: {terms}",
      category: "Legal",
      createdAt: "28.05.2024",
      usageCount: 7,
      isFavorite: false
    },
    {
      id: 6,
      title: "Veritabanı Sorgusu Optimizasyonu",
      content: "Aşağıdaki SQL sorgusunu analiz et ve performans için nasıl optimize edilebileceğini açıkla: {query}",
      category: "Programming",
      createdAt: "25.05.2024",
      usageCount: 9,
      isFavorite: true
    }
  ];
  
  // Get unique categories
  const categories = ["all", ...new Set(prompts.map(prompt => prompt.category))];
  
  // Filter prompts based on selected category
  const filteredPrompts = selectedCategory === "all" 
    ? prompts 
    : selectedCategory === "favorites" 
      ? prompts.filter(prompt => prompt.isFavorite)
      : prompts.filter(prompt => prompt.category === selectedCategory);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 page-heading">Kayıtlı Promptlarım</h1>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
            <Input placeholder="Prompt ara..." className="pl-8 bg-black/20 border-white/10" />
          </div>
          <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map(category => (
          <Badge 
            key={category} 
            variant={selectedCategory === category ? "default" : "outline"}
            className={selectedCategory !== category ? "cursor-pointer border-white/10 hover:bg-white/5" : "cursor-pointer"}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "all" ? "Tümü" : category}
          </Badge>
        ))}
        <Badge 
          variant={selectedCategory === "favorites" ? "default" : "outline"}
          className={selectedCategory !== "favorites" ? "cursor-pointer border-white/10 hover:bg-white/5" : "cursor-pointer"}
          onClick={() => setSelectedCategory("favorites")}
        >
          Favoriler
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPrompts.map(prompt => (
          <Card key={prompt.id} className="bg-black/30 border-white/10 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center justify-between">
                <span>{prompt.title}</span>
                {prompt.isFavorite && <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-400/20">Favori</Badge>}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Badge variant="outline" className="border-white/10">{prompt.category}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/30 p-3 rounded-md border border-white/5 max-h-32 overflow-y-auto">
                <p className="text-sm text-white/90 high-contrast-text">{prompt.content}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-white/70" />
                  <span className="text-white/80 high-contrast-text">Oluşturma:</span>
                </div>
                <div>{prompt.createdAt}</div>
                
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1 text-white/70" />
                  <span className="text-white/80 high-contrast-text">Kullanım:</span>
                </div>
                <div>{prompt.usageCount} kez</div>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <div className="flex justify-between items-center w-full">
                <div className="flex space-x-1">
                  <Button variant="outline" size="icon" className="h-8 w-8 border-white/10 hover:bg-white/5">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 border-white/10 hover:bg-white/5">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 border-white/10 hover:bg-red-900/20 text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="sm">Kullan</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserPrompts;
