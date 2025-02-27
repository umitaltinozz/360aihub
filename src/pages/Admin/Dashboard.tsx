
import { useState, useEffect } from "react";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Headphones, 
  ArrowUp,
  ArrowDown,
  Zap,
  BarChart2
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import * as Recharts from "recharts";

// Define AreaChart component
const AreaChart = ({
  data,
  categories,
  index,
  colors,
  valueFormatter,
  className,
}: {
  data: any[];
  categories: string[];
  index: string;
  colors: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}) => {
  return (
    <ChartContainer
      className={className}
      config={{}}
    >
      <Recharts.ComposedChart data={data}>
        <Recharts.XAxis
          dataKey={index}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Recharts.YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => valueFormatter ? valueFormatter(value) : value}
        />
        <Recharts.CartesianGrid strokeDasharray="3 3" stroke="#404040" />
        <Recharts.Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-[#252525] border-white/10 p-2 shadow-md">
                  <div className="grid grid-cols-2 gap-2">
                    {payload.map((entry, index) => (
                      <div key={`item-${index}`} className="flex flex-col">
                        <span
                          className="text-xs font-medium"
                          style={{ color: entry.color }}
                        >
                          {entry.name}
                        </span>
                        <span className="text-xs text-white">
                          {valueFormatter
                            ? valueFormatter(entry.value as number)
                            : entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        {categories.map((category, index) => (
          <Recharts.Area
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[index % colors.length]}
            fill={colors[index % colors.length] + "20"}
            strokeWidth={2}
          />
        ))}
      </Recharts.ComposedChart>
    </ChartContainer>
  );
};

// Define BarChart component
const BarChart = ({
  data,
  categories,
  index,
  colors,
  valueFormatter,
  className,
}: {
  data: any[];
  categories: string[];
  index: string;
  colors: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}) => {
  return (
    <ChartContainer
      className={className}
      config={{}}
    >
      <Recharts.BarChart data={data}>
        <Recharts.XAxis
          dataKey={index}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Recharts.YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => valueFormatter ? valueFormatter(value) : value}
        />
        <Recharts.CartesianGrid strokeDasharray="3 3" stroke="#404040" vertical={false} />
        <Recharts.Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-[#252525] border-white/10 p-2 shadow-md">
                  <div className="grid grid-cols-2 gap-2">
                    {payload.map((entry, index) => (
                      <div key={`item-${index}`} className="flex flex-col">
                        <span
                          className="text-xs font-medium"
                          style={{ color: entry.color }}
                        >
                          {entry.name}
                        </span>
                        <span className="text-xs text-white">
                          {valueFormatter
                            ? valueFormatter(entry.value as number)
                            : entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        {categories.map((category, index) => (
          <Recharts.Bar
            key={category}
            dataKey={category}
            fill={colors[index % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </Recharts.BarChart>
    </ChartContainer>
  );
};

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-[#00BFFF] border-r-[#8A2BE2] border-b-[#00BFFF] border-l-[#8A2BE2] rounded-full animate-spin"></div>
          <p className="mt-4 text-white/70">Veriler yükleniyor...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Yönetici Paneli</h1>
        <p className="text-white/60 mt-1">
          Platform genelindeki istatistiklerinizi ve verilerinizi görüntüleyin.
        </p>
      </div>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Toplam Kullanıcı" 
          value="8,249" 
          change="+12.5%" 
          trend="up" 
          description="Son 30 gün" 
          icon={<Users className="h-6 w-6" />}
          color="blue"
        />
        <StatCard 
          title="Aylık Gelir" 
          value="$42,890" 
          change="+8.2%" 
          trend="up" 
          description="Geçen aya göre" 
          icon={<DollarSign className="h-6 w-6" />}
          color="green"
        />
        <StatCard 
          title="AI Model Kullanımı" 
          value="125,482" 
          change="+23.1%" 
          trend="up" 
          description="API çağrıları" 
          icon={<Zap className="h-6 w-6" />}
          color="purple"
        />
        <StatCard 
          title="Açık Destek Talepleri" 
          value="18" 
          change="-4" 
          trend="down" 
          description="Son 24 saat" 
          icon={<Headphones className="h-6 w-6" />}
          color="orange"
        />
      </div>
      
      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Section - 2/3 Width */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader className="pb-2">
              <CardTitle>Performans Analizi</CardTitle>
              <CardDescription className="text-white/60">
                Platform genelinde satış ve kullanıcı artışı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="sales">
                <TabsList className="grid grid-cols-2 mb-4 bg-[#252525]">
                  <TabsTrigger value="sales">Satışlar</TabsTrigger>
                  <TabsTrigger value="users">Kullanıcılar</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sales" className="mt-0 pt-4">
                  <AreaChart 
                    data={salesData} 
                    categories={["Abonelikler", "Tek Seferlik"]} 
                    index="month"
                    colors={["#00BFFF", "#8A2BE2"]} 
                    valueFormatter={(value) => `$${value.toLocaleString()}`} 
                    className="h-[300px]"
                  />
                </TabsContent>
                
                <TabsContent value="users" className="mt-0 pt-4">
                  <AreaChart 
                    data={usersData} 
                    categories={["Toplam Kullanıcı", "Aktif Kullanıcı"]} 
                    index="month"
                    colors={["#00BFFF", "#8A2BE2"]} 
                    valueFormatter={(value) => value.toLocaleString()} 
                    className="h-[300px]"
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader className="pb-2">
              <CardTitle>En Çok Satılan AI Modelleri</CardTitle>
              <CardDescription className="text-white/60">
                Son 30 günde en popüler AI modelleri
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart 
                data={aiModelData} 
                categories={["Satış"]} 
                index="model"
                colors={["#8A2BE2"]} 
                valueFormatter={(value) => value.toLocaleString()} 
                className="h-[300px]"
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Side Section - 1/3 Width */}
        <div className="space-y-6">
          {/* Recent Activities Card */}
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Son Aktiviteler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ActivityItem 
                title="Yeni kullanıcı kaydı" 
                description="Ahmet Yılmaz platformumuza katıldı" 
                time="10 dakika önce" 
                type="user"
              />
              <ActivityItem 
                title="Yeni AI Model eklendi" 
                description="Claude 3 Opus modeli kütüphaneye eklendi" 
                time="45 dakika önce" 
                type="model"
              />
              <ActivityItem 
                title="Abonelik satın alındı" 
                description="Mehmet Kaya Pro paketine abone oldu" 
                time="1 saat önce" 
                type="payment"
              />
              <ActivityItem 
                title="Destek talebi cevaplandı" 
                description="4 açık destek talebi yanıtlandı" 
                time="2 saat önce" 
                type="support"
              />
              <ActivityItem 
                title="Yeni makale yayınlandı" 
                description="AI Gelişmeleri: Haziran 2024" 
                time="5 saat önce" 
                type="content"
              />
            </CardContent>
          </Card>
          
          {/* Google AdSense Card */}
          <Card className="bg-[#1A1A1A] border-white/10 overflow-hidden">
            <div className="h-72 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#252525]">
              <div className="text-center p-6">
                <p className="text-white/40 mb-2">Google AdSense</p>
                <p className="text-white/60 text-sm">Reklam Alanı</p>
              </div>
            </div>
          </Card>
          
          {/* Quick Actions Card */}
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader>
              <CardTitle>Hızlı İşlemler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <QuickActionButton 
                label="Yeni AI Model Ekle" 
                icon={<Zap size={16} />} 
                href="/admin/ai-models/new"
              />
              <QuickActionButton 
                label="Kullanıcı Raporu Oluştur" 
                icon={<Users size={16} />} 
                href="/admin/reports/users"
              />
              <QuickActionButton 
                label="Satış İstatistikleri" 
                icon={<BarChart2 size={16} />} 
                href="/admin/reports/sales"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const StatCard = ({ title, value, change, trend, description, icon, color }: StatCardProps) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-[#00BFFF]/10 text-[#00BFFF]';
      case 'green': return 'bg-green-500/10 text-green-500';
      case 'purple': return 'bg-[#8A2BE2]/10 text-[#8A2BE2]';
      case 'orange': return 'bg-orange-500/10 text-orange-500';
      default: return 'bg-[#00BFFF]/10 text-[#00BFFF]';
    }
  };
  
  return (
    <Card className="bg-[#1A1A1A] border-white/10 hover:bg-[#222] transition-colors">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-white/60 mb-2">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center mt-2">
              {trend === 'up' ? (
                <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              <span className={trend === 'up' ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>
                {change}
              </span>
              <span className="text-white/40 text-xs ml-1">({description})</span>
            </div>
          </div>
          <div className={`p-3 rounded-xl ${getColorClass()}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Activity Item Component
interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  type: 'user' | 'model' | 'payment' | 'support' | 'content';
}

const ActivityItem = ({ title, description, time, type }: ActivityItemProps) => {
  const getIconAndColor = () => {
    switch (type) {
      case 'user':
        return { icon: <Users className="h-5 w-5" />, color: 'bg-[#00BFFF]/10 text-[#00BFFF]' };
      case 'model':
        return { icon: <Zap className="h-5 w-5" />, color: 'bg-[#8A2BE2]/10 text-[#8A2BE2]' };
      case 'payment':
        return { icon: <DollarSign className="h-5 w-5" />, color: 'bg-green-500/10 text-green-500' };
      case 'support':
        return { icon: <Headphones className="h-5 w-5" />, color: 'bg-orange-500/10 text-orange-500' };
      case 'content':
        return { icon: <FileEdit className="h-5 w-5" />, color: 'bg-blue-500/10 text-blue-500' };
      default:
        return { icon: <Activity className="h-5 w-5" />, color: 'bg-gray-500/10 text-gray-500' };
    }
  };
  
  const { icon, color } = getIconAndColor();
  
  return (
    <div className="flex items-start space-x-3">
      <div className={`p-2 rounded-lg ${color}`}>
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-white/60 mt-0.5">{description}</p>
        <p className="text-xs text-white/40 mt-1">{time}</p>
      </div>
    </div>
  );
};

// Quick Action Button Component
interface QuickActionButtonProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const QuickActionButton = ({ label, icon, href }: QuickActionButtonProps) => {
  return (
    <Link to={href}>
      <button className="flex items-center w-full p-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white">
        <span className="mr-2 text-[#00BFFF]">{icon}</span>
        <span className="text-sm">{label}</span>
      </button>
    </Link>
  );
};

// Import for ActivityItem component
import { Activity, FileEdit } from "lucide-react";
import { Link } from "react-router-dom";

// Mock Data for Charts
const salesData = [
  { month: "Ocak", Abonelikler: 12000, "Tek Seferlik": 8000 },
  { month: "Şubat", Abonelikler: 14000, "Tek Seferlik": 7500 },
  { month: "Mart", Abonelikler: 16500, "Tek Seferlik": 9000 },
  { month: "Nisan", Abonelikler: 18200, "Tek Seferlik": 10500 },
  { month: "Mayıs", Abonelikler: 21000, "Tek Seferlik": 12000 },
  { month: "Haziran", Abonelikler: 24500, "Tek Seferlik": 13500 },
];

const usersData = [
  { month: "Ocak", "Toplam Kullanıcı": 6500, "Aktif Kullanıcı": 4200 },
  { month: "Şubat", "Toplam Kullanıcı": 7000, "Aktif Kullanıcı": 4600 },
  { month: "Mart", "Toplam Kullanıcı": 7300, "Aktif Kullanıcı": 5100 },
  { month: "Nisan", "Toplam Kullanıcı": 7600, "Aktif Kullanıcı": 5400 },
  { month: "Mayıs", "Toplam Kullanıcı": 7900, "Aktif Kullanıcı": 5800 },
  { month: "Haziran", "Toplam Kullanıcı": 8300, "Aktif Kullanıcı": 6200 },
];

const aiModelData = [
  { model: "GPT-4", Satış: 1240 },
  { model: "Claude 3", Satış: 980 },
  { model: "Gemini Pro", Satış: 750 },
  { model: "Llama 2", Satış: 580 },
  { model: "Mistral", Satış: 450 },
  { model: "Stable Diffusion", Satış: 390 },
];

export default AdminDashboard;
