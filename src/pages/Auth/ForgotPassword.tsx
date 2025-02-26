
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ForgotPassword = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Hata",
        description: "Lütfen e-posta adresinizi girin.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulated API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      toast({
        title: "E-posta Gönderildi",
        description: "Şifre sıfırlama talimatları e-posta adresinize gönderildi.",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-aihub-dark">
      <div className="w-full max-w-md space-y-8 p-8 bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
        <div className="flex items-center">
          <Link to="/auth/signin" className="text-white/70 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="ml-4 flex-1 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gradient">AIHUB360</h1>
          </div>
        </div>
        
        {isSubmitted ? (
          <div className="py-8 text-center">
            <h2 className="text-2xl font-bold mb-4">E-posta Gönderildi</h2>
            <p className="text-white/60 mb-6">
              Şifre sıfırlama talimatları <span className="text-white">{email}</span> adresine gönderildi.
              Lütfen gelen kutunuzu kontrol edin.
            </p>
            <Link to="/auth/signin">
              <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90">
                Giriş Sayfasına Dön
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h2 className="mt-2 text-2xl font-bold">Şifremi Unuttum</h2>
              <p className="mt-2 text-sm text-white/60">
                E-posta adresinizi girin, şifrenizi sıfırlamanız için bir bağlantı göndereceğiz
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 focus:ring-aihub-blue"
                      placeholder="kullanici@ornek.com"
                      required
                    />
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
                  {loading ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-sm text-white/60">
            Şifrenizi hatırladınız mı?{" "}
            <Link to="/auth/signin" className="text-aihub-blue hover:underline">
              Giriş Yapın
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
