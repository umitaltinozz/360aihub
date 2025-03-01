
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, Wrench, ExternalLink, Star, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tools = () => {
  const tools = [
    {
      id: 1,
      title: "AIHUB360 CLI",
      description: "Komut satırından AIHUB360 API'lerine erişim sağlayan güçlü bir araç",
      category: "CLI",
      stars: 4.8,
      downloads: "12,453",
      isPopular: true
    },
    {
      id: 2,
      title: "Prompt Optimizer",
      description: "Prompt'larınızı optimize eden ve daha iyi sonuçlar almanızı sağlayan bir araç",
      category: "Prompt",
      stars: 4.6,
      downloads: "9,287",
      isPopular: true
    },
    {
      id: 3,
      title: "Model Karşılaştırma Aracı",
      description: "Farklı AI modellerinin performansını karşılaştırmanıza olanak tanıyan analiz aracı",
      category: "Analiz",
      stars: 4.3,
      downloads: "5,821",
      isPopular: false
    },
    {
      id: 4,
      title: "Veri Temizleme Toolkit",
      description: "Veri setlerini temizlemek ve normalize etmek için kapsamlı araç seti",
      category: "Veri",
      stars: 4.5,
      downloads: "7,329",
      isPopular: false
    },
    {
      id: 5,
      title: "API Playground",
      description: "AIHUB360 API'lerini tarayıcı üzerinden test etmenizi sağlayan interaktif arayüz",
      category: "API",
      stars: 4.9,
      downloads: "15,732",
      isPopular: true
    },
    {
      id: 6,
      title: "Kod Tamamlayıcı Extension",
      description: "Popüler kod editörleri için AIHUB360 AI kodlama asistanı eklentisi",
      category: "Kodlama",
      stars: 4.7,
      downloads: "21,098",
      isPopular: true
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "CLI":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">CLI</Badge>;
      case "Prompt":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">Prompt</Badge>;
      case "Analiz":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">Analiz</Badge>;
      case "Veri":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">Veri</Badge>;
      case "API":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">API</Badge>;
      case "Kodlama":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">Kodlama</Badge>;
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
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Araçlar</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Araçlarda ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              Yapay zeka projelerinizi geliştirmenize yardımcı olacak çeşitli araçlar ve uygulamalar.
              Bu araçlar iş akışınızı hızlandırmanıza ve daha verimli çalışmanıza olanak tanır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex space-x-2">
                      {getCategoryBadge(tool.category)}
                      {tool.isPopular && <Badge variant="warning">Popüler</Badge>}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between text-white/70 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        <span>{tool.stars}/5.0</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        <span>{tool.downloads}</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <a href={`/resources/tools/${tool.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                      <span>Aracı İncele</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-900/20 to-purple-700/10 rounded-lg border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Wrench className="h-12 w-12 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Kendi Aracınızı Geliştirin</h3>
                <p className="text-white/80">
                  AIHUB360 API'lerini kullanarak kendi araçlarınızı geliştirebilir ve platformumuz üzerinden 
                  paylaşabilirsiniz. Geliştirici portalımızı ziyaret edin ve topluluk projelerine katkıda bulunun.
                </p>
                <div className="mt-4">
                  <a 
                    href="/developer-portal" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity inline-block"
                  >
                    Geliştirici Portalına Git
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

export default Tools;
