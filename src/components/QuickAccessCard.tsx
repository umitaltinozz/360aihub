
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
}

const QuickAccessCard = ({ title, description, icon: Icon, bgColor }: QuickAccessCardProps) => {
  return (
    <Card className="glass card-hover overflow-hidden">
      <div className={`h-1 ${bgColor}`} />
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-md ${bgColor}/20`}>
            <Icon className={`h-5 w-5 ${bgColor.replace('bg-', 'text-')}`} />
          </div>
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-white/70">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default QuickAccessCard;
