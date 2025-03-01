
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Kullanım Koşulları</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Genel Hükümler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunu kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. 
              Platform hizmetlerini kullanmadan önce lütfen bu koşulları dikkatlice okuyun.
            </p>
            <p className="text-white/80 high-contrast-text">
              AIHUB360, önceden bildirimde bulunmaksızın bu koşulları değiştirme hakkını saklı tutar. 
              Değişiklikler, platformda yayınlandığı andan itibaren geçerli olacaktır.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Hizmet Kullanımı</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunu yalnızca yasal amaçlarla ve bu koşullara uygun olarak kullanmayı kabul edersiniz.
              Platformu, üçüncü kişilerin haklarına zarar verecek şekilde kullanmamayı taahhüt edersiniz.
            </p>
            <p className="text-white/80 high-contrast-text">
              AIHUB360, herhangi bir zamanda, herhangi bir sebeple hizmetleri değiştirme, 
              askıya alma veya sonlandırma hakkını saklı tutar.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Hesap Güvenliği</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Hesabınızın güvenliğini sağlamak ve yetkisiz erişimleri önlemek sizin sorumluluğunuzdadır.
              Şifrenizi güvende tutun ve hesabınızla ilgili herhangi bir şüpheli aktivite fark ederseniz 
              derhal bizimle iletişime geçin.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. İçerik ve Fikri Mülkiyet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunda paylaşılan tüm içerik, aksi belirtilmedikçe AIHUB360'ın fikri mülkiyetidir.
              Platformda yer alan içeriği, önceden yazılı izin almadan kopyalayamaz, değiştiremez,
              dağıtamaz veya satamaz ya da ticari amaçlarla kullanamazsınız.
            </p>
            <p className="text-white/80 high-contrast-text">
              Platform üzerinde paylaştığınız içerikle ilgili olarak, bu içeriğin yasal olduğunu ve üçüncü
              kişilerin haklarını ihlal etmediğini beyan ve taahhüt edersiniz.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>5. Sorumluluk Sınırlaması</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360, platform üzerinden sunulan hizmetlerin kesintisiz, hatasız veya güvenli olacağını garanti etmez.
              Platform kullanımından doğabilecek doğrudan veya dolaylı herhangi bir zarardan AIHUB360 sorumlu tutulamaz.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>6. Geçerli Yasa ve Yargı Yetkisi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu koşulların uygulanmasından 
              kaynaklanan herhangi bir anlaşmazlık durumunda Türkiye Cumhuriyeti mahkemeleri yetkilidir.
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

export default Terms;
