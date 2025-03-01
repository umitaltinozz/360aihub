import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "AIHUB360 Yapay Zeka Zirvesi",
      description: "Yapay zeka teknolojilerinin geleceğini şekillendiren trendleri ve gelişmeleri keşfedin",
      type: "Konferans",
      date: "15 Kasım 2023",
      time: "09:00 - 18:00",
      location: "İstanbul, Türkiye",
      attendees: 850,
      isHighlighted: true
    },
    {
      id: 2,
      title: "AI ile Doğal Dil İşleme Workshop",
      description: "Pratik örneklerle Türkçe NLP uygulamaları geliştirmeyi öğrenin",
      type: "Workshop",
      date: "22 Kasım 2023",
      time: "14:00 - 17:00",
      location: "Online",
      attendees: 120,
      isHighlighted: false
    },
    {
      id: 3,
      title: "AIHUB360 Hackathon 2023",
      description: "24 saatlik yapay zeka hackathon'unda inovatif çözümler geliştirin ve ödüller kazanın",
      type: "Hackathon",
      date: "2-3 Aralık 2023",
      time: "10:00 - 10:00 (24 saat)",
      location: "Ankara, Türkiye",
      attendees: 200,
      isHighlighted: true
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Görüntü Oluşturma Modelleri Meetup",
      description: "Görüntü oluşturma modellerinin son gelişmeleri ve kullanım alanları",
      type: "Meetup",
      date: "10 Ekim 2023",
      location: "İzmir, Türkiye",
      attendees: 75,
      recordingAvailable: true
    },
    {
      id: 102,
      title: "AI Model Optimizasyonu Webinarı",
      description: "Yapay zeka modellerinizi optimize etme ve daha verimli hale getirme teknikleri",
      type: "Webinar",
      date: "25 Eylül 2023",
      location: "Online",
      attendees: 230,
      recordingAvailable: true
    },
    {
      id: 103,
      title: "AIHUB360 Geliştirici Günleri",
      description: "AIHUB360 geliştiricileri ve kullanıcıları buluşturan yıllık etkinlik",
      type: "Konferans",
      date: "12-13 Ağustos 2023",
      location: "İstanbul, Türkiye",
      attendees: 520,
      recordingAvailable: true
    }
  ];

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case "Konferans":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{type}</Badge>;
      case "Workshop":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{type}</Badge>;
      case "Hackathon":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">{type}</Badge>;
      case "Meetup":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{type}</Badge>;
      case "Webinar":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{type}</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Etkinlikler</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Etkinliklerde ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              AIHUB360 topluluğunun düzenlediği konferanslar, workshoplar, hackathon'lar ve diğer etkinlikler.
              Yapay zeka meraklılarıyla tanışmak ve yeni şeyler öğrenmek için etkinliklerimize katılın.
            </p>
          </div>

          <Tabs defaultValue="upcoming" className="mb-10">
            <TabsList className="mb-6 bg-black/20">
              <TabsTrigger value="upcoming">Yaklaşan Etkinlikler</TabsTrigger>
              <TabsTrigger value="past">Geçmiş Etkinlikler</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className={`bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40 ${event.isHighlighted ? 'ring-1 ring-blue-500/50' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getEventTypeBadge(event.type)}
                          {event.isHighlighted && <Badge variant="warning" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Öne Çıkan</Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <CardDescription className="text-base">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-white/70" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-white/70" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-white/70" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-white/70" />
                            <span>{event.attendees} katılımcı</span>
                          </div>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <div className="flex justify-between items-center">
                          <a href={`/community/events/${event.id}`} className="text-aihub-blue hover:underline">
                            Detayları Görüntüle
                          </a>
                          <a 
                            href={`/community/events/${event.id}/register`}
                            className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                          >
                            Kaydol
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getEventTypeBadge(event.type)}
                          {event.recordingAvailable && <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">Kayıt Mevcut</Badge>}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex justify-between text-white/70 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-white/70 text-sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        
                        <Separator className="bg-white/10" />
                        
                        <a href={`/community/events/${event.id}`} className="text-aihub-blue hover:underline flex justify-between items-center">
                          <span>{event.recordingAvailable ? 'Kayıtları İzle' : 'Detayları Görüntüle'}</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-700/20 rounded-xl p-6 border border-purple-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">Etkinlik Önerin</h2>
                <p className="text-white/80">
                  Yapay zeka ile ilgili bir etkinlik düzenlemek ister misiniz? AIHUB360 topluluk etkinliklerine 
                  ev sahipliği yapmak için başvurun. Mekan, teknik destek ve tanıtım konularında yardımcı olabiliriz.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                  href="/community/event-proposal" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Etkinlik Öner
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

export default Events;
