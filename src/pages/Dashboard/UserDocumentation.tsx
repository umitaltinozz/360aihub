
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const UserDocumentation = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 page-heading">Dökümanlar</h1>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
          <Input
            placeholder="Dökümanlarda ara..."
            className="pl-8 bg-black/20 border-white/10"
          />
        </div>
      </div>

      <Tabs defaultValue="guides">
        <TabsList className="w-full border-b border-white/10 bg-transparent">
          <TabsTrigger value="guides" className="flex-1 data-[state=active]:bg-white/5">Rehberler</TabsTrigger>
          <TabsTrigger value="api" className="flex-1 data-[state=active]:bg-white/5">API Dökümanları</TabsTrigger>
          <TabsTrigger value="sdk" className="flex-1 data-[state=active]:bg-white/5">SDK</TabsTrigger>
          <TabsTrigger value="tutorials" className="flex-1 data-[state=active]:bg-white/5">Eğitimler</TabsTrigger>
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
              <p className="text-white/80 high-contrast-text">
                Detaylı API referansları bu bölümde listelenmektedir. Halen dokümantasyon hazırlanma aşamasındadır.
              </p>
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
              <p className="text-white/80 high-contrast-text">
                AIHUB360 SDK'sı için dökümantasyon çalışmaları devam etmektedir.
              </p>
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
              <p className="text-white/80 high-contrast-text">
                Video eğitimleri yakında eklenecektir.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDocumentation;
