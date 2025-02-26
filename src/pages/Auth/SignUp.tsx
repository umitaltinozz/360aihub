
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.username || !formData.email || !formData.password) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.agreeTerms) {
      toast({
        title: "Hata",
        description: "Devam etmek için hüküm ve koşulları kabul etmeniz gerekiyor.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Kayıt Başarılı",
        description: "Hesabınız oluşturuldu! Şimdi giriş yapabilirsiniz.",
      });
      navigate("/auth/signin");
    }, 1500);
  };
  
  const handleOAuthSignUp = (provider: string) => {
    toast({
      title: `${provider} ile Kayıt`,
      description: `${provider} ile kayıt yakında aktif olacak.`,
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-aihub-dark">
      <div className="w-full max-w-md space-y-8 p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold tracking-tight text-gradient">AIHUB360</h1>
          </Link>
          <h2 className="mt-4 text-2xl font-bold">Hesap Oluştur</h2>
          <p className="mt-2 text-sm text-white/60">
            Yapay zeka dünyasına adım atmak için ücretsiz hesap oluşturun
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-white/40" />
                </div>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/5 border-white/10 focus:ring-aihub-blue"
                  placeholder="aihub_user"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/40" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 bg-white/5 border-white/10 focus:ring-aihub-blue"
                  placeholder="kullanici@ornek.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/40" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 bg-white/5 border-white/10 focus:ring-aihub-blue"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-white/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-white/40" />
                  )}
                </button>
              </div>
              <p className="text-xs text-white/60">
                Şifreniz en az 8 karakter içermeli ve güçlü olmalıdır.
              </p>
            </div>
            
            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="h-4 w-4 rounded bg-white/5 border-white/20 text-aihub-blue focus:ring-aihub-blue/30"
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-white/80">
                <span>
                  <a href="/terms" className="text-aihub-blue hover:underline">
                    Hizmet şartlarını
                  </a>{" "}
                  ve{" "}
                  <a href="/privacy" className="text-aihub-blue hover:underline">
                    Gizlilik politikasını
                  </a>{" "}
                  kabul ediyorum
                </span>
              </label>
            </div>
          </div>
          
          <div>
            <Button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full py-6 bg-gradient-to-r from-aihub-blue to-aihub-purple text-white",
                loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
              )}
            >
              {loading ? "İşleniyor..." : "Kayıt Ol"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-aihub-dark text-white/60">Veya şununla devam et</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Button
              type="button"
              onClick={() => handleOAuthSignUp("Google")}
              className="bg-white/5 hover:bg-white/10 border border-white/10"
              variant="outline"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </Button>
            
            <Button
              type="button"
              onClick={() => handleOAuthSignUp("GitHub")}
              className="bg-white/5 hover:bg-white/10 border border-white/10"
              variant="outline"
            >
              <Github className="h-5 w-5" />
            </Button>
            
            <Button
              type="button"
              onClick={() => handleOAuthSignUp("Discord")}
              className="bg-white/5 hover:bg-white/10 border border-white/10"
              variant="outline"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3857-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-white/60">
            Zaten hesabınız var mı?{" "}
            <Link to="/auth/signin" className="text-aihub-blue hover:underline">
              Giriş Yapın
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
