
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, MessageCircle, Users, Clock, CalendarDays } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Forum = () => {
  const discussions = [
    {
      id: 1,
      title: "GPT-4 ile Türkçe doğal dil işleme nasıl geliştirilebilir?",
      category: "AI Modelleri",
      author: "Ahmet Yılmaz",
      replies: 28,
      views: 412,
      lastActivity: "2 saat önce",
      isHot: true
    },
    {
      id: 2,
      title: "AIHUB360 API'sini React projesine entegre etme",
      category: "Entegrasyon",
      author: "Mehmet Kaya",
      replies: 15,
      views: 234,
      lastActivity: "5 saat önce",
      isHot: false
    },
    {
      id: 3,
      title: "Sentiment analizi için fine-tuning deneyimlerim",
      category: "Model Eğitimi",
      author: "Zeynep Demir",
      replies: 42,
      views: 517,
      lastActivity: "Dün",
      isHot: true
    },
    {
      id: 4,
      title: "Stabil Diffusion modelleriyle en iyi sonuçları almak için ipuçları",
      category: "Görüntü Üretimi",
      author: "Can Öztürk",
      replies: 31,
      views: 378,
      lastActivity: "2 gün önce",
      isHot: false
    },
    {
      id: 5,
      title: "Python SDK performans optimizasyonu",
      category: "SDK",
      author: "Elif Yıldız",
      replies: 8,
      views: 145,
      lastActivity: "3 gün önce",
      isHot: false
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Yeni GPT-5 API'si platformumuza eklendi",
      category: "Duyuru",
      author: "AIHUB360 Ekibi",
      date: "2 gün önce",
      isImportant: true
    },
    {
      id: 2,
      title: "Topluluk etkinliği: AI Hackathon 2023",
      category: "Etkinlik",
      author: "Etkinlik Koordinatörü",
      date: "4 gün önce",
      isImportant: true
    },
    {
      id: 3,
      title: "Platformda yapılan bakım çalışmaları hakkında bilgilendirme",
      category: "Bakım",
      author: "Teknik Ekip",
      date: "1 hafta önce",
      isImportant: false
    }
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "AI Modelleri":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{category}</Badge>;
      case "Entegrasyon":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{category}</Badge>;
      case "Model Eğitimi":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{category}</Badge>;
      case "Görüntü Üretimi":
        return <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/30">{category}</Badge>;
      case "SDK":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{category}</Badge>;
      case "Duyuru":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">{category}</Badge>;
      case "Etkinlik":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">{category}</Badge>;
      case "Bakım":
        return <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/30">{category}</Badge>;
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
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Topluluk Forumu</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Forumda ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              AIHUB360 topluluğuna hoş geldiniz! Sorularınızı sorun, deneyimlerinizi paylaşın ve 
              diğer yapay zeka meraklıları ile etkileşime geçin.
            </p>
          </div>

          <div className="flex justify-end mb-4">
            <a 
              href="/community/forum/new" 
              className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Yeni Tartışma Başlat
            </a>
          </div>

          <Tabs defaultValue="discussions" className="mb-10">
            <TabsList className="mb-6 bg-black/20">
              <TabsTrigger value="discussions">Tartışmalar</TabsTrigger>
              <TabsTrigger value="announcements">Duyurular</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions">
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-2 items-center">
                          {getCategoryBadge(discussion.category)}
                          {discussion.isHot && <Badge variant="warning" className="bg-red-500/20 text-red-400 border-red-500/30">Popüler</Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <a href={`/community/forum/${discussion.id}`} className="hover:text-aihub-blue transition-colors">
                          {discussion.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex justify-between text-white/70 text-sm">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>Başlatan: {discussion.author}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              <span>{discussion.replies} yanıt</span>
                            </div>
                            <div>
                              <span>{discussion.views} görüntülenme</span>
                            </div>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-between items-center text-white/60 text-sm">
                          <span>Son aktivite:</span>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{discussion.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="announcements">
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-2 items-center">
                          {getCategoryBadge(announcement.category)}
                          {announcement.isImportant && (
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">Önemli</Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <a href={`/community/forum/announcement/${announcement.id}`} className="hover:text-aihub-blue transition-colors">
                          {announcement.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex justify-between text-white/70 text-sm">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{announcement.author}</span>
                          </div>
                          <div className="flex items-center">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            <span>{announcement.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gradient-to-r from-indigo-900/20 to-purple-700/20 rounded-xl p-6 border border-indigo-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">Forum Kuralları</h2>
                <p className="text-white/80">
                  Forumumuz yapıcı ve saygılı tartışmalar içindir. Paylaşımlarınızda topluluk kurallarımıza
                  uyduğunuzdan emin olun. Moderatör ekibimiz herhangi bir uygunsuz içeriği kaldırma hakkını saklı tutar.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                  href="/community-guidelines" 
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Topluluk Kuralları
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

export default Forum;
