
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, Calendar, Clock, Users, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Webinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "AI Modelleri ve Etik Kullanım",
      description: "Yapay zeka modellerinin etik kullanımı ve toplumsal etkileri üzerine tartışma",
      date: "15 Haziran 2023",
      time: "14:00 - 15:30",
      speaker: "Prof. Dr. Ahmet Yılmaz",
      participants: 187,
      status: "upcoming" // upcoming, live, past
    },
    {
      id: 2,
      title: "Büyük Dil Modellerinin Geleceği",
      description: "GPT ve ötesi: Büyük dil modellerinin gelecekteki gelişim yönleri",
      date: "22 Haziran 2023",
      time: "16:00 - 17:30",
      speaker: "Dr. Ayşe Kaya",
      participants: 154,
      status: "upcoming"
    }
  ];

  const liveWebinars = [
    {
      id: 3,
      title: "Görüntü Oluşturma Modelleri ve Kullanım Alanları",
      description: "Diffusion modelleri ve ötesi: Görüntü oluşturma teknolojilerinin detaylı incelemesi",
      date: "Bugün",
      time: "Şu anda canlı",
      speaker: "Mehmet Öztürk",
      participants: 342,
      status: "live"
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Makine Öğrenmesi: Temel Kavramlar",
      description: "Makine öğrenmesi alanındaki temel kavramların açıklanması ve uygulama örnekleri",
      date: "5 Mayıs 2023",
      time: "14:00 - 16:00",
      speaker: "Zeynep Aydın",
      participants: 278,
      status: "past",
      recording: true
    },
    {
      id: 5,
      title: "Doğal Dil İşleme Teknikleri",
      description: "Modern NLP teknikleri ve uygulamaları hakkında kapsamlı bir inceleme",
      date: "12 Mayıs 2023",
      time: "15:00 - 16:30",
      speaker: "Can Demir",
      participants: 203,
      status: "past",
      recording: true
    },
    {
      id: 6,
      title: "Yapay Zeka ve İş Dünyası",
      description: "AI'ın iş dünyasındaki uygulamaları ve gelecek trendleri",
      date: "28 Mayıs 2023",
      time: "13:00 - 14:30",
      speaker: "Elif Yıldız",
      participants: 235,
      status: "past",
      recording: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">Yakında</Badge>;
      case "live":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30 animate-pulse">Canlı</Badge>;
      case "past":
        return <Badge variant="outline" className="bg-gray-500/10 text-gray-400 border-gray-500/30">Geçmiş</Badge>;
      default:
        return <Badge variant="outline">Yakında</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Webinarlar</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Webinarlarda ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              Yapay zeka uzmanlarının sunumlarıyla gerçek zamanlı bilgi edinin. Ücretsiz canlı webinarlara 
              katılarak sorularınızı doğrudan uzmanlara yöneltebilirsiniz.
            </p>
          </div>

          {liveWebinars.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-10 mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
                Canlı Yayındakiler
              </h2>
              <div className="mb-10">
                {liveWebinars.map((webinar) => (
                  <Card key={webinar.id} className="bg-gradient-to-r from-red-900/20 to-red-700/10 border-red-500/20">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        {getStatusBadge(webinar.status)}
                      </div>
                      <CardTitle className="text-xl">{webinar.title}</CardTitle>
                      <CardDescription>{webinar.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{webinar.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{webinar.participants} Katılımcı</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium">Konuşmacı:</span>
                            <span className="ml-2">{webinar.speaker}</span>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-center">
                          <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                            <Video className="mr-2 h-4 w-4" />
                            Canlı Yayına Katıl
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          <h2 className="text-2xl font-bold mb-4">Yaklaşan Webinarlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {getStatusBadge(webinar.status)}
                  </div>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <CardDescription>{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{webinar.participants} Katılımcı</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Konuşmacı:</span>
                        <span className="ml-2">{webinar.speaker}</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-center">
                      <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
                        Hatırlatıcı Ekle
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Geçmiş Webinarlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastWebinars.map((webinar) => (
              <Card key={webinar.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {getStatusBadge(webinar.status)}
                  </div>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <CardDescription>{webinar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-1 gap-2 text-white/70 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Konuşmacı:</span>
                        <span className="ml-2">{webinar.speaker}</span>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    {webinar.recording ? (
                      <a href={`/webinars/${webinar.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                        <span>Kaydı İzle</span>
                        <Video className="h-4 w-4" />
                      </a>
                    ) : (
                      <p className="text-white/50 text-sm text-center">Kayıt mevcut değil</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Webinars;
