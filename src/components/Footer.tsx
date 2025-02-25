
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-aihub-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-gradient">AIHUB360</span>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Yapay zeka dünyasında öncü platform. Haberler, modeller, eğitimler ve daha fazlası.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Sayfalar</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/ai-news" className="text-sm text-white/60 hover:text-white transition-colors">
                  AI Haberleri
                </Link>
              </li>
              <li>
                <Link to="/ai-models" className="text-sm text-white/60 hover:text-white transition-colors">
                  AI Modelleri
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-sm text-white/60 hover:text-white transition-colors">
                  Eğitimler
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-sm text-white/60 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Kaynaklar</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Topluluk
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Yasal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Çerez Politikası
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/60 text-center">
            &copy; {new Date().getFullYear()} AIHUB360. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
