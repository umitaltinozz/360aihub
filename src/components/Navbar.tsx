
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-aihub-dark/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">AIHUB360</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/ai-news" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Haberleri
              </Link>
              <Link to="/ai-models" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                AI Modelleri
              </Link>
              <Link to="/training" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Eğitimler
              </Link>
              <Link to="/marketplace" className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Marketplace
              </Link>
              <div className="flex space-x-2 ml-4">
                <Button variant="ghost" className="text-white border border-white/20 hover:bg-white/10">
                  Giriş Yap
                </Button>
                <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90">
                  Üye Ol
                </Button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-aihub-gray focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-lg bg-aihub-dark/80 border-b border-white/10">
            <Link
              to="/ai-news"
              className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              AI Haberleri
            </Link>
            <Link
              to="/ai-models"
              className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              AI Modelleri
            </Link>
            <Link
              to="/training"
              className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Eğitimler
            </Link>
            <Link
              to="/marketplace"
              className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Marketplace
            </Link>
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="ghost" className="text-white border border-white/20 hover:bg-white/10">
                Giriş Yap
              </Button>
              <Button className="bg-gradient-to-r from-aihub-blue to-aihub-purple text-white hover:opacity-90">
                Üye Ol
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
