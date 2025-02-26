
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Lock, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  
  // Mock plan details
  const planDetails = {
    name: "Pro Plan",
    price: 99,
    billingCycle: "monthly",
    features: [
      "1.5M Token/ay",
      "Tüm AI modelleri",
      "10 API anahtarı",
      "Öncelikli erişim",
      "7/24 Destek",
      "Özel eğitimli model (1 adet)",
    ]
  };
  
  // Credit card form state
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    cardName: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  
  // Handle credit card form changes
  const handleCardFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "cardNumber") {
      // Format card number with spaces every 4 digits
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
      
      setCardForm({ ...cardForm, [name]: formattedValue });
    } else {
      setCardForm({ ...cardForm, [name]: value });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Ödeme Başarılı",
        description: "Aboneliğiniz başarıyla etkinleştirildi.",
      });
      navigate("/dashboard");
    }, 2000);
  };
  
  // Handle PayPal button click
  const handlePayPalSubmit = () => {
    setLoading(true);
    
    // Simulate PayPal payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "PayPal Ödeme Başarılı",
        description: "Aboneliğiniz başarıyla etkinleştirildi.",
      });
      navigate("/dashboard");
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-aihub-dark py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <Link to="/subscription/plans" className="inline-flex items-center text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Planlara Dön</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg p-6 mb-6">
              <h1 className="text-2xl font-bold mb-6">Ödeme Bilgileri</h1>
              
              <Tabs defaultValue="credit_card" onValueChange={setPaymentMethod}>
                <TabsList className="grid grid-cols-2 mb-6 bg-white/5">
                  <TabsTrigger value="credit_card" className="data-[state=active]:bg-white/10">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Kredi Kartı
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="data-[state=active]:bg-white/10">
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.93 4.24h6.9c2.97 0 3.73 1.5 3.6 3.73-.29 4.8-2.46 7.4-5.93 7.4h-1.53c-.47 0-.74.23-.87 1.13L11.37 21l-.33 1.54c-.03.3-.26.46-.49.46H6.98c-.41 0-.55-.34-.46-.66l2.92-14.85c.13-.65.56-1.25 1.26-1.25h-.77zM16.2 10.47l.46-2.37c.09-.44-.09-.63-.46-.63h-3.92c-.28 0-.46.19-.53.59l-.66 3.55c.06 0 .09-.03.12-.03h3.22c.82-.03 1.5-.47 1.77-1.11zm-12.99 0c.03-.3.13-.63.4-.63h3.2c.31 0 .37.23.31.63-.09.4-.28.63-.62.63h-2.95c-.22 0-.4-.16-.34-.63z" />
                    </svg>
                    PayPal
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="credit_card">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Kart Numarası</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <CreditCard className="h-5 w-5 text-white/40" />
                          </div>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={cardForm.cardNumber}
                            onChange={handleCardFormChange}
                            className="pl-10 bg-white/5 border-white/10"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            required
                          />
                          <div className="absolute inset-y-0 right-3 flex items-center space-x-1">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FF5F00">
                              <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" />
                            </svg>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#1A1F71">
                              <path d="M7 16.5H17V7.5H7V16.5Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Kart Üzerindeki İsim</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={cardForm.cardName}
                          onChange={handleCardFormChange}
                          className="bg-white/5 border-white/10"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2 col-span-1">
                          <Label htmlFor="expMonth">Ay</Label>
                          <Select
                            value={cardForm.expMonth}
                            onValueChange={(value) => setCardForm({ ...cardForm, expMonth: value })}
                            required
                          >
                            <SelectTrigger id="expMonth" className="bg-white/5 border-white/10">
                              <SelectValue placeholder="Ay" />
                            </SelectTrigger>
                            <SelectContent className="bg-aihub-dark border-white/10">
                              {Array.from({ length: 12 }, (_, i) => {
                                const month = (i + 1).toString().padStart(2, "0");
                                return (
                                  <SelectItem key={month} value={month}>
                                    {month}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2 col-span-1">
                          <Label htmlFor="expYear">Yıl</Label>
                          <Select
                            value={cardForm.expYear}
                            onValueChange={(value) => setCardForm({ ...cardForm, expYear: value })}
                            required
                          >
                            <SelectTrigger id="expYear" className="bg-white/5 border-white/10">
                              <SelectValue placeholder="Yıl" />
                            </SelectTrigger>
                            <SelectContent className="bg-aihub-dark border-white/10">
                              {Array.from({ length: 10 }, (_, i) => {
                                const year = (new Date().getFullYear() + i).toString();
                                return (
                                  <SelectItem key={year} value={year}>
                                    {year}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2 col-span-1">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="cvc">CVC/CVV</Label>
                            <Info className="h-4 w-4 text-white/40 cursor-help" />
                          </div>
                          <Input
                            id="cvc"
                            name="cvc"
                            value={cardForm.cvc}
                            onChange={handleCardFormChange}
                            className="bg-white/5 border-white/10"
                            placeholder="123"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          className={cn(
                            "w-full py-6 bg-gradient-to-r from-aihub-blue to-aihub-purple text-white",
                            loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                          )}
                        >
                          {loading ? "İşleniyor..." : "Ödemeyi Tamamla"}
                          <Lock className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-center text-white/60 text-xs flex items-center justify-center">
                        <Lock className="h-3 w-3 mr-1" />
                        <span>Ödeme bilgileriniz güvenli SSL şifreleme ile korunmaktadır</span>
                      </div>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="paypal">
                  <div className="py-6 text-center">
                    <svg className="h-12 w-12 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.93 4.24h6.9c2.97 0 3.73 1.5 3.6 3.73-.29 4.8-2.46 7.4-5.93 7.4h-1.53c-.47 0-.74.23-.87 1.13L11.37 21l-.33 1.54c-.03.3-.26.46-.49.46H6.98c-.41 0-.55-.34-.46-.66l2.92-14.85c.13-.65.56-1.25 1.26-1.25h-.77zM16.2 10.47l.46-2.37c.09-.44-.09-.63-.46-.63h-3.92c-.28 0-.46.19-.53.59l-.66 3.55c.06 0 .09-.03.12-.03h3.22c.82-.03 1.5-.47 1.77-1.11zm-12.99 0c.03-.3.13-.63.4-.63h3.2c.31 0 .37.23.31.63-.09.4-.28.63-.62.63h-2.95c-.22 0-.4-.16-.34-.63z" />
                    </svg>
                    <p className="mb-6 text-white/60">PayPal ile güvenli bir şekilde ödeme yapın</p>
                    <Button
                      onClick={handlePayPalSubmit}
                      disabled={loading}
                      className={cn(
                        "py-6 px-8 bg-[#0070ba] hover:bg-[#003087] text-white",
                        loading ? "opacity-70 cursor-not-allowed" : ""
                      )}
                    >
                      {loading ? "İşleniyor..." : "PayPal ile Öde"}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-black/30 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-white/60">Plan</span>
                  <span className="font-medium">{planDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Fiyatlandırma</span>
                  <span className="font-medium">{planDetails.price} TL/{planDetails.billingCycle === "monthly" ? "ay" : "yıl"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Fatura Dönemi</span>
                  <span className="font-medium">{planDetails.billingCycle === "monthly" ? "Aylık" : "Yıllık"}</span>
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Toplam</span>
                    <span>{planDetails.price} TL</span>
                  </div>
                  <p className="text-white/60 text-xs mt-1">KDV dahildir</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <h3 className="font-medium mb-2">Plan Özellikleri</h3>
                <ul className="space-y-2">
                  {planDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-xs text-white/60">
                <p className="mb-2">
                  Ödeme işleminizi tamamlayarak 
                  <Link to="/terms" className="text-aihub-blue hover:underline mx-1">Kullanım Şartları</Link>
                  ve
                  <Link to="/privacy" className="text-aihub-blue hover:underline mx-1">Gizlilik Politikası</Link>
                  koşullarını kabul etmiş olursunuz.
                </p>
                <p>
                  İstediğiniz zaman aboneliğinizi iptal edebilirsiniz. İptal ettikten sonra faturalandırma dönemi sonuna kadar hizmetlerimizi kullanmaya devam edebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
