
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Bell, UserCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const CustomNavbar = () => {
  const { toast } = useToast();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simüle edilmiş oturum durumu

  // Oturum durumunu simüle etmek için
  useEffect(() => {
    // Burada gerçek uygulamada oturum durumu kontrolü yapılır
    const checkLoginStatus = () => {
      // Şimdilik sabit bir değer
      setIsLoggedIn(false);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Çıkış Yapıldı",
      description: "Oturumunuz başarıyla sonlandırıldı.",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">AIHUB360</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/ai-models">
              <Button variant="ghost" className="text-sm">
                AI Modelleri
              </Button>
            </Link>
            <Link to="/ai-news">
              <Button variant="ghost" className="text-sm">
                Haberler
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="ghost" className="text-sm">
                Marketplace
              </Button>
            </Link>
            <Link to="/training">
              <Button variant="ghost" className="text-sm">
                Eğitimler
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm">
                  <span>Daha Fazla</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-aihub-dark border-white/10">
                <DropdownMenuItem>
                  <Link to="/subscription/pricing" className="w-full">Fiyatlandırma</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/docs" className="w-full">Dokümantasyon</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about" className="w-full">Hakkımızda</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>

            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                  <Bell className="h-5 w-5" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 bg-aihub-dark border-white/10"
                  >
                    <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem>
                      <Link to="/dashboard" className="w-full flex items-center">
                        <UserCircle className="mr-2 h-4 w-4" />
                        <span>Kontrol Paneli</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/dashboard/profile" className="w-full">Profil Ayarları</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/dashboard/api-keys" className="w-full">API Anahtarları</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-400">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Çıkış Yap</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/auth/signin">
                  <Button variant="ghost">Giriş Yap</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90">
                    Ücretsiz Başla
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Ana menüyü aç/kapat"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-black/80 backdrop-blur-xl space-y-1">
          <Link to="/ai-models" onClick={toggleMobileMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              AI Modelleri
            </Button>
          </Link>
          <Link to="/ai-news" onClick={toggleMobileMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Haberler
            </Button>
          </Link>
          <Link to="/marketplace" onClick={toggleMobileMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Marketplace
            </Button>
          </Link>
          <Link to="/training" onClick={toggleMobileMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Eğitimler
            </Button>
          </Link>
          <Link to="/subscription/pricing" onClick={toggleMobileMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Fiyatlandırma
            </Button>
          </Link>
          <Link to="/docs" onClick={toggleMobileMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Dokümantasyon
            </Button>
          </Link>

          <div className="pt-4 pb-2">
            <div className="border-t border-white/10 pt-4 flex flex-col space-y-2">
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={toggleMobileMenu}>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 hover:bg-white/5"
                    >
                      Kontrol Paneli
                    </Button>
                  </Link>
                  <Button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    variant="ghost"
                    className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Çıkış Yap
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/auth/signin" onClick={toggleMobileMenu}>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 hover:bg-white/5"
                    >
                      Giriş Yap
                    </Button>
                  </Link>
                  <Link to="/auth/signup" onClick={toggleMobileMenu}>
                    <Button
                      className="w-full bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90"
                    >
                      Ücretsiz Başla
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomNavbar;
