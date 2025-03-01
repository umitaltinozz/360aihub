
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, FileText, Clock, Calendar, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Guides = () => {
  const guides = [
    {
      id: 1,
      title: "Başlangıç Kılavuzu: AIHUB360 Platformuna Giriş",
      description: "AIHUB360 platformunun temel özelliklerini ve kullanımını öğrenin",
      category: "Başlangıç",
      readTime: "10 dakika",
      date: "15 Mart 2023",
      isNew: true
    },
    {
      id: 2,
      title: "API Anahtarlarını Yönetme",
      description: "API anahtarlarınızı oluşturma, güncelleme ve güvenli bir şekilde saklama",
      category: "API",
      readTime: "8 dakika",
      date: "22 Mart 2023",
      isNew: false
    },
    {
      id: 3,
      title: "Metin Tamamlama API'sini Kullanma",
      description: "Text completion API'sini projelerinize entegre etmek için adım adım kılavuz",
      category: "API",
      readTime: "15 dakika",
      date: "5 Nisan 2023",
      isNew: false
    },
    {
      id: 4,
      title: "Görüntü Oluşturma Modelleri",
      description: "Görüntü oluşturma modellerini etkili bir şekilde kullanma teknikleri",
      category: "Görüntü",
      readTime: "12 dakika",
      date: "18 Nisan 2023",
      isNew: false
    },
    {
      id: 5,
      title: "Prompt Mühendisliği İlkeleri",
      description: "Daha iyi sonuçlar için prompt mühendisliği teknikleri ve örnekleri",
      category: "Prompt",
      readTime: "20 dakika",
      date: "2 Mayıs 2023",
      isNew: true
    },
    {
      id: 6,
      title: "Python SDK Kullanım Kılavuzu",
      description: "Python SDK'sını projelerinize entegre etmenin kapsamlı rehberi",
      category: "SDK",
      readTime: "18 dakika",
      date: "14 Mayıs 2023",
      isNew: false
    },
    {
      id: 7,
      title: "Modelleri Fine-tuning ile Özelleştirme",
      description: "Kendi veri setlerinizle modelleri özelleştirme ve performansı artırma",
      category: "Model",
      readTime: "25 dakika",
      date: "28 Mayıs 2023",
      isNew: true
    },
    {
      id: 8,
      title: "JavaScript ile Entegrasyon",
      description: "Web uygulamalarınıza AIHUB360 servislerini entegre etme",
      category: "Entegrasyon",
      readTime: "15 dakika",
      date: "10 Haziran 2023",
      isNew: false
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Başlangıç":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">Başlangıç</Badge>;
      case "API":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">API</Badge>;
      case "Görüntü":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">Görüntü</Badge>;
      case "Prompt":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">Prompt</Badge>;
      case "SDK":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">SDK</Badge>;
      case "Model":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">Model</Badge>;
      case "Entegrasyon":
        return <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/30">Entegrasyon</Badge>;
      default:
        return <Badge variant="outline">Genel</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Rehberler</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Rehberlerde ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              AIHUB360 platformunun tüm özelliklerinden en iyi şekilde yararlanabilmeniz için 
              hazırlanmış detaylı rehberler ve kullanım kılavuzları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Card key={guide.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex space-x-2">
                      {getCategoryBadge(guide.category)}
                      {guide.isNew && <Badge variant="warning">Yeni</Badge>}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between text-white/70 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{guide.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <a href={`/resources/guides/${guide.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                      <span>Rehberi Oku</span>
                      <BookOpen className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-900/20 to-blue-700/10 rounded-lg border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <FileText className="h-12 w-12 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rehber mi Arıyorsunuz?</h3>
                <p className="text-white/80">
                  Aradığınız bilgiyi bulamadınız mı? Belirli bir konu hakkında rehber hazırlamamızı isterseniz, 
                  lütfen bize ulaşın. Ekibimiz en kısa sürede yardımcı olacaktır.
                </p>
                <div className="mt-4">
                  <a 
                    href="/contact-support" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
                  >
                    Rehber Öner
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

export default Guides;
