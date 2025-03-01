
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BillingHistory = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  
  // Sample invoices data
  const invoices = [
    {
      id: "INV-2024-06-001",
      date: "15.06.2024",
      period: "15 Haz - 15 Tem 2024",
      amount: "599,00 ₺",
      status: "paid",
      paymentMethod: "Visa (****1234)",
      plan: "AI Pro"
    },
    {
      id: "INV-2024-05-001",
      date: "15.05.2024",
      period: "15 May - 15 Haz 2024",
      amount: "599,00 ₺",
      status: "paid",
      paymentMethod: "Visa (****1234)",
      plan: "AI Pro"
    },
    {
      id: "INV-2024-04-001",
      date: "15.04.2024",
      period: "15 Nis - 15 May 2024",
      amount: "399,00 ₺",
      status: "paid",
      paymentMethod: "MasterCard (****5678)",
      plan: "AI Standard"
    },
    {
      id: "INV-2024-03-001",
      date: "15.03.2024",
      period: "15 Mar - 15 Nis 2024",
      amount: "399,00 ₺",
      status: "paid",
      paymentMethod: "MasterCard (****5678)",
      plan: "AI Standard"
    },
    {
      id: "INV-2024-02-001",
      date: "15.02.2024",
      period: "15 Şub - 15 Mar 2024",
      amount: "399,00 ₺",
      status: "paid",
      paymentMethod: "MasterCard (****5678)",
      plan: "AI Standard"
    },
    {
      id: "INV-2024-01-003",
      date: "20.01.2024",
      period: "20 Oca - 20 Şub 2024",
      amount: "129,00 ₺",
      status: "cancelled",
      paymentMethod: "PayPal",
      plan: "AI Basic"
    }
  ];
  
  // Filter invoices based on selected tab
  const filteredInvoices = selectedTab === "all" 
    ? invoices 
    : selectedTab === "paid" 
      ? invoices.filter(invoice => invoice.status === "paid")
      : invoices.filter(invoice => invoice.status === "cancelled");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 page-heading">Faturalandırma Geçmişi</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
          <Input placeholder="Fatura ara..." className="pl-8 bg-black/20 border-white/10" />
        </div>
        
        <div className="flex space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px] bg-black/20 border-white/10">
              <SelectValue placeholder="Plan Seç" />
            </SelectTrigger>
            <SelectContent className="bg-black border-white/10">
              <SelectItem value="all">Tüm Planlar</SelectItem>
              <SelectItem value="pro">AI Pro</SelectItem>
              <SelectItem value="standard">AI Standard</SelectItem>
              <SelectItem value="basic">AI Basic</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/5">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full sm:w-auto border-b border-white/10 bg-transparent">
          <TabsTrigger value="all" className="data-[state=active]:bg-white/5">
            Tüm Faturalar
          </TabsTrigger>
          <TabsTrigger value="paid" className="data-[state=active]:bg-white/5">
            Ödenen
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="data-[state=active]:bg-white/5">
            İptal Edilen
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={selectedTab} className="mt-4">
          <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Fatura Geçmişi</CardTitle>
              <CardDescription>Abonelik ve ek kullanım faturaları</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                        Fatura No
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                        Tarih
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider hidden sm:table-cell">
                        Dönem
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                        Tutar
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider hidden md:table-cell">
                        Ödeme Yöntemi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                        Durum
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white/90 high-contrast-text uppercase tracking-wider">
                        İşlem
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {filteredInvoices.map(invoice => (
                      <tr key={invoice.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">
                          {invoice.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">
                          {invoice.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text hidden sm:table-cell">
                          {invoice.period}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">
                          {invoice.plan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text">
                          {invoice.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm high-contrast-text hidden md:table-cell">
                          {invoice.paymentMethod}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {invoice.status === "paid" ? (
                            <Badge className="bg-green-500/20 text-green-400 border-0">Ödendi</Badge>
                          ) : (
                            <Badge className="bg-red-500/20 text-red-400 border-0">İptal Edildi</Badge>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Fatura Bilgileriniz</CardTitle>
          <CardDescription>Faturalandırma bilgilerinizi güncelleyin</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-md font-medium mb-3">Kişisel Bilgiler</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-1 gap-1">
                  <span className="text-white/80 high-contrast-text text-sm">Ad Soyad</span>
                  <span className="font-medium">Ahmet Yılmaz</span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <span className="text-white/80 high-contrast-text text-sm">E-posta</span>
                  <span className="font-medium">ahmet.yilmaz@example.com</span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <span className="text-white/80 high-contrast-text text-sm">Telefon</span>
                  <span className="font-medium">+90 555 123 4567</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Fatura Adresi</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-1 gap-1">
                  <span className="text-white/80 high-contrast-text text-sm">Adres</span>
                  <span className="font-medium">Atatürk Cad. No:123</span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <span className="text-white/80 high-contrast-text text-sm">Şehir / Posta Kodu</span>
                  <span className="font-medium">İstanbul, 34000</span>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <span className="text-white/80 high-contrast-text text-sm">Ülke</span>
                  <span className="font-medium">Türkiye</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <Button className="border-white/10 hover:bg-white/5">Fatura Bilgilerini Güncelle</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingHistory;
