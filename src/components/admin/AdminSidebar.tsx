
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Users, 
  Robot, 
  ShoppingBag, 
  FileText, 
  CreditCard, 
  Headphones, 
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface AdminSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar = ({ isOpen, toggleSidebar }: AdminSidebarProps) => {
  const location = useLocation();
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Oturum Kapatıldı",
      description: "Admin oturumunuz başarıyla sonlandırıldı.",
    });
    // Add actual logout logic here
  };
  
  const menuItems = [
    { icon: Home, label: "Ana Sayfa", path: "/admin" },
    { icon: Users, label: "Kullanıcı Yönetimi", path: "/admin/users" },
    { icon: Robot, label: "AI Model Yönetimi", path: "/admin/ai-models" },
    { icon: ShoppingBag, label: "Marketplace Yönetimi", path: "/admin/marketplace" },
    { icon: FileText, label: "İçerik Yönetimi", path: "/admin/content" },
    { icon: CreditCard, label: "Ödeme & Abonelikler", path: "/admin/payments" },
    { icon: Headphones, label: "Destek Talepleri", path: "/admin/support" },
    { icon: Settings, label: "Ayarlar", path: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={toggleSidebar}
      />
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-30 h-screen transition-all duration-300 ease-in-out bg-[#1A1A1A] border-r border-white/10",
          isOpen ? "w-64" : "w-20"
        )}
      >
        {/* Logo */}
        <div className={`flex items-center justify-between h-16 px-4 border-b border-white/10 ${!isOpen && 'justify-center'}`}>
          {isOpen && (
            <Link to="/admin" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
                AIHUB360
              </span>
            </Link>
          )}
          
          <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-white/5">
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        
        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || 
                           (item.path !== "/admin" && location.pathname.startsWith(item.path));
            
            return isOpen ? (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  isActive 
                    ? "bg-gradient-to-r from-[#00BFFF]/20 to-[#8A2BE2]/20 text-white" 
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn(
                  "mr-3 h-5 w-5",
                  isActive 
                    ? "text-[#00BFFF]" 
                    : "text-white/60"
                )} />
                <span>{item.label}</span>
              </Link>
            ) : (
              <TooltipProvider key={item.path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center justify-center p-3 rounded-md transition-colors",
                        isActive 
                          ? "bg-gradient-to-r from-[#00BFFF]/20 to-[#8A2BE2]/20 text-white" 
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <item.icon className={cn(
                        "h-5 w-5",
                        isActive 
                          ? "text-[#00BFFF]" 
                          : "text-white/60"
                      )} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </nav>
        
        {/* Bottom Logout Button */}
        <div className={`absolute bottom-4 ${isOpen ? 'w-64' : 'w-20'} px-4`}>
          {isOpen ? (
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-white/70 rounded-md hover:bg-white/5 hover:text-white transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5 text-white/60" />
              <span>Çıkış Yap</span>
            </button>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full p-3 text-white/70 rounded-md hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <LogOut className="h-5 w-5 text-white/60" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">Çıkış Yap</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
