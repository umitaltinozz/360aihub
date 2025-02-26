
import { useState } from "react";
import { Copy, Trash, Plus, Eye, EyeOff, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface APIKey {
  id: string;
  name: string;
  key: string;
  lastUsed: string | null;
  createdAt: string;
  type: "live" | "test";
  permissions: {
    completion: boolean;
    embedding: boolean;
    classification: boolean;
    imageGeneration: boolean;
  };
}

const APIKeys = () => {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<APIKey[]>([
    {
      id: "key_1",
      name: "Production API Key",
      key: "sk_live_51N7bsDJ2XMJ32yCDILh4Dxjs9DETmM8TCZm8XLf1pQtIQedf7H8Qf8a2",
      lastUsed: "2024-06-20T14:32:00Z",
      createdAt: "2024-05-10T09:15:00Z",
      type: "live",
      permissions: {
        completion: true,
        embedding: true,
        classification: true,
        imageGeneration: false,
      },
    },
    {
      id: "key_2",
      name: "Testing API Key",
      key: "sk_test_51N7bsDJ2XMJ32yCDILh4Dxjs9DETmM8TCZm8XLf1pQtIQed3b7",
      lastUsed: "2024-06-19T11:45:00Z",
      createdAt: "2024-05-15T14:20:00Z",
      type: "test",
      permissions: {
        completion: true,
        embedding: true,
        classification: true,
        imageGeneration: true,
      },
    },
    {
      id: "key_3",
      name: "Development Key",
      key: "sk_test_51N7bsDJ2XMJ32yCDILh4Dxjs9DETmM8TCZm8XLf1pQtIQe92c4",
      lastUsed: null,
      createdAt: "2024-06-01T08:30:00Z",
      type: "test",
      permissions: {
        completion: true,
        embedding: false,
        classification: false,
        imageGeneration: false,
      },
    },
  ]);
  
  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({});
  const [isCreatingKey, setIsCreatingKey] = useState(false);
  const [newKeyData, setNewKeyData] = useState({
    name: "",
    type: "test",
    permissions: {
      completion: true,
      embedding: true,
      classification: false,
      imageGeneration: false,
    },
  });
  
  const toggleKeyVisibility = (keyId: string) => {
    setVisibleKeys((prev) => ({
      ...prev,
      [keyId]: !prev[keyId],
    }));
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Kopyalandı",
        description: "API anahtarı panoya kopyalandı.",
      });
    });
  };
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Hiç kullanılmadı";
    
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  
  const handleDeleteKey = (keyId: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== keyId));
    toast({
      title: "API Anahtarı Silindi",
      description: "API anahtarı başarıyla silindi.",
    });
  };
  
  const handleCreateKey = () => {
    setIsCreatingKey(true);
    
    // Simulated API call to create a new key
    setTimeout(() => {
      const newKey: APIKey = {
        id: `key_${Math.random().toString(36).substr(2, 9)}`,
        name: newKeyData.name,
        key: `sk_${newKeyData.type === "live" ? "live" : "test"}_51N7${Math.random().toString(36).substr(2, 30)}`,
        lastUsed: null,
        createdAt: new Date().toISOString(),
        type: newKeyData.type as "live" | "test",
        permissions: { ...newKeyData.permissions },
      };
      
      setApiKeys([newKey, ...apiKeys]);
      setVisibleKeys((prev) => ({ ...prev, [newKey.id]: true }));
      setIsCreatingKey(false);
      setNewKeyData({
        name: "",
        type: "test",
        permissions: {
          completion: true,
          embedding: true,
          classification: false,
          imageGeneration: false,
        },
      });
      
      toast({
        title: "API Anahtarı Oluşturuldu",
        description: "Yeni API anahtarı başarıyla oluşturuldu.",
      });
    }, 1500);
  };
  
  const handlePermissionChange = (permission: keyof APIKey["permissions"], checked: boolean) => {
    setNewKeyData({
      ...newKeyData,
      permissions: {
        ...newKeyData.permissions,
        [permission]: checked,
      },
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">API Anahtarları</h1>
          <p className="text-white/60">API anahtarlarınızı yönetin ve erişim izinlerini yapılandırın</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Yeni API Anahtarı
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-aihub-dark border border-white/10 shadow-xl">
            <DialogHeader>
              <DialogTitle>Yeni API Anahtarı Oluştur</DialogTitle>
              <DialogDescription className="text-white/60">
                API anahtarı adı ve izinlerini yapılandırın.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 my-4">
              <div className="space-y-2">
                <Label htmlFor="api-key-name">API Anahtarı Adı</Label>
                <Input
                  id="api-key-name"
                  value={newKeyData.name}
                  onChange={(e) => setNewKeyData({ ...newKeyData, name: e.target.value })}
                  placeholder="Örn: Production API Key"
                  className="bg-white/5 border-white/10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="key-type">Anahtar Tipi</Label>
                <Select
                  value={newKeyData.type}
                  onValueChange={(value) => setNewKeyData({ ...newKeyData, type: value })}
                >
                  <SelectTrigger id="key-type" className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Anahtar tipi seçin" />
                  </SelectTrigger>
                  <SelectContent className="bg-aihub-dark border-white/10">
                    <SelectItem value="test">Test Anahtarı</SelectItem>
                    <SelectItem value="live">Canlı Anahtar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label>API İzinleri</Label>
                
                <div className="p-4 rounded-md bg-aihub-blue/10 border border-aihub-blue/30 flex items-start mb-4">
                  <AlertTriangle className="h-5 w-5 text-aihub-blue mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80">
                    API anahtarı oluşturulduktan sonra izinleri değiştiremezsiniz. Daha sonra
                    gerekirse yeni bir anahtar oluşturun.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Tamamlama (Completion)</h4>
                      <p className="text-xs text-white/60">Metin tamamlama API'sine erişim</p>
                    </div>
                    <Switch
                      checked={newKeyData.permissions.completion}
                      onCheckedChange={(checked) => handlePermissionChange("completion", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Gömme (Embedding)</h4>
                      <p className="text-xs text-white/60">Metin/vektör gömme API'sine erişim</p>
                    </div>
                    <Switch
                      checked={newKeyData.permissions.embedding}
                      onCheckedChange={(checked) => handlePermissionChange("embedding", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Sınıflandırma (Classification)</h4>
                      <p className="text-xs text-white/60">Metin sınıflandırma API'sine erişim</p>
                    </div>
                    <Switch
                      checked={newKeyData.permissions.classification}
                      onCheckedChange={(checked) => handlePermissionChange("classification", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium">Görsel Oluşturma (Image Generation)</h4>
                      <p className="text-xs text-white/60">Görsel oluşturma API'sine erişim</p>
                    </div>
                    <Switch
                      checked={newKeyData.permissions.imageGeneration}
                      onCheckedChange={(checked) => handlePermissionChange("imageGeneration", checked)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setNewKeyData({
                    name: "",
                    type: "test",
                    permissions: {
                      completion: true,
                      embedding: true,
                      classification: false,
                      imageGeneration: false,
                    },
                  });
                }}
                className="border-white/10 hover:bg-white/5"
              >
                İptal
              </Button>
              <Button
                onClick={handleCreateKey}
                disabled={!newKeyData.name || isCreatingKey}
                className={cn(
                  "bg-gradient-to-r from-aihub-blue to-aihub-purple text-white",
                  isCreatingKey ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                )}
              >
                {isCreatingKey ? "Oluşturuluyor..." : "API Anahtarı Oluştur"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
        <div className="space-y-2 mb-6">
          <h2 className="text-xl font-bold">API Anahtarları</h2>
          <p className="text-white/60">
            Anahtarlarınızı güvende tutun ve kimseyle paylaşmayın. Açığa çıkan anahtarları hemen yenileyin.
          </p>
        </div>
        
        <div className="space-y-4">
          {apiKeys.length === 0 ? (
            <div className="text-center py-8 text-white/60">
              <p>Henüz API anahtarınız yok. Hemen oluşturun!</p>
            </div>
          ) : (
            apiKeys.map((key) => (
              <div
                key={key.id}
                className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium">{key.name}</h3>
                      <span
                        className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          key.type === "live"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {key.type === "live" ? "Canlı" : "Test"}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <code
                        className={`text-sm bg-black/30 px-2 py-1 rounded font-mono ${
                          visibleKeys[key.id] ? "w-full overflow-x-auto" : "w-48 overflow-hidden"
                        }`}
                      >
                        {visibleKeys[key.id] ? key.key : key.key.replace(/^(sk_[^_]+_[^_]{4})(.*)([^_]{4})$/, "$1...$3")}
                      </code>
                      <button
                        onClick={() => toggleKeyVisibility(key.id)}
                        className="ml-2 text-white/60 hover:text-white"
                      >
                        {visibleKeys[key.id] ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={() => copyToClipboard(key.key)}
                        className="ml-2 text-white/60 hover:text-white"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="text-xs text-white/60">
                      <span>Oluşturulma: {formatDate(key.createdAt)}</span>
                      <span className="mx-2">•</span>
                      <span>Son kullanım: {formatDate(key.lastUsed)}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Anahtar Yenilenemiyor",
                          description: "API anahtarı yenileme işlevi şu anda kullanılamıyor.",
                        });
                      }}
                      className="border-white/10 hover:bg-white/5"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Yenile
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteKey(key.id)}
                      className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
                    >
                      <Trash className="h-4 w-4 mr-2" />
                      Sil
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className={`px-2 py-1 rounded text-xs ${key.permissions.completion ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                    Tamamlama: {key.permissions.completion ? "Açık" : "Kapalı"}
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${key.permissions.embedding ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                    Gömme: {key.permissions.embedding ? "Açık" : "Kapalı"}
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${key.permissions.classification ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                    Sınıflandırma: {key.permissions.classification ? "Açık" : "Kapalı"}
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${key.permissions.imageGeneration ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                    Görsel Oluşturma: {key.permissions.imageGeneration ? "Açık" : "Kapalı"}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4">API Kullanım Limitleri</h2>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">AI Pro Plan - Aylık Token Kullanımı</span>
              <span className="text-sm font-medium">125K / 500K</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-aihub-blue to-aihub-purple"
                style={{ width: "25%" }}
              ></div>
            </div>
            <p className="text-xs text-white/60 mt-1">
              Planınızın %25'ini kullandınız. Plan dönemi bitiş tarihi: 15 Temmuz 2024
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Görsel Oluşturma Kullanımı</span>
              <span className="text-sm font-medium">45 / 100</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
                style={{ width: "45%" }}
              ></div>
            </div>
            <p className="text-xs text-white/60 mt-1">
              Görsel oluşturma hakkınızın %45'ini kullandınız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIKeys;
