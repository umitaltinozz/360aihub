
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  ShoppingCart, 
  Download, 
  MessageCircle, 
  Share, 
  ThumbsUp, 
  FileText, 
  Check, 
  Shield,
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MarketplaceItemDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("description");

  // Demo verisi
  const item = {
    id,
    title: "Gelişmiş SEO için Blog Yazı Oluşturucu",
    description: "Bu paket, Google sıralamasında üst sıralara çıkabilecek SEO dostu içerikler oluşturmanıza yardımcı olan kapsamlı bir prompt setini içermektedir. Her tür sektör ve konu için uyarlanabilir.",
    price: 49.99,
    rating: 4.7,
    reviews: 23,
    downloads: 148,
    category: "SEO ve İçerik",
    tags: ["SEO", "Blog yazıları", "İçerik pazarlama"],
    lastUpdated: "23 Mayıs 2024",
    seller: {
      name: "SEO Uzmanı",
      avatar: "https://github.com/shadcn.png",
      rating: 4.9,
      sales: 246
    },
    details: `
# SEO Dostu Blog İçeriği Oluşturma Promptu

Bu prompt paketi, aşağıdaki öğeleri içerir:

1. **Anahtar Kelime Analizi**: Hedef anahtar kelimeleri belirlemek için prompt
2. **İçerik Yapısı**: SERP'te üst sıralarda çıkan içeriklerin yapısını analiz etmek için prompt
3. **Başlık Oluşturucu**: Dikkat çekici ve SEO dostu başlıklar oluşturmak için prompt
4. **Meta Açıklama Oluşturucu**: Tıklama oranını artıracak meta açıklamalar için prompt
5. **Alt Başlık Oluşturucu**: İçeriğinizi organize edecek SEO dostu alt başlıklar için prompt
6. **İçerik Yazımı**: Hedef anahtar kelimeleri doğal şekilde yerleştiren içerik için prompt
7. **Sonuç Bölümü**: Kullanıcıyı harekete geçiren etkileyici sonuçlar için prompt

## Nasıl Kullanılır

Her prompt, hedef anahtar kelimeleriniz, sektörünüz ve hedef kitlenize göre özelleştirilebilir.
Tüm promptlarda değiştirilecek değişkenler [ ] içinde belirtilmiştir.

## Bonus İçerikler

- İç ve dış bağlantı stratejisi için prompt
- İçerik güncellemesi için prompt
- Readability skoru iyileştirme promptu
    `,
    faqs: [
      {
        question: "Bu promptları hangi AI modelleriyle kullanabilirim?",
        answer: "Promptlarımız tüm büyük dil modelleriyle (GPT-4, Claude, Gemini vb.) uyumlu çalışacak şekilde tasarlanmıştır."
      },
      {
        question: "Satın aldıktan sonra güncellemeler alacak mıyım?",
        answer: "Evet, paket güncellemeleri ücretsiz olarak almanız sağlanacaktır. Tüm güncellemeler hakkında bilgilendirme yapılacaktır."
      },
      {
        question: "İade politikanız nedir?",
        answer: "Satın alma işleminden sonraki 7 gün içinde, eğer içerikten memnun kalmazsanız iade talebinde bulunabilirsiniz."
      }
    ]
  };

  const handleAddToCart = () => {
    toast({
      title: "Sepete Eklendi",
      description: `${item.title} sepetinize eklendi.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Satın Alma",
      description: "Ödeme sayfasına yönlendiriliyorsunuz...",
    });
    // Gerçek uygulamada ödeme sayfasına yönlendirme yapılır
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="mb-4">
          <Link to="/marketplace" className="flex items-center text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Marketplace'e Dön
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge className="bg-[#252525]">{item.category}</Badge>
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-[#252525]/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="font-medium">{item.rating}</span>
                      <span className="text-white/60 ml-1">({item.reviews} değerlendirme)</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 text-white/60 mr-1" />
                      <span className="text-white/60">{item.downloads} indirme</span>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold">${item.price}</div>
              </div>

              <p className="text-white/80 mb-6">{item.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                  onClick={handleBuyNow}
                >
                  Hemen Satın Al
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-white/10 hover:bg-white/5"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Sepete Ekle
                </Button>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-[#252525]">
                  <TabsTrigger value="description">Açıklama</TabsTrigger>
                  <TabsTrigger value="faq">SSS</TabsTrigger>
                  <TabsTrigger value="reviews">Değerlendirmeler</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-6">
                  <div className="prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: item.details.replace(/\n/g, '<br>') }} />
                  </div>
                </TabsContent>
                <TabsContent value="faq" className="p-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Sık Sorulan Sorular</h2>
                    {item.faqs.map((faq, index) => (
                      <div key={index} className="mb-4 pb-4 border-b border-white/10 last:border-0">
                        <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                        <p className="text-white/70">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="p-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Kullanıcı Değerlendirmeleri</h2>
                    <div className="bg-[#252525] p-4 rounded-lg mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Ali Yılmaz</div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-xs text-white/60 ml-2">2 gün önce</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/80">
                        Bu promptlar gerçekten işe yarıyor! Blog yazılarımın Google sıralaması belirgin şekilde yükseldi.
                        Özellikle anahtar kelime entegrasyonu konusundaki öneriler çok faydalı.
                      </p>
                    </div>

                    <div className="bg-[#252525] p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">Zeynep Demir</div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            <Star className="h-3 w-3 text-white/20" />
                            <span className="text-xs text-white/60 ml-2">1 hafta önce</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/80">
                        İçerik oluşturma sürecimi ciddi anlamda hızlandırdı. Başlık önerileri çok yaratıcı.
                        Tek eksik yönü daha çok niş sektörlere uyarlanabilir olması olabilir.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Satıcı Bilgileri</h2>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={item.seller.avatar} />
                  <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{item.seller.name}</div>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span>{item.seller.rating}</span>
                    <span className="text-xs text-white/60 ml-2">{item.seller.sales} satış</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">Satıcı Profilini Gör</Button>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Ürün Detayları</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Son Güncelleme:</span>
                  <span>{item.lastUpdated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Kategori:</span>
                  <span>{item.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">İndirme Sayısı:</span>
                  <span>{item.downloads}</span>
                </div>
                <Separator className="bg-white/10 my-3" />
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Anında teslimat</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Ücretsiz güncellemeler</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>7 gün iade garantisi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF]/20 to-[#8A2BE2]/20 border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-5 w-5 text-[#00BFFF] mr-2" />
                <h2 className="text-lg font-semibold">Güvenli Alışveriş</h2>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Tüm satın alma işlemleri güvenli ödeme sistemimiz üzerinden gerçekleştirilir. 
                Satıcılar ürün kalitesini garanti etmek için inceleme sürecinden geçer.
              </p>
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 text-[#8A2BE2] mr-2" />
                <span className="text-sm">AIHUB360 Kalite Garantisi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-[#252525]">Pazarlama</Badge>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-sm">4.5</span>
                    </div>
                  </div>
                  <h3 className="font-medium mb-2">Sosyal Medya İçerik Üretici</h3>
                  <p className="text-sm text-white/70 mb-4 line-clamp-2">
                    Viral sosyal medya içerikleri için AI prompts koleksiyonu
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$29.99</span>
                    <Button size="sm" variant="outline" className="border-white/10 hover:bg-white/5">
                      Detaylar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketplaceItemDetail;
