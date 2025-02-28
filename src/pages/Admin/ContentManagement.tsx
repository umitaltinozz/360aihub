
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Filter,
  Edit,
  Trash,
  Eye,
  FileText,
  ArrowUpDown,
  MoreHorizontal,
  Calendar,
  BarChart2,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
  Settings,
  Image
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Sahte veri - Makaleler
const articlesData = [
  {
    id: "1",
    title: "OpenAI GPT-5 Modelini Duyurdu: 'Düşünme Yetenekleri Geliştirildi'",
    author: "Ahmet Yılmaz",
    category: "AI Modelleri",
    status: "published", // published, draft, review
    views: 12458,
    comments: 86,
    publishDate: "2024-06-15",
    lastUpdated: "2024-06-16",
    featured: true
  },
  {
    id: "2",
    title: "Google, Yeni Gemini 2.0 Modelini Tanıttı: 'Multimodal Kabiliyetler Artırıldı'",
    author: "Ayşe Kaya",
    category: "AI Modelleri",
    status: "published",
    views: 8743,
    comments: 52,
    publishDate: "2024-06-12",
    lastUpdated: "2024-06-14",
    featured: true
  },
  {
    id: "3",
    title: "AB'den Yapay Zeka Düzenlemeleri: Yeni AI Yasası Yürürlüğe Girdi",
    author: "Mehmet Demir",
    category: "Etik",
    status: "published",
    views: 7854,
    comments: 104,
    publishDate: "2024-06-10",
    lastUpdated: "2024-06-11",
    featured: false
  },
  {
    id: "4",
    title: "Yapay Zeka ve Geleceğin İş Dünyası: Değişen Roller ve Yeni Fırsatlar",
    author: "Zeynep Şahin",
    category: "Etik",
    status: "draft",
    views: 0,
    comments: 0,
    publishDate: "",
    lastUpdated: "2024-06-08",
    featured: false
  },
  {
    id: "5",
    title: "Yerel İşletmeler İçin AI Çözümleri: Küçük Ölçekli İşletmeler Nasıl Yararlanabilir?",
    author: "Burak Özdemir",
    category: "Uygulamalar",
    status: "review",
    views: 0,
    comments: 0,
    publishDate: "",
    lastUpdated: "2024-06-05",
    featured: false
  },
  {
    id: "6",
    title: "Yapay Zeka Eğitiminde Yeni Yaklaşımlar: Transfer Öğrenimi ve Az Örnekli Öğrenme",
    author: "Can Yıldız",
    category: "Araştırmalar",
    status: "published",
    views: 4521,
    comments: 38,
    publishDate: "2024-06-01",
    lastUpdated: "2024-06-03",
    featured: false
  },
  {
    id: "7",
    title: "Sağlık Sektöründe AI Uygulamaları: Teşhis ve Tedavi Süreçlerinde Devrim",
    author: "Elif Aksoy",
    category: "Uygulamalar",
    status: "review",
    views: 0,
    comments: 0,
    publishDate: "",
    lastUpdated: "2024-05-28",
    featured: false
  }
];

// Sahte veri - Yorumlar
const commentsData = [
  {
    id: "c1",
    articleId: "1",
    articleTitle: "OpenAI GPT-5 Modelini Duyurdu: 'Düşünme Yetenekleri Geliştirildi'",
    author: "Kullanıcı123",
    content: "Bu gelişme gerçekten etkileyici! Yapay zekanın düşünme yeteneklerinin gelişmesi, gelecekte ne tür uygulamalar göreceğimizi merak ediyorum.",
    date: "2024-06-16",
    status: "approved" // approved, pending, spam
  },
  {
    id: "c2",
    articleId: "1",
    articleTitle: "OpenAI GPT-5 Modelini Duyurdu: 'Düşünme Yetenekleri Geliştirildi'",
    author: "Yapay_Zeka_Uzmanı",
    content: "Makalede teknik detaylar eksik. GPT-5'in mimari yapısı ve önceki modellerle karşılaştırması daha detaylı verilebilirdi.",
    date: "2024-06-16",
    status: "approved"
  },
  {
    id: "c3",
    articleId: "2",
    articleTitle: "Google, Yeni Gemini 2.0 Modelini Tanıttı: 'Multimodal Kabiliyetler Artırıldı'",
    author: "TechGuru42",
    content: "Google'ın bu hamlesi OpenAI'ya karşı güçlü bir cevap. Özellikle multimodal yetenekler açısından öne geçebilir.",
    date: "2024-06-14",
    status: "approved"
  },
  {
    id: "c4",
    articleId: "3",
    articleTitle: "AB'den Yapay Zeka Düzenlemeleri: Yeni AI Yasası Yürürlüğe Girdi",
    author: "HukukSever",
    content: "AB'nin bu yasası sektörü nasıl etkileyecek? Özellikle şirketler için uyum süreci zorlu olabilir.",
    date: "2024-06-12",
    status: "pending"
  },
  {
    id: "c5",
    articleId: "3",
    articleTitle: "AB'den Yapay Zeka Düzenlemeleri: Yeni AI Yasası Yürürlüğe Girdi",
    author: "AnonymousBot",
    content: "TIKLAYIN! En iyi yapay zeka araçları için sitemizi ziyaret edin: www.spamlink.com",
    date: "2024-06-11",
    status: "spam"
  },
  {
    id: "c6",
    articleId: "6",
    articleTitle: "Yapay Zeka Eğitiminde Yeni Yaklaşımlar: Transfer Öğrenimi ve Az Örnekli Öğrenme",
    author: "DataSciencePro",
    content: "Transfer öğrenimi konusu çok iyi ele alınmış. Ayrıca PEFT yöntemlerinden de bahsedilseydi daha kapsamlı olabilirdi.",
    date: "2024-06-04",
    status: "pending"
  }
];

// Durum yapılandırmaları
const articleStatusConfig = {
  published: { 
    label: "Yayında", 
    icon: <CheckCircle className="h-4 w-4 text-green-500" />, 
    color: "bg-green-500/20 text-green-500 border-green-500/30" 
  },
  draft: { 
    label: "Taslak", 
    icon: <FileText className="h-4 w-4 text-blue-500" />, 
    color: "bg-blue-500/20 text-blue-500 border-blue-500/30" 
  },
  review: { 
    label: "İncelemede", 
    icon: <AlertCircle className="h-4 w-4 text-amber-500" />, 
    color: "bg-amber-500/20 text-amber-500 border-amber-500/30" 
  }
};

const commentStatusConfig = {
  approved: { 
    label: "Onaylandı", 
    icon: <CheckCircle className="h-4 w-4 text-green-500" />, 
    color: "bg-green-500/20 text-green-500 border-green-500/30" 
  },
  pending: { 
    label: "Beklemede", 
    icon: <AlertCircle className="h-4 w-4 text-amber-500" />, 
    color: "bg-amber-500/20 text-amber-500 border-amber-500/30" 
  },
  spam: { 
    label: "Spam", 
    icon: <XCircle className="h-4 w-4 text-red-500" />, 
    color: "bg-red-500/20 text-red-500 border-red-500/30" 
  }
};

// Kategori listesi
const categories = ["Tümü", "AI Modelleri", "Araştırmalar", "Şirket Haberleri", "Etik", "Uygulamalar"];

const ContentManagement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Durum yönetimi
  const [activeTab, setActiveTab] = useState("articles");
  
  // Makaleler için filtreler
  const [articleSearchTerm, setArticleSearchTerm] = useState("");
  const [articleCategoryFilter, setArticleCategoryFilter] = useState("Tümü");
  const [articleStatusFilter, setArticleStatusFilter] = useState("all");
  const [articleSortConfig, setArticleSortConfig] = useState({
    key: "publishDate",
    direction: "desc" as "asc" | "desc"
  });
  
  // Yorumlar için filtreler
  const [commentSearchTerm, setCommentSearchTerm] = useState("");
  const [commentStatusFilter, setCommentStatusFilter] = useState("all");
  const [commentSortConfig, setCommentSortConfig] = useState({
    key: "date",
    direction: "desc" as "asc" | "desc"
  });
  
  // Makaleleri filtrele
  const filteredArticles = articlesData.filter(article => {
    // Arama terimi filtresi
    const searchFilter = article.title.toLowerCase().includes(articleSearchTerm.toLowerCase()) || 
                         article.author.toLowerCase().includes(articleSearchTerm.toLowerCase());
    
    // Kategori filtresi
    const categoryFilter = articleCategoryFilter === "Tümü" || article.category === articleCategoryFilter;
    
    // Durum filtresi
    const statusFilter = articleStatusFilter === "all" || article.status === articleStatusFilter;
    
    return searchFilter && categoryFilter && statusFilter;
  });
  
  // Makaleleri sırala
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    // Özel durumlar için kontrol
    if (articleSortConfig.key === "publishDate") {
      if (a.publishDate === "" && b.publishDate === "") return 0;
      if (a.publishDate === "") return 1;
      if (b.publishDate === "") return -1;
    }
    
    if (a[articleSortConfig.key as keyof typeof a] < b[articleSortConfig.key as keyof typeof b]) {
      return articleSortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[articleSortConfig.key as keyof typeof a] > b[articleSortConfig.key as keyof typeof b]) {
      return articleSortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  
  // Yorumları filtrele
  const filteredComments = commentsData.filter(comment => {
    // Arama terimi filtresi
    const searchFilter = comment.content.toLowerCase().includes(commentSearchTerm.toLowerCase()) || 
                         comment.author.toLowerCase().includes(commentSearchTerm.toLowerCase()) ||
                         comment.articleTitle.toLowerCase().includes(commentSearchTerm.toLowerCase());
    
    // Durum filtresi
    const statusFilter = commentStatusFilter === "all" || comment.status === commentStatusFilter;
    
    return searchFilter && statusFilter;
  });
  
  // Yorumları sırala
  const sortedComments = [...filteredComments].sort((a, b) => {
    if (a[commentSortConfig.key as keyof typeof a] < b[commentSortConfig.key as keyof typeof b]) {
      return commentSortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[commentSortConfig.key as keyof typeof a] > b[commentSortConfig.key as keyof typeof b]) {
      return commentSortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });
  
  // Sıralama fonksiyonları
  const requestArticleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (articleSortConfig.key === key && articleSortConfig.direction === "asc") {
      direction = "desc";
    }
    setArticleSortConfig({ key, direction });
  };
  
  const requestCommentSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (commentSortConfig.key === key && commentSortConfig.direction === "asc") {
      direction = "desc";
    }
    setCommentSortConfig({ key, direction });
  };
  
  // Makale durumu güncelleme
  const handleUpdateArticleStatus = (id: string, status: string) => {
    // Gerçek uygulamada API çağrısı yapılır
    toast({
      title: "Makale Durumu Güncellendi",
      description: `ID: ${id} olan makalenin durumu "${articleStatusConfig[status as keyof typeof articleStatusConfig].label}" olarak güncellendi.`,
    });
  };
  
  // Makaleyi öne çıkarma/çıkarmama
  const handleToggleFeatureArticle = (id: string, featured: boolean) => {
    // Gerçek uygulamada API çağrısı yapılır
    toast({
      title: featured ? "Makale Öne Çıkarıldı" : "Makale Öne Çıkarılması Kaldırıldı",
      description: `ID: ${id} olan makale ${featured ? "öne çıkarıldı" : "öne çıkarılması kaldırıldı"}.`,
    });
  };
  
  // Yorum durumu güncelleme
  const handleUpdateCommentStatus = (id: string, status: string) => {
    // Gerçek uygulamada API çağrısı yapılır
    toast({
      title: "Yorum Durumu Güncellendi",
      description: `ID: ${id} olan yorumun durumu "${commentStatusConfig[status as keyof typeof commentStatusConfig].label}" olarak güncellendi.`,
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">İçerik Yönetimi</h1>
        <p className="text-white/60 mt-1">
          AI haberleri ve içeriklerini yönetin, düzenleyin ve yayınlayın.
        </p>
      </div>
      
      {/* Dashboard Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#1A1A1A] border-white/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/60 mb-1">Toplam Makale</p>
                <p className="text-2xl font-bold">{articlesData.length}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-white/60">
                    <span className="text-green-400 font-medium">{articlesData.filter(a => a.status === "published").length}</span> yayında, 
                    <span className="text-blue-400 font-medium ml-1">{articlesData.filter(a => a.status === "draft").length}</span> taslak
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                <FileText className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1A1A1A] border-white/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/60 mb-1">Toplam Görüntülenme</p>
                <p className="text-2xl font-bold">{articlesData.reduce((sum, article) => sum + article.views, 0).toLocaleString()}</p>
                <div className="flex items-center mt-1">
                  <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+18%</span>
                  </Badge>
                  <span className="text-xs text-white/40 ml-2">Son 30 gün</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                <BarChart2 className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1A1A1A] border-white/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/60 mb-1">Toplam Yorum</p>
                <p className="text-2xl font-bold">{commentsData.length}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-white/60">
                    <span className="text-green-400 font-medium">{commentsData.filter(c => c.status === "approved").length}</span> onaylı, 
                    <span className="text-amber-400 font-medium ml-1">{commentsData.filter(c => c.status === "pending").length}</span> bekleyen
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1A1A1A] border-white/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-white/60 mb-1">Bekleyen İçerik</p>
                <p className="text-2xl font-bold">{articlesData.filter(a => a.status === "review").length + commentsData.filter(c => c.status === "pending").length}</p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-white/70">
                    <span className="text-amber-400 font-medium">{articlesData.filter(a => a.status === "review").length}</span> makale, 
                    <span className="text-amber-400 font-medium ml-1">{commentsData.filter(c => c.status === "pending").length}</span> yorum
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                <AlertCircle className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Ana İçerik Sekmeleri */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-2 bg-[#252525]">
          <TabsTrigger value="articles">
            <FileText className="h-4 w-4 mr-2" />
            Makaleler
          </TabsTrigger>
          <TabsTrigger value="comments">
            <MessageSquare className="h-4 w-4 mr-2" />
            Yorumlar
          </TabsTrigger>
        </TabsList>
        
        {/* Makaleler Sekmesi */}
        <TabsContent value="articles">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader className="pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Makale Listesi</CardTitle>
                  <CardDescription className="text-white/60">
                    Platformda bulunan toplam {articlesData.length} makale, {filteredArticles.length} sonuç görüntüleniyor.
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => navigate("/admin/content/new")}
                    className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] hover:opacity-90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Yeni Makale
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    <Settings className="h-4 w-4 mr-2" />
                    İçerik Ayarları
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    placeholder="Makale başlığı veya yazar ara..."
                    value={articleSearchTerm}
                    onChange={(e) => setArticleSearchTerm(e.target.value)}
                    className="pl-9 bg-[#252525] border-white/10"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select value={articleCategoryFilter} onValueChange={setArticleCategoryFilter}>
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
                  
                  <Select value={articleStatusFilter} onValueChange={setArticleStatusFilter}>
                    <SelectTrigger className="w-full sm:w-40 bg-[#252525] border-white/10">
                      <div className="flex items-center">
                        <Filter className="h-4 w-4 mr-2 text-white/60" />
                        <SelectValue placeholder="Durum" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-[#252525] border-white/10">
                      <SelectItem value="all">Tüm Durumlar</SelectItem>
                      {Object.entries(articleStatusConfig).map(([key, { label }]) => (
                        <SelectItem key={key} value={key}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="overflow-auto">
                <Table>
                  <TableHeader className="bg-[#222]">
                    <TableRow>
                      <TableHead className="w-[350px]">
                        <div 
                          className="flex items-center cursor-pointer"
                          onClick={() => requestArticleSort("title")}
                        >
                          <span>Başlık</span>
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div 
                          className="flex items-center cursor-pointer"
                          onClick={() => requestArticleSort("author")}
                        >
                          <span>Yazar</span>
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div 
                          className="flex items-center cursor-pointer"
                          onClick={() => requestArticleSort("category")}
                        >
                          <span>Kategori</span>
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Durum</TableHead>
                      <TableHead>
                        <div 
                          className="flex items-center cursor-pointer"
                          onClick={() => requestArticleSort("views")}
                        >
                          <span>Görüntülenme</span>
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>
                        <div 
                          className="flex items-center cursor-pointer"
                          onClick={() => requestArticleSort("publishDate")}
                        >
                          <span>Yayın Tarihi</span>
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead className="text-right">İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedArticles.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-10">
                          <div className="flex flex-col items-center justify-center text-white/60">
                            <FileText className="h-10 w-10 mb-2" />
                            <p>Aramanıza uygun makale bulunamadı.</p>
                            <p className="text-sm mt-1">Lütfen filtrelerinizi değiştirin veya tüm makaleleri görmek için filtreleri temizleyin.</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      sortedArticles.map((article) => (
                        <TableRow key={article.id} className="hover:bg-white/5">
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              {article.featured && (
                                <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30 mr-2">
                                  Öne Çıkan
                                </Badge>
                              )}
                              <span className="truncate max-w-xs">{article.title}</span>
                            </div>
                          </TableCell>
                          <TableCell>{article.author}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-white/5 hover:bg-white/10">
                              {article.category}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${articleStatusConfig[article.status as keyof typeof articleStatusConfig].color} flex items-center gap-1 w-fit`}>
                              {articleStatusConfig[article.status as keyof typeof articleStatusConfig].icon}
                              <span>{articleStatusConfig[article.status as keyof typeof articleStatusConfig].label}</span>
                            </Badge>
                          </TableCell>
                          <TableCell>{article.views.toLocaleString()}</TableCell>
                          <TableCell>
                            {article.publishDate ? (
                              <div className="flex items-center text-white/70">
                                <Calendar className="h-3 w-3 mr-1 text-white/50" />
                                <span>{new Date(article.publishDate).toLocaleDateString("tr-TR")}</span>
                              </div>
                            ) : (
                              <span className="text-white/40">Yayınlanmadı</span>
                            )}
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
                                  onClick={() => navigate(`/admin/content/${article.id}`)}
                                >
                                  <Eye className="h-4 w-4" />
                                  <span>Görüntüle</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="gap-2 hover:bg-white/5 cursor-pointer"
                                  onClick={() => navigate(`/admin/content/edit/${article.id}`)}
                                >
                                  <Edit className="h-4 w-4" />
                                  <span>Düzenle</span>
                                </DropdownMenuItem>
                                
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuLabel className="text-xs text-white/50">Durumu Değiştir</DropdownMenuLabel>
                                {Object.entries(articleStatusConfig).map(([status, { label, icon }]) => (
                                  <DropdownMenuItem
                                    key={status}
                                    className="gap-2 hover:bg-white/5 cursor-pointer"
                                    onClick={() => handleUpdateArticleStatus(article.id, status)}
                                    disabled={article.status === status}
                                  >
                                    {icon}
                                    <span>{label}</span>
                                  </DropdownMenuItem>
                                ))}
                                
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem
                                  className="gap-2 hover:bg-white/5 cursor-pointer"
                                  onClick={() => handleToggleFeatureArticle(article.id, !article.featured)}
                                >
                                  <Star className={`h-4 w-4 ${article.featured ? 'text-amber-400 fill-amber-400' : ''}`} />
                                  <span>{article.featured ? "Öne Çıkarmayı Kaldır" : "Öne Çıkar"}</span>
                                </DropdownMenuItem>
                                
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem
                                  className="gap-2 text-red-400 hover:text-red-300 hover:bg-white/5 cursor-pointer"
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
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1A1A1A] border-white/10 mt-6">
            <CardHeader>
              <CardTitle>AdSense Yapılandırması</CardTitle>
              <CardDescription>
                İçerik sayfalarında reklam yerleşimlerini yönetin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-white/10 rounded-md bg-[#252525]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-sm mr-2"></div>
                    <h4 className="font-medium">Üst Banner (728x90)</h4>
                  </div>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-white/60 mb-3">Makale başlığı altında, içerik öncesinde görünür.</p>
                <div className="w-full h-20 bg-[#1A1A1A] rounded-md border border-white/10 flex items-center justify-center">
                  <div className="flex items-center text-white/40">
                    <Image className="h-5 w-5 mr-2" />
                    <span>Reklam önizlemesi</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-white/10 rounded-md bg-[#252525]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
                    <h4 className="font-medium">İçerik İçi (300x250)</h4>
                  </div>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-white/60 mb-3">Makale ortasında, paragraflar arasında görünür.</p>
                <div className="w-full h-20 bg-[#1A1A1A] rounded-md border border-white/10 flex items-center justify-center">
                  <div className="flex items-center text-white/40">
                    <Image className="h-5 w-5 mr-2" />
                    <span>Reklam önizlemesi</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-white/10 rounded-md bg-[#252525]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-sm mr-2"></div>
                    <h4 className="font-medium">Yan Sütun (300x600)</h4>
                  </div>
                  <Switch defaultChecked />
                </div>
                <p className="text-sm text-white/60 mb-3">Sayfanın sağ kenarında, sabit pozisyonda görünür.</p>
                <div className="w-full h-20 bg-[#1A1A1A] rounded-md border border-white/10 flex items-center justify-center">
                  <div className="flex items-center text-white/40">
                    <Image className="h-5 w-5 mr-2" />
                    <span>Reklam önizlemesi</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4">
              <Button className="ml-auto">Reklam Ayarlarını Kaydet</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Yorumlar Sekmesi */}
        <TabsContent value="comments">
          <Card className="bg-[#1A1A1A] border-white/10">
            <CardHeader className="pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle>Yorum Moderasyonu</CardTitle>
                  <CardDescription className="text-white/60">
                    Toplam {commentsData.length} yorum, {filteredComments.length} sonuç görüntüleniyor.
                  </CardDescription>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">
                    <Settings className="h-4 w-4 mr-2" />
                    Yorum Ayarları
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    placeholder="Yorum içeriği veya kullanıcı adı ara..."
                    value={commentSearchTerm}
                    onChange={(e) => setCommentSearchTerm(e.target.value)}
                    className="pl-9 bg-[#252525] border-white/10"
                  />
                </div>
                <Select value={commentStatusFilter} onValueChange={setCommentStatusFilter}>
                  <SelectTrigger className="w-full md:w-48 bg-[#252525] border-white/10">
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 mr-2 text-white/60" />
                      <SelectValue placeholder="Durum" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#252525] border-white/10">
                    <SelectItem value="all">Tüm Durumlar</SelectItem>
                    {Object.entries(commentStatusConfig).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                {sortedComments.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="flex flex-col items-center justify-center text-white/60">
                      <MessageSquare className="h-10 w-10 mb-2" />
                      <p>Aramanıza uygun yorum bulunamadı.</p>
                      <p className="text-sm mt-1">Lütfen filtrelerinizi değiştirin veya tüm yorumları görmek için filtreleri temizleyin.</p>
                    </div>
                  </div>
                ) : (
                  sortedComments.map((comment) => (
                    <div key={comment.id} className="p-4 border border-white/10 rounded-md bg-[#252525]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <div className="flex items-center mb-2 md:mb-0">
                          <Badge className={`${commentStatusConfig[comment.status as keyof typeof commentStatusConfig].color} flex items-center gap-1 w-fit mr-3`}>
                            {commentStatusConfig[comment.status as keyof typeof commentStatusConfig].icon}
                            <span>{commentStatusConfig[comment.status as keyof typeof commentStatusConfig].label}</span>
                          </Badge>
                          <span className="text-sm">{comment.author}</span>
                          <span className="mx-2 text-white/30">•</span>
                          <span className="text-sm text-white/60">
                            <Calendar className="h-3 w-3 inline mr-1" />
                            {new Date(comment.date).toLocaleDateString("tr-TR")}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                                <span>Durum Değiştir</span>
                                <ChevronDown className="h-4 w-4 ml-1" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#252525] border-white/10" align="end">
                              {Object.entries(commentStatusConfig).map(([status, { label, icon }]) => (
                                <DropdownMenuItem
                                  key={status}
                                  className="gap-2 hover:bg-white/5 cursor-pointer"
                                  onClick={() => handleUpdateCommentStatus(comment.id, status)}
                                  disabled={comment.status === status}
                                >
                                  {icon}
                                  <span>{label}</span>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <Button variant="ghost" size="sm" className="border-white/10 hover:bg-white/5">
                            <Trash className="h-4 w-4 text-red-400" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm">"{comment.content}"</p>
                      </div>
                      
                      <div className="bg-[#1A1A1A] p-2 rounded-md text-xs flex items-center">
                        <FileText className="h-3 w-3 mr-1 text-white/50" />
                        <span className="text-white/60">Makale: </span>
                        <span className="ml-1 truncate">{comment.articleTitle}</span>
                      </div>
                      
                      <div className="flex justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="h-7 px-2 border-white/10 hover:bg-green-500/10 hover:text-green-400">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            <span>Onayla</span>
                          </Button>
                          <Button variant="outline" size="sm" className="h-7 px-2 border-white/10 hover:bg-red-500/10 hover:text-red-400">
                            <ThumbsDown className="h-3 w-3 mr-1" />
                            <span>Spam</span>
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="h-7 px-2 border-white/10 hover:bg-white/5">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          <span>Yanıtla</span>
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// İlave ikonlar
import { 
  ChevronDown, 
  ArrowUp, 
  Star, 
  Zap, 
  Layout, 
  Copyright, 
  AlertTriangle, 
  HelpCircle, 
  Computer, 
  Smartphone 
} from "lucide-react";

export default ContentManagement;
