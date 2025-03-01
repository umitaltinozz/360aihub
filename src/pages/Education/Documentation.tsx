
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Search, FileText, Book, Bookmark, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Dokümantasyon</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Dökümanlarda ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg max-w-3xl">
              AIHUB360 platform dökümanları, API referansları ve eğitim materyalleri. 
              Yapay zeka teknolojilerini daha etkili kullanmanız için gerekli tüm kaynaklar.
            </p>
          </div>

          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="w-full border-b border-white/10 bg-transparent">
              <TabsTrigger value="guides" className="flex-1 data-[state=active]:bg-white/5">
                <FileText className="mr-2 h-4 w-4" />
                Rehberler
              </TabsTrigger>
              <TabsTrigger value="api" className="flex-1 data-[state=active]:bg-white/5">
                <Book className="mr-2 h-4 w-4" />
                API Dökümanları
              </TabsTrigger>
              <TabsTrigger value="sdk" className="flex-1 data-[state=active]:bg-white/5">
                <BookOpen className="mr-2 h-4 w-4" />
                SDK
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="flex-1 data-[state=active]:bg-white/5">
                <Bookmark className="mr-2 h-4 w-4" />
                Eğitimler
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides" className="space-y-4 mt-4">
              <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Başlangıç Rehberi</CardTitle>
                      <CardDescription>AIHUB360 platformunun temel özellikleri ve kullanım kılavuzu</CardDescription>
                    </div>
                    <Badge variant="outline">Yeni</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 high-contrast-text">
                    AIHUB360 platformunda yapabileceğiniz temel işlemler, hesap yönetimi, API kullanımı ve
                    mevcut modellerin kullanımı hakkında bilgiler içerir.
                  </p>
                  <div className="flex justify-end mt-4">
                    <a href="#" className="text-aihub-blue hover:underline">Rehbere Git →</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>API Anahtarları Rehberi</CardTitle>
                  <CardDescription>API anahtarlarını oluşturma, yönetme ve güvenli kullanma</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 high-contrast-text">
                    API anahtarlarınızı nasıl güvenli bir şekilde yöneteceğinizi, yeni anahtarlar oluşturma ve 
                    mevcut anahtarları değiştirme işlemlerini içerir.
                  </p>
                  <div className="flex justify-end mt-4">
                    <a href="#" className="text-aihub-blue hover:underline">Rehbere Git →</a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Model Kullanım Rehberi</CardTitle>
                  <CardDescription>AI modellerini etkin kullanma ve özelleştirme</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 high-contrast-text">
                    AIHUB360 platformundaki yapay zeka modellerini en verimli şekilde nasıl kullanacağınızı, 
                    parametreleri ayarlamayı ve sonuçları optimize etmeyi öğrenin.
                  </p>
                  <div className="flex justify-end mt-4">
                    <a href="#" className="text-aihub-blue hover:underline">Rehbere Git →</a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="api" className="mt-4">
              <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>API Dökümanları</CardTitle>
                  <CardDescription>AIHUB360 API'si için tam referans dökümantasyonu</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Giriş</h3>
                      <p className="text-white/80 high-contrast-text">
                        AIHUB360 API'si, platformumuzdaki AI modellerine programatik erişim sağlar. 
                        REST API üzerinden tüm modellerimize erişebilir, özelleştirmeler yapabilir ve kendi 
                        uygulamalarınıza entegre edebilirsiniz.
                      </p>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Kimlik Doğrulama</h3>
                      <p className="text-white/80 high-contrast-text mb-4">
                        Tüm API istekleri için bir API anahtarı gereklidir. API anahtarınızı hesap ayarlarınızdan oluşturabilirsiniz.
                      </p>
                      <div className="bg-black/40 p-3 rounded-md border border-white/5">
                        <code className="text-sm text-white/90">
                          Authorization: Bearer YOUR_API_KEY
                        </code>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Endpoint'ler</h3>
                      <ul className="space-y-4">
                        <li>
                          <div className="flex items-center">
                            <Badge variant="outline" className="mr-2">GET</Badge>
                            <span className="text-white/90 font-medium">/api/v1/models</span>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Kullanılabilir tüm modelleri listeler</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Badge variant="outline" className="mr-2">POST</Badge>
                            <span className="text-white/90 font-medium">/api/v1/completions</span>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Metin tamamlama için API çağrısı</p>
                        </li>
                        <li>
                          <div className="flex items-center">
                            <Badge variant="outline" className="mr-2">POST</Badge>
                            <span className="text-white/90 font-medium">/api/v1/images/generate</span>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Görsel üretmek için API çağrısı</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sdk" className="mt-4">
              <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>SDK Dökümanları</CardTitle>
                  <CardDescription>AIHUB360 SDK'sı için dökümantasyon ve örnekler</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Desteklenen Diller</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                        <div className="bg-black/20 p-3 rounded-md border border-white/10 flex items-center">
                          <div className="mr-3 bg-blue-500/20 p-2 rounded-full">
                            <span className="text-blue-400 font-bold">JS</span>
                          </div>
                          <div>
                            <p className="font-medium">JavaScript</p>
                            <p className="text-white/60 text-sm">npm install aihub360</p>
                          </div>
                        </div>
                        <div className="bg-black/20 p-3 rounded-md border border-white/10 flex items-center">
                          <div className="mr-3 bg-green-500/20 p-2 rounded-full">
                            <span className="text-green-400 font-bold">PY</span>
                          </div>
                          <div>
                            <p className="font-medium">Python</p>
                            <p className="text-white/60 text-sm">pip install aihub360</p>
                          </div>
                        </div>
                        <div className="bg-black/20 p-3 rounded-md border border-white/10 flex items-center">
                          <div className="mr-3 bg-red-500/20 p-2 rounded-full">
                            <span className="text-red-400 font-bold">RB</span>
                          </div>
                          <div>
                            <p className="font-medium">Ruby</p>
                            <p className="text-white/60 text-sm">gem install aihub360</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="bg-white/10" />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Hızlı Başlangıç</h3>
                      <p className="text-white/80 high-contrast-text mb-4">
                        Aşağıda JavaScript kullanarak basit bir istek örneği bulunmaktadır:
                      </p>
                      <div className="bg-black/40 p-3 rounded-md border border-white/5">
                        <pre className="text-sm text-white/90 overflow-x-auto">
{`import { AIHub360Client } from 'aihub360';

const client = new AIHub360Client({
  apiKey: 'YOUR_API_KEY'
});

const response = await client.completions.create({
  model: 'turk-gpt-3.5',
  prompt: 'Merhaba, benim adım',
  maxTokens: 100
});

console.log(response.text);`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tutorials" className="mt-4">
              <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Video Eğitimleri</CardTitle>
                  <CardDescription>AIHUB360 kullanımı için adım adım eğitim videoları</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="bg-black/20 rounded-lg border border-white/10 overflow-hidden">
                      <div className="aspect-video bg-black/40 flex items-center justify-center">
                        <span className="text-white/50">Video Önizleme</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Platform Tanıtımı</h3>
                        <p className="text-white/70 text-sm">AIHUB360 platformunun temel özellikleri ve kullanımı</p>
                        <div className="flex items-center mt-3">
                          <Badge variant="outline" className="mr-2">14:32</Badge>
                          <span className="text-white/50 text-xs">512 görüntülenme</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/20 rounded-lg border border-white/10 overflow-hidden">
                      <div className="aspect-video bg-black/40 flex items-center justify-center">
                        <span className="text-white/50">Video Önizleme</span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">API Kullanımı</h3>
                        <p className="text-white/70 text-sm">API anahtarı oluşturma ve kullanım örnekleri</p>
                        <div className="flex items-center mt-3">
                          <Badge variant="outline" className="mr-2">18:49</Badge>
                          <span className="text-white/50 text-xs">327 görüntülenme</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-white/60">Daha fazla eğitim videosu yakında eklenecektir.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
