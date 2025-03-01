
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KVKK = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">KVKK Uyumu</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Veri Sorumlusu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu
              olarak AIHUB360 Teknoloji A.Ş. ("AIHUB360") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Kişisel Verilerin İşlenme Amacı</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Kişisel verileriniz KVKK'da öngörülen temel ilkelere uygun olarak ve aşağıdaki amaçlar doğrultusunda işlenmektedir:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Üyelik kaydının oluşturulması ve üyelik işlemlerinin gerçekleştirilmesi</li>
              <li>AIHUB360 hizmetlerinden faydalanmanızın sağlanması</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
              <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Talep ve şikayetlerinizin değerlendirilmesi</li>
              <li>AIHUB360 hizmetlerinin geliştirilmesi ve iyileştirilmesi</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Kişisel Verilerin Aktarılması</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve 
              amaçları çerçevesinde, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; 
              iş ortaklarımıza, tedarikçilerimize, grup şirketlerimize, hissedarlarımıza, kanunen yetkili 
              kamu kurumları ve özel kişilere aktarılabilecektir.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Kişisel verileriniz, AIHUB360 tarafından elektronik ortamda web sitesi, mobil uygulama, 
              e-posta, çağrı merkezi ve benzeri elektronik kanallar aracılığıyla toplanmaktadır.
            </p>
            <p className="text-white/80 high-contrast-text">
              Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları 
              ve amaçları kapsamında ve aşağıdaki hukuki sebepler doğrultusunda işlenmektedir:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Açık rızanızın bulunması</li>
              <li>Kanunlarda açıkça öngörülmesi</li>
              <li>Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
              <li>Hukuki yükümlülüğün yerine getirilmesi</li>
              <li>Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>5. KVKK Kapsamındaki Haklarınız</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerinizin düzeltilmesi, silinmesi veya yok edilmesi halinde bu işlemlerin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>6. Başvuru Hakkı</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Yukarıda belirtilen haklarınızı kullanmak için:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>kvkk@aihub360.com adresine e-posta göndererek</li>
              <li>AIHUB360 Teknoloji A.Ş., [Adres] adresine yazılı başvuruda bulunarak</li>
              <li>info@aihub360.com adresine kayıtlı elektronik posta (KEP) göndererek</li>
            </ul>
            <p className="text-white/80 high-contrast-text">
              talebinizi iletebilirsiniz. Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde 
              ücretsiz olarak sonuçlandırılacaktır.
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

export default KVKK;
