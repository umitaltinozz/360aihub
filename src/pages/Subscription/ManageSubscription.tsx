
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowRight, Calendar, Check, CreditCard, Download, Info, Settings } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const ManageSubscription = () => {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  
  // Sample subscription data
  const subscription = {
    name: "AI Pro",
    price: "599 ₺/ay",
    nextPayment: "15.07.2024",
    status: "active",
    paymentMethod: "Visa (****1234)",
    features: [
      "Sınırsız API isteği",
      "500K token/ay",
      "Tüm modeller dahil",
      "Öncelikli destek",
      "Özel model ayarları"
    ],
    startDate: "15.02.2024",
    renewalDate: "15.07.2024",
    usageTokens: {
      used: 125000,
      total: 500000
    },
    usageAPI: {
      used: 3452,
      unlimited: true
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 page-heading">Abonelik Yönetimi</h1>
        <Link to="/subscription/plans">
          <Button variant="outline" className="border-white/10 hover:bg-white/5">
            Planları Görüntüle <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Current Plan */}
        <Card className="bg-black/30 border-white/10 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">Mevcut Abonelik</CardTitle>
                <CardDescription>Aktif plan ve detayları</CardDescription>
              </div>
              <Badge className="bg-green-500/30 text-green-400 border-0">Aktif</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-2xl font-bold">{subscription.name}</h2>
                <p className="text-white/80 high-contrast-text">{subscription.price}</p>
              </div>
              
              <div className="flex flex-col mt-4 md:mt-0 md:items-end">
                <span className="text-white/80 high-contrast-text text-sm">Sonraki Ödeme</span>
                <div className="flex items-center mt-1">
                  <Calendar className="h-4 w-4 mr-1 text-white/70" />
                  <span>{subscription.nextPayment}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Başlangıç Tarihi</CardTitle>
                </CardHeader>
                <CardContent className="py-2 px-4 text-lg">{subscription.startDate}</CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Yenileme Tarihi</CardTitle>
                </CardHeader>
                <CardContent className="py-2 px-4 text-lg">{subscription.renewalDate}</CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-sm">Ödeme Yöntemi</CardTitle>
                </CardHeader>
                <CardContent className="py-2 px-4 text-lg">{subscription.paymentMethod}</CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Plan Özellikleri</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-white/90 high-contrast-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between flex-wrap gap-4">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <CreditCard className="h-4 w-4 mr-2" /> Ödeme Yöntemini Güncelle
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                <Settings className="h-4 w-4 mr-2" /> Plan Ayarları
              </Button>
            </div>
            
            <Button variant="destructive" onClick={() => setCancelDialogOpen(true)}>
              Aboneliği İptal Et
            </Button>
          </CardFooter>
        </Card>
        
        {/* Usage Stats */}
        <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Kullanım İstatistikleri</CardTitle>
            <CardDescription>Bu ayki kullanım</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80 high-contrast-text">Token Kullanımı</span>
                <span className="text-white/80 high-contrast-text">{Math.round(subscription.usageTokens.used / subscription.usageTokens.total * 100)}%</span>
              </div>
              <Progress value={subscription.usageTokens.used / subscription.usageTokens.total * 100} className="h-2" />
              <div className="flex justify-between mt-1 text-sm">
                <span>{(subscription.usageTokens.used / 1000).toFixed(0)}K</span>
                <span>{(subscription.usageTokens.total / 1000).toFixed(0)}K</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-white/80 high-contrast-text">API İstekleri</span>
                <span className="text-white/80 high-contrast-text">Sınırsız</span>
              </div>
              <Progress value={100} className="h-2 bg-white/10">
                <div className="bg-gradient-to-r from-aihub-blue via-aihub-purple to-aihub-blue bg-size-200 animate-gradient h-full" />
              </Progress>
              <div className="flex justify-between mt-1 text-sm">
                <span>{subscription.usageAPI.used} istek</span>
                <span>∞</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/usage" className="w-full">
              <Button className="w-full">Detaylı Kullanım Raporu</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      
      {/* Billing History Summary */}
      <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
        <CardHeader className="flex-row justify-between items-center">
          <div>
            <CardTitle>Faturalandırma Geçmişi</CardTitle>
            <CardDescription>Son faturalandırma işlemleri</CardDescription>
          </div>
          <Link to="/subscription/billing">
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              Tüm Geçmiş
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                    Tarih
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                    Dönem
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                    Tutar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                    İşlem
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">15.06.2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">15 Haz - 15 Tem 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">599,00 ₺</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Badge className="bg-green-500/20 text-green-400 border-0">Ödendi</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">15.05.2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">15 May - 15 Haz 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">599,00 ₺</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Badge className="bg-green-500/20 text-green-400 border-0">Ödendi</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Cancellation Alert */}
      {cancelDialogOpen && (
        <Alert variant="destructive" className="bg-red-950/30 text-red-400 border-red-800/50">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Abonelik İptali</AlertTitle>
          <AlertDescription>
            <p className="mb-4">Aboneliğinizi iptal etmek istediğinizden emin misiniz? İptal ederseniz:</p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Mevcut ödeme döneminin sonuna kadar tüm plan avantajlarından yararlanmaya devam edeceksiniz</li>
              <li>Bir sonraki ödeme tarihinde (15.07.2024) planınız otomatik olarak sonlandırılacak</li>
              <li>İstediğiniz zaman tekrar abone olabilirsiniz</li>
            </ul>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
                Vazgeç
              </Button>
              <Button variant="destructive">İptal Etmek İstiyorum</Button>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ManageSubscription;
