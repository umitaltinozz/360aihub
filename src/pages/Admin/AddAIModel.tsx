
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Save,
  Upload,
  Server,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Sparkles,
  HelpCircle,
  X,
  Image as ImageIcon,
  Zap,
  Link as LinkIcon,
  Tag,
  DollarSign,
  Combine
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form şeması
const modelFormSchema = z.object({
  name: z.string().min(2, { message: "Model adı en az 2 karakter olmalıdır" }),
  provider: z.string().min(2, { message: "Sağlayıcı firma en az 2 karakter olmalıdır" }),
  category: z.string().min(1, { message: "Kategori seçilmelidir" }),
  description: z.string().min(10, { message: "Açıklama en az 10 karakter olmalıdır" }),
  shortDescription: z.string().max(120, { message: "Kısa açıklama maksimum 120 karakter olabilir" }).optional(),
  apiUrl: z.string().url({ message: "Geçerli bir API URL'si girilmelidir" }),
  apiKey: z.string().min(1, { message: "API anahtarı girilmelidir" }),
  apiDocumentation: z.string().url({ message: "Geçerli bir API dokümantasyon URL'si girilmelidir" }).optional(),
  versionNumber: z.string().min(1, { message: "Versiyon numarası girilmelidir" }),
  pricingModel: z.string().min(1, { message: "Fiyatlandırma modeli seçilmelidir" }),
  usageFee: z.string().optional(),
  monthlyFee: z.string().optional(),
  rateLimit: z.string().optional(),
  isPublic: z.boolean().default(true),
  isVerified: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
});

const AddAIModel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Durum yönetimi
  const [isTestingAPI, setIsTestingAPI] = useState(false);
  const [apiTestResult, setApiTestResult] = useState<null | { success: boolean; message: string }>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // Form
  const form = useForm<z.infer<typeof modelFormSchema>>({
    resolver: zodResolver(modelFormSchema),
    defaultValues: {
      name: "",
      provider: "",
      category: "",
      description: "",
      shortDescription: "",
      apiUrl: "",
      apiKey: "",
      apiDocumentation: "",
      versionNumber: "1.0",
      pricingModel: "",
      usageFee: "",
      monthlyFee: "",
      rateLimit: "",
      isPublic: true,
      isVerified: false,
      isFeatured: false,
    },
  });
  
  // API Testi
  const handleTestAPI = async () => {
    const apiUrl = form.getValues("apiUrl");
    const apiKey = form.getValues("apiKey");
    
    if (!apiUrl || !apiKey) {
      toast({
        title: "Hata",
        description: "API testi için URL ve API anahtarı girilmelidir.",
        variant: "destructive",
      });
      return;
    }
    
    setIsTestingAPI(true);
    
    // Gerçek uygulamada API çağrısı yapılır
    // Bu örnekte, sahte bir gecikme ve sonuç simüle ediyoruz
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3; // %70 başarı oranı
      
      setApiTestResult({
        success: isSuccess,
        message: isSuccess 
          ? "API bağlantısı başarılı. Model entegrasyonu test edildi."
          : "API bağlantısı başarısız. Lütfen URL ve API anahtarını kontrol edin."
      });
      
      setIsTestingAPI(false);
    }, 2000);
  };
  
  // Görsel yükleme
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Gerçek uygulamada dosya sunucuya yüklenir
      // Bu örnekte, dosyayı bir URL'ye dönüştürüyoruz
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Görsel kaldırma
  const handleRemoveImage = () => {
    setUploadedImage(null);
  };
  
  // Form gönderimi
  const onSubmit = (values: z.infer<typeof modelFormSchema>) => {
    // Form değerlerini konsola yazdır
    console.log("Form değerleri:", values);
    
    // Gerçek uygulamada API çağrısı yapılır
    
    toast({
      title: "Model Eklendi",
      description: `${values.name} modeli başarıyla eklendi.`,
    });
    
    // Başarılı eklemenin ardından model listesine yönlendir
    navigate("/admin/ai-models");
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Yeni AI Model Ekle</h1>
        <p className="text-white/60 mt-1">
          Platforma yeni bir yapay zeka modeli ekleyin ve yapılandırın.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Tabs defaultValue="general" className="space-y-6">
            <TabsList className="grid grid-cols-4 bg-[#252525]">
              <TabsTrigger value="general">
                <Sparkles className="h-4 w-4 mr-2" />
                Genel Bilgiler
              </TabsTrigger>
              <TabsTrigger value="api">
                <Server className="h-4 w-4 mr-2" />
                API & Teknik
              </TabsTrigger>
              <TabsTrigger value="pricing">
                <DollarSign className="h-4 w-4 mr-2" />
                Fiyatlandırma
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Combine className="h-4 w-4 mr-2" />
                Gelişmiş Ayarlar
              </TabsTrigger>
            </TabsList>
            
            {/* Genel Bilgiler Sekmesi */}
            <TabsContent value="general">
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Genel Model Bilgileri</CardTitle>
                  <CardDescription>
                    Temel model bilgilerini ve açıklamalarını girin.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model Adı</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Örn. GPT-4, Claude 3 Opus" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="provider"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sağlayıcı Firma</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Örn. OpenAI, Anthropic" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kategori</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="bg-[#252525] border-white/10">
                              <SelectValue placeholder="Model kategorisi seçin" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252525] border-white/10">
                              <SelectItem value="Dil Modeli">Dil Modeli</SelectItem>
                              <SelectItem value="Görsel Üretme">Görsel Üretme</SelectItem>
                              <SelectItem value="Ses Tanıma">Ses Tanıma</SelectItem>
                              <SelectItem value="Çok Modlu">Çok Modlu</SelectItem>
                              <SelectItem value="Diğer">Diğer</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormDescription className="text-white/40">
                          Model türünü en iyi tanımlayan kategoriyi seçin.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detaylı Açıklama</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Model hakkında ayrıntılı açıklama..." 
                            className="min-h-32 bg-[#252525] border-white/10" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-white/40">
                          Modelin özellikleri, yetenekleri ve kullanım alanları hakkında detaylı bilgi.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kısa Açıklama</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Model için kısa açıklama (120 karakter)" 
                            className="bg-[#252525] border-white/10" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-white/40">
                          Model listeleme sayfasında görünecek kısa açıklama.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-3">
                    <Label>Model Görseli</Label>
                    
                    {uploadedImage ? (
                      <div className="relative w-full h-48 border border-white/10 rounded-md overflow-hidden">
                        <img 
                          src={uploadedImage} 
                          alt="Model görseli" 
                          className="w-full h-full object-cover" 
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="border border-dashed border-white/20 rounded-md p-8 text-center">
                        <label htmlFor="image-upload" className="cursor-pointer">
                          <div className="flex flex-col items-center">
                            <ImageIcon className="h-10 w-10 text-white/40 mb-3" />
                            <p className="text-white/70 mb-1">Görsel yüklemek için tıklayın veya sürükleyin</p>
                            <p className="text-xs text-white/40">PNG, JPG (max. 2MB)</p>
                            <Button 
                              type="button" 
                              variant="outline" 
                              className="mt-4 border-white/10 hover:bg-white/5"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Görsel Seç
                            </Button>
                          </div>
                          <input 
                            id="image-upload" 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    )}
                    
                    <p className="text-xs text-white/40">
                      Model görseli, listeleme sayfalarında ve detay sayfasında görüntülenecektir.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* API ve Teknik Sekmesi */}
            <TabsContent value="api">
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>API Yapılandırması</CardTitle>
                  <CardDescription>
                    Model API bağlantısı ve teknik detaylar.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="apiUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Endpoint URL</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="https://api.example.com/v1/models" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="apiKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Anahtarı</FormLabel>
                          <FormControl>
                            <Input 
                              type="password"
                              placeholder="sk_..." 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-white/40">
                            Güvenli bir şekilde saklanacaktır.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    {/* API Test Sonucu */}
                    {apiTestResult && (
                      <div className={`p-4 rounded-md ${apiTestResult.success ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
                        <div className="flex items-start">
                          {apiTestResult.success ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          )}
                          <div>
                            <p className={`text-sm font-medium ${apiTestResult.success ? 'text-green-400' : 'text-red-400'}`}>
                              {apiTestResult.success ? 'API Testi Başarılı' : 'API Testi Başarısız'}
                            </p>
                            <p className="text-sm text-white/70 mt-1">{apiTestResult.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      type="button" 
                      onClick={handleTestAPI}
                      disabled={isTestingAPI}
                      className="w-full"
                    >
                      {isTestingAPI ? (
                        <>
                          <RotateCcw className="h-4 w-4 mr-2 animate-spin" />
                          API Bağlantısı Test Ediliyor...
                        </>
                      ) : (
                        <>
                          <Server className="h-4 w-4 mr-2" />
                          API Bağlantısını Test Et
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="apiDocumentation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Dokümantasyon URL</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="https://docs.example.com" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-white/40">
                            İsteğe bağlı - Model API'sinin resmi dokümantasyon bağlantısı
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="versionNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model Versiyonu</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="1.0" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="rateLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hız Limiti (dakikada)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number"
                            placeholder="Örn. 60, 100, 200" 
                            className="bg-[#252525] border-white/10" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription className="text-white/40">
                          Dakika başına izin verilen maksimum istek sayısı (boş bırakılabilir)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-md flex">
                    <HelpCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-blue-400">API Yapılandırma İpuçları</p>
                      <ul className="text-sm text-white/70 mt-1 list-disc list-inside space-y-1">
                        <li>API anahtarınız güvenli bir şekilde saklanacak ve şifrelenecektir.</li>
                        <li>Model entegrasyonu için geçerli bir API URL'si ve anahtarı zorunludur.</li>
                        <li>Sağlayıcı firma API'sinde değişiklik olduğunda buradaki bilgileri güncellemeyi unutmayın.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Fiyatlandırma Sekmesi */}
            <TabsContent value="pricing">
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Model Fiyatlandırması</CardTitle>
                  <CardDescription>
                    Model fiyatlandırma stratejisi ve ücretlendirme yapısı.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="pricingModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fiyatlandırma Modeli</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="bg-[#252525] border-white/10">
                              <SelectValue placeholder="Fiyatlandırma modeli seçin" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#252525] border-white/10">
                              <SelectItem value="usage">Kullanım Başına</SelectItem>
                              <SelectItem value="subscription">Abonelik</SelectItem>
                              <SelectItem value="hybrid">Hibrit (Abonelik + Kullanım)</SelectItem>
                              <SelectItem value="free">Ücretsiz</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {(form.watch("pricingModel") === "usage" || form.watch("pricingModel") === "hybrid") && (
                    <FormField
                      control={form.control}
                      name="usageFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kullanım Ücreti ($/1000 token)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number"
                              step="0.001"
                              placeholder="Örn. 0.01" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-white/40">
                            1000 token başına ücret (giriş ve çıkış tokenları birlikte)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  {(form.watch("pricingModel") === "subscription" || form.watch("pricingModel") === "hybrid") && (
                    <FormField
                      control={form.control}
                      name="monthlyFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Aylık Abonelik Ücreti ($)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number"
                              placeholder="Örn. 20" 
                              className="bg-[#252525] border-white/10" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  
                  <div className="p-4 rounded-md bg-[#252525]">
                    <h4 className="font-medium mb-3 flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-white/60" />
                      <span>Fiyat Etiketleri</span>
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30">Ücretsiz</Badge>
                      <Badge className="bg-blue-500/20 text-blue-500 hover:bg-blue-500/30">Uygun Fiyatlı</Badge>
                      <Badge className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/30">Orta Fiyatlı</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 hover:bg-purple-500/30">Premium</Badge>
                      <Badge className="bg-red-500/20 text-red-500 hover:bg-red-500/30">Kurumsal</Badge>
                      <Badge className="bg-white/10 hover:bg-white/20">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Özel Fiyat
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20">
                        <LinkIcon className="h-3 w-3 mr-1" />
                        Harici Fiyatlandırma
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-white/40 mt-3">
                      İsteğe bağlı olarak modele uygun fiyat etiketleri ekleyebilirsiniz.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-md flex">
                    <AlertCircle className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-amber-400">Fiyatlandırma Kontrolü</p>
                      <p className="text-sm text-white/70 mt-1">
                        Fiyatlandırma bilgileri, model sağlayıcısının mevcut fiyatları ile tutarlı olmalıdır. 
                        Fiyat değişiklikleri olduğunda bu bilgileri güncellemeyi unutmayın.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Gelişmiş Ayarlar Sekmesi */}
            <TabsContent value="settings">
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Gelişmiş Ayarlar</CardTitle>
                  <CardDescription>
                    Model görünürlük ve doğrulama ayarları.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="isPublic"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border border-white/10 p-4">
                          <div className="space-y-1">
                            <FormLabel>Genel Görünürlük</FormLabel>
                            <FormDescription className="text-white/40">
                              Model tüm kullanıcılar tarafından görünür olacak
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="isVerified"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border border-white/10 p-4">
                          <div className="space-y-1">
                            <FormLabel>Doğrulanmış Model</FormLabel>
                            <FormDescription className="text-white/40">
                              Platform tarafından doğrulanmış ve güvenli model işareti
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="isFeatured"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-md border border-white/10 p-4">
                          <div className="space-y-1">
                            <FormLabel>Öne Çıkan Model</FormLabel>
                            <FormDescription className="text-white/40">
                              Model ana sayfada ve öne çıkan bölümlerde gösterilir
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="p-4 bg-[#252525] rounded-md">
                    <h4 className="font-medium mb-3">Model Meta Verileri</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Model Etiketleri (SEO)</Label>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                            <span>yazı</span>
                            <button className="ml-1 text-white/60 hover:text-white">×</button>
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                            <span>dil modeli</span>
                            <button className="ml-1 text-white/60 hover:text-white">×</button>
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                            <span>ai</span>
                            <button className="ml-1 text-white/60 hover:text-white">×</button>
                          </Badge>
                          <Input 
                            placeholder="Yeni etiket..."
                            className="bg-[#1A1A1A] border-white/10 w-28"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Benzer Modeller</Label>
                        <Select>
                          <SelectTrigger className="bg-[#1A1A1A] border-white/10">
                            <SelectValue placeholder="Model seçin" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#252525] border-white/10">
                            <SelectItem value="gpt4">GPT-4</SelectItem>
                            <SelectItem value="claude3">Claude 3 Opus</SelectItem>
                            <SelectItem value="gemini">Gemini Pro</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                            <span>Claude 3 Opus</span>
                            <button className="ml-1 text-white/60 hover:text-white">×</button>
                          </Badge>
                          <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                            <span>Gemini Pro</span>
                            <button className="ml-1 text-white/60 hover:text-white">×</button>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Form Footer */}
          <div className="flex items-center justify-between">
            <Button 
              type="button" 
              variant="outline" 
              className="border-white/10 hover:bg-white/5"
              onClick={() => navigate("/admin/ai-models")}
            >
              İptal
            </Button>
            <div className="flex space-x-3">
              <Button 
                type="button" 
                variant="outline" 
                className="border-white/10 hover:bg-white/5"
              >
                <Save className="h-4 w-4 mr-2" />
                Taslak Olarak Kaydet
              </Button>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90"
              >
                <Zap className="h-4 w-4 mr-2" />
                Modeli Yayınla
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddAIModel;
