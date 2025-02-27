
import { Link } from "react-router-dom";
import { ArrowRight, Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";

const Footer = () => {
  return (
    <footer className="bg-aihub-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-gradient">AIHUB360</h3>
            <p className="text-white/70 mb-6">
              Yapay zeka dünyasında bilgi ve kaynaklara erişiminizi kolaylaştıran dijital platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:info@aihub360.com" className="text-white/70 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <Tabs defaultValue="company" className="w-full">
              <TabsList className="bg-black/20 border border-white/10 mb-6">
                <TabsTrigger value="company">Şirket</TabsTrigger>
                <TabsTrigger value="legal">Yasal</TabsTrigger>
                <TabsTrigger value="resources">Kaynaklar</TabsTrigger>
                <TabsTrigger value="support">Destek</TabsTrigger>
              </TabsList>
              
              <TabsContent value="company" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Hakkımızda</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/about" className="footer-link">Şirket Bilgisi</Link>
                      </li>
                      <li>
                        <Link to="/team" className="footer-link">Ekibimiz</Link>
                      </li>
                      <li>
                        <Link to="/careers" className="footer-link">Kariyer</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="footer-link">İletişim</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Blog</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/blog/ai-trends" className="footer-link">AI Trendleri</Link>
                      </li>
                      <li>
                        <Link to="/blog/case-studies" className="footer-link">Vaka Çalışmaları</Link>
                      </li>
                      <li>
                        <Link to="/blog/tutorials" className="footer-link">Eğitimler</Link>
                      </li>
                      <li>
                        <Link to="/blog/interviews" className="footer-link">Röportajlar</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Sosyal Medya</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                      </li>
                      <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                      </li>
                      <li>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a>
                      </li>
                      <li>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="footer-link">Discord</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="legal" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Yasal Bilgiler</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/terms" className="footer-link">Kullanım Koşulları</Link>
                      </li>
                      <li>
                        <Link to="/privacy" className="footer-link">Gizlilik Politikası</Link>
                      </li>
                      <li>
                        <Link to="/cookies" className="footer-link">Çerez Politikası</Link>
                      </li>
                      <li>
                        <Link to="/compliance" className="footer-link">KVKK Uyumu</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Güvenlik</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/security" className="footer-link">Güvenlik Politikası</Link>
                      </li>
                      <li>
                        <Link to="/vulnerability" className="footer-link">Güvenlik Açığı Bildirimi</Link>
                      </li>
                      <li>
                        <Link to="/data-protection" className="footer-link">Veri Koruma</Link>
                      </li>
                      <li>
                        <Link to="/transparency" className="footer-link">Şeffaflık Raporu</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Lisanslar</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/licensing" className="footer-link">Lisans Bilgileri</Link>
                      </li>
                      <li>
                        <Link to="/attribution" className="footer-link">Atıflar</Link>
                      </li>
                      <li>
                        <Link to="/open-source" className="footer-link">Açık Kaynak</Link>
                      </li>
                      <li>
                        <Link to="/api-terms" className="footer-link">API Kullanım Koşulları</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Eğitim</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/docs" className="footer-link">Dokümantasyon</Link>
                      </li>
                      <li>
                        <Link to="/tutorials" className="footer-link">Eğitimler</Link>
                      </li>
                      <li>
                        <Link to="/webinars" className="footer-link">Webinarlar</Link>
                      </li>
                      <li>
                        <Link to="/courses" className="footer-link">Kurslar</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Kaynaklar</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/resources/guides" className="footer-link">Rehberler</Link>
                      </li>
                      <li>
                        <Link to="/resources/templates" className="footer-link">Şablonlar</Link>
                      </li>
                      <li>
                        <Link to="/resources/datasets" className="footer-link">Veri Setleri</Link>
                      </li>
                      <li>
                        <Link to="/resources/tools" className="footer-link">Araçlar</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Topluluk</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/community/forum" className="footer-link">Forum</Link>
                      </li>
                      <li>
                        <Link to="/community/events" className="footer-link">Etkinlikler</Link>
                      </li>
                      <li>
                        <Link to="/community/showcase" className="footer-link">Proje Vitrini</Link>
                      </li>
                      <li>
                        <Link to="/community/contribute" className="footer-link">Katkıda Bulun</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="support" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Destek</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/help-center" className="footer-link">Yardım Merkezi</Link>
                      </li>
                      <li>
                        <Link to="/faq" className="footer-link">Sık Sorulan Sorular</Link>
                      </li>
                      <li>
                        <Link to="/contact-support" className="footer-link">Destek Talebi</Link>
                      </li>
                      <li>
                        <Link to="/status" className="footer-link">Sistem Durumu</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">İşbirliği</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/partners" className="footer-link">İş Ortaklarımız</Link>
                      </li>
                      <li>
                        <Link to="/become-partner" className="footer-link">Ortak Olun</Link>
                      </li>
                      <li>
                        <Link to="/integrations" className="footer-link">Entegrasyonlar</Link>
                      </li>
                      <li>
                        <Link to="/affiliate" className="footer-link">Satış Ortaklığı</Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-lg p-5 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Yardıma mı ihtiyacınız var?</h4>
                    <p className="text-white/70 text-sm mb-4">
                      Teknik sorunlar, ödeme sorunları veya genel sorular için destek ekibimizle iletişime geçin.
                    </p>
                    <Link to="/contact-support">
                      <Button 
                        variant="outline" 
                        className="border-white/10 hover:bg-white/5 w-full text-white flex items-center justify-between"
                      >
                        <span>Destek Talebi Oluştur</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AIHUB360. Tüm hakları saklıdır.
          </p>
          
          <div className="flex space-x-4 text-sm text-white/50">
            <Link to="/terms" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Çerezler</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Site Haritası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
