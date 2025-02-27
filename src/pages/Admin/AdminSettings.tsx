
import { useState } from "react";
import {
  Settings,
  Bell,
  Moon,
  Sun,
  Globe,
  Shield,
  Database,
  RefreshCw,
  Save,
  ToggleLeft,
  ToggleRight
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  
  // Bildirim ayarları
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newUserAlerts: true,
    paymentAlerts: true,
    supportAlerts: true,
    marketplaceAlerts: false,
    securityAlerts: true,
  });
  
  // Görünüm ayarları
  const [displaySettings, setDisplaySettings] = useState({
    theme: "dark",
    language: "tr",
    animationsEnabled: true,
    highContrastMode: false,
    compactMode: false,
  });
  
  // Güvenlik ayarları
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginNotifications: true,
    sessionTimeout: "30",
    ipRestriction: false,
  });
  
  // Sistem ayarları
  const [systemSettings, setSystemSettings] = useState({
    autoUpdates: true,
    dataBackup: true,
    errorReporting: true,
    usageStatistics: true,
    developerMode: false,
  });
  
  // Bildirim ayarlarını güncelle
  const updateNotificationSetting = (setting: keyof typeof notificationSettings, value: boolean) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: value,
    });
  };
  
  // Görünüm ayarlarını güncelle
  const updateDisplaySetting = (setting: keyof typeof displaySettings, value: any) => {
    setDisplaySettings({
      ...displaySettings,
      [setting]: value,
    });
  };
  
  // Güvenlik ayarlarını güncelle
  const updateSecuritySetting = (setting: keyof typeof securitySettings, value: any) => {
    setSecuritySettings({
      ...securitySettings,
      [setting]: value,
    });
  };
  
  // Sistem ayarlarını güncelle
  const updateSystemSetting = (setting: keyof typeof systemSettings, value: boolean) => {
    setSystemSettings({
      ...systemSettings,
      [setting]: value,
    });
  };
  
  // Ayarları kaydet
  const saveSettings = () => {
    // Gerçek uygulamada burada bir API çağrısı yapılır
    console.log("Ayarlar kaydediliyor:", {
      notificationSettings,
      displaySettings,
      securitySettings,
      systemSettings,
    });
    
    toast({
      title: "Ayarlar Kaydedildi",
      description: "Sistem ayarlarınız başarıyla güncellendi.",
    });
  };
  
  // Ayarları sıfırla
  const resetSettings = () => {
    // Varsayılan ayarlara dön
    setNotificationSettings({
      emailNotifications: true,
      pushNotifications: true,
      newUserAlerts: true,
      paymentAlerts: true,
      supportAlerts: true,
      marketplaceAlerts: false,
      securityAlerts: true,
    });
    
    setDisplaySettings({
      theme: "dark",
      language: "tr",
      animationsEnabled: true,
      highContrastMode: false,
      compactMode: false,
    });
    
    setSecuritySettings({
      twoFactorAuth: false,
      loginNotifications: true,
      sessionTimeout: "30",
      ipRestriction: false,
    });
    
    setSystemSettings({
      autoUpdates: true,
      dataBackup: true,
      errorReporting: true,
      usageStatistics: true,
      developerMode: false,
    });
    
    toast({
      title: "Ayarlar Sıfırlandı",
      description: "Tüm ayarlar varsayılan değerlerine döndürüldü.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Sistem Ayarları</h1>
        <p className="text-white/60 mt-1">
          Yönetici paneli ve sistem ayarlarını yapılandırın.
        </p>
      </div>
      
      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList className="grid grid-cols-4 bg-[#252525]">
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Bildirimler
          </TabsTrigger>
          <TabsTrigger value="display">
            <Sun className="h-4 w-4 mr-2" />
            Görünüm
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Güvenlik
          </TabsTrigger>
          <TabsTrigger value="system">
            <Settings className="h-4 w-4 mr-2" />
            Sistem
          </TabsTrigger>
        </TabsList>
        
        {/* Bildirim Ayarları */}
        <TabsContent value="notifications">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Bildirim Ayarları</CardTitle>
              <CardDescription>
                Hangi olaylar için bildirim almak istediğinizi yapılandırın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">E-posta Bildirimleri</Label>
                    <p className="text-sm text-white/60">
                      Önemli sistem olayları için e-posta bildirimleri alın
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notificationSettings.emailNotifications}
                    onCheckedChange={(checked) => updateNotificationSetting("emailNotifications", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Bildirimleri</Label>
                    <p className="text-sm text-white/60">
                      Tarayıcı ve mobil push bildirimleri alın
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) => updateNotificationSetting("pushNotifications", checked)}
                  />
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm font-medium mb-3">Bildirim Kategorileri</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="new-user-alerts">Yeni Kullanıcı Bildirimleri</Label>
                      <Switch
                        id="new-user-alerts"
                        checked={notificationSettings.newUserAlerts}
                        onCheckedChange={(checked) => updateNotificationSetting("newUserAlerts", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="payment-alerts">Ödeme Bildirimleri</Label>
                      <Switch
                        id="payment-alerts"
                        checked={notificationSettings.paymentAlerts}
                        onCheckedChange={(checked) => updateNotificationSetting("paymentAlerts", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="support-alerts">Destek Talep Bildirimleri</Label>
                      <Switch
                        id="support-alerts"
                        checked={notificationSettings.supportAlerts}
                        onCheckedChange={(checked) => updateNotificationSetting("supportAlerts", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketplace-alerts">Marketplace Bildirimleri</Label>
                      <Switch
                        id="marketplace-alerts"
                        checked={notificationSettings.marketplaceAlerts}
                        onCheckedChange={(checked) => updateNotificationSetting("marketplaceAlerts", checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="security-alerts">Güvenlik Bildirimleri</Label>
                      <Switch
                        id="security-alerts"
                        checked={notificationSettings.securityAlerts}
                        onCheckedChange={(checked) => updateNotificationSetting("securityAlerts", checked)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Görünüm Ayarları */}
        <TabsContent value="display">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Görünüm Ayarları</CardTitle>
              <CardDescription>
                Yönetici paneli görünümünü kişiselleştirin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="theme-select">Tema</Label>
                  <Select
                    value={displaySettings.theme}
                    onValueChange={(value) => updateDisplaySetting("theme", value)}
                  >
                    <SelectTrigger id="theme-select" className="bg-[#252525] border-white/10">
                      <SelectValue placeholder="Tema seçin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252525] border-white/10">
                      <SelectItem value="light">
                        <div className="flex items-center">
                          <Sun className="h-4 w-4 mr-2 text-yellow-400" />
                          <span>Açık Tema</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center">
                          <Moon className="h-4 w-4 mr-2 text-blue-400" />
                          <span>Koyu Tema</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="system">
                        <div className="flex items-center">
                          <Settings className="h-4 w-4 mr-2 text-gray-400" />
                          <span>Sistem Teması</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="language-select">Dil</Label>
                  <Select
                    value={displaySettings.language}
                    onValueChange={(value) => updateDisplaySetting("language", value)}
                  >
                    <SelectTrigger id="language-select" className="bg-[#252525] border-white/10">
                      <SelectValue placeholder="Dil seçin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252525] border-white/10">
                      <SelectItem value="tr">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          <span>Türkçe</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="en">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          <span>English</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="de">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          <span>Deutsch</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="animations-enabled">Animasyonlar</Label>
                    <p className="text-sm text-white/60">
                      Kullanıcı arayüzü animasyonlarını etkinleştir
                    </p>
                  </div>
                  <Switch
                    id="animations-enabled"
                    checked={displaySettings.animationsEnabled}
                    onCheckedChange={(checked) => updateDisplaySetting("animationsEnabled", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="high-contrast">Yüksek Kontrast Modu</Label>
                    <p className="text-sm text-white/60">
                      Daha iyi erişilebilirlik için kontrast oranını artır
                    </p>
                  </div>
                  <Switch
                    id="high-contrast"
                    checked={displaySettings.highContrastMode}
                    onCheckedChange={(checked) => updateDisplaySetting("highContrastMode", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="compact-mode">Kompakt Mod</Label>
                    <p className="text-sm text-white/60">
                      Daha fazla içerik göstermek için UI bileşenlerini küçült
                    </p>
                  </div>
                  <Switch
                    id="compact-mode"
                    checked={displaySettings.compactMode}
                    onCheckedChange={(checked) => updateDisplaySetting("compactMode", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Güvenlik Ayarları */}
        <TabsContent value="security">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Güvenlik Ayarları</CardTitle>
              <CardDescription>
                Sistem güvenliği ve oturum yönetimi ayarlarını yapılandırın.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor-auth">İki Faktörlü Kimlik Doğrulama</Label>
                    <p className="text-sm text-white/60">
                      Hesap güvenliğini artırmak için 2FA etkinleştir
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="two-factor-auth"
                      checked={securitySettings.twoFactorAuth}
                      onCheckedChange={(checked) => updateSecuritySetting("twoFactorAuth", checked)}
                    />
                    {securitySettings.twoFactorAuth && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white/10 hover:bg-white/5"
                      >
                        Yapılandır
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="login-notifications">Oturum Açma Bildirimleri</Label>
                    <p className="text-sm text-white/60">
                      Yeni oturum açmalar için bildirim gönder
                    </p>
                  </div>
                  <Switch
                    id="login-notifications"
                    checked={securitySettings.loginNotifications}
                    onCheckedChange={(checked) => updateSecuritySetting("loginNotifications", checked)}
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="session-timeout">Oturum Zaman Aşımı (dakika)</Label>
                  <Select
                    value={securitySettings.sessionTimeout}
                    onValueChange={(value) => updateSecuritySetting("sessionTimeout", value)}
                  >
                    <SelectTrigger id="session-timeout" className="bg-[#252525] border-white/10">
                      <SelectValue placeholder="Zaman aşımı süresi seçin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252525] border-white/10">
                      <SelectItem value="15">15 dakika</SelectItem>
                      <SelectItem value="30">30 dakika</SelectItem>
                      <SelectItem value="60">1 saat</SelectItem>
                      <SelectItem value="120">2 saat</SelectItem>
                      <SelectItem value="240">4 saat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="space-y-0.5">
                    <Label htmlFor="ip-restriction">IP Kısıtlaması</Label>
                    <p className="text-sm text-white/60">
                      Belirli IP adreslerinden erişime izin ver
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="ip-restriction"
                      checked={securitySettings.ipRestriction}
                      onCheckedChange={(checked) => updateSecuritySetting("ipRestriction", checked)}
                    />
                    {securitySettings.ipRestriction && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white/10 hover:bg-white/5"
                      >
                        Yapılandır
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Sistem Ayarları */}
        <TabsContent value="system">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Sistem Ayarları</CardTitle>
              <CardDescription>
                Platform ve sistem yapılandırma ayarlarını yönetin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-updates">Otomatik Güncellemeler</Label>
                    <p className="text-sm text-white/60">
                      Sistem güncellemelerini otomatik olarak indir ve kur
                    </p>
                  </div>
                  <Switch
                    id="auto-updates"
                    checked={systemSettings.autoUpdates}
                    onCheckedChange={(checked) => updateSystemSetting("autoUpdates", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-backup">Veri Yedekleme</Label>
                    <p className="text-sm text-white/60">
                      Günlük otomatik veri yedeklemesi etkinleştir
                    </p>
                  </div>
                  <Switch
                    id="data-backup"
                    checked={systemSettings.dataBackup}
                    onCheckedChange={(checked) => updateSystemSetting("dataBackup", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="error-reporting">Hata Raporlama</Label>
                    <p className="text-sm text-white/60">
                      Sistem hatalarını anonim olarak raporla
                    </p>
                  </div>
                  <Switch
                    id="error-reporting"
                    checked={systemSettings.errorReporting}
                    onCheckedChange={(checked) => updateSystemSetting("errorReporting", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="usage-statistics">Kullanım İstatistikleri</Label>
                    <p className="text-sm text-white/60">
                      Anonim kullanım verilerini paylaş
                    </p>
                  </div>
                  <Switch
                    id="usage-statistics"
                    checked={systemSettings.usageStatistics}
                    onCheckedChange={(checked) => updateSystemSetting("usageStatistics", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="space-y-0.5">
                    <Label htmlFor="developer-mode" className="text-yellow-400">Geliştirici Modu</Label>
                    <p className="text-sm text-white/60">
                      Gelişmiş özellikler ve hata ayıklama araçlarını etkinleştir
                    </p>
                  </div>
                  <Switch
                    id="developer-mode"
                    checked={systemSettings.developerMode}
                    onCheckedChange={(checked) => updateSystemSetting("developerMode", checked)}
                  />
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <div className="p-4 bg-[#252525] rounded-md">
                    <h4 className="text-sm font-medium mb-1">Sistem Bilgisi</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
                      <div>Sürüm:</div>
                      <div className="text-white/90">AIHUB360 v1.5.2</div>
                      <div>Son Güncelleme:</div>
                      <div className="text-white/90">15 Haziran 2024</div>
                      <div>Son Yedekleme:</div>
                      <div className="text-white/90">Bugün, 04:30</div>
                      <div>Sunucu Durumu:</div>
                      <div className="text-green-400">Çalışıyor</div>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white/10 hover:bg-white/5"
                      >
                        <Database className="h-3 w-3 mr-1" />
                        Veri Merkezi
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4 flex justify-between">
              <Button 
                variant="outline"
                className="border-white/10 hover:bg-white/5" 
                onClick={resetSettings}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Varsayılana Sıfırla
              </Button>
              <Button 
                onClick={saveSettings} 
                className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90"
              >
                <Save className="h-4 w-4 mr-2" />
                Ayarları Kaydet
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
