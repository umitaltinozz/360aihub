
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Award, Tag, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Contribute = () => {
  const contributionAreas = [
    {
      id: 1,
      title: "API Örnekleri",
      description: "AIHUB360 API'lerini kullanan örnek kodlar ve uygulamalar geliştirin",
      difficulty: "Orta",
      impact: "Yüksek",
      links: [
        { label: "Katkı Rehberi", url: "/docs/contribution-guide" },
        { label: "API Belgeleri", url: "/docs/api" }
      ]
    },
    {
      id: 2,
      title: "Prompts Kütüphanesi",
      description: "Türkçe prompt'ların yer aldığı kütüphaneye katkıda bulunun",
      difficulty: "Kolay",
      impact: "Orta",
      links: [
        { label: "Prompt Rehberi", url: "/docs/prompt-guide" },
        { label: "Örnek Prompt'lar", url: "/resources/templates" }
      ]
    },
    {
      id: 3,
      title: "Veri Setleri",
      description: "Türkçe yapay zeka eğitimi için veri setleri oluşturun ve temizleyin",
      difficulty: "Zor",
      impact: "Çok Yüksek",
      links: [
        { label: "Veri Seti Hazırlama", url: "/docs/dataset-preparation" },
        { label: "Mevcut Veri Setleri", url: "/resources/datasets" }
      ]
    },
    {
      id: 4,
      title: "Belgelendirme",
      description: "Türkçe belgelendirmelerin iyileştirilmesine ve genişletilmesine yardımcı olun",
      difficulty: "Kolay",
      impact: "Yüksek",
      links: [
        { label: "Belgelendirme Rehberi", url: "/docs/documentation-guide" },
        { label: "Mevcut Belgeler", url: "/docs" }
      ]
    },
    {
      id: 5,
      title: "Eğitim İçerikleri",
      description: "Yapay zeka hakkında Türkçe eğitim içerikleri, video ve makaleler hazırlayın",
      difficulty: "Orta",
      impact: "Yüksek",
      links: [
        { label: "İçerik Rehberi", url: "/docs/content-guide" },
        { label: "Mevcut Eğitimler", url: "/tutorials" }
      ]
    },
    {
      id: 6,
      title: "Open Source Projeler",
      description: "AIHUB360 ile entegre olan açık kaynak projeler geliştirin",
      difficulty: "Zor",
      impact: "Çok Yüksek",
      links: [
        { label: "GitHub Projeleri", url: "https://github.com/aihub360" },
        { label: "Proje Şablonları", url: "/resources/templates" }
      ]
    }
  ];

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "Kolay":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{difficulty}</Badge>;
      case "Orta":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{difficulty}</Badge>;
      case "Zor":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">{difficulty}</Badge>;
      default:
        return <Badge variant="outline">{difficulty}</Badge>;
    }
  };

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "Yüksek":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{impact}</Badge>;
      case "Orta":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{impact}</Badge>;
      case "Çok Yüksek":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">{impact}</Badge>;
      default:
        return <Badge variant="outline">{impact}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 page-heading">Katkıda Bulunun</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              AIHUB360 topluluğuna katkıda bulunarak Türkiye'deki yapay zeka ekosisteminin gelişimine 
              destek olun. Aşağıdaki alanlarda katkıda bulunabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contributionAreas.map((area) => (
              <Card key={area.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex space-x-2">
                      {getDifficultyBadge(area.difficulty)}
                      {getImpactBadge(area.impact)}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="space-y-2">
                      {area.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          className="text-aihub-blue hover:underline flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <a 
                      href={`/community/contribute/${area.id}`} 
                      className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-center"
                    >
                      Bu Alanda Katkıda Bulun
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-12">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl">GitHub'da Katkıda Bulunun</CardTitle>
                <CardDescription>
                  AIHUB360'ın açık kaynak projelerine GitHub üzerinden katkıda bulunabilirsiniz.
                  Kodlama, belgelendirme ve hata bildirimleri ile projelere destek olun.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-10">
                    <Github className="h-24 w-24 text-white/80" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-white/80">
                      Açık kaynak projelerimize katkıda bulunmak için GitHub hesabınızla başlayın.
                      Pull request'ler, issue'lar ve code review'lar ile ekosisteme katkı sağlayabilirsiniz.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://github.com/aihub360" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                      >
                        GitHub Projelerimiz
                      </a>
                      <a 
                        href="/docs/github-contribution" 
                        className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/5 transition-colors"
                      >
                        Katkı Rehberi
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 mr-2 text-yellow-400" />
                  <CardTitle>Katkıda Bulunanlar Programı</CardTitle>
                </div>
                <CardDescription>
                  Düzenli katkıda bulunanlara özel ayrıcalıklar ve ödüller sunan programımıza katılın.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>API kredileri ve ek kullanım hakları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>Beta özelliklerine erken erişim</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>Topluluk etkinliklerinde tanınma ve ödüller</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>AIHUB360 Katkıda Bulunanlar sertifikası</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="/community/contributors-program" 
                    className="text-aihub-blue hover:underline flex items-center"
                  >
                    <span>Daha Fazla Bilgi</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Tag className="h-6 w-6 mr-2 text-blue-400" />
                  <CardTitle>Etkinlikler Düzenleyin</CardTitle>
                </div>
                <CardDescription>
                  Yapay zeka hackathon'ları, workshop'ları ve meetup'ları düzenleyerek topluluğa katkıda bulunun.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>Etkinlik organizasyonu için destek ve kaynak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>Online ve yüz yüze etkinlikler için platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>Konuşmacı ve eğitmen ağına erişim</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-aihub-blue mr-2">✓</span>
                    <span>Etkinlik tanıtımı ve katılımcı bulma desteği</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="/community/organize-event" 
                    className="text-aihub-blue hover:underline flex items-center"
                  >
                    <span>Etkinlik Düzenle</span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
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

export default Contribute;
