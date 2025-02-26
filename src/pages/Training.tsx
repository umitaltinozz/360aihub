
import { useState, useEffect } from "react";
import { Search, Filter, BookOpen, Clock, Star, PlayCircle, Lock, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock courses data
const coursesData = [
  {
    id: "1",
    title: "AI Temelleri ve Pratik Uygulamalar",
    description: "Yapay zeka kavramlarını, temel algoritmaları ve pratik uygulama alanlarını öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Prof. Dr. Ahmet Yılmaz",
    duration: "10 saat",
    level: "Başlangıç",
    rating: 4.7,
    totalReviews: 1256,
    price: 0,
    category: "Genel AI",
    chapters: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Derin Öğrenme ve Sinir Ağları",
    description: "Derin öğrenme modellerinin yapısını ve eğitimini adım adım uygulayarak öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Dr. Zeynep Aydın",
    duration: "15 saat",
    level: "Orta",
    rating: 4.9,
    totalReviews: 873,
    price: 199,
    category: "Derin Öğrenme",
    chapters: 12,
    featured: true,
  },
  {
    id: "3",
    title: "Prompt Mühendisliği Teknikleri",
    description: "Büyük dil modellerinden en iyi sonuçları almak için prompt tasarım stratejileri.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Mert Demirci",
    duration: "6 saat",
    level: "Başlangıç",
    rating: 4.8,
    totalReviews: 1054,
    price: 149,
    category: "Prompt Mühendisliği",
    chapters: 7,
    featured: true,
  },
  {
    id: "4",
    title: "Python ile Makine Öğrenmesi",
    description: "Python programlama dili kullanarak makine öğrenmesi algoritmalarını uygulamalı olarak öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Deniz Yıldız",
    duration: "20 saat",
    level: "Orta",
    rating: 4.6,
    totalReviews: 725,
    price: 249,
    category: "Programlama",
    chapters: 15,
    featured: false,
  },
  {
    id: "5",
    title: "Doğal Dil İşleme Temelleri",
    description: "NLP temel kavramları, algoritmaları ve güncel uygulama alanlarına kapsamlı bir bakış.",
    imageUrl: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Dr. Berk Özcan",
    duration: "12 saat",
    level: "Orta",
    rating: 4.5,
    totalReviews: 520,
    price: 199,
    category: "NLP",
    chapters: 10,
    featured: false,
  },
  {
    id: "6",
    title: "Bilgisayarlı Görü ve OpenCV",
    description: "Bilgisayarlı görü konusunda temel ve ileri teknikleri OpenCV kütüphanesi ile öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Özge Kaya",
    duration: "14 saat",
    level: "İleri",
    rating: 4.7,
    totalReviews: 612,
    price: 299,
    category: "Bilgisayarlı Görü",
    chapters: 11,
    featured: false,
  },
  {
    id: "7",
    title: "AI Model Deployment",
    description: "Eğitilmiş yapay zeka modellerini bulut ortamında deploy etmeyi ve ölçeklendirmeyi öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Can Aydın",
    duration: "8 saat",
    level: "İleri",
    rating: 4.4,
    totalReviews: 380,
    price: 199,
    category: "DevOps",
    chapters: 6,
    featured: false,
  },
  {
    id: "8",
    title: "Veri Bilimi için SQL ve Veri Tabanları",
    description: "Veri bilimi projeleri için SQL sorgularını ve veritabanı yönetimini kapsamlı öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    instructor: "Elif Demir",
    duration: "10 saat",
    level: "Başlangıç",
    rating: 4.3,
    totalReviews: 425,
    price: 149,
    category: "Veri Bilimi",
    chapters: 8,
    featured: false,
  },
];

// Categories
const categories = ["Tümü", "Genel AI", "Derin Öğrenme", "Prompt Mühendisliği", "Programlama", "NLP", "Bilgisayarlı Görü", "DevOps", "Veri Bilimi"];
const levels = ["Tümü", "Başlangıç", "Orta", "İleri"];

const Training = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeLevel, setActiveLevel] = useState("Tümü");
  const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [courses, setCourses] = useState(coursesData);
  const [inProgressCourses, setInProgressCourses] = useState<any[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Mock user's in-progress courses
      setInProgressCourses([
        {
          id: coursesData[0].id,
          progress: 75,
          lastAccessed: "2023-12-10T14:30:00Z",
          ...coursesData[0]
        },
        {
          id: coursesData[2].id,
          progress: 30,
          lastAccessed: "2023-12-15T09:45:00Z",
          ...coursesData[2]
        }
      ]);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter courses based on filters
    let filtered = coursesData;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        course => 
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory !== "Tümü") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    // Filter by level
    if (activeLevel !== "Tümü") {
      filtered = filtered.filter(course => course.level === activeLevel);
    }
    
    // Filter by price
    if (showFreeOnly) {
      filtered = filtered.filter(course => course.price === 0);
    }
    
    setCourses(filtered);
  }, [searchTerm, activeCategory, activeLevel, showFreeOnly]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleLevelChange = (level: string) => {
    setActiveLevel(level);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCourseEnroll = (courseId: string, courseName: string, isPremium: boolean) => {
    if (isPremium) {
      toast({
        title: "Premium Kurs",
        description: `${courseName} kursuna kaydolmak için satın alma işlemi gerekiyor.`,
      });
    } else {
      toast({
        title: "Kursa Kaydolundu",
        description: `${courseName} kursuna başarıyla kaydoldunuz.`,
      });
    }
  };

  const handleContinueCourse = (courseId: string, courseName: string) => {
    toast({
      title: "Kursa Devam Ediliyor",
      description: `${courseName} kursuna kaldığınız yerden devam ediyorsunuz.`,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aihub-dark">
        <div className="text-3xl font-bold text-gradient animate-pulse">Eğitimler Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-aihub-purple/20 via-aihub-dark to-aihub-dark py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Eğitim Merkezi</h1>
              <p className="text-white/70 max-w-3xl mx-auto">
                Yapay zeka alanında kendinizi geliştirin. Temel kavramlardan ileri tekniklere kadar kapsamlı eğitimlerle AI yolculuğunuzda ilerleyin.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Kurs ara..."
                  className="pl-10 bg-white/5 border-white/10 focus:border-aihub-purple focus:ring-aihub-purple/50"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <Button 
                variant="outline" 
                className="border-white/10 hover:bg-white/5"
                onClick={toggleFilters}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtreler
              </Button>
            </div>
            
            {showFilters && (
              <Card className="mt-4 p-4 max-w-3xl mx-auto bg-white/5 border-white/10 animate-scale-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Kategori</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          size="sm"
                          variant="ghost"
                          className={activeCategory === category 
                            ? "bg-aihub-purple/20 text-aihub-purple hover:bg-aihub-purple/30" 
                            : "bg-white/5 hover:bg-white/10 text-white/70"}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Seviye</h3>
                    <div className="flex flex-wrap gap-2">
                      {levels.map((level) => (
                        <Button
                          key={level}
                          size="sm"
                          variant="ghost"
                          className={activeLevel === level 
                            ? "bg-aihub-purple/20 text-aihub-purple hover:bg-aihub-purple/30" 
                            : "bg-white/5 hover:bg-white/10 text-white/70"}
                          onClick={() => handleLevelChange(level)}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Fiyat</h3>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="free-only"
                        className="rounded bg-white/5 border-white/20 text-aihub-purple focus:ring-aihub-purple/50 mr-2"
                        checked={showFreeOnly}
                        onChange={() => setShowFreeOnly(!showFreeOnly)}
                      />
                      <label htmlFor="free-only" className="text-sm">Sadece ücretsiz kurslar</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setActiveCategory("Tümü");
                      setActiveLevel("Tümü");
                      setShowFreeOnly(false);
                      setSearchTerm("");
                    }}
                    className="text-white/70 hover:text-white"
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* In Progress Courses */}
        {inProgressCourses.length > 0 && (
          <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-aihub-purple" />
                Devam Eden Kurslarınız
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgressCourses.map((course) => (
                  <Card key={course.id} className="glass card-hover overflow-hidden">
                    <div className="flex h-full">
                      <div className="w-1/3">
                        <div className="h-full overflow-hidden">
                          <img 
                            src={course.imageUrl} 
                            alt={course.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                      <div className="w-2/3 p-4 flex flex-col">
                        <h3 className="text-lg font-medium line-clamp-2 mb-1">{course.title}</h3>
                        <div className="flex items-center text-white/70 text-sm mb-3">
                          <Badge className="bg-aihub-purple/20 text-aihub-purple border-0 mr-2">
                            {course.level}
                          </Badge>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {course.duration}
                          </span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-white/70">İlerleme</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2 bg-white/10">
                            <div className="h-full bg-aihub-purple rounded-full" />
                          </Progress>
                        </div>
                        
                        <div className="mt-auto">
                          <Button 
                            className="w-full bg-aihub-purple hover:bg-aihub-purple/90"
                            onClick={() => handleContinueCourse(course.id, course.title)}
                          >
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Devam Et
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Courses */}
        <section className="py-12 px-6 bg-gradient-to-b from-aihub-dark to-aihub-dark/90">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-yellow-400" />
              Öne Çıkan Kurslar
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesData
                .filter(course => course.featured)
                .map((course) => (
                  <Card key={course.id} className="glass card-hover overflow-hidden flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={course.imageUrl} 
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                      {course.price === 0 ? (
                        <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                          Ücretsiz
                        </Badge>
                      ) : (
                        <Badge className="absolute top-2 left-2 bg-aihub-purple/90 text-white">
                          {course.price} ₺
                        </Badge>
                      )}
                      <Badge className="absolute top-2 right-2 bg-yellow-500/90 text-white">
                        Öne Çıkan
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-medium mb-1 line-clamp-2">{course.title}</h3>
                          <p className="text-sm text-white/70">{course.instructor}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-sm text-white/80 mb-4 line-clamp-2">{course.description}</p>
                      
                      <div className="flex flex-wrap items-center justify-between text-sm text-white/70">
                        <Badge className="bg-white/10 text-white/80 border-0 mb-2">
                          {course.level}
                        </Badge>
                        
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>{course.chapters} Bölüm</span>
                        </div>
                        
                        <div className="flex items-center mb-2">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        
                        <div className="flex items-center mb-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span>{course.rating} ({course.totalReviews})</span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button 
                        className={`w-full ${course.price === 0 
                          ? "bg-green-500 hover:bg-green-600" 
                          : "bg-aihub-purple hover:bg-aihub-purple/90"}`}
                        onClick={() => handleCourseEnroll(course.id, course.title, course.price > 0)}
                      >
                        {course.price === 0 ? (
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Şimdi Başla
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Lock className="h-4 w-4 mr-2" />
                            Satın Al
                          </span>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {courses.length} Kurs Bulundu
              </h2>
            </div>
            
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="glass card-hover overflow-hidden flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={course.imageUrl} 
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                      {course.price === 0 ? (
                        <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                          Ücretsiz
                        </Badge>
                      ) : (
                        <Badge className="absolute top-2 left-2 bg-aihub-purple/90 text-white">
                          {course.price} ₺
                        </Badge>
                      )}
                      {course.featured && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500/90 text-white">
                          Öne Çıkan
                        </Badge>
                      )}
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-medium mb-1 line-clamp-2">{course.title}</h3>
                          <p className="text-sm text-white/70">{course.instructor}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-sm text-white/80 mb-4 line-clamp-2">{course.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <Badge className="bg-white/10 text-white/80 border-0">
                          {course.level}
                        </Badge>
                        
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button 
                        className={`w-full ${course.price === 0 
                          ? "bg-green-500 hover:bg-green-600" 
                          : "bg-aihub-purple hover:bg-aihub-purple/90"}`}
                        onClick={() => handleCourseEnroll(course.id, course.title, course.price > 0)}
                      >
                        {course.price === 0 ? (
                          <span className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Şimdi Başla
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Lock className="h-4 w-4 mr-2" />
                            Satın Al
                          </span>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-white/70 mb-4">Aramanıza uygun kurs bulunamadı.</p>
                <Button 
                  variant="outline" 
                  className="border-white/10 hover:bg-white/5"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("Tümü");
                    setActiveLevel("Tümü");
                    setShowFreeOnly(false);
                  }}
                >
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Training;
