
import { useState } from "react";
import { Download, Search, Filter, CreditCard, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface PaymentRecord {
  id: string;
  date: string;
  amount: number;
  plan: string;
  status: "successful" | "pending" | "failed";
  paymentMethod: "credit_card" | "paypal" | "bank_transfer";
  invoice: string;
}

const PaymentHistory = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  
  // Mock payment data
  const paymentRecords: PaymentRecord[] = [
    {
      id: "INV-2024-0012",
      date: "2024-06-01",
      amount: 99,
      plan: "Pro Plan (Aylık)",
      status: "successful",
      paymentMethod: "credit_card",
      invoice: "invoice_2024_0012.pdf",
    },
    {
      id: "INV-2024-0011",
      date: "2024-05-01",
      amount: 99,
      plan: "Pro Plan (Aylık)",
      status: "successful",
      paymentMethod: "credit_card",
      invoice: "invoice_2024_0011.pdf",
    },
    {
      id: "INV-2024-0010",
      date: "2024-04-01",
      amount: 99,
      plan: "Pro Plan (Aylık)",
      status: "successful",
      paymentMethod: "credit_card",
      invoice: "invoice_2024_0010.pdf",
    },
    {
      id: "INV-2024-0009",
      date: "2024-03-01",
      amount: 99,
      plan: "Pro Plan (Aylık)",
      status: "failed",
      paymentMethod: "credit_card",
      invoice: "invoice_2024_0009.pdf",
    },
    {
      id: "INV-2024-0008",
      date: "2024-02-01",
      amount: 99,
      plan: "Pro Plan (Aylık)",
      status: "successful",
      paymentMethod: "paypal",
      invoice: "invoice_2024_0008.pdf",
    },
    {
      id: "INV-2024-0007",
      date: "2024-01-01",
      amount: 99,
      plan: "Pro Plan (Aylık)",
      status: "successful",
      paymentMethod: "paypal",
      invoice: "invoice_2024_0007.pdf",
    },
    {
      id: "INV-2023-0006",
      date: "2023-12-01",
      amount: 79,
      plan: "Starter Plan (Aylık)",
      status: "successful",
      paymentMethod: "credit_card",
      invoice: "invoice_2023_0006.pdf",
    },
  ];
  
  const handleDownloadInvoice = (invoiceId: string) => {
    toast({
      title: "Fatura İndiriliyor",
      description: `${invoiceId} numaralı fatura indiriliyor.`,
    });
  };
  
  // Filter payment records based on search query and filters
  const filteredPayments = paymentRecords.filter(payment => {
    const matchesSearch = 
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.plan.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = 
      statusFilter === "all" || 
      payment.status === statusFilter;
    
    let matchesDate = true;
    const paymentDate = new Date(payment.date);
    const currentDate = new Date();
    
    if (dateFilter === "last_30_days") {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(currentDate.getDate() - 30);
      matchesDate = paymentDate >= thirtyDaysAgo;
    } else if (dateFilter === "last_6_months") {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
      matchesDate = paymentDate >= sixMonthsAgo;
    } else if (dateFilter === "last_year") {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
      matchesDate = paymentDate >= oneYearAgo;
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Ödeme Geçmişi</h1>
        <p className="text-white/60">Aboneliklerinizle ilgili ödeme geçmişinizi ve faturalarınızı görüntüleyin</p>
      </div>
      
      {/* Filters */}
      <div className="p-6 rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <Input
              placeholder="Fatura ID veya plan adı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white/5 border-white/10"
            />
          </div>
          
          <div className="flex gap-4">
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-40 bg-white/5 border-white/10">
                <SelectValue placeholder="Duruma göre" />
              </SelectTrigger>
              <SelectContent className="bg-aihub-dark border-white/10">
                <SelectItem value="all">Tüm Durumlar</SelectItem>
                <SelectItem value="successful">Başarılı</SelectItem>
                <SelectItem value="pending">Beklemede</SelectItem>
                <SelectItem value="failed">Başarısız</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={dateFilter}
              onValueChange={setDateFilter}
            >
              <SelectTrigger className="w-40 bg-white/5 border-white/10">
                <SelectValue placeholder="Tarihe göre" />
              </SelectTrigger>
              <SelectContent className="bg-aihub-dark border-white/10">
                <SelectItem value="all">Tüm Zamanlar</SelectItem>
                <SelectItem value="last_30_days">Son 30 Gün</SelectItem>
                <SelectItem value="last_6_months">Son 6 Ay</SelectItem>
                <SelectItem value="last_year">Son 1 Yıl</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Payment Records Table */}
      <div className="rounded-lg bg-black/30 border border-white/10 backdrop-blur-sm overflow-hidden">
        {filteredPayments.length === 0 ? (
          <div className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Ödeme Bulunamadı</h3>
            <p className="text-white/60">Belirtilen kriterlere uygun ödeme kaydı bulunamadı.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 text-white/70 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">Fatura ID</th>
                  <th className="px-6 py-4 text-left">Tarih</th>
                  <th className="px-6 py-4 text-left">Tutar</th>
                  <th className="px-6 py-4 text-left">Plan</th>
                  <th className="px-6 py-4 text-left">Durum</th>
                  <th className="px-6 py-4 text-left">Ödeme Yöntemi</th>
                  <th className="px-6 py-4 text-center">Fatura</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-white/5">
                    <td className="px-6 py-4 whitespace-nowrap">{payment.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(payment.date).toLocaleDateString("tr-TR")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.amount} TL</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.plan}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        className={`
                          ${payment.status === "successful" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                          ${payment.status === "pending" ? "bg-amber-500/20 text-amber-400 border-amber-500/30" : ""}
                          ${payment.status === "failed" ? "bg-red-500/20 text-red-400 border-red-500/30" : ""}
                        `}
                      >
                        {payment.status === "successful" && "Başarılı"}
                        {payment.status === "pending" && "Beklemede"}
                        {payment.status === "failed" && "Başarısız"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment.paymentMethod === "credit_card" && (
                        <div className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          <span>Kredi Kartı</span>
                        </div>
                      )}
                      {payment.paymentMethod === "paypal" && (
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.93 4.24h6.9c2.97 0 3.73 1.5 3.6 3.73-.29 4.8-2.46 7.4-5.93 7.4h-1.53c-.47 0-.74.23-.87 1.13L11.37 21l-.33 1.54c-.03.3-.26.46-.49.46H6.98c-.41 0-.55-.34-.46-.66l2.92-14.85c.13-.65.56-1.25 1.26-1.25h-.77zM16.2 10.47l.46-2.37c.09-.44-.09-.63-.46-.63h-3.92c-.28 0-.46.19-.53.59l-.66 3.55c.06 0 .09-.03.12-.03h3.22c.82-.03 1.5-.47 1.77-1.11zm-12.99 0c.03-.3.13-.63.4-.63h3.2c.31 0 .37.23.31.63-.09.4-.28.63-.62.63h-2.95c-.22 0-.4-.16-.34-.63z" />
                          </svg>
                          <span>PayPal</span>
                        </div>
                      )}
                      {payment.paymentMethod === "bank_transfer" && (
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="6" width="20" height="12" rx="2" />
                            <line x1="12" y1="12" x2="12" y2="12.01" />
                            <path d="M8 12h.01M16 12h.01" />
                          </svg>
                          <span>Banka Havalesi</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownloadInvoice(payment.id)}
                        disabled={payment.status === "pending" || payment.status === "failed"}
                        className="hover:bg-white/10"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
