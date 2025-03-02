import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";
import { useToast } from "@/hooks/use-toast";

// Mock news data
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
  {
    id: "3",
    title: "Finans Sektöründe AI Kullanımı Artıyor",
    excerpt: "Bankaların %70'i yapay zeka teknolojilerini operasyonlarına entegre etmeyi planlıyor. Yeni finansal algoritmalar, risk değerlendirmede önemli rol oynuyor.",
    content: "Dünya genelindeki bankaların %70'inden fazlası, önümüzdeki iki yıl içinde yapay zeka teknolojilerini iş süreçlerine entegre etmeyi planlıyor. Bu, Finansal Teknoloji Derneği'nin 500'den fazla finans kuruluşuyla yaptığı bir araştırmanın sonuçlarında ortaya çıktı.\n\nÖzellikle risk değerlendirme, dolandırıcılık tespiti ve müşteri hizmetleri alanlarında AI uygulamaları ön plana çıkıyor. Örneğin, büyük bir Avrupa bankası, kredi onay süreçlerinde yapay zeka kullanarak işlem süresini %60 oranında azalttığını ve doğruluk oranını %25 artırdığını bildirdi.\n\nAncak uzmanlar, finansal kararlarda AI kullanımının etik sorunları da beraberinde getirdiğini vurguluyor. Algoritmalardaki önyargılar, bazı müşteri gruplarının sistematik olarak dezavantajlı duruma düşmesine neden olabiliyor. Bu nedenle, düzenleyici kurumlar AI sistemlerinin denetimi için yeni standartlar geliştiriyor.",
    category: "Finans",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-12T11:45:00Z",
    author: "Ali Tekin",
    source: "Ekonomi+",
    tags: ["Finans", "Bankacılık", "Risk Değerlendirme", "Fintech"]
  },
  {
    id: "4",
    title: "Google'ın Yeni AI Video Modeli: Lumiere",
    excerpt: "Google, saniyeler içinde yüksek kaliteli videolar oluşturabilen yeni metin-video modeli Lumiere'i tanıttı.",
    content: "Google Research, saniyeler içinde yüksek kaliteli videolar oluşturabilen yeni AI modeli Lumiere'i duyurdu. Bu teknoloji, basit metin komutlarını gerçekçi videolara dönüştürebiliyor.\n\nLumiere, önceki video oluşturma modellerinin karşılaştığı tutarsızlık sorunlarını çözmek için yeni bir 'Uzay-Zaman U-Net' mimarisi kullanıyor. Bu sayede karakterlerin görünümlerinde çerçeveler arasında tutarlılık sağlanıyor ve daha gerçekçi hareketler elde ediliyor.\n\nModel ayrıca mevcut videoları düzenleme, stil aktarımı yapma ve hatta hareketsiz görüntülere animasyon ekleme gibi yeteneklere de sahip. Google'ın henüz modeli kamuya açmamasına rağmen, araştırma makalesi ve örnek videolar büyük ilgi gördü.\n\nUzmanlar, bu tür teknolojilerin yaratıcı sektörlere büyük katkı sağlayabileceğini, ancak deepfake gibi zararlı kullanımları da artırabileceğini belirtiyor.",
    category: "Görsel AI",
    imageUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-10T16:20:00Z",
    author: "Elif Demirci",
    source: "Tekno Dergi",
    tags: ["Google", "Video Üretme", "Multimodal AI", "Görsel İşleme"]
  },
  {
    id: "5",
    title: "AB'den AI Regülasyonlarına İlişkin Yeni Düzenlemeler",
    excerpt: "Avrupa Birliği, yapay zeka sistemlerinin kullanımını düzenlemek için yeni yasalar çıkardı. Yüksek riskli AI uygulamaları daha sıkı denetim altına alınacak.",
    content: "Avrupa Birliği, yapay zeka sistemleri için kapsamlı yeni düzenlemeler kabul etti. 'AI Act' olarak adlandırılan bu yasal çerçeve, AI uygulamalarını risk seviyelerine göre sınıflandırıyor ve yüksek riskli sistemler için daha sıkı kurallar getiriyor.\n\nYeni düzenlemeler özellikle kritik altyapılar, eğitim, istihdam ve güvenlik gibi alanlarda kullanılan AI sistemlerini kapsıyor. Bu sistemlerin insan gözetiminde olması, şeffaf olması ve önyargılardan arındırılmış olması gerekiyor.\n\nDüzenlemeler ayrıca, yüz tanıma gibi teknolojilerin kamusal alanlarda kullanımına da önemli kısıtlamalar getiriyor. İhlaller durumunda şirketler, global gelirlerinin %6'sına kadar para cezasına çarptırılabilecek.\n\nAB'nin bu adımı, AI teknolojilerinin etik ve güvenli bir şekilde geliştirilmesi için global bir standart oluşturmayı hedefliyor. Teknoloji şirketleri ise uyum için 24 ay süreye sahip olacak.",
    category: "Regülasyon",
    imageUrl: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-08T10:15:00Z",
    author: "Hakan Şahin",
    source: "Global Politika",
    tags: ["Avrupa Birliği", "Regülasyon", "AI Yasaları", "Etik AI"]
  },
  {
    id: "6",
    title: "Nvidia, AI İçin Özel Olarak Tasarlanmış Yeni Çiplerini Duyurdu",
    excerpt: "Nvidia, yapay zeka eğitimi ve çıkarımı için özel olarak tasarlanmış yeni Blackwell mimarisini tanıttı. Yeni çipler, enerji verimliliğinde %4 kat artış vaat ediyor.",
    content: "Nvidia, AI uygulamaları için özel olarak tasarlanmış yeni Blackwell GPU mimarisini GTC konferansında resmen duyurdu. Yeni B200 çipler, önceki nesil H100'e göre 4 kat daha fazla enerji verimliliği ve 2,5 kat daha yüksek performans vaat ediyor.\n\nÖzellikle büyük dil modellerinin eğitimi için tasarlanan bu çipler, daha büyük ve daha karmaşık AI modellerinin daha hızlı ve daha az maliyetle eğitilmesini sağlayacak. Nvidia CEO'su Jensen Huang, bu çiplerin 'AI devriminin bir sonraki aşamasını mümkün kılacağını' belirtti.\n\nB200 çipleri ayrıca, veri merkezi ölçeğinde AI çıkarımı için optimize edilmiş. Bu, daha hızlı ve daha verimli AI servislerinin mümkün olacağı anlamına geliyor. Büyük teknoloji şirketleri ve bulut sağlayıcıları şimdiden bu yeni çiplere yoğun ilgi gösteriyor.\n\nAnalistler, Nvidia'nın bu hamlesiyle AI donanım pazarındaki liderliğini pekiştirdiğini ve rakiplerinden önemli bir avantaj elde ettiğini belirtiyorlar.",
    category: "Donanım",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-05T15:30:00Z",
    author: "Kemal Demir",
    source: "Teknoloji Dünyası",
    tags: ["Nvidia", "GPU", "AI Çipleri", "Donanım"]
  },
  {
    id: "7",
    title: "Açık Kaynak AI Projeleri Global Benimsenmede Artış Gösteriyor",
    excerpt: "Açık kaynaklı yapay zeka modelleri ve araçları, özellikle küçük işletmeler ve akademik kurumlar arasında hızla yaygınlaşıyor.",
    content: "Açık kaynaklı yapay zeka modelleri ve frameworkleri, son bir yılda %300'den fazla artışla benimseniyor. Özellikle Meta'nın LLaMA, Stability AI'ın Stable Diffusion ve EleutherAI'ın Pythia gibi açık kaynaklı modelleri, AI teknolojilerine demokratik erişim sağlıyor.\n\nBu modeller özellikle küçük işletmeler, startuplar ve akademik kurumlar için önemli fırsatlar sunuyor. Büyük teknoloji şirketlerinin pahalı API'lerine bağımlı olmadan, kendi AI çözümlerini geliştirebiliyorlar حفاظتی.\n\nAçık kaynaklı ekosistem ayrıca, yerel dillerde ve özel alanlarda eğitilmiş modellerin geliştirilmesini de hızlandırıyor. Bu sayede, daha önce erişilemeyen dil ve kültür grupları için de AI çözümleri mümkün hale geliyor.\n\nAncak uzmanlar, açık kaynak modellerin güvenlik ve etik kullanım konularında bazı endişeleri de beraberinde getirdiğini belirtiyorlar. Kötü amaçlı kullanımlara karşı topluluk standartları ve güvenlik önlemleri geliştirilmesi gerektiği vurgulanıyor.",
    category: "Açık Kaynak",
    imageUrl: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-03T12:45:00Z",
    author: "Zeynep Kaya",
    source: "Teknoloji Günlüğü",
    tags: ["Açık Kaynak", "LLaMA", "Stable Diffusion", "AI Demokratikleşme"]
  },
  {
    id: "8",
    title: "Robotik Süreç Otomasyonu ve AI Entegrasyonu İş Dünyasını Dönüştürüyor",
    excerpt: "Robotik Süreç Otomasyonu (RPA) ve yapay zeka entegrasyonu, şirketlerin operasyonel verimliliğini artırıyor.",
    content: "Robotik Süreç Otomasyonu (RPA) ve yapay zeka entegrasyonu, şirketlerin iş süreçlerini otomatikleştirmesinde yeni bir çağ başlatıyor. Deloitte'un yeni yayınlanan raporuna göre, RPA uygulamalarına AI yeteneklerinin eklenmesi, verimlilik artışını %40'tan %70'e çıkarıyor.\n\nGeleneksel RPA sistemleri yapılandırılmış ve tekrarlayan görevlerde etkili olurken, AI entegrasyonu sayesinde sistemler artık belirsiz durumları anlayabiliyor, karar verebiliyor ve öğrenebiliyor. Bu, müşteri hizmetleri, finans, insan kaynakları ve tedarik zinciri gibi alanlarda önemli dönüşümlere yol açıyor.\n\nÖrneğin, büyük bir lojistik şirketi, AI destekli RPA kullanarak belge işleme süresini %80 azalttığını ve hata oranlarını %95 düşürdüğünü bildirdi. Benzer şekilde, bir finans kuruluşu, müşteri sorguları ve işlemlerinin %60'ını tam otomatik sistemlerle halledebiliyor.\n\nUzmanlar, önümüzdeki beş yıl içinde kurumsal süreçlerin %50'sinden fazlasının bu tür akıllı otomasyon sistemleriyle yürütüleceğini öngörüyor.",
    category: "İş ve Teknoloji",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    publishedAt: "2023-10-01T09:30:00Z",
    author: "Oğuz Şahin",
    source: "Dijital Ekonomi",
    tags: ["RPA", "İş Otomasyonu", "AI Entegrasyonu", "Verimlilik"]
  },
];

// Categories
const categories = ["Tümü", "Genel AI", "Sağlık", "Finans", "Görsel AI", "Donanım", "Regülasyon", "Açık Kaynak", "İş ve Teknoloji"];

const AINews = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("latest"); // latest, oldest
  const [news, setNews] = useState(allNews);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter news based on search term and category
    let filtered = allNews;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "Tümü") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Sort news
    if (sortBy === "latest") {
      filtered = [...filtered].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else {
      filtered = [...filtered].sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    }
    
    setNews(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    toast({
      title: "Sıralama değiştirildi",
      description: sort === "latest" ? "En yeni haberler önce gösteriliyor" : "En eski haberler önce gösteriliyor",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-aihub-dark">
        <div className="text-3xl font-bold text-gradient animate-pulse">AI Haberleri Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-aihub-dark">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Header Section */}
        <div className="bg-gradient-to-b from-aihub-blue/20 via-aihub-dark to-aihub-dark py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Haberleri</h1>
              <p className="text-white/70 max-w-3xl mx-auto">
                Yapay zeka dünyasının en son gelişmeleri, yenilikler ve trendler hakkında güncel haberler.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Haber ara..."
                  className="pl-10 bg-white/5 border-white/10 focus:border-aihub-blue focus:ring-aihub-blue/50"
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
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Sıralama</h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className={sortBy === "latest" 
                          ? "bg-aihub-blue/20 text-aihub-blue hover:bg-aihub-blue/30" 
                          : "bg-white/5 hover:bg-white/10 text-white/70"}
                        onClick={() => handleSortChange("latest")}
                      >
                        En Yeni
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className={sortBy === "oldest" 
                          ? "bg-aihub-blue/20 text-aihub-blue hover:bg-aihub-blue/30" 
                          : "bg-white/5 hover:bg-white/10 text-white/70"}
                        onClick={() => handleSortChange("oldest")}
                      >
                        En Eski
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("Tümü");
                      setSortBy("latest");
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

        {/* Categories */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        </section>

        {/* News Grid */}
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {news.length} Haber Bulundu
              </h2>
            </div>
            
            {news.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                  <NewsCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    excerpt={item.excerpt}
                    category={item.category}
                    imageUrl={item.imageUrl}
                    publishedAt={item.publishedAt}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-white/70 mb-4">Aramanıza uygun haber bulunamadı.</p>
                <Button 
                  variant="outline" 
                  className="border-white/10 hover:bg-white/5"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Tümü");
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

export default AINews;
