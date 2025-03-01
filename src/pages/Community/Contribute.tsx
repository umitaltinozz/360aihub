
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Github, 
  Code, 
  FileText, 
  Users, 
  Lightbulb, 
  MessageSquare,
  Book,
  ArrowRight
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contribute = () => {
  const ways = [
    {
      id: 1,
      title: "Açık Kaynak Katkıları",
      description: "AIHUB360'ın açık kaynak projelerine katkıda bulunun ve topluluğun ihtiyaçlarını destekleyin.",
      icon: <Github className="h-8 w-8 text-aihub-blue" />,
      action: "GitHub'da Keşfedin",
      link: "https://github.com/aihub360"
    },
    {
      id: 2,
      title: "Kod Örnekleri",
      description: "Farklı programlama dillerinde AIHUB360 API'lerini kullanmanın örneklerini paylaşın.",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      action: "Kod Örneği Gönderin",
      link: "/contribute/code-samples"
    },
    {
      id: 3,
      title: "Dokümantasyon",
      description: "Dokümantasyonumuzu geliştirin, çeviriler ekleyin veya eğitim materyalleri oluşturun.",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      action: "Dökümantasyona Katkıda Bulunun",
      link: "/contribute/documentation"
    },
    {
      id: 4,
      title: "Topluluk Desteği",
      description: "Forumlarda sorulara yanıt vererek ve yeni kullanıcılara yardımcı olarak katkıda bulunun.",
      icon: <Users className="h-8 w-8 text-yellow-500" />,
      action: "Foruma Katılın",
      link: "/community/forum"
    },
    {
      id: 5,
      title: "Hata Raporlama",
      description: "Hataları bildirin ve platformun daha da iyileştirilmesine yardımcı olun.",
      icon: <MessageSquare className="h-8 w-8 text-red-500" />,
      action: "Hata Bildir",
      link: "/contribute/bug-report"
    },
    {
      id: 6,
      title: "Özellik Önerileri",
      description: "Yeni özellikler önerin ve AIHUB360'ın geleceğini şekillendirmemize yardımcı olun.",
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      action: "Öneri Gönderin",
      link: "/contribute/feature-request"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "AIHUB360 Python SDK",
      description: "Python kullanarak AIHUB360 API'lerine erişim sağlayan açık kaynak SDK.",
      githubLink: "https://github.com/aihub360/python-sdk",
      issues: 27,
      contributors: 15
    },
    {
      id: 2,
      title: "AIHUB360 JavaScript SDK",
      description: "JavaScript/TypeScript için AIHUB360 API istemcisi.",
      githubLink: "https://github.com/aihub360/js-sdk",
      issues: 34,
      contributors: 22
    },
    {
      id: 3,
      title: "Kullanım Örnekleri Deposu",
      description: "Farklı programlama dillerinde AIHUB360 API'lerini kullanma örnekleri koleksiyonu.",
      githubLink: "https://github.com/aihub360/examples",
      issues: 19,
      contributors: 48
    }
  ];

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 page-heading">Katkıda Bulunun</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              AIHUB360 ekosisteminin gelişimine katkıda bulunun. Açık kaynak projelerimize katılın, 
              dokümantasyon yazın veya topluluk forumlarında destek sağlayın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ways.map((way) => (
              <Card key={way.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    {way.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{way.title}</CardTitle>
                  <CardDescription className="text-center">{way.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-center pb-6">
                  <a href={way.link} className="text-aihub-blue hover:underline flex items-center">
                    <span>{way.action}</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Öne Çıkan Açık Kaynak Projeler</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-white/70 text-sm mb-4">
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        <span>{project.issues} açık istek</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{project.contributors} katkıcı</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10 mb-4" />
                    
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex justify-between items-center bg-[#24292e] text-white px-4 py-2 rounded-md hover:bg-[#2c3136] transition-colors"
                    >
                      <span>GitHub'da İncele</span>
                      <Github className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-700/20 rounded-xl p-8 border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <Book className="h-16 w-16 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Katkıda Bulunma Rehberi</h3>
                <p className="text-white/80 mb-4">
                  Katkıda bulunmaya başlamadan önce katkıda bulunma rehberimizi okuyun. Bu rehber, kod stilini, 
                  gönderim sürecini ve projelerimize katkıda bulunurken uymanız gereken diğer yönergeleri açıklar.
                </p>
                <div>
                  <a 
                    href="/contribute/guidelines" 
                    className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors inline-block"
                  >
                    Katkıda Bulunma Rehberini Oku
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

export default Contribute;
