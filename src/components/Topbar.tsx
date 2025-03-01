
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Search, Menu, X, ChevronDown, UserCircle, LogOut } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

const Topbar = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Çıkış Yapıldı",
      description: "Oturumunuz başarıyla sonlandırıldı.",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-aihub-dark/90 backdrop-blur-lg border-b border-white/10">
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
            <Link to="/community/forum">
              <Button variant="ghost" className="text-sm">
                Forum
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

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Search */}
            <div className={`${isSearchOpen ? 'flex absolute inset-x-0 px-4 bg-aihub-dark h-16 items-center z-20' : 'hidden md:flex relative'}`}>
              {isSearchOpen && (
                <button 
                  onClick={() => setIsSearchOpen(false)} 
                  className="mr-2 text-white/70 hover:text-white md:hidden"
                >
                  <X size={20} />
                </button>
              )}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="AI model veya içerik ara..." 
                  className="pl-9 bg-black/30 border-white/10 focus:border-aihub-blue/50 w-full"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>

            {isLoggedIn ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell size={20} className="text-white/70" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-aihub-blue">
                        3
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 bg-aihub-dark border-white/10">
                    <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/10" />
                    
                    {/* Notification Items */}
                    <div className="max-h-[300px] overflow-y-auto">
                      <div className="px-4 py-3 hover:bg-white/5 transition cursor-pointer">
                        <p className="text-sm font-medium">Yeni Forum Mesajı</p>
                        <p className="text-xs text-white/60 mt-1">Sorunuza yeni bir yanıt geldi.</p>
                        <p className="text-xs text-white/40 mt-1">10 dk önce</p>
                      </div>
                      <div className="px-4 py-3 hover:bg-white/5 transition cursor-pointer">
                        <p className="text-sm font-medium">Sohbet Hatırlatması</p>
                        <p className="text-xs text-white/60 mt-1">Devam eden bir sohbetiniz var.</p>
                        <p className="text-xs text-white/40 mt-1">2 saat önce</p>
                      </div>
                    </div>
                    
                    <DropdownMenuSeparator className="bg-white/10" />
                    <div className="p-2">
                      <Link to="/dashboard/notifications">
                        <Button variant="ghost" size="sm" className="w-full justify-center text-aihub-blue">
                          Tüm Bildirimleri Gör
                        </Button>
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

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
            {/* Mobile Search Trigger */}
            <Button 
              onClick={() => setIsSearchOpen(true)} 
              variant="ghost" 
              size="icon" 
              className="mr-2 text-white/70 hover:text-white"
            >
              <Search size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Ana menüyü aç/kapat"
            >
              {isMenuOpen ? (
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
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-black/80 backdrop-blur-xl space-y-1">
          <Link to="/ai-models" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              AI Modelleri
            </Button>
          </Link>
          <Link to="/ai-news" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Haberler
            </Button>
          </Link>
          <Link to="/marketplace" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Marketplace
            </Button>
          </Link>
          <Link to="/training" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Eğitimler
            </Button>
          </Link>
          <Link to="/community/forum" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Forum
            </Button>
          </Link>
          <Link to="/subscription/pricing" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Fiyatlandırma
            </Button>
          </Link>
          <Link to="/docs" onClick={toggleMenu}>
            <Button variant="ghost" className="w-full text-left justify-start">
              Dokümantasyon
            </Button>
          </Link>

          <div className="pt-4 pb-2">
            <div className="border-t border-white/10 pt-4 flex flex-col space-y-2">
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={toggleMenu}>
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
                      toggleMenu();
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
                  <Link to="/auth/signin" onClick={toggleMenu}>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 hover:bg-white/5"
                    >
                      Giriş Yap
                    </Button>
                  </Link>
                  <Link to="/auth/signup" onClick={toggleMenu}>
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
      
      {/* Mobile Search Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/90 z-50 transition-opacity ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center p-4 h-16 border-b border-white/10">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="mr-4 text-white/70 hover:text-white"
          >
            <X size={24} />
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
            <Input 
              type="text" 
              placeholder="AI model veya içerik ara..." 
              className="pl-9 bg-black/30 border-white/10 focus:border-aihub-blue/50 w-full"
              autoFocus
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
