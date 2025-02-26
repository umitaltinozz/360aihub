
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ExternalLink, Share2, Bookmark, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { formatDistance } from "date-fns";
import { tr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

// Use the same mock news data from AINews.tsx
const allNews = [
  {
    id: "1",
    title: "OpenAI GPT-5 Geliştirme Çalışmalarına Başladı",
    excerpt: "OpenAI şirketi, GPT-4'ün başarısının ardından GPT-5 geliştirme çalışmalarına başladığını duyurdu. Yeni model, daha geniş bağlam anlama ve daha doğru çıktılar üretme hedefiyle tasarlanıyor.",
    content: "OpenAI, GPT-4'ün piyasaya sürülmesinden sonra GPT-5 üzerinde çalışmalara başladığını resmen duyurdu. Şirket CEO'su Sam Altman, yeni modelin 'önceki versiyonlara göre çok daha derinlemesine anlama ve öğrenme yeteneğine sahip olacağını' belirtti.\n\nYeni model, özellikle uzun metinleri anlama, bağlam içinde tutarlı kalma ve daha az hallüsinasyon üretme konularında iyileştirmeler içerecek. Ayrıca multimodal yetenekleri genişletilerek daha karmaşık görsel ve işitsel girdileri işleyebilecek.\n\nUzmanlar, GPT-5'in önceki modellerin hesaplama gereksinimlerini aşacağını ve daha güçlü donanım ihtiyacı olacağını belirtiyorlar. Modelin 2024 sonlarına doğru piyasaya sürülmesi bekleniyor.",
    category: "Genel AI",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-15T14:30:00Z",
    author: "Mehmet Yılmaz",
    source: "AI Gündem",
    tags: ["OpenAI", "GPT-5", "Büyük Dil Modelleri", "Sam Altman"]
  },
  {
    id: "2",
    title: "AI Destekli Sağlık Teknolojilerinde Yeni Gelişmeler",
    excerpt: "Yapay zeka destekli sağlık teknolojileri, erken teşhis ve tedavi planlamada devrim yaratıyor. Yeni algoritmalar sayesinde kanser teşhisinde önemli ilerleme kaydedildi.",
    content: "Yapay zeka teknolojileri sağlık sektöründe önemli gelişmelere öncülük ediyor. En son olarak, bir grup araştırmacı tarafından geliştirilen AI algoritması, erken aşamadaki akciğer kanserini %94 doğrulukla tespit edebildiğini gösterdi.\n\nAmerican Journal of Medicine'da yayınlanan çalışma, AI modelinin radyologlardan daha yüksek doğruluk oranı elde ettiğini ortaya koydu. Sistem, hastaların önceki taramalarını inceleyerek çok erken aşamadaki değişimleri bile tespit edebiliyor.\n\nAraştırmacılar, bu teknolojinin özellikle sağlık hizmetlerine erişimin sınırlı olduğu bölgelerde hayat kurtarıcı olabileceğini belirtiyorlar. Ayrıca, ilaç geliştirme süreçlerinde de AI kullanımı artıyor. Yeni moleküllerin tasarlanması ve test edilmesi süreçleri hızlanıyor, bu da yeni tedavilerin daha hızlı geliştirilmesine olanak sağlıyor.",
    category: "Sağlık",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-14T09:15:00Z",
    author: "Dr. Ayşe Kaya",
    source: "Medikal Teknoloji",
    tags: ["Sağlık", "Yapay Zeka", "Kanser Teşhisi", "Tıbbi Görüntüleme"]
  },
  // ... include all news items from AINews.tsx
];

const NewsDetail = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState<any>(null);
  const [relatedNews, setRelatedNews] = useState<any[]>([]);
  
  useEffect(() => {
    // Simulate API call to get news by ID
    const timer = setTimeout(() => {
      const foundNews = allNews.find(item => item.id === newsId);
      setNews(foundNews);
      
      // Get related news (same category, excluding current news)
      if (foundNews) {
        const related = allNews
          .filter(item => item.category === foundNews.category && item.id !== foundNews.id)
          .slice(0, 3);
        setRelatedNews(related);
      }
      
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [newsId]);
  
  const handleShareClick = () => {
    // In a real app, this would copy the URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Bağlantı Kopyalandı",
        description: "Haber bağlantısı panoya kopyalandı.",
      });
    });
  };
  
  const handleSaveClick = () => {
    toast({
      title: "Haber Kaydedildi",
      description: "Bu haber kaydedilenler listenize eklendi.",
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aihub-dark">
        <div className="text-3xl font-bold text-gradient animate-pulse">Haber Yükleniyor...</div>
      </div>
    );
  }
  
  if (!news) {
    return (
      <div className="min-h-screen flex flex-col bg-aihub-dark">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Haber Bulunamadı</h2>
            <p className="text-white/70 mb-6">Aradığınız haber bulunamadı veya kaldırılmış olabilir.</p>
            <Link to="/ai-news">
              <Button variant="outline">Tüm Haberlere Dön</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Format publish date
  const publishDate = new Date(news.publishedAt);
  const formattedDate = publishDate.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  // Time since publish
  const timeSince = formatDistance(publishDate, new Date(), { 
    addSuffix: true,
    locale: tr 
  });
  
  // Format content with paragraphs
  const contentParagraphs = news.content.split('\n\n');
  
  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Back button */}
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link to="/ai-news" className="text-white/70 hover:text-white flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tüm Haberlere Dön
          </Link>
        </div>
        
        {/* Hero Image */}
        <div className="w-full h-[400px] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={news.imageUrl} 
            alt={news.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-5xl mx-auto">
              <Badge className="mb-4 bg-aihub-blue text-white">{news.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{news.title}</h1>
              <div className="flex flex-wrap items-center text-white/70 text-sm gap-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{news.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formattedDate} ({timeSince})</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span>Kaynak: {news.source}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-xl text-white/90 font-medium mb-8">{news.excerpt}</p>
              
              <div className="space-y-6 text-white/80">
                {contentParagraphs.map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium mb-3">Etiketler</h3>
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag: string, index: number) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="bg-white/5 hover:bg-white/10 text-white/70 cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator className="my-8 bg-white/10" />
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/10 hover:bg-white/5"
                    onClick={handleShareClick}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Paylaş
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white/10 hover:bg-white/5"
                    onClick={handleSaveClick}
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Kaydet
                  </Button>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white/70 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Yorum Yap
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <Card className="bg-white/5 border-white/10 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">İlgili Haberler</h3>
                  
                  <div className="space-y-4">
                    {relatedNews.length > 0 ? (
                      relatedNews.map(item => (
                        <Link to={`/ai-news/${item.id}`} key={item.id} className="block">
                          <div className="flex gap-3 hover:bg-white/5 p-2 rounded-md transition-colors">
                            <img 
                              src={item.imageUrl} 
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-md" 
                            />
                            <div>
                              <h4 className="font-medium line-clamp-2 text-sm">{item.title}</h4>
                              <span className="text-xs text-white/50">
                                {formatDistance(new Date(item.publishedAt), new Date(), { 
                                  addSuffix: true,
                                  locale: tr 
                                })}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-white/50 text-sm">Bu kategoride başka haber bulunamadı.</p>
                    )}
                  </div>
                  
                  <Separator className="my-6 bg-white/10" />
                  
                  <h3 className="text-lg font-medium mb-4">Popüler Kategoriler</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/ai-news">
                      <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                        Tüm Haberler
                      </Badge>
                    </Link>
                    <Link to="/ai-news?category=Genel%20AI">
                      <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                        Genel AI
                      </Badge>
                    </Link>
                    <Link to="/ai-news?category=Sağlık">
                      <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                        Sağlık
                      </Badge>
                    </Link>
                    <Link to="/ai-news?category=Finans">
                      <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                        Finans
                      </Badge>
                    </Link>
                    <Link to="/ai-news?category=Donanım">
                      <Badge variant="outline" className="bg-white/5 hover:bg-white/10 cursor-pointer">
                        Donanım
                      </Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
