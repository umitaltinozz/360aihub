
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  Search, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminTopbarProps {
  toggleSidebar: () => void;
}

const AdminTopbar = ({ toggleSidebar }: AdminTopbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-10 h-16 bg-[#1A1A1A] border-b border-white/10 px-4 flex items-center justify-between">
      {/* Left Side - Mobile Menu & Breadcrumb */}
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="p-2 mr-4 rounded-md text-white/70 hover:text-white hover:bg-white/5 lg:hidden"
        >
          <Menu size={20} />
        </button>
        
        <div className="hidden md:flex items-center">
          <h1 className="text-lg font-semibold">Yönetici Paneli</h1>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white/70">Ana Sayfa</span>
        </div>
      </div>
      
      {/* Right Side - Search, Notifications, Profile */}
      <div className="flex items-center space-x-2">
        {/* Search Bar - Mobile Collapsible, Desktop Always Visible */}
        <div className={`${isSearchOpen ? 'flex absolute inset-x-0 px-4 bg-[#1A1A1A] h-16 items-center z-20' : 'hidden md:flex relative'}`}>
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
              placeholder="Kullanıcı, AI model veya içerik ara..." 
              className="pl-9 bg-[#252525] border-white/10 focus:border-[#00BFFF]/50 w-full"
            />
          </div>
        </div>
        
        {/* Mobile Search Trigger */}
        <button 
          onClick={() => setIsSearchOpen(true)} 
          className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/5 md:hidden"
        >
          <Search size={20} />
        </button>
        
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} className="text-white/70" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#00BFFF]">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-[#252525] border-white/10">
            <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            
            {/* Notification Items */}
            <div className="max-h-[300px] overflow-y-auto">
              <NotificationItem 
                title="Yeni Kullanıcı Kaydı" 
                description="John Doe platformumuza yeni kayıt oldu." 
                time="10 dk önce" 
                type="user"
              />
              <NotificationItem 
                title="Yeni Satış" 
                description="GPT-4 API Paketi satın alındı - $49.99" 
                time="30 dk önce" 
                type="sale"
              />
              <NotificationItem 
                title="Destek Talebi" 
                description="Acil: Ödeme sistemi hatası #3382" 
                time="1 saat önce" 
                type="support"
              />
            </div>
            
            <DropdownMenuSeparator className="bg-white/10" />
            <div className="p-2">
              <Link to="/admin/notifications">
                <Button variant="ghost" size="sm" className="w-full justify-center text-[#00BFFF]">
                  Tüm Bildirimleri Gör
                </Button>
              </Link>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden md:flex items-center">
                <span className="text-sm">Admin</span>
                <ChevronDown size={16} className="ml-1 text-white/70" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#252525] border-white/10">
            <DropdownMenuLabel>Admin Hesabı</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="hover:bg-white/5">
              <Link to="/admin/profile" className="flex w-full">Profil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-white/5">
              <Link to="/admin/settings" className="flex w-full">Ayarlar</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-white/5">
              Çıkış Yap
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

// Notification Item Component
const NotificationItem = ({ 
  title, 
  description, 
  time, 
  type 
}: { 
  title: string; 
  description: string; 
  time: string; 
  type: 'user' | 'sale' | 'support' | 'other';
}) => {
  const getBgColor = () => {
    switch (type) {
      case 'user': return 'bg-[#00BFFF]/20';
      case 'sale': return 'bg-green-500/20';
      case 'support': return 'bg-[#8A2BE2]/20';
      default: return 'bg-gray-500/20';
    }
  };
  
  const getIconColor = () => {
    switch (type) {
      case 'user': return 'text-[#00BFFF]';
      case 'sale': return 'text-green-500';
      case 'support': return 'text-[#8A2BE2]';
      default: return 'text-gray-500';
    }
  };
  
  const getIcon = () => {
    switch (type) {
      case 'user': return <Users className={`h-5 w-5 ${getIconColor()}`} />;
      case 'sale': return <CreditCard className={`h-5 w-5 ${getIconColor()}`} />;
      case 'support': return <Headphones className={`h-5 w-5 ${getIconColor()}`} />;
      default: return <Bell className={`h-5 w-5 ${getIconColor()}`} />;
    }
  };
  
  return (
    <Link to="/admin/notifications" className="block">
      <div className="px-4 py-3 hover:bg-white/5 transition cursor-pointer">
        <div className="flex">
          <div className={`flex items-center justify-center h-10 w-10 rounded-full ${getBgColor()} mr-3`}>
            {getIcon()}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-white/60 mt-1 line-clamp-1">{description}</p>
            <p className="text-xs text-white/40 mt-1">{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Import for NotificationItem component
import { Users, CreditCard, Headphones } from "lucide-react";

export default AdminTopbar;
