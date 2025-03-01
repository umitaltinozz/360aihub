
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Search, 
  ExternalLink, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Github, 
  Award,
  Tag
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Showcase = () => {
  const projects = [
    {
      id: 1,
      title: "TurkishGPT - Türkçe Doğal Dil İşleme",
      description: "AIHUB360 API'si ile geliştirilmiş Türkçe odaklı doğal dil işleme uygulaması",
      author: {
        name: "Mehmet Yılmaz",
        avatar: "/placeholder.svg"
      },
      category: "Doğal Dil İşleme",
      likes: 245,
      comments: 38,
      demo: "https://turkishgpt.aihub360.com",
      github: "https://github.com/mehmetyilmaz/turkishgpt",
      isFeatured: true,
      tags: ["NLP", "Türkçe", "GPT"]
    },
    {
      id: 2,
      title: "AI Fotoğraf Editörü",
      description: "Yapay zeka destekli fotoğraf düzenleme aracı, AIHUB360 görüntü API'leri ile çalışır",
      author: {
        name: "Ayşe Demir",
        avatar: "/placeholder.svg"
      },
      category: "Görüntü İşleme",
      likes: 187,
      comments: 27,
      demo: "https://ai-photo-editor.aihub360.com",
      github: "https://github.com/aysedemir/ai-photo-editor",
      isFeatured: false,
      tags: ["Görüntü", "Düzenleme", "Fotoğraf"]
    },
    {
      id: 3,
      title: "Ses Asistanı",
      description: "AIHUB360 ses tanıma ve metin-ses dönüşüm API'lerini kullanan kişisel asistan",
      author: {
        name: "Can Öztürk",
        avatar: "/placeholder.svg"
      },
      category: "Ses",
      likes: 162,
      comments: 19,
      demo: "https://voice-assistant.aihub360.com",
      github: "https://github.com/canozturk/voice-assistant",
      isFeatured: false,
      tags: ["Ses", "Asistan", "STT"]
    },
    {
      id: 4,
      title: "AI Kodu Tamamlama Eklentisi",
      description: "VS Code için AIHUB360 AI kodlama asistanı eklentisi",
      author: {
        name: "Zeynep Kaya",
        avatar: "/placeholder.svg"
      },
      category: "Kodlama",
      likes: 312,
      comments: 45,
      demo: "https://marketplace.visualstudio.com/items?itemName=zeynepkaya.aihub360-codecomplete",
      github: "https://github.com/zeynepkaya/aihub360-codecomplete",
      isFeatured: true,
      tags: ["VS Code", "Eklenti", "Kodlama"]
    },
    {
      id: 5,
      title: "AIHUB360 Dashboard",
      description: "AIHUB360 API kullanımınızı izlemek için gelişmiş dashboard",
      author: {
        name: "Ali Yıldız",
        avatar: "/placeholder.svg"
      },
      category: "Dashboard",
      likes: 127,
      comments: 23,
      demo: "https://aihub360-dashboard.vercel.app",
      github: "https://github.com/aliyildiz/aihub360-dashboard",
      isFeatured: false,
      tags: ["Dashboard", "Analitik", "Monitoring"]
    },
    {
      id: 6,
      title: "Sağlık Asistanı",
      description: "Sağlık verilerini analiz eden ve önerilerde bulunan AI destekli uygulama",
      author: {
        name: "Deniz Şahin",
        avatar: "/placeholder.svg"
      },
      category: "Sağlık",
      likes: 159,
      comments: 31,
      demo: "https://health-assistant.aihub360.com",
      github: "https://github.com/denizsahin/health-assistant",
      isFeatured: false,
      tags: ["Sağlık", "Analiz", "Öneri"]
    }
  ];
  
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Doğal Dil İşleme":
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">{category}</Badge>;
      case "Görüntü İşleme":
        return <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">{category}</Badge>;
      case "Ses":
        return <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">{category}</Badge>;
      case "Kodlama":
        return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">{category}</Badge>;
      case "Dashboard":
        return <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/30">{category}</Badge>;
      case "Sağlık":
        return <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">{category}</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-aihub-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-24 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-3xl font-bold mb-4 sm:mb-0 page-heading">Proje Vitrini</h1>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
              <Input
                placeholder="Projelerde ara..."
                className="pl-8 bg-black/20 border-white/10"
              />
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/80 text-lg">
              AIHUB360 API'lerini kullanarak geliştiricilerin oluşturduğu etkileyici projeler.
              İlham almak için göz atın veya kendi projelerinizi toplulukla paylaşın.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <a 
              href="/community/showcase/submit" 
              className="bg-aihub-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Projenizi Ekleyin
            </a>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6 bg-black/20">
              <TabsTrigger value="all">Tüm Projeler</TabsTrigger>
              <TabsTrigger value="featured">Öne Çıkanlar</TabsTrigger>
              <TabsTrigger value="popular">Popüler</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} className={`bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40 ${project.isFeatured ? 'ring-1 ring-blue-500/50' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(project.category)}
                          {project.isFeatured && (
                            <Badge variant="gradient" className="flex items-center">
                              <Award className="h-3 w-3 mr-1" />
                              Öne Çıkan
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <a href={`/community/showcase/${project.id}`} className="hover:text-aihub-blue transition-colors">
                          {project.title}
                        </a>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={project.author.avatar} alt={project.author.name} />
                            <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-white/70">{project.author.name}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <div key={index} className="flex items-center text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm flex items-center">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm flex items-center">
                            <Github className="h-4 w-4 mr-1" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 pt-4">
                      <div className="flex justify-between w-full text-white/70 text-sm">
                        <button className="flex items-center hover:text-white transition-colors">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {project.likes}
                        </button>
                        <button className="flex items-center hover:text-white transition-colors">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {project.comments}
                        </button>
                        <button className="flex items-center hover:text-white transition-colors">
                          <Share2 className="h-4 w-4 mr-1" />
                          Paylaş
                        </button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(project => project.isFeatured).map((project) => (
                  <Card key={project.id} className="bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40 ring-1 ring-blue-500/50">
                    {/* Same card content as above */}
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(project.category)}
                          <Badge variant="gradient" className="flex items-center">
                            <Award className="h-3 w-3 mr-1" />
                            Öne Çıkan
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <a href={`/community/showcase/${project.id}`} className="hover:text-aihub-blue transition-colors">
                          {project.title}
                        </a>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={project.author.avatar} alt={project.author.name} />
                            <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-white/70">{project.author.name}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <div key={index} className="flex items-center text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm flex items-center">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm flex items-center">
                            <Github className="h-4 w-4 mr-1" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 pt-4">
                      <div className="flex justify-between w-full text-white/70 text-sm">
                        <button className="flex items-center hover:text-white transition-colors">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {project.likes}
                        </button>
                        <button className="flex items-center hover:text-white transition-colors">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {project.comments}
                        </button>
                        <button className="flex items-center hover:text-white transition-colors">
                          <Share2 className="h-4 w-4 mr-1" />
                          Paylaş
                        </button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="popular">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.sort((a, b) => b.likes - a.likes).slice(0, 3).map((project) => (
                  <Card key={project.id} className={`bg-black/30 border-white/10 transition-all hover:border-white/20 hover:bg-black/40 ${project.isFeatured ? 'ring-1 ring-blue-500/50' : ''}`}>
                    {/* Same card content as above */}
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex space-x-2">
                          {getCategoryBadge(project.category)}
                          {project.isFeatured && (
                            <Badge variant="gradient" className="flex items-center">
                              <Award className="h-3 w-3 mr-1" />
                              Öne Çıkan
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <a href={`/community/showcase/${project.id}`} className="hover:text-aihub-blue transition-colors">
                          {project.title}
                        </a>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={project.author.avatar} alt={project.author.name} />
                            <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-white/70">{project.author.name}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <div key={index} className="flex items-center text-xs bg-white/5 text-white/70 px-2 py-1 rounded">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm flex items-center">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Demo
                          </a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm flex items-center">
                            <Github className="h-4 w-4 mr-1" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-white/10 pt-4">
                      <div className="flex justify-between w-full text-white/70 text-sm">
                        <button className="flex items-center hover:text-white transition-colors">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {project.likes}
                        </button>
                        <button className="flex items-center hover:text-white transition-colors">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {project.comments}
                        </button>
                        <button className="flex items-center hover:text-white transition-colors">
                          <Share2 className="h-4 w-4 mr-1" />
                          Paylaş
                        </button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-700/20 rounded-xl p-6 border border-blue-500/20">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">AIHUB360 Topluluk Ödülleri</h2>
                <p className="text-white/80">
                  AIHUB360 API'lerini kullanan en iyi projelere her çeyrekte ödüller veriyoruz. Projenizi gönderin,
                  topluluk tarafından oylanmasını sağlayın ve ödül kazanma şansı yakalayın.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                  href="/community/showcase/awards" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Ödüller Hakkında
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Showcase;
