
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, Book, Clock, Star, Trophy, Users, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Courses = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Yapay Zeka Temelleri",
      description: "Yapay zeka ve makine öğrenmesinde temel kavramlar, tarihçe ve uygulama alanları",
      instructor: "Prof. Dr. Ahmet Kaya",
      duration: "24 saat",
      lessons: 32,
      level: "Başlangıç",
      rating: 4.8,
      students: 2457,
      price: 149,
      discountPrice: 99,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Doğal Dil İşleme ile Chatbot Geliştirme",
      description: "Modern NLP teknikleriyle kendi chatbot uygulamanızı geliştirmeyi öğrenin",
      instructor: "Dr. Zeynep Demir",
      duration: "18 saat",
      lessons: 24,
      level: "Orta",
      rating: 4.7,
      students: 1832,
      price: 199,
      discountPrice: 149,
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=3206&ixlib=rb-4.0.3"
    }
  ];

  const popularCourses = [
    {
      id: 3,
      title: "Makine Öğrenmesi: A'dan Z'ye",
      description: "Sıfırdan ileri seviyeye makine öğrenmesi algoritmaları ve uygulamaları",
      instructor: "Dr. Murat Arslan",
      duration: "32 saat",
      lessons: 45,
      level: "Başlangıç-İleri",
      rating: 4.9,
      students: 3245,
      price: 249,
      discountPrice: 199
    },
    {
      id: 4,
      title: "Derin Öğrenme Temelleri",
      description: "Sinir ağları, evrişimli ağlar ve derin öğrenme mimarilerinin temelleri",
      instructor: "Doç. Dr. Ayşe Yıldız",
      duration: "28 saat",
      lessons: 38,
      level: "Orta",
      rating: 4.6,
      students: 2156,
      price: 179,
      discountPrice: 129
    },
    {
      id: 5,
      title: "TensorFlow ve PyTorch ile Model Geliştirme",
      description: "TensorFlow ve PyTorch kütüphanelerini kullanarak derin öğrenme modellerinin geliştirilmesi",
      instructor: "Eren Yılmaz",
      duration: "26 saat",
      lessons: 36,
      level: "Orta-İleri",
      rating: 4.7,
      students: 1879,
      price: 229,
      discountPrice: 169
    },
    {
      id: 6,
      title: "Veri Bilimi Projeleri",
      description: "Gerçek dünya veri bilimi projelerini uygulamalı olarak öğrenin",
      instructor: "Dr. Can Aydın",
      duration: "22 saat",
      lessons: 30,
      level: "Orta",
      rating: 4.5,
      students: 1245,
      price: 169,
      discountPrice: 119
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
      case "Başlangıç-İleri":
        return <Badge variant="outline" className="bg-gradient-to-r from-green-500/30 to-purple-500/30 text-white border-white/30">Başlangıç-İleri</Badge>;
      case "Orta-İleri":
        return <Badge variant="outline" className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-white/30">Orta-İleri</Badge>;
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
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Kurslar</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Kurslarda ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              Yapay zeka alanında kendinizi geliştirin. Sektör uzmanları tarafından hazırlanan 
              kapsamlı kurslarla kariyerinizi bir adım öne taşıyın.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
            Öne Çıkan Kurslar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="flex flex-col md:flex-row overflow-hidden bg-black/30 border-white/10">
                <div 
                  className="w-full md:w-2/5 h-48 md:h-auto bg-cover bg-center" 
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="w-full md:w-3/5 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      {getLevelBadge(course.level)}
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-col space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-white/70 text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{course.students} Öğrenci</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Book className="h-4 w-4 mr-2" />
                          <span>{course.lessons} Ders</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          <span>{course.rating} / 5.0</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <span>Eğitmen:</span>
                        <span className="font-medium ml-2">{course.instructor}</span>
                      </div>
                      
                      <Separator className="bg-white/10" />
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="text-white/50 line-through text-sm">{course.price} TL</span>
                          <span className="text-xl font-bold ml-2">{course.discountPrice} TL</span>
                        </div>
                        <a href={`/courses/${course.id}`} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                          Kursa Git
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Popüler Kurslar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    {getLevelBadge(course.level)}
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-white/70 text-xs">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Book className="h-3 w-3 mr-1" />
                        <span>{course.lessons} Ders</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs mt-1">
                      <span className="text-white/70">Eğitmen:</span>
                      <span className="font-medium ml-1 text-white/90">{course.instructor}</span>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white/50 line-through text-xs">{course.price} TL</span>
                        <span className="text-lg font-bold ml-1">{course.discountPrice} TL</span>
                      </div>
                      <a href={`/courses/${course.id}`} className="text-aihub-blue hover:underline text-sm">
                        Detaylar
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="my-12 bg-gradient-to-r from-black/40 to-black/20 rounded-xl p-8 border border-white/10">
            <div className="flex flex-col items-center text-center">
              <GraduationCap className="h-16 w-16 mb-4 text-aihub-purple" />
              <h2 className="text-2xl font-bold mb-4">AI Sertifika Programı</h2>
              <p className="text-white/80 max-w-2xl mb-6">
                Kapsamlı sertifika programımızla yapay zeka alanında uzmanlaşın. Endüstri standardı 
                yetkinlikleri kazanın ve kariyerinizde fark yaratın. 8 haftalık yoğunlaştırılmış program 
                ile AI modellerini geliştirme, entegre etme ve optimize etme becerilerini edineceksiniz.
              </p>
              <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white">
                Sertifika Programı Hakkında Bilgi Al
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;
