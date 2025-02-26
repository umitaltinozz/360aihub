
import { useState, useEffect } from "react";
import { Search, Filter, ShoppingCart, Star, Download, DollarSign, Tags, TrendingUp, Clock, Gift, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock marketplace items data
const marketplaceItems = [
  // AI Models
  {
    id: "m1",
    name: "SentimentAI",
    description: "Türkçe metinler için duygu analizi yapan özelleştirilmiş model. %92 doğruluk oranı.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "TechNova Labs",
    price: 249,
    rating: 4.7,
    totalReviews: 56,
    downloads: 283,
    type: "model",
    category: "NLP",
    featured: true,
  },
  {
    id: "m2",
    name: "MediScan",
    description: "Tıbbi görüntülerde anormallikleri tespit eden özel eğitilmiş görüntü sınıflandırma modeli.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "HealthTech AI",
    price: 499,
    rating: 4.9,
    totalReviews: 42,
    downloads: 155,
    type: "model",
    category: "Sağlık",
    featured: true,
  },
  {
    id: "m3",
    name: "FinDetect",
    description: "Finansal dolandırıcılık tespiti için özelleştirilmiş anomali tespit modeli.",
    imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "SecureAI",
    price: 349,
    rating: 4.6,
    totalReviews: 38,
    downloads: 172,
    type: "model",
    category: "Finans",
    featured: false,
  },
  {
    id: "m4",
    name: "LocalSpeech",
    description: "Türkçe konuşma tanıma için optimize edilmiş ses modeli. Lehçe ve şive tanıma özellikleri.",
    imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "SpeechLab",
    price: 299,
    rating: 4.5,
    totalReviews: 27,
    downloads: 134,
    type: "model",
    category: "Ses",
    featured: false,
  },
  
  // Prompts
  {
    id: "p1",
    name: "Master SEO Writer",
    description: "SEO odaklı içerik üretimi için optimize edilmiş prompt koleksiyonu. Anahtar kelime entegrasyonu, meta açıklamalar ve başlık optimizasyonu.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "ContentWizard",
    price: 49,
    rating: 4.8,
    totalReviews: 124,
    downloads: 876,
    type: "prompt",
    category: "İçerik Üretimi",
    featured: true,
  },
  {
    id: "p2",
    name: "Code Assistant Pro",
    description: "Yazılım geliştirme için kapsamlı prompt seti. Hata ayıklama, kod optimizasyonu ve mimari tasarım promptları içerir.",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "DevGenius",
    price: 79,
    rating: 4.9,
    totalReviews: 156,
    downloads: 1254,
    type: "prompt",
    category: "Yazılım Geliştirme",
    featured: true,
  },
  {
    id: "p3",
    name: "Legal Document Generator",
    description: "Hukuki belge oluşturma için özelleştirilmiş promptlar. Sözleşmeler, anlaşmalar ve yasal bildirimler.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "LegalAI",
    price: 99,
    rating: 4.7,
    totalReviews: 85,
    downloads: 523,
    type: "prompt",
    category: "Hukuk",
    featured: false,
  },
  {
    id: "p4",
    name: "Art Director",
    description: "Stable Diffusion ve Midjourney için mükemmel görsel üretimi sağlayan prompt teknikleri ve şablonları.",
    imageUrl: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "VisualCreator",
    price: 39,
    rating: 4.6,
    totalReviews: 192,
    downloads: 1876,
    type: "prompt",
    category: "Görsel Üretim",
    featured: false,
  },
  {
    id: "p5",
    name: "Marketing Specialist",
    description: "Pazarlama kampanyaları için kapsamlı prompt seti. Sosyal medya paylaşımları, reklamlar ve e-posta kampanyaları.",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "MarketBoost",
    price: 59,
    rating: 4.5,
    totalReviews: 110,
    downloads: 745,
    type: "prompt",
    category: "Pazarlama",
    featured: false,
  },
  
  // Free items
  {
    id: "f1",
    name: "Sentiment Analysis Starter",
    description: "Basit duygu analizi için başlangıç düzeyinde bir model. Eğitim ve öğrenme amaçlı idealdir.",
    imageUrl: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "AI Community",
    price: 0,
    rating: 4.2,
    totalReviews: 74,
    downloads: 2345,
    type: "model",
    category: "NLP",
    featured: false,
  },
  {
    id: "f2",
    name: "Creative Writing Prompts",
    description: "Yaratıcı yazı üretimi için temel prompt koleksiyonu. Hikaye, şiir ve diyalog oluşturma promptları.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    creator: "WritersHub",
    price: 0,
    rating: 4.4,
    totalReviews: 215,
    downloads: 5678,
    type: "prompt",
    category: "İçerik Üretimi",
    featured: false,
  },
];

// Categories for filters
const allCategories = [...new Set(marketplaceItems.map(item => item.category))];
const categories = ["Tümü", ...allCategories];

const Marketplace = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [activeTab, setActiveTab] = useState("all"); // "all", "models", "prompts", "free"
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular"); // "popular", "newest", "price-low", "price-high"
  const [items, setItems] = useState(marketplaceItems);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter items based on filters
    let filtered = marketplaceItems;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by tab
    if (activeTab === "models") {
      filtered = filtered.filter(item => item.type === "model");
    } else if (activeTab === "prompts") {
      filtered = filtered.filter(item => item.type === "prompt");
    } else if (activeTab === "free") {
      filtered = filtered.filter(item => item.price === 0);
    }
    
    // Filter by category
    if (activeCategory !== "Tümü") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Sort items
    if (sortBy === "popular") {
      filtered = [...filtered].sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "newest") {
      // In a real app, this would sort by date
      filtered = [...filtered].sort((a, b) => b.id.localeCompare(a.id));
    } else if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    setItems(filtered);
  }, [searchTerm, activeTab, activeCategory, sortBy]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFil