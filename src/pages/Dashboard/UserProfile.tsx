
import { useState } from "react";
import { Save, Upload, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const UserProfile = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    company: "ACME Corp",
    location: "İstanbul, Türkiye",
    bio: "AI teknolojileri ve makine öğrenmesi üzerine çalışan bir yazılım mühendisi.",
    hasNewsletter: true,
    hasTwoFactor: true,
    hasActivityAlerts: false,
    hasMarketingEmails: true,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleSwitchChange = (checked: boolean, name: string) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };
  
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Dosya Çok Büyük",
          description: "Profil resmi en fazla 5MB olabilir.",
          variant: "destructive",
        });
        return;
      }
      
      setAvatarFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profil Güncellendi",
        description: "Profil bilgileriniz başarıyla kaydedildi.",
      });
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Profil Ayarları</h1>
        <p className="text-white/60">Kişisel bilgilerinizi ve hesap tercihlerinizi yönetin</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4">Profil Bilgileri</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col items-center space-y-4 w-full lg:w-1/4">
              <Avatar className="h-32 w-32">
                <AvatarImage src={avatarPreview || "https://github.com/shadcn.png"} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col items-center">
                <Label
                  htmlFor="avatar-upload"
                  className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-md"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Profil Resmi Yükle
                </Label>
                <Input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <p className="mt-2 text-xs text-white/60">PNG, JPG veya GIF. Maks 5MB.</p>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Tam Adınız</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Şirket</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Konum</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/10"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Hakkında</Label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-aihub-blue/50"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4">Güvenlik Ayarları</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">İki Faktörlü Kimlik Doğrulama</h3>
                <p className="text-sm text-white/60">
                  Hesabınıza ekstra bir güvenlik katmanı ekleyin
                </p>
              </div>
              <Switch
                checked={formData.hasTwoFactor}
                onCheckedChange={(checked) => handleSwitchChange(checked, "hasTwoFactor")}
              />
            </div>
            
            {formData.hasTwoFactor && (
              <div className="p-4 rounded-md bg-aihub-blue/10 border border-aihub-blue/30 flex items-start">
                <AlertTriangle className="h-5 w-5 text-aihub-blue mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">İki faktörlü kimlik doğrulama aktif</h4>
                  <p className="text-xs text-white/70 mt-1">
                    Giriş yaparken her seferinde kimlik doğrulama kodu girmeniz gerekecek.
                    Doğrulama yöntemini değiştirmek veya yedek kodlarınızı görüntülemek için 
                    <a href="#" className="text-aihub-blue hover:underline ml-1">
                      buraya tıklayın
                    </a>.
                  </p>
                </div>
              </div>
            )}
            
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-base font-medium mb-4">Şifre Değiştir</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Mevcut Şifre</Label>
                  <Input
                    id="current-password"
                    type="password"
                    className="bg-white/5 border-white/10"
                    placeholder="••••••••"
                  />
                </div>
                
                <div></div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">Yeni Şifre</Label>
                  <Input
                    id="new-password"
                    type="password"
                    className="bg-white/5 border-white/10"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Yeni Şifre (Tekrar)</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-white/5 border-white/10"
                    placeholder="••••••••"
                  />
                </div>
                
                <div>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/10 hover:bg-white/5"
                  >
                    Şifremi Değiştir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4">E-posta Bildirimleri</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Bülten</h3>
                <p className="text-sm text-white/60">
                  Yeni AI modelleri ve platform güncellemeleri hakkında bilgi alın
                </p>
              </div>
              <Switch
                checked={formData.hasNewsletter}
                onCheckedChange={(checked) => handleSwitchChange(checked, "hasNewsletter")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Aktivite Bildirimleri</h3>
                <p className="text-sm text-white/60">
                  Hesap etkinlikleri hakkında bildirimler alın (giriş, API kullanımı, vb.)
                </p>
              </div>
              <Switch
                checked={formData.hasActivityAlerts}
                onCheckedChange={(checked) => handleSwitchChange(checked, "hasActivityAlerts")}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium">Pazarlama E-postaları</h3>
                <p className="text-sm text-white/60">
                  Özel teklifler, etkinlikler ve eğitimlerle ilgili e-postalar alın
                </p>
              </div>
              <Switch
                checked={formData.hasMarketingEmails}
                onCheckedChange={(checked) => handleSwitchChange(checked, "hasMarketingEmails")}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            className="border-white/10 hover:bg-white/5"
          >
            İptal
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className={cn(
              "bg-gradient-to-r from-aihub-blue to-aihub-purple text-white",
              loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
            )}
          >
            <Save className="mr-2 h-4 w-4" />
            {loading ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
