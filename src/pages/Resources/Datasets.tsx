
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Download, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Datasets = () => {
  const datasets = [
    {
      id: 1,
      title: "Türkçe Soru-Cevap",
      description: "Yapay zeka eğitimi için 10,000+ Türkçe soru-cevap çifti içeren veri seti",
      category: "Doğal Dil İşleme",
      size: "1.2 GB",
      downloads: "3,456",
      lastUpdated: "2 ay önce",
      license: "MIT"
    },
    {
      id: 2,
      title: "Türkçe Duygusal Metinler",
      description: "Duygu analizi için etiketlenmiş 50,000+ Türkçe metin içeren veri seti",
      category: "Duygu Analizi",
      size: "850 MB",
      downloads: "2,813",
      lastUpdated: "3 ay önce",
      license: "CC-BY-4.0"
    },
    {
      id: 3,
      title: "Türkçe Haber Metinleri",
      description: "NLP modelleri için 100,000+ Türkçe haber metni içeren veri seti",
      category: "Doğal Dil İşleme",
      size: "3.5 GB",
      downloads: "5,124",
      lastUpdated: "1 ay önce",
      license: "MIT"
    },
    {
      id: 4,
      title: "Türkçe Görüntü Sınıflandırma",
      description: "Türkiye'ye özgü nesnelerin bulunduğu etiketlenmiş 50,000+ görüntü",
      category: "Bilgisayarlı Görü",
      size: "5.8 GB",
      downloads: "1,945",
      lastUpdated: "4 ay önce",
      license: "CC-BY-4.0"
    },
    {
      id: 5,
      title: "Türkçe Konuşma Kayıtları",
      description: "Konuşma tanıma için 500+ saatlik etiketlenmiş Türkçe ses kaydı",
      category: "Konuşma Tanıma",
      size: "12 GB",
      downloads: "1,256",
      lastUpdated: "5 ay önce",
      license: "Apache 2.0"
    },
    {
      id: 6,
      title: "Türkçe Tweet Duygu Analizi",
      description: "Sosyal medya duygu analizi için etiketlenmiş 1 milyon+ Türkçe tweet",
      category: "Duygu Analizi",
      size: "2.3 GB",
      downloads: "3,712",
      lastUpdated: "3 ay önce",
      license: "CC-BY-NC-4.0"
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Doğal Dil İşleme":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{category}</Badge>;
      case "Duygu Analizi":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{category}</Badge>;
      case "Bilgisayarlı Görü":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{category}</Badge>;
      case "Konuşma Tanıma":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{category}</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };

  const getLicenseBadge = (license: string) => {
    switch (license) {
      case "MIT":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{license}</Badge>;
      case "CC-BY-4.0":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{license}</Badge>;
      case "Apache 2.0":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{license}</Badge>;
      case "CC-BY-NC-4.0":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{license}</Badge>;
      default:
        return <Badge variant="outline">{license}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Veri Setleri</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Veri setlerinde ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              Yapay zeka modellerinizi eğitmek ve test etmek için Türkçe veri setleri. 
              Bu veri setleri çeşitli yapay zeka uygulamaları için optimize edilmiştir.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="mb-6 bg-black/20">
              <TabsTrigger value="all">Tüm Veri Setleri</TabsTrigger>
              <TabsTrigger value="nlp">Doğal Dil İşleme</TabsTrigger>
              <TabsTrigger value="vision">Bilgisayarlı Görü</TabsTrigger>
              <TabsTrigger value="audio">Ses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datasets.map((dataset) => (
                  <Card key={dataset.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(dataset.category)}
                          {getLicenseBadge(dataset.license)}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{dataset.title}</CardTitle>
                      <CardDescription>{dataset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Boyut:</span>
                            <span>{dataset.size}</span>
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            <span>{dataset.downloads}</span>
                          </div>
                        </div>
                        <div className="text-white/70 text-sm">
                          <span className="font-medium mr-2">Son Güncelleme:</span>
                          <span>{dataset.lastUpdated}</span>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-between items-center">
                          <a href={`/resources/datasets/${dataset.id}`} className="text-aihub-blue hover:underline">
                            Detayları Görüntüle
                          </a>
                          <a 
                            href={`/resources/datasets/${dataset.id}/download`}
                            className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            İndir
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nlp">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datasets.filter(d => d.category === "Doğal Dil İşleme" || d.category === "Duygu Analizi").map((dataset) => (
                  <Card key={dataset.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(dataset.category)}
                          {getLicenseBadge(dataset.license)}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{dataset.title}</CardTitle>
                      <CardDescription>{dataset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Boyut:</span>
                            <span>{dataset.size}</span>
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            <span>{dataset.downloads}</span>
                          </div>
                        </div>
                        <div className="text-white/70 text-sm">
                          <span className="font-medium mr-2">Son Güncelleme:</span>
                          <span>{dataset.lastUpdated}</span>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-between items-center">
                          <a href={`/resources/datasets/${dataset.id}`} className="text-aihub-blue hover:underline">
                            Detayları Görüntüle
                          </a>
                          <a 
                            href={`/resources/datasets/${dataset.id}/download`}
                            className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            İndir
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vision">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datasets.filter(d => d.category === "Bilgisayarlı Görü").map((dataset) => (
                  <Card key={dataset.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(dataset.category)}
                          {getLicenseBadge(dataset.license)}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{dataset.title}</CardTitle>
                      <CardDescription>{dataset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Boyut:</span>
                            <span>{dataset.size}</span>
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            <span>{dataset.downloads}</span>
                          </div>
                        </div>
                        <div className="text-white/70 text-sm">
                          <span className="font-medium mr-2">Son Güncelleme:</span>
                          <span>{dataset.lastUpdated}</span>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-between items-center">
                          <a href={`/resources/datasets/${dataset.id}`} className="text-aihub-blue hover:underline">
                            Detayları Görüntüle
                          </a>
                          <a 
                            href={`/resources/datasets/${dataset.id}/download`}
                            className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            İndir
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="audio">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datasets.filter(d => d.category === "Konuşma Tanıma").map((dataset) => (
                  <Card key={dataset.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(dataset.category)}
                          {getLicenseBadge(dataset.license)}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{dataset.title}</CardTitle>
                      <CardDescription>{dataset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Boyut:</span>
                            <span>{dataset.size}</span>
                          </div>
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            <span>{dataset.downloads}</span>
                          </div>
                        </div>
                        <div className="text-white/70 text-sm">
                          <span className="font-medium mr-2">Son Güncelleme:</span>
                          <span>{dataset.lastUpdated}</span>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-between items-center">
                          <a href={`/resources/datasets/${dataset.id}`} className="text-aihub-blue hover:underline">
                            Detayları Görüntüle
                          </a>
                          <a 
                            href={`/resources/datasets/${dataset.id}/download`}
                            className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            İndir
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-900/20 to-purple-700/10 rounded-lg border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-blue-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kendi Veri Setinizi Paylaşın</h3>
                <p className="text-white/80">
                  Oluşturduğunuz veya geliştirdiğiniz veri setlerini toplulukla paylaşarak yapay zeka 
                  ekosisteminin gelişmesine katkıda bulunabilirsiniz. Veri setinizi göndermek için formu doldurun.
                </p>
                <div className="mt-4">
                  <a 
                    href="/resources/datasets/submit" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity inline-block"
                  >
                    Veri Seti Gönder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Datasets;
