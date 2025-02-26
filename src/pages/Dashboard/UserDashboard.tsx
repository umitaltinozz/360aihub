
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Bell,
  CreditCard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
  Key,
  BarChart,
  FileText,
  Star,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const UserDashboard = () => {
  const { toast } = useToast();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleLogout = () => {
    toast({
      title: "Çıkış Yapıldı",
      description: "Başarıyla çıkış yaptınız.",
    });
    // In a real app, you would handle the logout logic here
    // For demo, just redirect to home
    window.location.href = "/";
  };
  
  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 pt-16">
        {/* Sidebar - Mobile View */}
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleSidebar}
          ></div>
          
          <div
            className={`relative flex-1 flex flex-col max-w-xs w-full bg-aihub-dark border-r border-white/10 transition-transform transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute top-0 right-0 -mr-12 pt-4">
              <button
                type="button"
                className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                onClick={toggleSidebar}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <span className="text-2xl font-bold text-gradient">AIHUB360</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <SidebarContent />
              </nav>
            </div>
          </div>
        </div>
        
        {/* Sidebar - Desktop View */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-white/10 bg-aihub-dark/80 backdrop-blur-sm">
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-white/10">
                <span className="text-2xl font-bold text-gradient">AIHUB360</span>
              </div>
              <div className="flex-1 flex flex-col overflow-y-auto">
                <nav className="flex-1 px-4 py-4 space-y-1">
                  <SidebarContent />
                </nav>
              </div>
              
              <div className="flex-shrink-0 border-t border-white/10 p-4">
                <div className="flex items-center">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">John Doe</p>
                    <p className="text-xs text-white/60">AI Pro Üyesi</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="ml-auto text-white/60 hover:text-white"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="flex justify-between py-6 px-4 border-b border-white/10 lg:hidden">
            <button
              type="button"
              className="text-white/70 hover:text-white"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <span className="text-xl font-bold">Kullanıcı Paneli</span>
            
            <div className="flex items-center space-x-4">
              <button className="text-white/70 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <Outlet />
            
            {/* Default Dashboard Content (will be replaced by Outlet when routes are active) */}
            <DashboardHome />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Content Component
const SidebarContent = () => {
  const links = [
    { icon: Home, text: "Ana Sayfa", to: "/dashboard" },
    { icon: User, text: "Profil Ayarları", to: "/dashboard/profile" },
    { icon: Star, text: "Abonelik", to: "/dashboard/subscription" },
    { icon: CreditCard, text: "Ödeme Geçmişi", to: "/dashboard/payments" },
    { icon: Key, text: "API Anahtarları", to: "/dashboard/api-keys" },
    { icon: BarChart, text: "Kullanım İstatistikleri", to: "/dashboard/usage" },
    { icon: FileText, text: "Dökümanlar", to: "/dashboard/docs" },
    { icon: Settings, text: "Ayarlar", to: "/dashboard/settings" },
  ];
  
  return (
    <div className="space-y-1">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-white/70 hover:text-white hover:bg-white/5 group"
        >
          <link.icon className="mr-3 h-5 w-5 text-white/60 group-hover:text-aihub-blue" />
          {link.text}
        </Link>
      ))}
    </div>
  );
};

// Default Dashboard Home Component
const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Kullanıcı Paneli</h1>
        <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90">
          Yeni API Anahtarı
        </Button>
      </div>
      
      {/* Subscription Status */}
      <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <p className="text-white/60 text-sm mb-1">Mevcut Abonelik</p>
            <h2 className="text-2xl font-bold">AI Pro</h2>
            <div className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
              Aktif
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden w-48">
                <div
                  className="h-full bg-gradient-to-r from-aihub-blue to-aihub-purple"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="text-sm text-white/60">18 gün kaldı</span>
            </div>
            <div className="mt-4 space-x-2">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Planı Değiştir
              </Button>
              <Button variant="ghost" className="hover:bg-white/5 text-red-400 hover:text-red-300">
                İptal Et
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <p className="text-white/60 text-sm">API Çağrıları (Bu Ay)</p>
          <h3 className="text-2xl font-bold mt-2">3,452</h3>
          <p className="text-green-400 text-sm mt-1">+12% geçen aya göre</p>
        </div>
        
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <p className="text-white/60 text-sm">Token Kullanımı</p>
          <h3 className="text-2xl font-bold mt-2">125K / 500K</h3>
          <p className="text-white/60 text-sm mt-1">25% kullanıldı</p>
        </div>
        
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <p className="text-white/60 text-sm">Aktif API Anahtarları</p>
          <h3 className="text-2xl font-bold mt-2">3</h3>
          <p className="text-white/60 text-sm mt-1">5 anahtara kadar</p>
        </div>
        
        <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
          <p className="text-white/60 text-sm">Satın Alınan Modeller</p>
          <h3 className="text-2xl font-bold mt-2">7</h3>
          <p className="text-white/60 text-sm mt-1">2 yeni bu ay</p>
        </div>
      </div>
      
      {/* Recent API Usage */}
      <div className="rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold">Son API Kullanımı</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Tarih
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Endpoint
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Anahtar
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Token
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">
                  Durum
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2024-06-20 14:32</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">/api/completion</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">
                  sk_live_...f8a2
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">152</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    Başarılı
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2024-06-20 14:30</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">/api/embedding</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">
                  sk_live_...f8a2
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">86</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    Başarılı
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2024-06-20 14:28</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">/api/completion</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white/60">
                  sk_test_...d3b7
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">243</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400">
                    Hata
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
