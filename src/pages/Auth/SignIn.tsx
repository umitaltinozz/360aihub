
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, GitHub, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: "Hata",
        description: "Lütfen e-posta ve şifrenizi girin.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      
      // Simplistic demo auth logic - in a real app this would be handled by an auth provider
      if (formData.email === "demo@example.com" && formData.password === "password") {
        toast({
          title: "Giriş Başarılı",
          description: "Hoş geldiniz! Yönlendiriliyorsunuz...",
        });
        
        // Successfully authenticated, navigate to 2FA (if enabled) or dashboard
        // For demo purposes, we'll always show 2FA
        navigate("/auth/2fa");
      } else {
        toast({
          title: "Giriş Başarısız",
          description: "E-posta veya şifre hatalı.",
          variant: "destructive",
        });
      }
    }, 1500);
  };
  
  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Şifremi Unuttum",
      description: "Şifre sıfırlama talimatları e-posta adresinize gönderildi.",
    });
  };
  
  const handleOAuthSignIn = (provider: string) => {
    toast({
      title: `${provider} ile Giriş`,
      description: `${provider} ile giriş yakında aktif olacak.`,
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-aihub-dark">
      <div className="w-full max-w-md space-y-8 p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold tracking-tight text-gradient">AIHUB360</h1>
          </Link>
          <h2 className="mt-4 text-2xl font-bold">Hoş Geldiniz</h2>
          <p className="mt-2 text-sm text-white/60">
            Hesabınıza giriş yaparak kaldığınız yerden devam edin
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
          <div className="space-y-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Şifre</Label>
                <button
                  onClick={handleForgotPassword}
                  className="text-sm text-aihub-blue hover:underline"
                >
                  Şifremi Unuttum
                </button>
              </div>
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
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 rounded bg-white/5 border-white/20 text-aihub-blue focus:ring-aihub-blue/30"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                Beni hatırla
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
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-center text-white/60 mt-2">
            Demo giriş: demo@example.com / password
          </p>
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
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              type="button"
              onClick={() => handleOAuthSignIn("Google")}
              className="bg-white/5 hover:bg-white/10 border border-white/10"
              variant="outline"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
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
              Google ile Giriş
            </Button>
            
            <Button
              type="button"
              onClick={() => handleOAuthSignIn("GitHub")}
              className="bg-white/5 hover:bg-white/10 border border-white/10"
              variant="outline"
            >
              <GitHub className="h-5 w-5 mr-2" />
              GitHub ile Giriş
            </Button>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-white/60">
            Hesabınız yok mu?{" "}
            <Link to="/auth/signup" className="text-aihub-blue hover:underline">
              Kayıt Olun
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
