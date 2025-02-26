
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Lock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }
    
    if (password.length < 8) {
      toast({
        title: "Hata",
        description: "Şifre en az 8 karakter uzunluğunda olmalıdır.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Hata",
        description: "Şifreler eşleşmiyor.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Şifre Sıfırlandı",
        description: "Şifreniz başarıyla sıfırlandı. Şimdi giriş yapabilirsiniz.",
      });
      navigate("/auth/signin");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-aihub-dark">
      <div className="w-full max-w-md space-y-8 p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
        <div className="flex items-center">
          <Link to="/auth/forgot-password" className="text-white/70 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="ml-4 flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gradient">AIHUB360</h1>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="mt-2 text-2xl font-bold">Şifre Sıfırlama</h2>
          <p className="mt-2 text-sm text-white/60">
            Yeni şifrenizi oluşturun
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Yeni Şifre</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/40" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                Şifreniz en az 8 karakter uzunluğunda olmalıdır.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Şifreyi Onayla</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white/40" />
                </div>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10 bg-white/5 border-white/10 focus:ring-aihub-blue"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-white/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-white/40" />
                  )}
                </button>
              </div>
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
              {loading ? "İşleniyor..." : "Şifreyi Sıfırla"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
