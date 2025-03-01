
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Check, Clock, Info, Shield, Zap, AlertTriangle, RefreshCw } from "lucide-react";

const UserNotifications = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "Aboneliğiniz Yenilendi",
      message: "AI Pro aboneliğiniz otomatik olarak yenilendi. Bir sonraki ödeme 15.07.2024 tarihinde gerçekleşecek.",
      date: "15.06.2024 09:23",
      type: "billing",
      isRead: false
    },
    {
      id: 2,
      title: "API Kullanım Limiti",
      message: "Bu ayki API kullanım limitinizin %80'ine ulaştınız. Limit aşımı durumunda ek ücretlendirme yapılacaktır.",
      date: "13.06.2024 15:47",
      type: "usage",
      isRead: false
    },
    {
      id: 3,
      title: "Güvenlik Uyarısı",
      message: "Hesabınıza farklı bir konumdan (İstanbul, Türkiye) giriş yapıldı. Siz değilseniz lütfen şifrenizi değiştirin.",
      date: "10.06.2024 23:15",
      type: "security",
      isRead: true
    },
    {
      id: 4,
      title: "GPT-4o Modeli Artık Kullanımda",
      message: "Aboneliğinize dahil olan GPT-4o modeli artık kullanıma hazır. Hemen deneyin!",
      date: "08.06.2024 14:30",
      type: "updates",
      isRead: true
    },
    {
      id: 5,
      title: "Bakım Çalışması",
      message: "12.06.2024 tarihinde 02:00-05:00 saatleri arasında planlı bakım çalışması yapılacaktır. Bu süre zarfında servislerimizde kesinti yaşanabilir.",
      date: "05.06.2024 11:20",
      type: "system",
      isRead: true
    },
    {
      id: 6,
      title: "Fatura Oluşturuldu",
      message: "Haziran 2024 dönemine ait faturanız oluşturuldu. Faturanızı İndirmek için tıklayın.",
      date: "01.06.2024 08:10",
      type: "billing",
      isRead: true
    },
    {
      id: 7,
      title: "Yeni API Anahtarı",
      message: "Yeni bir API anahtarı oluşturdunuz. Bu anahtarın güvenliğini sağladığınızdan emin olun.",
      date: "28.05.2024 17:35",
      type: "security",
      isRead: true
    }
  ];
  
  // Filter notifications based on selected tab
  const filteredNotifications = selectedTab === "all" 
    ? notifications 
    : selectedTab === "unread" 
      ? notifications.filter(notification => !notification.isRead)
      : notifications.filter(notification => notification.type === selectedTab);
  
  // Get unread count
  const unreadCount = notifications.filter(notification => !notification.isRead).length;
  
  // Function to get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case "billing":
        return <Bell className="h-5 w-5 text-blue-400" />;
      case "usage":
        return <Zap className="h-5 w-5 text-purple-400" />;
      case "security":
        return <Shield className="h-5 w-5 text-red-400" />;
      case "updates":
        return <RefreshCw className="h-5 w-5 text-green-400" />;
      case "system":
        return <AlertTriangle className="h-5 w-5 text-amber-400" />;
      default:
        return <Info className="h-5 w-5 text-white/80" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold page-heading">Bildirimler</h1>
          {unreadCount > 0 && (
            <Badge className="ml-2 bg-aihub-blue">{unreadCount} Yeni</Badge>
          )}
        </div>
        <div className="flex mt-4 sm:mt-0">
          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-sm">
            <Check className="h-4 w-4 mr-1" /> Tümünü Okundu İşaretle
          </Button>
        </div>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full border-b border-white/10 bg-transparent overflow-x-auto flex-wrap">
          <TabsTrigger value="all" className="data-[state=active]:bg-white/5">
            Tümü
          </TabsTrigger>
          <TabsTrigger value="unread" className="data-[state=active]:bg-white/5">
            Okunmamış {unreadCount > 0 && <span className="ml-1 text-xs">({unreadCount})</span>}
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-white/5">
            Fatura
          </TabsTrigger>
          <TabsTrigger value="usage" className="data-[state=active]:bg-white/5">
            Kullanım
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-white/5">
            Güvenlik
          </TabsTrigger>
          <TabsTrigger value="updates" className="data-[state=active]:bg-white/5">
            Güncellemeler
          </TabsTrigger>
          <TabsTrigger value="system" className="data-[state=active]:bg-white/5">
            Sistem
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={selectedTab} className="mt-4 space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
                <Bell className="h-12 w-12 text-white/30 mb-4" />
                <p className="text-white/80 high-contrast-text mb-2">Hiç bildirim yok</p>
                <p className="text-white/60 text-sm">Bu kategoride hiç bildirim bulunamadı.</p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map(notification => (
              <Card 
                key={notification.id} 
                className={`bg-black/30 ${!notification.isRead ? 'border-aihub-blue/50' : 'border-white/10'} backdrop-blur-sm transition-all hover:bg-black/40`}
              >
                <CardHeader className="p-4 flex flex-row items-start gap-4">
                  <div className="bg-black/30 p-2 rounded-full">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base mb-1">{notification.title}</CardTitle>
                      {!notification.isRead && (
                        <Badge variant="outline" className="bg-aihub-blue/20 text-aihub-blue border-aihub-blue/20">
                          Yeni
                        </Badge>
                      )}
                    </div>
                    <p className="text-white/80 high-contrast-text text-sm mb-2">{notification.message}</p>
                    <div className="flex items-center text-white/60 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {notification.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 pt-0 pl-16">
                  <div className="flex justify-end space-x-2">
                    {!notification.isRead && (
                      <Button variant="ghost" size="sm" className="text-sm">
                        <Check className="h-4 w-4 mr-1" /> Okundu İşaretle
                      </Button>
                    )}
                    {notification.type === "billing" && (
                      <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-sm">
                        Faturayı Görüntüle
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserNotifications;
