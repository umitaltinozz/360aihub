
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, BookOpen, Clock, Calendar, UserCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "AI Modellerini Kullanmaya Başlama",
      description: "AIHUB360 platform API'sini kullanarak AI modellerine hızlı başlangıç",
      category: "Başlangıç",
      author: "Mehmet Yılmaz",
      date: "12 Nisan 2023",
      duration: "25 dakika",
      level: "Başlangıç"
    },
    {
      id: 2,
      title: "GPT Modellerini Fine-Tuning ile Özelleştirme",
      description: "Kendi verinizle GPT modellerini eğitme ve özelleştirme adımları",
      category: "İleri Seviye",
      author: "Ayşe Demir",
      date: "8 Mayıs 2023",
      duration: "45 dakika",
      level: "İleri"
    },
    {
      id: 3,
      title: "Görüntü Oluşturma API'sinin Kullanımı",
      description: "AIHUB360 görüntü oluşturma API'sinin detaylı kullanım rehberi",
      category: "API",
      author: "Can Kaya",
      date: "22 Haziran 2023",
      duration: "30 dakika",
      level: "Orta"
    },
    {
      id: 4,
      title: "Prompt Mühendisliği Teknikleri",
      description: "AI modellerinden daha iyi sonuçlar almanızı sağlayacak prompt yazma teknikleri",
      category: "Prompt",
      author: "Zeynep Yıldız",
      date: "3 Temmuz 2023",
      duration: "35 dakika",
      level: "Orta"
    },
    {
      id: 5,
      title: "JavaScript SDK ile Entegrasyon",
      description: "AIHUB360 JavaScript SDK'sının web projelerine entegrasyonu",
      category: "SDK",
      author: "Ali Öztürk",
      date: "14 Ağustos 2023",
      duration: "40 dakika",
      level: "Orta"
    }
  ];

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Başlangıç":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">Başlangıç</Badge>;
      case "Orta":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">Orta</Badge>;
      case "İleri":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">İleri</Badge>;
      default:
        return <Badge variant="outline">Başlangıç</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Eğitimler</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Eğitimlerde ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              AIHUB360 platformunda yapay zeka teknolojilerini daha etkili şekilde kullanmanız için 
              adım adım eğitimler ve uygulamalı örnekler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {getLevelBadge(tutorial.level)}
                  </div>
                  <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                  <CardDescription>{tutorial.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex text-white/70 text-sm items-center">
                      <UserCircle2 className="h-4 w-4 mr-2" />
                      <span>{tutorial.author}</span>
                    </div>
                    
                    <div className="flex justify-between text-white/70 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{tutorial.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{tutorial.duration}</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <a href={`/tutorials/${tutorial.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                      <span>Eğitime Başla</span>
                      <BookOpen className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">Eğitmen Olmak İster Misiniz?</h2>
                <p className="text-white/80">
                  Yapay zeka alanında uzman mısınız? Bilginizi platformumuzda paylaşın ve topluluk içinde tanınırlığınızı artırın.
                  Eğitmenlerimiz özel avantajlardan ve gelir paylaşım programından yararlanabilir.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                  href="/become-instructor" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Başvuru Yap
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

export default Tutorials;
