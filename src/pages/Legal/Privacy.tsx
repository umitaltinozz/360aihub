
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Gizlilik Politikası</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Toplanan Bilgiler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformuna kaydolurken ve hizmetlerimizi kullanırken, adınız, e-posta adresiniz,
              telefon numaranız ve ödeme bilgileriniz gibi kişisel bilgilerinizi topluyoruz.
            </p>
            <p className="text-white/80 high-contrast-text">
              Ayrıca, platform kullanımınızla ilgili IP adresi, cihaz bilgileri, tarayıcı türü ve
              kullanım istatistikleri gibi otomatik olarak toplanan bilgiler de dahil olmak üzere
              çeşitli teknik verileri de toplamaktayız.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Bilgilerin Kullanımı</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Topladığımız bilgileri aşağıdaki amaçlar için kullanmaktayız:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Hesabınızı oluşturmak ve yönetmek</li>
              <li>Size hizmetlerimizi sunmak ve işlem yapmak</li>
              <li>Teknik sorunları çözmek ve platform güvenliğini sağlamak</li>
              <li>İletişim kurmak ve destek sağlamak</li>
              <li>Hizmetlerimizi iyileştirmek ve kişiselleştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Bilgilerin Paylaşımı</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Kişisel bilgilerinizi, açık onayınız olmaksızın üçüncü taraflarla paylaşmayız. 
              Ancak, aşağıdaki durumlarda bilgilerinizi paylaşabiliriz:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Hizmet sağlayıcılarımızla (ödeme işlemcileri, bulut hizmetleri gibi)</li>
              <li>Yasal gerekliliklere uymak için</li>
              <li>AIHUB360'ın haklarını, güvenliğini veya mülkiyetini korumak için</li>
              <li>Şirket birleşmesi, satışı veya yeniden yapılanması durumunda</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Veri Güvenliği</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Kişisel verilerinizi korumak için çeşitli güvenlik önlemleri alıyoruz. Tüm veriler 
              şifrelenerek saklanır ve sadece yetkilendirilmiş personel tarafından erişilebilir.
            </p>
            <p className="text-white/80 high-contrast-text">
              Ancak, internet üzerinden hiçbir veri iletiminin veya depolama sisteminin %100 güvenli
              olmadığını unutmayın. Verilerinizi korumak için elimizden geleni yapıyor olsak da,
              mutlak güvenliği garanti edemeyiz.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>5. Kullanıcı Hakları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              KVKK ve diğer ilgili yasalar kapsamında, kişisel verilerinizle ilgili olarak:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Hangi verilere sahip olduğumuzu öğrenme</li>
              <li>Veri düzeltme veya güncelleme</li>
              <li>Verilerin silinmesini talep etme</li>
              <li>Veri işlemeye itiraz etme</li>
              <li>Veri taşınabilirliği</li>
            </ul>
            <p className="text-white/80 high-contrast-text">
              haklarına sahipsiniz. Bu haklarınızı kullanmak için privacy@aihub360.com adresine e-posta gönderebilirsiniz.
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

export default Privacy;
