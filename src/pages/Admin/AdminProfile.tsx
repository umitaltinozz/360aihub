
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Shield,
  Lock,
  Camera,
  Edit,
  Trash,
  Check,
  X
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const profileFormSchema = z.object({
  fullName: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  phone: z.string().optional(),
  bio: z.string().max(500, { message: "Biyografi en fazla 500 karakter olabilir" }).optional(),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır" }),
  newPassword: z.string().min(8, { message: "Yeni şifre en az 8 karakter olmalıdır" }),
  confirmPassword: z.string().min(8, { message: "Şifre onayı en az 8 karakter olmalıdır" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

const AdminProfile = () => {
  const { toast } = useToast();
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  
  // Mock profil verisi
  const [profileData, setProfileData] = useState({
    fullName: "Admin Kullanıcı",
    email: "admin@aihub360.com",
    phone: "+90 555 123 4567",
    role: "Süper Admin",
    joinDate: "01.01.2024",
    bio: "AIHUB360 platformunun yönetici panelinde görevli süper admin. Kullanıcı deneyimi ve platform güvenliğinden sorumlu.",
    avatarUrl: "https://github.com/shadcn.png",
  });
  
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: profileData.fullName,
      email: profileData.email,
      phone: profileData.phone || "",
      bio: profileData.bio || "",
    },
  });
  
  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  
  function onProfileSubmit(values: z.infer<typeof profileFormSchema>) {
    // Profil bilgilerini güncelle (gerçek uygulamada API çağrısı yapılır)
    setProfileData({
      ...profileData,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone || "",
      bio: values.bio || "",
    });
    
    toast({
      title: "Profil Güncellendi",
      description: "Profil bilgileriniz başarıyla güncellendi.",
    });
  }
  
  function onPasswordSubmit(values: z.infer<typeof passwordFormSchema>) {
    // Şifre değiştirme işlemi (gerçek uygulamada API çağrısı yapılır)
    console.log("Şifre değiştirme verileri:", values);
    
    // Formları sıfırla
    passwordForm.reset({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    
    toast({
      title: "Şifre Değiştirildi",
      description: "Şifreniz başarıyla değiştirildi.",
    });
  }
  
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Avatar değiştirme işlemi (gerçek uygulamada dosya yükleme işlemi)
    const file = e.target.files?.[0];
    if (file) {
      // Dosyayı işleme (gerçek uygulamada sunucuya yüklenir)
      console.log("Seçilen avatar dosyası:", file);
      
      // Avatar modu kapat
      setIsEditingAvatar(false);
      
      toast({
        title: "Avatar Değiştirildi",
        description: "Profil resminiz başarıyla güncellendi.",
      });
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Profil Ayarları</h1>
        <p className="text-white/60 mt-1">
          Kişisel bilgilerinizi ve hesap ayarlarınızı yönetin.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profil Kartı */}
        <Card className="bg-[#1A1A1A] border-white/10 lg:row-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Profil Bilgileri</CardTitle>
            <CardDescription className="text-white/60">
              Kişisel bilgileriniz ve profil resminiz.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-6">
            <div className="relative mb-6">
              <Avatar className="h-32 w-32 border-4 border-[#252525]">
                <AvatarImage src={profileData.avatarUrl} alt={profileData.fullName} />
                <AvatarFallback className="text-xl">{profileData.fullName.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              
              {isEditingAvatar ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                  <div className="flex space-x-2">
                    <label htmlFor="avatar-upload" className="cursor-pointer">
                      <div className="h-8 w-8 rounded-full bg-green-500/90 flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarChange}
                      />
                    </label>
                    <button
                      onClick={() => setIsEditingAvatar(false)}
                      className="h-8 w-8 rounded-full bg-red-500/90 flex items-center justify-center"
                    >
                      <X className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditingAvatar(true)}
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-[#00BFFF] flex items-center justify-center"
                >
                  <Camera className="h-4 w-4 text-white" />
                </button>
              )}
            </div>
            
            <h3 className="text-xl font-semibold">{profileData.fullName}</h3>
            <p className="text-[#00BFFF] text-sm mt-1">{profileData.role}</p>
            
            <div className="w-full space-y-4 mt-6">
              <div className="flex items-center p-3 bg-[#252525] rounded-md">
                <Mail className="h-5 w-5 text-white/60 mr-3" />
                <div>
                  <p className="text-xs text-white/60">E-posta</p>
                  <p className="text-sm">{profileData.email}</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-[#252525] rounded-md">
                <Phone className="h-5 w-5 text-white/60 mr-3" />
                <div>
                  <p className="text-xs text-white/60">Telefon</p>
                  <p className="text-sm">{profileData.phone || "Belirtilmemiş"}</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-[#252525] rounded-md">
                <Shield className="h-5 w-5 text-white/60 mr-3" />
                <div>
                  <p className="text-xs text-white/60">Rol</p>
                  <p className="text-sm">{profileData.role}</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-[#252525] rounded-md">
                <Calendar className="h-5 w-5 text-white/60 mr-3" />
                <div>
                  <p className="text-xs text-white/60">Kayıt Tarihi</p>
                  <p className="text-sm">{profileData.joinDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Ayarlar Bölümü */}
        <Card className="bg-[#1A1A1A] border-white/10 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Hesap Ayarları</CardTitle>
            <CardDescription className="text-white/60">
              Profil bilgilerinizi ve güvenlik ayarlarınızı yönetin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile">
              <TabsList className="grid grid-cols-2 bg-[#252525]">
                <TabsTrigger value="profile">Profil</TabsTrigger>
                <TabsTrigger value="security">Güvenlik</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile" className="pt-6">
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                    <FormField
                      control={profileForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ad Soyad</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Ad Soyad" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={profileForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-posta Adresi</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="E-posta" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={profileForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefon Numarası</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Telefon" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-white/40">
                            İsteğe bağlı (Uluslararası formatta: +90xxxxxxxxxx)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={profileForm.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Biyografi</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Kendiniz hakkında kısa bir bilgi..." 
                              className="min-h-32 bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-white/40">
                            Maksimum 500 karakter
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profili Güncelle
                      </Button>
                    </div>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="security" className="pt-6">
                <Form {...passwordForm}>
                  <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                    <FormField
                      control={passwordForm.control}
                      name="currentPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mevcut Şifre</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="••••••••" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={passwordForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Yeni Şifre</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="••••••••" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-white/40">
                            En az 8 karakter, bir büyük harf ve bir sayı içermeli
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={passwordForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Şifre Tekrarı</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="••••••••" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90"
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Şifreyi Değiştir
                      </Button>
                    </div>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Oturum Yönetimi */}
        <Card className="bg-[#1A1A1A] border-white/10 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Oturum Yönetimi</CardTitle>
            <CardDescription className="text-white/60">
              Aktif oturumlarınızı görüntüleyin ve yönetin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-[#252525] rounded-md border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-500/20 text-green-500 p-2 rounded-full mr-3">
                      <Computer className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Mevcut Oturum</h4>
                      <p className="text-xs text-white/60">Windows 11 • Chrome • İstanbul</p>
                      <p className="text-xs text-white/40 mt-1">Son giriş: 1 saat önce</p>
                    </div>
                  </div>
                  <Button disabled variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                    Mevcut
                  </Button>
                </div>
              </div>
              
              <div className="p-4 bg-[#252525] rounded-md border border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 text-blue-500 p-2 rounded-full mr-3">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Mobil Uygulama</h4>
                      <p className="text-xs text-white/60">iOS 17 • iPhone 14 Pro • İstanbul</p>
                      <p className="text-xs text-white/40 mt-1">Son giriş: 3 gün önce</p>
                    </div>
                  </div>
                  <Button variant="destructive" size="sm" className="bg-red-500/90 hover:bg-red-600">
                    <LogOut className="h-3 w-3 mr-1" />
                    Çıkış Yap
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-white/10 pt-4">
            <Button variant="outline" className="text-red-400 hover:text-red-300 border-white/10 hover:bg-white/5 w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Tüm Oturumları Sonlandır
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Hesap Silme Bölümü */}
      <Card className="bg-[#1A1A1A] border-white/10 border-red-500/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-red-400">Tehlikeli Bölge</CardTitle>
          <CardDescription className="text-white/60">
            Bu bölümdeki işlemler geri alınamaz.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-md">
            <h3 className="text-lg font-medium text-red-400">Hesabı Sil</h3>
            <p className="text-sm text-white/70 mt-1">
              Hesabınızı sildiğinizde, tüm verileriniz ve içerikleriniz kalıcı olarak silinir. 
              Bu işlem geri alınamaz.
            </p>
            <div className="mt-4">
              <Button variant="destructive" className="bg-red-500/90 hover:bg-red-600">
                <Trash className="h-4 w-4 mr-2" />
                Hesabı Sil
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// İlave ikonlar
import { Computer, Smartphone, LogOut } from "lucide-react";

export default AdminProfile;
