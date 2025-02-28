
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CreditCard, 
  Check, 
  ShoppingCart, 
  Trash2, 
  Shield, 
  AlertCircle,
  ChevronDown,
  X,
  Bitcoin 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
}

const MarketplaceCheckout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "SEO için Blog Yazı Oluşturucu",
      price: 49.99
    },
    {
      id: "2",
      title: "Sosyal Medya İçerik Planı",
      price: 29.99
    }
  ]);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [promoCode, setPromoCode] = useState<string>("");
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% indirim
  const total = subtotal - discount;

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Ürün Kaldırıldı",
      description: "Ürün sepetinizden kaldırıldı.",
    });
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "aihub10") {
      setPromoApplied(true);
      toast({
        title: "Promosyon Kodu Uygulandı",
        description: "%10 indirim uygulandı.",
      });
    } else {
      toast({
        title: "Geçersiz Kod",
        description: "Girdiğiniz promosyon kodu geçersiz.",
        variant: "destructive",
      });
    }
  };

  const handleCheckout = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Ödeme Başarılı",
        description: "Satın alma işleminiz tamamlandı. Teşekkürler!",
      });
      navigate("/dashboard/purchases");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 py-8 mt-20">
        <div className="mb-6">
          <Link to="/marketplace" className="flex items-center text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Alışverişe Devam Et
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Sepet & Ödeme</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Sepet */}
            <Card className="bg-[#1A1A1A] border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Sepet ({cartItems.length} ürün)
                  </CardTitle>
                  {cartItems.length > 0 && (
                    <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                      Sepeti Temizle
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {cartItems.length > 0 ? (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-[#252525] rounded-lg">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-[#333] rounded-md flex items-center justify-center mr-4">
                            <ShoppingCart className="h-6 w-6 text-white/50" />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-sm text-white/60">Dijital Prompt Paketi</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="font-bold mr-4">${item.price.toFixed(2)}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-white/70 hover:text-red-500"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-white/20 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Sepetiniz Boş</h3>
                    <p className="text-white/60 mb-4">Sepetinizde hiç ürün bulunmuyor.</p>
                    <Button 
                      onClick={() => navigate("/marketplace")}
                      className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                    >
                      Alışverişe Başla
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Ödeme Yöntemleri */}
            {cartItems.length > 0 && (
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Ödeme Yöntemi</CardTitle>
                  <CardDescription>Güvenli ödeme yöntemlerinden birini seçin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div 
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      paymentMethod === "card" ? "border-[#00BFFF] bg-[#00BFFF]/10" : "border-white/10 bg-[#252525]"
                    } cursor-pointer`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-3" />
                      <div>
                        <h3 className="font-medium">Kredi/Banka Kartı</h3>
                        <p className="text-sm text-white/60">Visa, Mastercard, American Express</p>
                      </div>
                    </div>
                    {paymentMethod === "card" && (
                      <Check className="h-5 w-5 text-[#00BFFF]" />
                    )}
                  </div>

                  <div 
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      paymentMethod === "crypto" ? "border-[#00BFFF] bg-[#00BFFF]/10" : "border-white/10 bg-[#252525]"
                    } cursor-pointer`}
                    onClick={() => setPaymentMethod("crypto")}
                  >
                    <div className="flex items-center">
                      <Bitcoin className="h-5 w-5 mr-3" />
                      <div>
                        <h3 className="font-medium">Kripto Para</h3>
                        <p className="text-sm text-white/60">Bitcoin, Ethereum, USDT</p>
                      </div>
                    </div>
                    {paymentMethod === "crypto" && (
                      <Check className="h-5 w-5 text-[#00BFFF]" />
                    )}
                  </div>

                  {paymentMethod === "card" && (
                    <div className="mt-4 space-y-4 p-4 bg-[#252525] rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Kart Üzerindeki İsim</Label>
                          <Input 
                            id="cardName" 
                            placeholder="Ad Soyad" 
                            className="bg-[#1A1A1A] border-white/10" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Kart Numarası</Label>
                          <Input 
                            id="cardNumber" 
                            placeholder="XXXX XXXX XXXX XXXX" 
                            className="bg-[#1A1A1A] border-white/10" 
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Son Kullanma Tarihi</Label>
                          <Input 
                            id="expiryDate" 
                            placeholder="AA/YY" 
                            className="bg-[#1A1A1A] border-white/10" 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">Güvenlik Kodu (CVV)</Label>
                          <Input 
                            id="cvv" 
                            placeholder="XXX" 
                            className="bg-[#1A1A1A] border-white/10" 
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "crypto" && (
                    <div className="mt-4 p-4 bg-[#252525] rounded-lg">
                      <p className="text-white/80 mb-4">
                        Ödemenizi tamamlamak için aşağıdaki kripto para birimlerinden birini seçin:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border border-white/10 rounded">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#F7931A] rounded-full mr-3 flex items-center justify-center text-white font-bold">₿</div>
                            <span>Bitcoin (BTC)</span>
                          </div>
                          <span>~$49.99</span>
                        </div>
                        <div className="flex items-center justify-between p-2 border border-white/10 rounded">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#627EEA] rounded-full mr-3 flex items-center justify-center text-white">Ξ</div>
                            <span>Ethereum (ETH)</span>
                          </div>
                          <span>~$49.99</span>
                        </div>
                        <div className="flex items-center justify-between p-2 border border-white/10 rounded">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#26A17B] rounded-full mr-3 flex items-center justify-center text-white font-medium">₮</div>
                            <span>Tether (USDT)</span>
                          </div>
                          <span>~$49.99</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sipariş Özeti */}
          {cartItems.length > 0 && (
            <div className="space-y-6">
              <Card className="bg-[#1A1A1A] border-white/10">
                <CardHeader>
                  <CardTitle>Sipariş Özeti</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Ara Toplam</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-500">
                        <span>İndirim (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <Separator className="my-2 bg-white/10" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Toplam</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Promosyon Kodu" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className="bg-[#252525] border-white/10"
                    />
                    <Button 
                      variant="outline"
                      onClick={handleApplyPromo}
                      disabled={promoApplied || !promoCode.trim()}
                      className="border-white/10 hover:bg-white/5"
                    >
                      {promoApplied ? "Uygulandı" : "Uygula"}
                    </Button>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white hover:opacity-90"
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? "İşleniyor..." : "Ödemeyi Tamamla"}
                  </Button>

                  <div className="flex items-center justify-center text-white/60 text-sm">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>Güvenli Ödeme</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1A] border-white/10">
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="refund-policy" className="border-white/10">
                      <AccordionTrigger className="hover:no-underline">
                        İade Politikası
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 text-sm">
                        Dijital ürünler için satın alma tarihinden itibaren 7 gün içinde, eğer ürün beklentilerinizi karşılamıyorsa veya açıklandığı gibi çalışmıyorsa iade talep edebilirsiniz.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="terms" className="border-white/10">
                      <AccordionTrigger className="hover:no-underline">
                        Kullanım Şartları
                      </AccordionTrigger>
                      <AccordionContent className="text-white/70 text-sm">
                        Satın aldığınız ürünler kişisel kullanım içindir. Ürünleri yeniden satma veya dağıtma hakkına sahip değilsiniz. Tüm satın alımlarınız AIHUB360 Kullanım Şartları'na tabidir.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MarketplaceCheckout;
