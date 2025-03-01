
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, Download, Code, Copy, ExternalLink, Tag, ThumbsUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Templates = () => {
  const templates = [
    {
      id: 1,
      title: "Çok Dilli Chatbot Şablonu",
      description: "Birden fazla dili destekleyen chatbot oluşturmak için hazır şablon",
      category: "Chatbot",
      language: "Python",
      downloads: 1245,
      likes: 287,
      author: "Ahmet Yılmaz"
    },
    {
      id: 2,
      title: "AI Destekli İçerik Oluşturucu",
      description: "Blog gönderileri ve sosyal medya içerikleri oluşturmak için optimizasyon",
      category: "İçerik",
      language: "JavaScript",
      downloads: 987,
      likes: 204,
      author: "Zeynep Demir"
    },
    {
      id: 3,
      title: "Görüntü Tanıma API Entegrasyonu",
      description: "Görüntü tanıma AI'ını uygulamanıza entegre etmek için başlangıç şablonu",
      category: "Görüntü",
      language: "Python",
      downloads: 1547,
      likes: 342,
      author: "Murat Kaya"
    },
    {
      id: 4,
      title: "Fine-Tuning İş Akışı",
      description: "Özel modelleri fine-tuning ile eğitmek için hazır iş akışı",
      category: "Model",
      language: "Python",
      downloads: 782,
      likes: 193,
      author: "Ayşe Arslan"
    },
    {
      id: 5,
      title: "ReactJS AI Komponenti",
      description: "React uygulamalarınız için hazır AI asistan komponenti",
      category: "Web",
      language: "JavaScript",
      downloads: 2156,
      likes: 457,
      author: "Can Özkan"
    },
    {
      id: 6,
      title: "Prompt Optimizasyon Aracı",
      description: "Promptlarınızı optimize eden ve sonuçları karşılaştıran araç",
      category: "Prompt",
      language: "Python",
      downloads: 1023,
      likes: 217,
      author: "Elif Yıldız"
    },
    {
      id: 7,
      title: "AI Destekli Veri Analizi",
      description: "Veri setlerini otomatik analiz eden ve raporlayan şablon",
      category: "Veri",
      language: "Python",
      downloads: 864,
      likes: 183,
      author: "Burak Demir"
    },
    {
      id: 8,
      title: "GPT Entegrasyon Paketi",
      description: "GPT modellerini herhangi bir uygulamaya entegre etmek için hazır araçlar",
      category: "Entegrasyon",
      language: "JavaScript",
      downloads: 1678,
      likes: 389,
      author: "Seda Kara"
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Chatbot":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">Chatbot</Badge>;
      case "İçerik":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">İçerik</Badge>;
      case "Görüntü":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">Görüntü</Badge>;
      case "Model":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">Model</Badge>;
      case "Web":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">Web</Badge>;
      case "Prompt":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">Prompt</Badge>;
      case "Veri":
        return <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/30">Veri</Badge>;
      case "Entegrasyon":
        return <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">Entegrasyon</Badge>;
      default:
        return <Badge variant="outline">Genel</Badge>;
    }
  };

  const getLanguageBadge = (language: string) => {
    switch (language) {
      case "Python":
        return (
          <div className="flex items-center px-2 py-1 rounded-full bg-blue-900/20 border border-blue-500/30">
            <span className="text-xs text-blue-400">Python</span>
          </div>
        );
      case "JavaScript":
        return (
          <div className="flex items-center px-2 py-1 rounded-full bg-yellow-900/20 border border-yellow-500/30">
            <span className="text-xs text-yellow-400">JavaScript</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center px-2 py-1 rounded-full bg-gray-900/20 border border-gray-500/30">
            <span className="text-xs text-gray-400">{language}</span>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Şablonlar</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Şablonlarda ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              Zaman kazanmak ve geliştirme sürecinizi hızlandırmak için hazır şablonlar ve başlangıç kodları.
              İhtiyacınıza uygun şablonu seçin ve hemen kullanmaya başlayın.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Tag className="mr-1 h-3 w-3" />
              Tümü
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Tag className="mr-1 h-3 w-3" />
              Chatbot
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Tag className="mr-1 h-3 w-3" />
              Görüntü
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Tag className="mr-1 h-3 w-3" />
              Web
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Tag className="mr-1 h-3 w-3" />
              Model
            </Button>
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Tag className="mr-1 h-3 w-3" />
              Prompt
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {getCategoryBadge(template.category)}
                  </div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Code className="h-4 w-4 mr-2 text-white/70" />
                        {getLanguageBadge(template.language)}
                      </div>
                      <div className="flex items-center space-x-3 text-white/70 text-sm">
                        <div className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          <span>{template.downloads}</span>
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span>{template.likes}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-white/70">
                      <span>Yazar: </span>
                      <span className="font-medium">{template.author}</span>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 border-white/10 hover:bg-white/5">
                        <Copy className="mr-1 h-4 w-4" />
                        Önizle
                      </Button>
                      <Button size="sm" className="flex-1 bg-aihub-blue hover:bg-blue-600">
                        <Download className="mr-1 h-4 w-4" />
                        İndir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-gradient-to-r from-purple-900/20 to-purple-700/10 rounded-lg border border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <ExternalLink className="h-12 w-12 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Şablon mu Katkıda Bulunmak İstiyorsunuz?</h3>
                <p className="text-white/80">
                  Kendi şablonlarınızı toplulukla paylaşabilir ve diğer geliştiricilere yardımcı olabilirsiniz.
                  Şablon gönderme ve katkıda bulunma süreci hakkında daha fazla bilgi edinin.
                </p>
                <div className="mt-4">
                  <a 
                    href="/community/contribute" 
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors inline-block"
                  >
                    Şablon Gönder
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

export default Templates;
