
import { Link } from "react-router-dom";

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-6 py-4 bg-[#1A1A1A] border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-white/60">
            &copy; {currentYear} AIHUB360 Admin Panel. Tüm hakları saklıdır.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/privacy-policy" className="text-sm text-white/60 hover:text-white/80 transition-colors">
            Gizlilik Politikası
          </Link>
          <Link to="/terms" className="text-sm text-white/60 hover:text-white/80 transition-colors">
            Kullanım Koşulları
          </Link>
          <Link to="/admin/support" className="text-sm text-white/60 hover:text-white/80 transition-colors">
            Destek
          </Link>
        </div>
      </div>
      
      {/* Google AdSense Banner Placeholder */}
      <div className="mt-4 h-16 bg-white/5 rounded-md border border-white/10 flex items-center justify-center">
        <p className="text-white/40 text-sm">Google AdSense Banner Alanı</p>
      </div>
    </footer>
  );
};

export default AdminFooter;
