
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { LineChart, Line } from "recharts";

const Usage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  // Sample data for charts
  const apiUsageData = [
    { name: "1 Haz", value: 120 },
    { name: "5 Haz", value: 220 },
    { name: "10 Haz", value: 180 },
    { name: "15 Haz", value: 350 },
    { name: "20 Haz", value: 290 },
    { name: "25 Haz", value: 430 },
    { name: "30 Haz", value: 580 },
  ];

  const modelUsageData = [
    { name: "GPT-4", value: 48 },
    { name: "Claude", value: 32 },
    { name: "Llama 3", value: 15 },
    { name: "Mistral", value: 5 },
  ];

  const tokenUsageData = [
    { name: "1 Haz", value: 4000 },
    { name: "5 Haz", value: 7000 },
    { name: "10 Haz", value: 12000 },
    { name: "15 Haz", value: 19000 },
    { name: "20 Haz", value: 24000 },
    { name: "25 Haz", value: 35000 },
    { name: "30 Haz", value: 42000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0 page-heading">Kullanım İstatistikleri</h1>
        <Tabs 
          value={selectedPeriod} 
          onValueChange={setSelectedPeriod}
          className="w-full sm:w-auto"
        >
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="week" className="flex-1 sm:flex-none">Hafta</TabsTrigger>
            <TabsTrigger value="month" className="flex-1 sm:flex-none">Ay</TabsTrigger>
            <TabsTrigger value="year" className="flex-1 sm:flex-none">Yıl</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">API Çağrıları</CardTitle>
            <CardDescription>Toplam API istekleri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,452</div>
            <div className="text-sm text-green-400">+12% geçen aya göre</div>
            <div className="h-36 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={apiUsageData}>
                  <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '4px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Token Kullanımı</CardTitle>
            <CardDescription>Bu ay kullanılan tokenlar</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125K / 500K</div>
            <div className="text-sm text-white/70">25% kullanıldı</div>
            <div className="h-36 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tokenUsageData}>
                  <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '4px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Model Kullanımı</CardTitle>
            <CardDescription>En çok kullanılan modeller</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-36 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={modelUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {modelUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '4px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {modelUsageData.map((model, index) => (
                <div key={model.name} className="flex items-center text-xs">
                  <div 
                    className="w-3 h-3 mr-1 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span>{model.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Günlük API Kullanımı</CardTitle>
          <CardDescription>Son 30 günlük kullanım</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={apiUsageData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ background: 'rgba(0, 0, 0, 0.8)', border: 'none', borderRadius: '4px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Usage;
