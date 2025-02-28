
import { useState } from "react";
import { 
  Bell, 
  Moon, 
  Sun, 
  Globe, 
  Shield, 
  Key, 
  Smartphone, 
  UserX, 
  Save, 
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const UserSettings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("tr");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [browserNotifications, setBrowserNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteAccountInput, setDeleteAccountInput] = useState("");

  const handleSaveSettings = () => {
    toast({
      title: "Ayarlar Kaydedildi",
      description: "Kullanıcı ayarlarınız başarıyla güncellendi.",
    });
  };

  const handleToggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    toast({
      title: twoFactorEnabled ? "İki Faktörlü Doğrulama Devre Dışı" : "İki Faktörlü Doğrulama Etkin",
      description: twoFactorEnabled 
        ? "İki faktörlü doğrulama devre dışı bırakıldı." 
        : "İki faktörlü doğrulama etkinleştirildi. Hesabınız artık daha güvende!",
    });
  };

  const handleDeleteAccount = () => {
    if (deleteAccountInput !== "HESABIMI SİL") {
      toast({
        title: "Doğrulama Başarısız",
        description: "Hesap silme işlemi için doğrulama metni hatalı.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Hesap Silme İşlemi Başlatıldı",
      description: "Hesabınızı silme isteğiniz alındı. Son bir onay e-postası gönderdik.",
    });
    setConfirmDelete(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Hesap Ayarları</h1>
        <p className="text-white/70">
          Hesap tercihlerinizi ve güvenlik ayarlarınızı yönetin
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="general">Genel</TabsTrigger>
          <TabsTrigger value="notifications">Bildirimler</TabsTrigger>
          <TabsTrigger value="security">Güvenlik</TabsTrigger>
        </TabsList>

        {/* Genel Ayarlar */}
        <TabsContent value="general">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Genel Ayarlar</CardTitle>
              <CardDescription>
                Hesabınızın görünüm ve kullanım tercihlerini yönetin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Karanlık Mod</Label>
                    <p className="text-sm text-white/70">
                      Kullanıcı arayüzünü karanlık temada görüntüleyin
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className={`h-4 w-4 ${!darkMode ? 'text-yellow-500' : 'text-white/50'}`} />
                    <Switch 
                      checked={darkMode} 
                      onCheckedChange={setDarkMode} 
                    />
                    <Moon className={`h-4 w-4 ${darkMode ? 'text-[#00BFFF]' : 'text-white/50'}`} />
                  </div>
                </div>

                <Separator className="bg-white/10" />

                <div className="space-y-2">
                  <Label htmlFor="language">Dil Tercihi</Label>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-white/70" />
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger id="language" className="bg-[#252525] border-white/10">
                        <SelectValue placeholder="Dil seçin" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#252525] border-white/10">
                        <SelectItem value="tr">Türkçe</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator className="bg-white/10" />

                <div className="space-y-2">
                  <Label htmlFor="timezone">Zaman Dilimi</Label>
                  <Select defaultValue="europe-istanbul">
                    <SelectTrigger id="timezone" className="bg-[#252525] border-white/10">
                      <SelectValue placeholder="Zaman dilimi seçin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#252525] border-white/10">
                      <SelectItem value="europe-istanbul">(GMT+3:00) İstanbul</SelectItem>
                      <SelectItem value="europe-london">(GMT+0:00) Londra</SelectItem>
                      <SelectItem value="america-new_york">(GMT-5:00) New York</SelectItem>
                      <SelectItem value="asia-tokyo">(GMT+9:00) Tokyo</SelectItem>
                      <SelectItem value="australia-sydney">(GMT+10:00) Sydney</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button
                className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                onClick={handleSaveSettings}
              >
                <Save className="h-4 w-4 mr-2" />
                Değişiklikleri Kaydet
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Bildirim Ayarları */}
        <TabsContent value="notifications">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Bildirim Ayarları</CardTitle>
              <CardDescription>
                Hangi bildirimler almak istediğinizi özelleştirin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">E-posta Bildirimleri</Label>
                    <p className="text-sm text-white/70">
                      Önemli güncellemeler, güvenlik bildirimleri ve hesap bilgileri
                    </p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Tarayıcı Bildirimleri</Label>
                    <p className="text-sm text-white/70">
                      Uygulama içi mesajlar ve anında bildirimler
                    </p>
                  </div>
                  <Switch 
                    checked={browserNotifications} 
                    onCheckedChange={setBrowserNotifications} 
                  />
                </div>

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Pazarlama E-postaları</Label>
                    <p className="text-sm text-white/70">
                      Yeni özellikler, indirimler ve özel teklifler hakkında bildirimler
                    </p>
                  </div>
                  <Switch 
                    checked={marketingEmails} 
                    onCheckedChange={setMarketingEmails} 
                  />
                </div>

                <Separator className="bg-white/10" />

                <div className="pt-4">
                  <h3 className="text-sm font-medium mb-3">Bildirim Alınacak Etkinlikler</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notification-purchases"
                        defaultChecked
                        className="mr-2 h-4 w-4 rounded border-white/20 bg-[#252525]"
                      />
                      <Label htmlFor="notification-purchases">Satın Alma İşlemleri</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notification-updates"
                        defaultChecked
                        className="mr-2 h-4 w-4 rounded border-white/20 bg-[#252525]"
                      />
                      <Label htmlFor="notification-updates">Yeni Güncellemeler</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notification-news"
                        defaultChecked
                        className="mr-2 h-4 w-4 rounded border-white/20 bg-[#252525]"
                      />
                      <Label htmlFor="notification-news">AI Haberleri</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="notification-messages"
                        defaultChecked
                        className="mr-2 h-4 w-4 rounded border-white/20 bg-[#252525]"
                      />
                      <Label htmlFor="notification-messages">Mesajlar ve Yorumlar</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button
                className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                onClick={handleSaveSettings}
              >
                <Save className="h-4 w-4 mr-2" />
                Değişiklikleri Kaydet
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Güvenlik Ayarları */}
        <TabsContent value="security">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Güvenlik Ayarları</CardTitle>
              <CardDescription>
                Hesap güvenliğinizi ve erişim ayarlarınızı yönetin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Mevcut Şifre</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#252525] border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">Yeni Şifre</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#252525] border-white/10"
                  />
                  <p className="text-xs text-white/60">
                    En az 8 karakter, bir büyük harf, bir rakam ve bir özel karakter içermelidir
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Yeni Şifre (Tekrar)</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#252525] border-white/10"
                  />
                </div>

                <Button variant="outline" className="w-full mt-2 border-white/10 hover:bg-white/5">
                  <Key className="h-4 w-4 mr-2" />
                  Şifreyi Güncelle
                </Button>

                <Separator className="bg-white/10 my-2" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#00BFFF]" />
                      İki Faktörlü Doğrulama (2FA)
                    </Label>
                    <p className="text-sm text-white/70">
                      Hesabınızı korumak için ek bir güvenlik katmanı ekleyin
                    </p>
                  </div>
                  <Button 
                    variant={twoFactorEnabled ? "outline" : "default"}
                    className={twoFactorEnabled ? "border-white/10 hover:bg-white/5" : "bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"}
                    onClick={handleToggleTwoFactor}
                  >
                    {twoFactorEnabled ? "Devre Dışı Bırak" : "Etkinleştir"}
                  </Button>
                </div>

                <Separator className="bg-white/10 my-2" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base flex items-center">
                      <Smartphone className="h-4 w-4 mr-2 text-[#00BFFF]" />
                      Oturum Açık Cihazlar
                    </Label>
                    <p className="text-sm text-white/70">
                      Hesabınızın oturum açık olduğu tüm cihazları yönetin
                    </p>
                  </div>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    Cihazları Görüntüle
                  </Button>
                </div>

                <Separator className="bg-white/10 my-2" />

                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center text-red-500">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Tehlikeli Bölge
                  </h3>
                  <p className="text-sm text-white/70">
                    Hesabınızı silmek kalıcı bir eylemdir ve tüm verilerinizi kaldırır. Bu işlem geri alınamaz.
                  </p>
                  <Dialog open={confirmDelete} onOpenChange={setConfirmDelete}>
                    <DialogTrigger asChild>
                      <Button variant="destructive" className="mt-2">
                        <UserX className="h-4 w-4 mr-2" />
                        Hesabı Sil
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#1A1A1A] border-white/10">
                      <DialogHeader>
                        <DialogTitle>Hesabınızı silmek istediğinize emin misiniz?</DialogTitle>
                        <DialogDescription>
                          Bu işlem geri alınamaz. Bu, hesabınızı ve tüm verilerinizi kalıcı olarak silecektir.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-white/80">
                          Onaylamak için <span className="font-bold">HESABIMI SİL</span> yazın:
                        </p>
                        <Input
                          value={deleteAccountInput}
                          onChange={(e) => setDeleteAccountInput(e.target.value)}
                          className="bg-[#252525] border-white/10"
                        />
                      </div>
                      <DialogFooter>
                        <Button
                          variant="ghost"
                          onClick={() => setConfirmDelete(false)}
                          className="hover:bg-white/5"
                        >
                          İptal
                        </Button>
                        <Button
                          variant="destructive"
                          onClick={handleDeleteAccount}
                          disabled={deleteAccountInput !== "HESABIMI SİL"}
                        >
                          Hesabı Kalıcı Olarak Sil
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSettings;
