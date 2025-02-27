
import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Download,
  Trash,
  Ban,
  ShieldCheck,
  User,
  Star,
  Edit,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const UserManagement = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubscription, setSelectedSubscription] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock users data
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subscriptionType: "Pro",
      status: "active",
      registrationDate: "2024-03-15",
      lastLogin: "2024-06-20",
      apiUsage: 326,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      subscriptionType: "Free",
      status: "active",
      registrationDate: "2024-04-02",
      lastLogin: "2024-06-19",
      apiUsage: 12,
    },
    {
      id: "3",
      name: "Robert Johnson",
      email: "robert@example.com",
      subscriptionType: "VIP",
      status: "active",
      registrationDate: "2023-11-08",
      lastLogin: "2024-06-18",
      apiUsage: 894,
    },
    {
      id: "4",
      name: "Emily Williams",
      email: "emily@example.com",
      subscriptionType: "Pro",
      status: "inactive",
      registrationDate: "2024-01-22",
      lastLogin: "2024-05-03",
      apiUsage: 45,
    },
    {
      id: "5",
      name: "Michael Brown",
      email: "michael@example.com",
      subscriptionType: "Free",
      status: "banned",
      registrationDate: "2023-12-10",
      lastLogin: "2024-02-15",
      apiUsage: 0,
    },
    {
      id: "6",
      name: "Sarah Davis",
      email: "sarah@example.com",
      subscriptionType: "Pro",
      status: "active",
      registrationDate: "2024-02-18",
      lastLogin: "2024-06-20",
      apiUsage: 267,
    },
  ]);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSubscriptionChange = (value: string) => {
    setSelectedSubscription(value);
  };
  
  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    toast({
      title: "Kullanıcı Silindi",
      description: "Kullanıcı başarıyla silindi.",
    });
  };
  
  const handleBanUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: "banned" } : user
    ));
    toast({
      title: "Kullanıcı Banlandı",
      description: "Kullanıcı başarıyla banlandı.",
    });
  };
  
  const handleUpgradeUser = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, subscriptionType: user.subscriptionType === "Free" ? "Pro" : "VIP" } 
        : user
    ));
    toast({
      title: "Kullanıcı Yükseltildi",
      description: "Kullanıcı aboneliği başarıyla yükseltildi.",
    });
  };
  
  const filteredUsers = users.filter(user => {
    // Filter by search term
    const matchesSearch = (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Filter by subscription type
    const matchesSubscription = selectedSubscription === "all" || 
                              user.subscriptionType.toLowerCase() === selectedSubscription;
    
    return matchesSearch && matchesSubscription;
  });
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-[#00BFFF] border-r-[#8A2BE2] border-b-[#00BFFF] border-l-[#8A2BE2] rounded-full animate-spin"></div>
          <p className="mt-4 text-white/70">Kullanıcılar yükleniyor...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Kullanıcı Yönetimi</h1>
          <p className="text-white/60 mt-1">
            Tüm kullanıcıları yönetin, düzenleyin ve izleyin.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button variant="outline" className="border-white/10 hover:bg-white/5">
            <Download className="h-4 w-4 mr-2" />
            Dışa Aktar
          </Button>
          <Button className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            Yeni Kullanıcı
          </Button>
        </div>
      </div>
      
      {/* Filter Bar */}
      <Card className="bg-[#1A1A1A] border-white/10">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
              <Input
                type="text"
                placeholder="İsim veya email ara..."
                className="pl-9 bg-[#252525] border-white/10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={selectedSubscription} onValueChange={handleSubscriptionChange}>
                <SelectTrigger className="w-full sm:w-40 bg-[#252525] border-white/10">
                  <SelectValue placeholder="Abonelik Tipi" />
                </SelectTrigger>
                <SelectContent className="bg-[#252525] border-white/10">
                  <SelectItem value="all">Tüm Abonelikler</SelectItem>
                  <SelectItem value="free">Ücretsiz</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                className="border-white/10 hover:bg-white/5"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtreler
              </Button>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <label className="text-sm text-white/70 mb-2 block">Durum</label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-[#252525] border-white/10">
                    <SelectValue placeholder="Durum" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    <SelectItem value="all">Tüm Durumlar</SelectItem>
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="inactive">İnaktif</SelectItem>
                    <SelectItem value="banned">Banlı</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm text-white/70 mb-2 block">Kayıt Tarihi</label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-[#252525] border-white/10">
                    <SelectValue placeholder="Kayıt Tarihi" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    <SelectItem value="all">Tüm Tarihler</SelectItem>
                    <SelectItem value="last-week">Son 1 Hafta</SelectItem>
                    <SelectItem value="last-month">Son 1 Ay</SelectItem>
                    <SelectItem value="last-quarter">Son 3 Ay</SelectItem>
                    <SelectItem value="last-year">Son 1 Yıl</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm text-white/70 mb-2 block">API Kullanımı</label>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full bg-[#252525] border-white/10">
                    <SelectValue placeholder="API Kullanımı" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    <SelectItem value="all">Tüm Kullanımlar</SelectItem>
                    <SelectItem value="high">Yüksek (500+)</SelectItem>
                    <SelectItem value="medium">Orta (100-500)</SelectItem>
                    <SelectItem value="low">Düşük (1-99)</SelectItem>
                    <SelectItem value="none">Yok (0)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Users Table */}
      <Card className="bg-[#1A1A1A] border-white/10">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-[#252525]">
              <TableRow className="hover:bg-transparent border-white/10">
                <TableHead className="text-white/70">İsim</TableHead>
                <TableHead className="text-white/70">Email</TableHead>
                <TableHead className="text-white/70">Abonelik</TableHead>
                <TableHead className="text-white/70">Durum</TableHead>
                <TableHead className="text-white/70">Kayıt Tarihi</TableHead>
                <TableHead className="text-white/70">Son Giriş</TableHead>
                <TableHead className="text-white/70">API Kullanımı</TableHead>
                <TableHead className="text-white/70 text-right">İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id} className="hover:bg-white/5 border-white/10">
                    <TableCell>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-[#252525] flex items-center justify-center text-white mr-2">
                          <User className="h-4 w-4" />
                        </div>
                        <Link 
                          to={`/admin/users/${user.id}`} 
                          className="text-white hover:text-[#00BFFF] transition-colors"
                        >
                          {user.name}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <SubscriptionBadge type={user.subscriptionType} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={user.status} />
                    </TableCell>
                    <TableCell>{formatDate(user.registrationDate)}</TableCell>
                    <TableCell>{formatDate(user.lastLogin)}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="mr-2">{user.apiUsage}</span>
                        <APIUsageBadge count={user.apiUsage} />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-[#252525] border-white/10">
                          <DropdownMenuLabel>Kullanıcı İşlemleri</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuGroup>
                            <DropdownMenuItem className="hover:bg-white/5 text-white/90">
                              <Link to={`/admin/users/${user.id}`} className="flex items-center w-full">
                                <User className="h-4 w-4 mr-2" />
                                <span>Profili Görüntüle</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/5 text-white/90">
                              <Edit className="h-4 w-4 mr-2" />
                              <span>Düzenle</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="hover:bg-white/5 text-white/90"
                              onClick={() => handleUpgradeUser(user.id)}
                            >
                              <Star className="h-4 w-4 mr-2 text-yellow-400" />
                              <span>Aboneliği Yükselt</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuGroup>
                            <DropdownMenuItem 
                              className="hover:bg-white/5 text-red-400 hover:text-red-300"
                              onClick={() => handleBanUser(user.id)}
                            >
                              <Ban className="h-4 w-4 mr-2" />
                              <span>Kullanıcıyı Banla</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="hover:bg-white/5 text-red-400 hover:text-red-300"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              <Trash className="h-4 w-4 mr-2" />
                              <span>Sil</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-white/60">
                    Eşleşen kullanıcı bulunamadı
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper Components
const SubscriptionBadge = ({ type }: { type: string }) => {
  const getColor = () => {
    switch (type) {
      case "Free": return "bg-gray-500/20 text-gray-300";
      case "Pro": return "bg-[#00BFFF]/20 text-[#00BFFF]";
      case "VIP": return "bg-[#8A2BE2]/20 text-[#8A2BE2]";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };
  
  return (
    <Badge className={`${getColor()} hover:${getColor()}`}>
      {type}
    </Badge>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const getColor = () => {
    switch (status) {
      case "active": return "bg-green-500/20 text-green-400";
      case "inactive": return "bg-yellow-500/20 text-yellow-400";
      case "banned": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };
  
  const getLabel = () => {
    switch (status) {
      case "active": return "Aktif";
      case "inactive": return "İnaktif";
      case "banned": return "Banlı";
      default: return status;
    }
  };
  
  return (
    <Badge className={`${getColor()} hover:${getColor()}`}>
      {getLabel()}
    </Badge>
  );
};

const APIUsageBadge = ({ count }: { count: number }) => {
  const getColor = () => {
    if (count === 0) return "bg-gray-500/20";
    if (count < 50) return "bg-green-500/20";
    if (count < 200) return "bg-blue-500/20";
    if (count < 500) return "bg-yellow-500/20";
    return "bg-red-500/20";
  };
  
  const getWidth = () => {
    if (count === 0) return "0%";
    if (count < 50) return "20%";
    if (count < 200) return "40%";
    if (count < 500) return "70%";
    return "100%";
  };
  
  return (
    <div className="w-20 h-2 bg-white/5 rounded-full overflow-hidden">
      <div 
        className={`h-full ${getColor()}`}
        style={{ width: getWidth() }}
      ></div>
    </div>
  );
};

// Helper functions
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('tr-TR', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  }).format(date);
};

export default UserManagement;
