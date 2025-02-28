
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MarketplaceManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Marketplace Yönetimi</h1>
        <p className="text-white/60 mt-1">
          Kullanıcıların sattığı AI modelleri ve promptları denetleyin.
        </p>
      </div>
      
      <Card className="bg-[#1A1A1A] border-white/10">
        <CardHeader>
          <CardTitle>Marketplace Yönetimi</CardTitle>
          <CardDescription>
            Bu sayfa henüz hazırlanıyor...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40">
            <p className="text-white/60">Bu özellik yakında kullanıma sunulacaktır.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketplaceManagement;
