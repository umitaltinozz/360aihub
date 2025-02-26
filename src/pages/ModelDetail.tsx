import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Calendar, 
  Star, 
  ArrowLeft, 
  Zap, 
  Code, 
  ExternalLink, 
  Share2, 
  MessageSquareText,
  LineChart,
  BookOpen,
  Download,
  BarChart
} from "lucide-react";
import { formatDistance } from "date-fns";
import { tr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock AI models data
const aiModelsData = [
  {
    id: "1",
    name: "OpenAI GPT-4",
    company: "OpenAI",
    description: "GPT-4, OpenAI'nin en gelişmiş dil modelidir. Geniş görevler yelpazesinde insana yakın performans gösterir ve dil anlama, problem çözme ve yaratıcı içerik oluşturma yeteneklerine sahiptir.",
    longDescription: "GPT-4, OpenAI'nin en son ve en güçlü çok modlu büyük dil modelidir. Metin isteklerini anlayabilir ve hem metin hem de görüntüler oluşturabilir. 1 milyondan fazla kelimeyi anlayabilir, çoklu dil desteği sunar ve karmaşık görevleri yerine getirebilir. GPT-4, kodlama, yazma, öğrenme ve problem çözme dahil olmak üzere çeşitli görevlerde harika bir şekilde performans gösterir. GPT-4, daha doğru ve daha az halüsinasyon yaşar.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    releaseDate: "2023-03-14",
    latestUpdate: "2023-12-13",
    strengths: ["Dil Anlama", "Kod Yazma", "Çok Modlu", "Uzun Bellek", "Çok Dilli Destek"],
    weakness: ["Yüksek Hesaplama Maliyeti", "Hallüsinasyonlar", "Veriler 2023'e Kadar"],
    rating: 4.9,
    totalRatings: 1245,
    free: false,
    pricing: [
      { plan: "Standart", price: "$0.03", unit: "1K tokens girdi", features: ["Genel metin işlemleri", "Limit 5 mesaj/dakika"] },
      { plan: "Pro", price: "$0.06", unit: "1K tokens çıktı", features: ["Daha yüksek hız", "Öncelikli erişim", "Görsel işleme"] },
      { plan: "Kurumsal", price: "Özel", unit: "Yıllık ödeme", features: ["Gelişmiş güvenlik", "Özelleştirilmiş eğitim", "Destek"] }
    ],
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: true,
    documentation: "https://platform.openai.com/docs/models/gpt-4",
    benchmarks: [
      { name: "MMLU", score: 86.4, maxScore: 100, description: "Çoklu görev dil anlama testi" },
      { name: "HumanEval", score: 67, maxScore: 100, description: "Kod oluşturma ve anlama testi" },
      { name: "GSM8K", score: 92.0, maxScore: 100, description: "İleri matematik problem çözme" },
      { name: "MATH", score: 42.5, maxScore: 100, description: "Üniversite seviyesi matematik" }
    ],
    context: "Cihaza bağlı olarak değişiklik gösterir, ancak genellikle 128,000 token.",
    trainingData: "2023 Nisan'ına kadar web verileri, kitaplar, makaleler ve diğer metinler.",
    parameters: "1.76 trilyon parametre (tahmini)",
    useCases: ["İçerik Oluşturma", "Kod Geliştirme", "Eğitim Yardımı", "Araştırma", "İş Otomasyonu", "Müşteri Desteği"],
    relatedModels: ["GPT-3.5", "Claude 3", "Gemini Pro"]
  },
  {
    id: "2",
    name: "Gemini Pro",
    company: "Google",
    description: "Metin, görsel ve çoklu veri formatlarını anlayabilen güçlü model.",
    longDescription: "Gemini, Google'ın özellikle metni anlama, üretme, kodla çalışma ve karmaşık mantık için tasarlanmış en gelişmiş multimodal modelidir. Gemini Pro, Google'ın bir dizi görev için geliştirilmiş çok modlu geniş dil modelidir. Fotoğraflar, PDF'ler, ses ve daha fazlası gibi farklı girdi türlerini anlama ve daha hassas yanıtlar oluşturma yeteneğine sahiptir.",
    imageUrl: "https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    releaseDate: "2023-12-06",
    latestUpdate: "2024-02-15",
    strengths: ["Multimodal", "Bilgi Sorgulama", "Muhakeme", "Güncel Bilgi", "İyi Dokümantasyon"],
    weakness: ["GPT-4'ten Daha Az Doğru", "Daha Kısa Bağlam Penceresi", "Sınırlı Dil Desteği"],
    rating: 4.7,
    totalRatings: 986,
    free: true,
    pricing: [
      { plan: "Ücretsiz", price: "Ücretsiz", unit: "", features: ["API Erişimi", "Günlük kullanım limiti", "Görsel anlama"] },
      { plan: "Google AI Studio", price: "$0.000125", unit: "1K girdi token", features: ["Aylık $10 ücretsiz kredi", "Google Cloud entegrasyonu"] },
      { plan: "Kurumsal", price: "Özel", unit: "", features: ["Google Workspace entegrasyonu", "Yönetim kontrolleri", "Gelişmiş güvenlik"] }
    ],
    type: "Dil Modeli",
    category: "Üretken AI",
    featured: true,
    documentation: "https://ai.google.dev/gemini-api/docs",
    benchmarks: [
      { name: "MMLU", score: 79.1, maxScore: 100, description: "Çoklu görev dil anlama testi" },
      { name: "HumanEval", score: 67.7, maxScore: 100, description: "Kod oluşturma ve anlama testi" },
      { name: "GSM8K", score: 86.5, maxScore: 100, description: "İleri matematik problem çözme" },
      { name: "MATH", score: 32.6, maxScore: 100, description: "Üniversite seviyesi matematik" }
    ],
    context: "32,000 token",
    trainingData: "2023'e kadar web ve diğer kaynaklar",
    parameters: "Açıklanmadı (tahmini 250-350 milyar)",
    useCases: ["Genel AI Asistanı", "Multimodal Anlama", "Araştırma", "Programlama", "Doküman Analizi"],
    relatedModels: ["Gemini Ultra", "Gemini Nano", "PaLM", "Bard"]
  },
  // Other models data would be here...
];

const ModelDetail = () => {
  const { modelId } = useParams<{ modelId: string }>();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const timer = setTimeout(() => {
      const foundModel = aiModelsData.find(m => m.id === modelId);
      setModel(foundModel);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [modelId]);
  
  const handleTestClick = () => {
    toast({
      title: "Test Modu",
      description: "Model test özelliği yakında aktif olacak!",
    });
  };
  
  const handleShareClick = () => {
    // In a real app, this would copy the URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Bağlantı Kopyalandı",
        description: "Model bağlantısı panoya kopyalandı.",
      });
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-3xl font-bold text-white animate-pulse">Model Yükleniyor...</div>
      </div>
    );
  }
  
  if (!model) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Model Bulunamadı</h2>
            <p className="text-white/70 mb-6">Aradığınız model bulunamadı veya kaldırılmış olabilir.</p>
            <Link to="/ai-models">
              <Button variant="outline">Tüm Modellere Dön</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Format release date
  const releaseDate = new Date(model.releaseDate);
  const formattedReleaseDate = releaseDate.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  // Time since release
  const timeSinceRelease = formatDistance(releaseDate, new Date(), { 
    addSuffix: true,
    locale: tr 
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Model Header */}
        <div className="bg-gradient-to-b from-indigo-900/20 via-gray-900 to-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center mb-6">
              <Link to="/ai-models" className="text-white/70 hover:text-white flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Tüm Modeller
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <img
                    src={model.imageUrl}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                  {model.free && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-green-500 text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                        Ücretsiz
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {model.logoUrl && (
                      <img 
                        src={model.logoUrl} 
                        alt={model.company} 
                        className="w-8 h-8 mr-3 bg-white rounded p-1"
                      />
                    )}
                    <span className="text-white/70">{model.company}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-medium">{model.rating.toFixed(1)}</span>
                    <span className="text-sm text-white/50 ml-1">({model.totalRatings})</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-white/70">
                    <Calendar className="h-4 w-4 mr-2" />
                    <div>
                      <p>Yayın Tarihi: <span className="text-white">{formattedReleaseDate}</span></p>
                      <p className="text-xs">{timeSinceRelease}</p>
                    </div>
                  </div>
                  
                  {model.latestUpdate && (
                    <div className="flex items-center text-sm text-white/70">
                      <Zap className="h-4 w-4 mr-2" />
                      <p>Son Güncelleme: <span className="text-white">
                        {new Date(model.latestUpdate).toLocaleDateString("tr-TR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span></p>
                    </div>
                  )}
                  
                  {model.documentation && (
                    <div className="flex items-center text-sm">
                      <Code className="h-4 w-4 mr-2" />
                      <a 
                        href={model.documentation} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center"
                      >
                        Dokümantasyon
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2 mt-6">
                  <Button className="w-1/2 bg-blue-600 hover:bg-blue-700" onClick={handleTestClick}>
                    Test Et
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-1/2 border-white/10 hover:bg-white/5"
                    onClick={handleShareClick}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Paylaş
                  </Button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{model.name}</h1>
                <p className="text-white/70 text-lg mb-6">{model.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-white/70 mb-2">Güçlü Yönler</h3>
                    <div className="flex flex-wrap gap-2">
                      {model.strengths.map((strength: string, index: number) => (
                        <div 
                          key={index} 
                          className="bg-green-500/20 text-green-400 border-green-500/30 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {strength}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {model.weakness && (
                    <div>
                      <h3 className="text-sm font-medium text-white/70 mb-2">Sınırlamalar</h3>
                      <div className="flex flex-wrap gap-2">
                        {model.weakness.map((weakness: string, index: number) => (
                          <div 
                            key={index} 
                            className="bg-red-500/20 text-red-400 border-red-500/30 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {weakness}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <p className="text-white/90 mb-6">{model.longDescription}</p>
                
                <div>
                  <h3 className="text-sm font-medium text-white/70 mb-2">Kullanım Alanları</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {model.useCases.map((useCase: string, index: number) => (
                      <div 
                        key={index} 
                        className="flex items-center p-2 bg-white/5 rounded-md"
                      >
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Model Details */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MessageSquareText className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-medium">Bağlam Boyutu</h3>
                </div>
                <p className="text-2xl font-bold">{model.context}</p>
                <p className="text-sm text-white/60 mt-1">
                  Modelin tek seferde işleyebileceği maksimum metin miktarı
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-medium">Eğitim Verileri</h3>
                </div>
                <p className="text-md">{model.trainingData}</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BarChart className="h-5 w-5 mr-2 text-blue-400" />
                  <h3 className="text-lg font-medium">Parametre Sayısı</h3>
                </div>
                <p className="text-2xl font-bold">{model.parameters}</p>
                <p className="text-sm text-white/60 mt-1">
                  Modelin karmaşıklığını ve kapasitesini belirler
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModelDetail;
