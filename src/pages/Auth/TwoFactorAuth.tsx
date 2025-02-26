
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const TwoFactorAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer as NodeJS.Timeout);
  }, [countdown]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    
    if (value === "" || /^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto-focus next input
      if (value !== "" && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace navigation to previous input
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newCode = pastedData.split("");
      setCode(newCode);
      
      // Focus the last input
      const lastInput = document.getElementById("code-5");
      if (lastInput) {
        lastInput.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const enteredCode = code.join("");
    
    if (enteredCode.length !== 6) {
      toast({
        title: "Eksik Kod",
        description: "Lütfen 6 haneli doğrulama kodunu girin.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Demo validation - in a real app we would verify the code with a server
    setTimeout(() => {
      setLoading(false);
      
      // For demo purposes, any code works
      toast({
        title: "Doğrulama Başarılı",
        description: "İki faktörlü kimlik doğrulama tamamlandı.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  const handleResendCode = () => {
    toast({
      title: "Kod Yeniden Gönderildi",
      description: "Yeni doğrulama kodu e-posta adresinize gönderildi.",
    });
    setCountdown(30);
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
        
        <div className="text-center">
          <h2 className="mt-2 text-2xl font-bold">İki Faktörlü Doğrulama</h2>
          <p className="mt-2 text-sm text-white/60">
            E-posta adresinize gönderilen 6 haneli doğrulama kodunu girin
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  id={`code-${index}`}
                  type="text"
                  maxLength={1}
                  value={code[index]}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-14 text-center text-xl font-bold rounded-md bg-white/5 border border-white/10 focus:border-aihub-blue focus:ring-1 focus:ring-aihub-blue/50 focus:outline-none"
                />
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-sm text-white/60">
                Kod gelmedi mi?{" "}
                {countdown > 0 ? (
                  <span className="text-white/40">
                    {countdown} saniye içinde yeniden gönder
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-aihub-blue hover:underline focus:outline-none"
                  >
                    Kodu Yeniden Gönder
                  </button>
                )}
              </p>
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
              {loading ? "Doğrulanıyor..." : "Doğrula"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
