
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DataProtection = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Veri Koruma</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Veri Koruma Taahhüdümüz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 olarak, verilerinizin korunmasını en üst düzeyde öncelikli konulardan biri olarak görüyoruz.
              Platformumuzu kullanırken verilerinizin güvenliğini sağlamak için kapsamlı teknik ve organizasyonel önlemler alıyoruz.
            </p>
            <p className="text-white/80 high-contrast-text">
              Bu politika, kişisel verilerinizin yanı sıra, yapay zeka modellerimizi eğitmek için kullandığınız verileri ve 
              platformumuzda sakladığınız içerikleri nasıl koruduğumuzu açıklamaktadır.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Veri Koruma Önlemlerimiz</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-white">Teknik Önlemler</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Tüm veriler, hem iletim sırasında hem de depolanırken endüstri standardı şifreleme teknikleriyle korunur</li>
              <li>Verilerinize erişim, çok faktörlü kimlik doğrulama ve sıkı erişim kontrolü ile sınırlandırılmıştır</li>
              <li>Düzenli güvenlik taramaları ve penetrasyon testleri gerçekleştiriyoruz</li>
              <li>Yedekleme sistemlerimiz, veri kaybını önlemek için düzenli olarak test edilir</li>
              <li>Gelişmiş tehdit algılama ve önleme sistemleri kullanıyoruz</li>
            </ul>
            
            <h3 className="font-semibold text-white mt-4">Organizasyonel Önlemler</h3>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Çalışanlarımız, veri güvenliği ve gizlilik konularında düzenli olarak eğitim alır</li>
              <li>Veri erişimi, yalnızca işin gerektirdiği ölçüde ve yetkili personel ile sınırlıdır</li>
              <li>Veri işleme faaliyetlerimiz düzenli olarak gözden geçirilir ve belgelenir</li>
              <li>Alt işleyicilerimiz ve iş ortaklarımız, veri koruma standartlarımıza uymakla yükümlüdür</li>
              <li>Veri ihlali olması durumunda, hızlı ve etkili bir şekilde müdahale etmek için planlarımız vardır</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Veri Lokalizasyonu ve Transferi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Verileriniz, Türkiye'de bulunan veri merkezlerimizde saklanır. Bazı durumlarda, hizmetlerimizi
              sunmak için verileriniz yurt dışına aktarılabilir. Bu tür bir veri transferi yapıldığında, 
              verilerinizin güvenliğini sağlamak için gerekli tüm yasal ve teknik önlemleri alırız.
            </p>
            <p className="text-white/80 high-contrast-text">
              Yurt dışına veri aktarımı, yalnızca yeterli düzeyde veri korumasına sahip ülkelere veya
              uygun güvenlik önlemlerinin alındığı durumlarda gerçekleştirilir.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Veri Saklama ve Silme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Verilerinizi, hizmetlerimizi sunmak için gerekli olan süre boyunca veya yasal yükümlülüklerimizi
              yerine getirmek için gereken süre kadar saklarız. Bu süre sona erdiğinde, verileriniz güvenli bir
              şekilde silinir veya anonim hale getirilir.
            </p>
            <p className="text-white/80 high-contrast-text">
              Hesabınızı kapattığınızda, kişisel verileriniz ve içerikleriniz talebiniz üzerine 30 gün içinde silinir.
              Ancak, yasal yükümlülüklerimiz gereği bazı verileri daha uzun süre saklamamız gerekebilir.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>5. Veri İhlalleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Veri ihlali olması durumunda, yasal yükümlülüklerimiz çerçevesinde ilgili kişileri ve yetkili
              makamları en kısa sürede bilgilendiririz. Veri ihlallerini önlemek ve etkilerini en aza indirmek
              için kapsamlı önlemler alıyoruz.
            </p>
            <p className="text-white/80 high-contrast-text">
              Veri ihlali durumunda, ihlali tespit etmek, kontrol altına almak ve düzeltmek için hızlı bir
              şekilde harekete geçeriz. Ayrıca, gelecekteki olası ihlalleri önlemek için sistemlerimizi
              ve süreçlerimizi sürekli olarak iyileştiririz.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>6. Kullanıcı Verileri ve AI Modelleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformuna yüklediğiniz veriler ve içerikler size aittir. Bu verileri, yapay
              zeka modellerimizi eğitmek için yalnızca açık izniniz olduğunda kullanırız.
            </p>
            <p className="text-white/80 high-contrast-text">
              Modellerimiz için kullanılan eğitim verilerini, kişisel verileri içermeyecek şekilde
              anonimleştiririz. Eğitim sürecinde kullanılan verilerin gizliliğini ve güvenliğini
              sağlamak için gerekli tüm önlemleri alırız.
            </p>
          </CardContent>
        </Card>

        <p className="text-white/60 mt-8">
          Son güncelleme: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
        </p>
      </div>
    </div>
  );
};

export default DataProtection;
