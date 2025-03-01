
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ThumbsUp, MessageCircle, Share2, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Showcase = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Türkçe Doğal Dil İşleme Asistanı",
      description: "Türkçe metinler için geliştirilmiş yapay zeka tabanlı doğal dil işleme asistanı",
      creator: "Ahmet Yılmaz",
      category: "NLP",
      likes: 342,
      comments: 56,
      image: "/placeholder.svg",
      isVerified: true
    },
    {
      id: 2,
      title: "AI Destekli Tıbbi Görüntü Analizi",
      description: "Tıbbi görüntüleri analiz ederek hastalıkları tespit eden yapay zeka modeli",
      creator: "Dr. Ayşe Kaya",
      category: "Sağlık",
      likes: 518,
      comments: 89,
      image: "/placeholder.svg",
      isVerified: true
    },
    {
      id: 3,
      title: "Akıllı Tarım Asistanı",
      description: "Tarım verilerini analiz ederek çiftçilere öneriler sunan yapay zeka uygulaması",
      creator: "Mehmet Demir",
      category: "Tarım",
      likes: 276,
      comments: 42,
      image: "/placeholder.svg",
      isVerified: false
    }
  ];

  const getAllProjects = () => {
    return [
      ...featuredProjects,
      {
        id: 4,
        title: "Eğitim İçeriği Oluşturucu",
        description: "Öğretmenler için otomatik eğitim içeriği oluşturan yapay zeka uygulaması",
        creator: "Zeynep Aydın",
        category: "Eğitim",
        likes: 215,
        comments: 38,
        image: "/placeholder.svg",
        isVerified: false
      },
      {
        id: 5,
        title: "Finansal Analiz Botu",
        description: "Finansal verileri analiz ederek yatırım önerileri sunan yapay zeka botu",
        creator: "Ali Yıldırım",
        category: "Finans",
        likes: 382,
        comments: 67,
        image: "/placeholder.svg",
        isVerified: false
      },
      {
        id: 6,
        title: "Türkçe Ses Asistanı",
        description: "Türkçe dil desteği ile geliştirilmiş akıllı ses asistanı",
        creator: "Cem Özcan",
        category: "Ses",
        likes: 298,
        comments: 45,
        image: "/placeholder.svg",
        isVerified: true
      }
    ];
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "NLP":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{category}</Badge>;
      case "Sağlık":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{category}</Badge>;
      case "Tarım":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{category}</Badge>;
      case "Eğitim":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{category}</Badge>;
      case "Finans":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">{category}</Badge>;
      case "Ses":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">{category}</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Proje Vitrini</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Projelerde ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              AIHUB360 topluluğunun geliştirdiği en etkileyici yapay zeka projeleri. İlham almak veya 
              kendi projelerinizi paylaşmak için vitrinimizi keşfedin.
            </p>
          </div>

          <Tabs defaultValue="featured" className="mb-10">
            <TabsList className="mb-6 bg-black/20">
              <TabsTrigger value="featured">Öne Çıkanlar</TabsTrigger>
              <TabsTrigger value="all">Tüm Projeler</TabsTrigger>
              <TabsTrigger value="verified">Doğrulanmış</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(project.category)}
                          {project.isVerified && <Badge variant="warning" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Doğrulanmış</Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="text-sm text-white/70">
                          <span className="font-medium">Geliştirici:</span> {project.creator}
                        </div>
                        
                        <div className="flex justify-between text-white/70 text-sm">
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            <span>{project.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            <span>{project.comments}</span>
                          </div>
                          <div className="flex items-center">
                            <Share2 className="h-4 w-4 mr-2" />
                            <span>Paylaş</span>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <a href={`/community/showcase/${project.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                          <span>Projeyi İncele</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getAllProjects().map((project) => (
                  <Card key={project.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(project.category)}
                          {project.isVerified && <Badge variant="warning" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Doğrulanmış</Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="text-sm text-white/70">
                          <span className="font-medium">Geliştirici:</span> {project.creator}
                        </div>
                        
                        <div className="flex justify-between text-white/70 text-sm">
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            <span>{project.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            <span>{project.comments}</span>
                          </div>
                          <div className="flex items-center">
                            <Share2 className="h-4 w-4 mr-2" />
                            <span>Paylaş</span>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <a href={`/community/showcase/${project.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                          <span>Projeyi İncele</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="verified">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getAllProjects().filter(p => p.isVerified).map((project) => (
                  <Card key={project.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(project.category)}
                          <Badge variant="warning" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Doğrulanmış</Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="text-sm text-white/70">
                          <span className="font-medium">Geliştirici:</span> {project.creator}
                        </div>
                        
                        <div className="flex justify-between text-white/70 text-sm">
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            <span>{project.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            <span>{project.comments}</span>
                          </div>
                          <div className="flex items-center">
                            <Share2 className="h-4 w-4 mr-2" />
                            <span>Paylaş</span>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <a href={`/community/showcase/${project.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                          <span>Projeyi İncele</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="p-6 bg-gradient-to-r from-blue-900/20 to-purple-700/10 rounded-lg border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">Projenizi Paylaşın</h2>
                <p className="text-white/80">
                  AIHUB360 API'lerini kullanarak geliştirdiğiniz projelerinizi toplulukla paylaşın. Beğeni 
                  toplayın, geri bildirim alın ve yapay zeka ekosisteminin büyümesine katkıda bulunun.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                  href="/community/showcase/submit" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Proje Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Showcase;
