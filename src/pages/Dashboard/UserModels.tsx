
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ArrowUpDown, Settings, Star, Clock, Zap, Settings2 } from "lucide-react";

const UserModels = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Sample model data
  const models = [
    {
      id: 1,
      name: "GPT-4 Turbo",
      description: "OpenAI tarafından geliştirilen en güçlü dil modeli",
      purchaseDate: "12.05.2024",
      accessUntil: "12.05.2025",
      usageCount: 1245,
      tags: ["NLP", "Text Generation"],
      status: "active"
    },
    {
      id: 2,
      name: "Claude 3 Opus",
      description: "Anthropic'in en yüksek kapasiteli asistan modeli",
      purchaseDate: "03.04.2024",
      accessUntil: "03.04.2025",
      usageCount: 780,
      tags: ["Assistan", "Document Analysis"],
      status: "active"
    },
    {
      id: 3,
      name: "Stable Diffusion XL",
      description: "Yüksek kaliteli görsel üretim modeli",
      purchaseDate: "18.01.2024",
      accessUntil: "18.01.2025",
      usageCount: 456,
      tags: ["Image Generation", "Creative"],
      status: "active"
    },
    {
      id: 4,
      name: "Whisper Large",
      description: "Gelişmiş konuşma tanıma ve çeviri modeli",
      purchaseDate: "22.02.2024",
      accessUntil: "22.02.2025",
      usageCount: 123,
      tags: ["Speech Recognition", "Translation"],
      status: "active"
    },
    {
      id: 5,
      name: "DALL-E 3",
      description: "Metin komutlarından detaylı resim üreten AI modeli",
      purchaseDate: "05.03.2024",
      accessUntil: "05.03.2025",
      usageCount: 238,
      tags: ["Image Generation", "Creative"],
      status: "active"
    },
    {
      id: 6,
      name: "Gemini Pro",
      description: "Google'ın gelişmiş multimodal AI modeli",
      purchaseDate: "10.04.2024",
      accessUntil: "10.07.2024",
      usageCount: 89,
      tags: ["Multimodal", "Text Generation"],
      status: "expiring"
    }
  ];
  
  // Filter models based on selected tab
  const filteredModels = selectedTab === "all" 
    ? models 
    : selectedTab === "expiring" 
      ? models.filter(model => model.status === "expiring")
      : models.filter(model => model.tags.includes(selectedTab));
      
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 page-heading">Modellerim</h1>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
            <Input placeholder="Model ara..." className="pl-8 bg-black/20 border-white/10" />
          </div>
          <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full border-b border-white/10 bg-transparent overflow-x-auto flex-wrap">
          <TabsTrigger value="all" className="data-[state=active]:bg-white/5">Tüm Modeller</TabsTrigger>
          <TabsTrigger value="NLP" className="data-[state=active]:bg-white/5">NLP</TabsTrigger>
          <TabsTrigger value="Image Generation" className="data-[state=active]:bg-white/5">Görsel Üretimi</TabsTrigger>
          <TabsTrigger value="Multimodal" className="data-[state=active]:bg-white/5">Multimodal</TabsTrigger>
          <TabsTrigger value="Speech Recognition" className="data-[state=active]:bg-white/5">Ses Tanıma</TabsTrigger>
          <TabsTrigger value="expiring" className="data-[state=active]:bg-white/5">Yakında Sona Erecek</TabsTrigger>
        </TabsList>
        
        <TabsContent value={selectedTab} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredModels.map(model => (
              <Card key={model.id} className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    {model.status === "expiring" && (
                      <Badge variant="outline" className="bg-amber-500/20 text-amber-400 border-amber-400/20">
                        Yakında Sona Erecek
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2">{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-white/70" />
                      <span className="text-white/80 high-contrast-text">Satın Alma:</span>
                    </div>
                    <div>{model.purchaseDate}</div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-white/70" />
                      <span className="text-white/80 high-contrast-text">Erişim:</span>
                    </div>
                    <div>{model.accessUntil}</div>
                    
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-1 text-white/70" />
                      <span className="text-white/80 high-contrast-text">Kullanım:</span>
                    </div>
                    <div>{model.usageCount} istek</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {model.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex justify-between items-center w-full">
                    <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                      <Settings2 className="h-4 w-4 mr-1" /> Ayarlar
                    </Button>
                    <Button size="sm">Kullan</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserModels;
