
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, Database, Download, FileBarChart, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datasets = () => {
  const datasets = [
    {
      id: 1,
      title: "Türkçe Konuşma Metinleri",
      description: "Türkçe konuşma dili örneklerinden oluşan geniş bir veri seti",
      category: "Metin",
      size: "2.3GB",
      samples: "450,000",
      isNew: true
    },
    {
      id: 2,
      title: "Görüntü Sınıflandırma Veri Seti",
      description: "10 farklı kategoride sınıflandırılmış Türkiye'den manzara görüntüleri",
      category: "Görüntü",
      size: "4.5GB",
      samples: "25,000",
      isNew: false
    },
    {
      id: 3,
      title: "Türkçe Haber Metinleri",
      description: "Türk haber kaynaklarından toplanmış ve kategorize edilmiş haber metinleri",
      category: "Metin",
      size: "1.8GB",
      samples: "300,000",
      isNew: false
    },
    {
      id: 4,
      title: "Ses Kayıtları Koleksiyonu",
      description: "Farklı ortamlarda ve aksan bölgelerinde kaydedilmiş Türkçe ses örnekleri",
      category: "Ses",
      size: "5.2GB",
      samples: "12,000",
      isNew: true
    },
    {
      id: 5,
      title: "Sentiment Analizi Veri Seti",
      description: "Türkçe sosyal medya yorumlarından duygu analizi için etiketlenmiş veri seti",
      category: "Metin",
      size: "780MB",
      samples: "120,000",
      isNew: false
    },
    {
      id: 6,
      title: "E-Ticaret Ürün Açıklamaları",
      description: "Türkiye'deki e-ticaret sitelerinden toplanmış ürün açıklamaları",
      category: "Metin",
      size: "1.1GB",
      samples: "200,000",
      isNew: false
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Metin":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">Metin</Badge>;
      case "Görüntü":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">Görüntü</Badge>;
      case "Ses":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">Ses</Badge>;
      default:
        return <Badge variant="outline">Diğer</Badge>;
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
              AI modellerinizi eğitmek ve test etmek için kullanabileceğiniz çeşitli veri setleri. 
              Tüm veri setleri KVKK ve GDPR uyumlu olup, araştırma ve geliştirme amaçlı kullanım için uygundur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datasets.map((dataset) => (
              <Card key={dataset.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex space-x-2">
                      {getCategoryBadge(dataset.category)}
                      {dataset.isNew && <Badge variant="warning">Yeni</Badge>}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{dataset.title}</CardTitle>
                  <CardDescription>{dataset.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between text-white/70 text-sm">
                      <div className="flex items-center">
                        <Database className="h-4 w-4 mr-2" />
                        <span>{dataset.size}</span>
                      </div>
                      <div className="flex items-center">
                        <FileBarChart className="h-4 w-4 mr-2" />
                        <span>{dataset.samples} örnek</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <a href={`/resources/datasets/${dataset.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                      <span>İncele ve İndir</span>
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-gradient-to-r from-indigo-900/20 to-indigo-700/10 rounded-lg border border-indigo-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Database className="h-12 w-12 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Özel Veri Seti mi Arıyorsunuz?</h3>
                <p className="text-white/80">
                  İhtiyacınız olan özel bir veri seti varsa veya kendi veri setinizi platformumuzda paylaşmak isterseniz, 
                  bizimle iletişime geçin. AIHUB360 veri bilimcileri size yardımcı olabilir.
                </p>
                <div className="mt-4">
                  <a 
                    href="/contact-data-team" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors inline-block"
                  >
                    Veri Ekibiyle İletişime Geç
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
