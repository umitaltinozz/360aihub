
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-aihub-purple/20 via-aihub-dark to-aihub-dark z-0"></div>
      
      {/* Circle light effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-aihub-blue/20 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-aihub-purple/20 rounded-full filter blur-[100px] opacity-50"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            <span className="text-xs font-medium text-white/80">Yapay Zeka Dünyasına Hoş Geldiniz</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AIHUB360</span> ile <br /> Yapay Zeka Dünyasını Keşfedin
          </h1>
          
          <p className="text-lg text-white/70 mb-8 max-w-2xl">
            Güncel AI haberlerini takip edin, yeni modelleri keşfedin, eğitimlerle yeteneklerinizi geliştirin ve 
            marketplace ile AI araçlarına erişin.
          </p>
          
          <Link to="/ai-news">
            <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white px-6 py-6 rounded-md hover:opacity-90 transition-all group">
              <span className="mr-2">Şimdi Keşfet</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
