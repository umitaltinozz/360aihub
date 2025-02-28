
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Filter,
  Edit,
  Trash,
  Eye,
  Download,
  ArrowUpDown,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  StarHalf
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Sahte veri
const modelData = [
  {
    id: "1",
    name: "GPT-4",
    company: "OpenAI",
    usageCount: 245789,
    apiStatus: "active",
    rating: 4.9,
    category: "Dil Modeli",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.03,
    lastUpdated: "2024-06-12"
  },
  {
    id: "2",
    name: "Claude 3 Opus",
    company: "Anthropic",
    usageCount: 159632,
    apiStatus: "active",
    rating: 4.8,
    category: "Dil Modeli",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.025,
    lastUpdated: "2024-06-10"
  },
  {
    id: "3",
    name: "Gemini Pro",
    company: "Google",
    usageCount: 124563,
    apiStatus: "active",
    rating: 4.7,
    category: "Çok Modlu",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.02,
    lastUpdated: "2024-06-08"
  },
  {
    id: "4",
    name: "Stable Diffusion XL",
    company: "Stability AI",
    usageCount: 98745,
    apiStatus: "active",
    rating: 4.6,
    category: "Görsel Üretme",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.04,
    lastUpdated: "2024-06-05"
  },
  {
    id: "5",
    name: "Llama 3 70B",
    company: "Meta",
    usageCount: 78912,
    apiStatus: "maintenance",
    rating: 4.5,
    category: "Dil Modeli",
    pricing: "Abonelik",
    monthlyFee: 20,
    usageFee: 0,
    lastUpdated: "2024-06-01"
  },
  {
    id: "6",
    name: "Mistral Medium",
    company: "Mistral AI",
    usageCount: 65478,
    apiStatus: "active",
    rating: 4.4,
    category: "Dil Modeli",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.015,
    lastUpdated: "2024-05-28"
  },
  {
    id: "7",
    name: "DALL-E 3",
    company: "OpenAI",
    usageCount: 58741,
    apiStatus: "active",
    rating: 4.7,
    category: "Görsel Üretme",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.04,
    lastUpdated: "2024-05-25"
  },
  {
    id: "8",
    name: "GPT-3.5 Turbo",
    company: "OpenAI",
    usageCount: 347821,
    apiStatus: "active",
    rating: 4.3,
    category: "Dil Modeli",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.01,
    lastUpdated: "2024-05-20"
  },
  {
    id: "9",
    name: "Whisper",
    company: "OpenAI",
    usageCount: 41256,
    apiStatus: "issues",
    rating: 4.2,
    category: "Ses Tanıma",
    pricing: "Kullanım Başına",
    monthlyFee: 0,
    usageFee: 0.006,
    lastUpdated: "2024-05-15"
  },
  {
    id: "10",
    name: "Midjourney v6",
    company: "Midjourney",
    usageCount: 125478,
    apiStatus: "active",
    rating: 4.8,
    category: "Görsel Üretme",
    pricing: "Abonelik",
    monthlyFee: 30,
    usageFee: 0,
    lastUpdated: "2024-05-10"
  }
];

// Model kategorilerinin listesi
const categories = ["Tümü", "Dil Modeli", "Görsel Üretme", "Ses Tanıma", "Çok Modlu", "Diğer"];

// API durumları ve ilgili renkler/ikonları
const apiStatus = {
  active: { 
    label: "Aktif", 
    icon: <CheckCircle className="h-4 w-4 text-green-500" />, 
    color: "bg-green-500/20 text-green-500 border-green-500/30" 
  },
  maintenance: { 
    label: "Bakımda", 
    icon: <AlertCircle className="h-4 w-4 text-amber-500" />, 
    color: "bg-amber-500/20 text-amber-500 border-amber-500/30" 
  },
  issues: { 
    label: "Sorunlu", 
    icon: <XCircle className="h-4 w-4 text-red-500" />, 
    color: "bg-red-500/20 text-red-500 border-red-500/30" 
  },
  inactive: { 
    label: "Devre Dışı", 
    icon: <XCircle className="h-4 w-4 text-gray-500" />, 
    color: "bg-gray-500/20 text-gray-500 border-gray-500/30" 
  }
};

const AIModelManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Durum yönetimi
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "usageCount",
    direction: "desc" as "asc" | "desc"
  });
  
  // Modelleri filtrele
  const filteredModels = modelData.filter(model => {
    // Arama terimi filtresi
    const searchFilter = model.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         model.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Kategori filtresi
    const categoryFilter = selectedCategory === "Tümü" || model.category === selectedCategory;
    
    // Durum filtresi
    const statusFilter = selectedStatus === "all" || model.apiStatus === selectedStatus;
    
    return searchFilter && categoryFilter && statusFilter;
  });
  
  // Modelleri sırala
  const sortedModels = [...filteredModels].sort((a, b) => {
    if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  
  // Sıralama fonksiyonu
  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  
  // Model düzenleme
  const handleEditModel = (id: string) => {
    navigate(`/admin/ai-models/edit/${id}`);
  };
  
  // Model silme
  const handleDeleteModel = (id: string) => {
    // Gerçek uygulamada API çağrısı yapılır
    toast({
      title: "Model Silindi",
      description: `ID: ${id} olan model başarıyla silindi.`,
    });
  };
  
  // Model durumu güncelleme
  const handleUpdateStatus = (id: string, status: string) => {
    // Gerçek uygulamada API çağrısı yapılır
    toast({
      title: "Model Durumu Güncellendi",
      description: `ID: ${id} olan modelin durumu "${apiStatus[status as keyof typeof apiStatus].label}" olarak güncellendi.`,
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">AI Model Yönetimi</h1>
          <p className="text-white/60 mt-1">
            Platform üzerindeki AI modellerini yönetin, düzenleyin ve izleyin.
          </p>
        </div>
        <Button 
          onClick={() => navigate("/admin/ai-models/new")}
          className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Yeni Model Ekle
        </Button>
      </div>
      
      {/* Filtreleme ve Arama Kartı */}
      <Card className="bg-[#1A1A1A] border-white/10">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
              <Input
                placeholder="AI model veya firma adı ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-[#252525] border-white/10"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-40 bg-[#252525] border-white/10">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-white/60" />
                    <SelectValue placeholder="Kategori" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#252525] border-white/10">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-40 bg-[#252525] border-white/10">
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-white/60" />
                    <SelectValue placeholder="API Durumu" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#252525] border-white/10">
                  <SelectItem value="all">Tüm Durumlar</SelectItem>
                  {Object.entries(apiStatus).map(([key, { label }]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Model Listesi Tablosu */}
      <Card className="bg-[#1A1A1A] border-white/10">
        <CardHeader className="pb-0">
          <CardTitle>AI Modelleri</CardTitle>
          <CardDescription className="text-white/60">
            Platformda bulunan toplam {modelData.length} AI modeli, {filteredModels.length} sonuç görüntüleniyor.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 overflow-auto">
          <Table>
            <TableHeader className="bg-[#222]">
              <TableRow>
                <TableHead className="w-[250px]">
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => requestSort("name")}
                  >
                    <span>Model Adı</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => requestSort("company")}
                  >
                    <span>Firma</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => requestSort("usageCount")}
                  >
                    <span>Kullanım</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => requestSort("category")}
                  >
                    <span>Kategori</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>API Durumu</TableHead>
                <TableHead>
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => requestSort("rating")}
                  >
                    <span>Puan</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => requestSort("lastUpdated")}
                  >
                    <span>Son Güncelleme</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-right">İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedModels.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-10">
                    <div className="flex flex-col items-center justify-center text-white/60">
                      <Search className="h-10 w-10 mb-2" />
                      <p>Aramanıza uygun model bulunamadı.</p>
                      <p className="text-sm mt-1">Lütfen filtrelerinizi değiştirin veya tüm modelleri görmek için filtreleri temizleyin.</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                sortedModels.map((model) => (
                  <TableRow key={model.id} className="hover:bg-white/5">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center">
                          <span className="text-xs font-bold">{model.name.substring(0, 2)}</span>
                        </div>
                        <span>{model.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{model.company}</TableCell>
                    <TableCell>{model.usageCount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                        {model.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${apiStatus[model.apiStatus as keyof typeof apiStatus].color} flex items-center gap-1 w-fit`}>
                        {apiStatus[model.apiStatus as keyof typeof apiStatus].icon}
                        <span>{apiStatus[model.apiStatus as keyof typeof apiStatus].label}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        {Array(Math.floor(model.rating)).fill(null).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        {model.rating % 1 !== 0 && (
                          <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        )}
                        <span className="ml-1 text-sm">{model.rating.toFixed(1)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-white/70">{new Date(model.lastUpdated).toLocaleDateString("tr-TR")}</span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#252525] border-white/10" align="end">
                          <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem
                            className="gap-2 hover:bg-white/5 cursor-pointer"
                            onClick={() => navigate(`/admin/ai-models/${model.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                            <span>Görüntüle</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="gap-2 hover:bg-white/5 cursor-pointer"
                            onClick={() => handleEditModel(model.id)}
                          >
                            <Edit className="h-4 w-4" />
                            <span>Düzenle</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-white/10" />
                          
                          {/* API Durumu Değiştirme Menüsü */}
                          <DropdownMenuLabel className="text-xs text-white/50">Durumu Değiştir</DropdownMenuLabel>
                          {Object.entries(apiStatus).map(([status, { label, icon }]) => (
                            <DropdownMenuItem
                              key={status}
                              className="gap-2 hover:bg-white/5 cursor-pointer"
                              onClick={() => handleUpdateStatus(model.id, status)}
                              disabled={model.apiStatus === status}
                            >
                              {icon}
                              <span>{label}</span>
                            </DropdownMenuItem>
                          ))}
                          
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem
                            className="gap-2 text-red-400 hover:text-red-300 hover:bg-white/5 cursor-pointer"
                            onClick={() => handleDeleteModel(model.id)}
                          >
                            <Trash className="h-4 w-4" />
                            <span>Sil</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-white/10 py-4">
          <div className="text-sm text-white/60">
            {filteredModels.length} / {modelData.length} model gösteriliyor
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
              <Download className="h-4 w-4 mr-2" />
              CSV İndir
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AIModelManagement;
