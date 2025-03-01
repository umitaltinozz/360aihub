
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, AlertTriangle, Info } from "lucide-react";

const Security = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Güvenlik Politikası</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-black/30 border-white/10 backdrop-blur-sm flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-aihub-blue mr-2" />
                <CardTitle>Veri Koruma</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white/80 high-contrast-text">
                Tüm kullanıcı verileri, endüstri standardı şifreleme teknikleri kullanılarak korunur. 
                İletimde ve depoda güvenliği sağlamak için sürekli olarak sistemlerimizi izliyor ve güncelliyoruz.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 border-white/10 backdrop-blur-sm flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center">
                <Lock className="h-6 w-6 text-aihub-blue mr-2" />
                <CardTitle>Kimlik Doğrulama</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-white/80 high-contrast-text">
                Çok faktörlü kimlik doğrulama ve güvenli parola politikaları ile hesap güvenliğini
                sağlıyoruz. API anahtarlarınız ve oturum bilgileriniz güvenle korunur.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Güvenlik Önlemlerimiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 olarak, platformumuzun ve kullanıcı verilerinizin güvenliğini sağlamak için
              aşağıdaki önlemleri alıyoruz:
            </p>
            
            <h3 className="font-semibold text-white">1. Veri Şifreleme</h3>
            <p className="text-white/80 high-contrast-text">
              Tüm hassas veriler, TLS/SSL protokolleri kullanılarak iletim sırasında ve AES-256 
              şifreleme standardı kullanılarak saklama sırasında şifrelenir.
            </p>
            
            <h3 className="font-semibold text-white mt-4">2. Güvenlik Denetimleri</h3>
            <p className="text-white/80 high-contrast-text">
              Sistemlerimiz, düzenli güvenlik denetimlerine ve penetrasyon testlerine tabi tutulur.
              Bulduğumuz güvenlik açıklarını hızla kapatırız.
            </p>
            
            <h3 className="font-semibold text-white mt-4">3. Erişim Kontrolü</h3>
            <p className="text-white/80 high-contrast-text">
              Verilerinize erişim, yalnızca yetkili personelle sınırlıdır ve bu erişimler
              sürekli olarak izlenir. İhtiyaç duyulduğunda erişim yetkileri gözden geçirilir.
            </p>
            
            <h3 className="font-semibold text-white mt-4">4. Düzenli Yedekleme</h3>
            <p className="text-white/80 high-contrast-text">
              Verileriniz düzenli olarak yedeklenir ve güvenli bir şekilde saklanır. Veri kaybını 
              önlemek için yedekleme süreçlerimizi sürekli olarak test ederiz.
            </p>
            
            <h3 className="font-semibold text-white mt-4">5. Güvenlik İzleme</h3>
            <p className="text-white/80 high-contrast-text">
              7/24 güvenlik izleme sistemlerimiz, şüpheli aktiviteleri tespit eder ve potansiyel
              güvenlik tehditlerine karşı anında müdahale eder.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 text-amber-400 mr-2" />
              <CardTitle>Güvenlik Açığı Bildirimi</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunda veya hizmetlerimizde bir güvenlik açığı keşfederseniz, lütfen bize bildirin.
              Sorumlu açıklama politikamız çerçevesinde, bildirdiğiniz güvenlik açığını hızla değerlendirip
              gerekli önlemleri alacağız.
            </p>
            <p className="text-white/80 high-contrast-text">
              Güvenlik açıklarını security@aihub360.com adresine e-posta göndererek bildirebilirsiniz.
              Bildiriminizde, açığın detaylarını ve nasıl çoğaltılabileceğini açıkça belirtmeniz,
              hızlı bir şekilde müdahale etmemize yardımcı olacaktır.
            </p>
            <div className="flex items-start mt-4 bg-black/20 p-4 rounded-md border border-amber-500/20">
              <Info className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/80">
                Güvenlik açıklarının kötüye kullanılmaması ve kullanıcılarımızın güvenliğinin sağlanması için,
                tespit ettiğiniz güvenlik açıklarını bize bildirene kadar üçüncü taraflarla paylaşmamanızı rica ederiz.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Kullanıcı Güvenlik Tavsiyeleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Hesap güvenliğinizi artırmak için aşağıdaki önlemleri almanızı öneririz:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Güçlü ve benzersiz parolalar kullanın</li>
              <li>İki faktörlü kimlik doğrulamayı etkinleştirin</li>
              <li>API anahtarlarınızı güvenli tutun ve düzenli olarak yenileyin</li>
              <li>Şüpheli e-postalara ve mesajlara karşı dikkatli olun</li>
              <li>Hesabınıza bağlı tüm cihazları düzenli olarak kontrol edin</li>
              <li>Tarayıcınızı ve işletim sisteminizi güncel tutun</li>
              <li>Güvenli olmayan ağlarda AIHUB360 hesabınıza erişmekten kaçının</li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-white/60 mt-8">
          Son güncelleme: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
        </p>
      </div>
    </div>
  );
};

export default Security;
