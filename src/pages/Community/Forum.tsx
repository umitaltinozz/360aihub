
import React from 'react';
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle, Users, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Forum = () => {
  const popularTopics = [
    {
      id: 1,
      title: "Büyük Dil Modellerinde Türkçe Desteği",
      description: "Yapay zeka dil modellerinde Türkçe desteğinin geliştirilmesi hakkında tartışma",
      category: "Doğal Dil İşleme",
      author: "Mehmet Yılmaz",
      replies: 45,
      views: 874,
      lastUpdated: "3 saat önce",
      isSticky: true
    },
    {
      id: 2,
      title: "AIHUB360 API'leri ile Örnek Projeler",
      description: "AIHUB360 API'lerini kullanarak geliştirilen projelerin paylaşıldığı konu",
      category: "Projeler",
      author: "Ayşe Demir",
      replies: 32,
      views: 623,
      lastUpdated: "1 gün önce",
      isSticky: false
    },
    {
      id: 3,
      title: "Yapay Zekada Etik Konular",
      description: "Yapay zeka teknolojilerinin etik boyutları hakkında düşünceler ve tartışmalar",
      category: "Etik",
      author: "Prof. Dr. Ahmet Can",
      replies: 87,
      views: 1342,
      lastUpdated: "5 saat önce",
      isSticky: true
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Doğal Dil İşleme":
        return <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/50 font-medium">{category}</Badge>;
      case "Projeler":
        return <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/50 font-medium">{category}</Badge>;
      case "Etik":
        return <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/50 font-medium">{category}</Badge>;
      default:
        return <Badge variant="outline" className="text-white font-medium">{category}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Topbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Forum</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/70" />
              <Input
                placeholder="Konularda ara..."
                className="pl-8 bg-black/30 border-white/20"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white text-lg font-medium">
              Yapay zeka ile ilgili sorular sorun, bilgi paylaşın, tartışmalara katılın.
              AIHUB360 topluluğuyla etkileşimde bulunarak deneyimlerinizi zenginleştirin.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <a 
              href="/community/forum/new" 
              className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
            >
              Yeni Konu Aç
            </a>
          </div>

          <Tabs defaultValue="popular" className="mb-10">
            <TabsList className="mb-6 bg-black/40 border border-white/10">
              <TabsTrigger value="popular" className="data-[state=active]:bg-aihub-blue data-[state=active]:text-white">Popüler Konular</TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-aihub-blue data-[state=active]:text-white">Son Konular</TabsTrigger>
              <TabsTrigger value="unanswered" className="data-[state=active]:bg-aihub-blue data-[state=active]:text-white">Cevaplanmamış</TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular">
              <div className="space-y-4">
                {popularTopics.map((topic) => (
                  <Card key={topic.id} className="bg-black/40 border-white/20 transition-all hover:border-white/30 hover:bg-black/50">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(topic.category)}
                          {topic.isSticky && <Badge variant="warning" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/50">Sabit</Badge>}
                        </div>
                        <span className="text-sm text-white/70 font-medium">{topic.lastUpdated}</span>
                      </div>
                      <CardTitle className="text-xl text-white hover:text-aihub-blue transition-colors">
                        <a href={`/community/forum/topic/${topic.id}`}>{topic.title}</a>
                      </CardTitle>
                      <CardDescription className="text-white/80">{topic.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap justify-between items-center">
                        <div className="text-sm text-white/90 font-medium mb-2 sm:mb-0">
                          <span className="font-semibold text-white">Başlatan:</span> {topic.author}
                        </div>
                        
                        <div className="flex space-x-4 text-white/90 text-sm">
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2 text-aihub-blue" />
                            <span className="font-medium">{topic.replies} yanıt</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-aihub-blue" />
                            <span className="font-medium">{topic.views} görüntülenme</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="h-40 flex items-center justify-center">
                <p className="text-white font-medium">Diğer sekmelerin içeriği varsayılan sekmeye benzer olacaktır.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="unanswered">
              <div className="h-40 flex items-center justify-center">
                <p className="text-white font-medium">Diğer sekmelerin içeriği varsayılan sekmeye benzer olacaktır.</p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Kategoriler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="/community/forum/category/nlp" className="flex justify-between items-center text-white hover:text-aihub-blue transition-colors">
                  <span>Doğal Dil İşleme</span>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300">158</Badge>
                </a>
                <Separator className="bg-white/20" />
                <a href="/community/forum/category/computer-vision" className="flex justify-between items-center text-white hover:text-aihub-blue transition-colors">
                  <span>Bilgisayarlı Görü</span>
                  <Badge variant="outline" className="bg-green-500/10 text-green-300">97</Badge>
                </a>
                <Separator className="bg-white/20" />
                <a href="/community/forum/category/projects" className="flex justify-between items-center text-white hover:text-aihub-blue transition-colors">
                  <span>Projeler</span>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-300">126</Badge>
                </a>
                <Separator className="bg-white/20" />
                <a href="/community/forum/category/api" className="flex justify-between items-center text-white hover:text-aihub-blue transition-colors">
                  <span>API Kullanımı</span>
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-300">89</Badge>
                </a>
                <Separator className="bg-white/20" />
                <a href="/community/forum/category/ethics" className="flex justify-between items-center text-white hover:text-aihub-blue transition-colors">
                  <span>Etik Konular</span>
                  <Badge variant="outline" className="bg-red-500/10 text-red-300">74</Badge>
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">En Aktif Üyeler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-white">Ahmet Yılmaz</span>
                  </div>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-300">234 katkı</Badge>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-white">Ayşe Kaya</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-300">187 katkı</Badge>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-white">Mehmet Demir</span>
                  </div>
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-300">156 katkı</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border-white/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">Forum İstatistikleri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Toplam Konu:</span>
                  <span className="font-semibold text-white">1,245</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Toplam Yanıt:</span>
                  <span className="font-semibold text-white">8,732</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Üye Sayısı:</span>
                  <span className="font-semibold text-white">3,518</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Son 24 Saat:</span>
                  <span className="font-semibold text-white">128 yeni ileti</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Forum;
