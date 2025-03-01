
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Çerez Politikası</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Çerezler Nedir?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Çerezler (cookies), web siteleri tarafından bilgisayarınıza, telefonunuza veya tabletinize 
              yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin sizi tanımasına 
              ve tercihlerinizi hatırlamasına yardımcı olur.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Kullandığımız Çerez Türleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunda aşağıdaki çerez türlerini kullanmaktayız:
            </p>
            
            <h3 className="font-semibold text-white">Zorunlu Çerezler</h3>
            <p className="text-white/80 high-contrast-text">
              Bu çerezler, web sitesinin temel işlevlerini gerçekleştirmek için gereklidir. Bunlar olmadan, 
              web sitesi düzgün çalışmayabilir. Bu çerezler, gizlilik yasaları uyarınca rızanıza tabi değildir.
            </p>
            
            <h3 className="font-semibold text-white mt-4">Performans ve Analitik Çerezleri</h3>
            <p className="text-white/80 high-contrast-text">
              Bu çerezler, web sitemizin nasıl kullanıldığı hakkında bilgi toplar ve sitemizi iyileştirmemize 
              yardımcı olur. Örneğin, hangi sayfaların en çok ziyaret edildiğini veya hata mesajlarının nerede 
              görüntülendiğini takip ederler.
            </p>
            
            <h3 className="font-semibold text-white mt-4">İşlevsellik Çerezleri</h3>
            <p className="text-white/80 high-contrast-text">
              Bu çerezler, tercihlerinizi hatırlamamıza ve size gelişmiş, kişiselleştirilmiş özellikler sunmamıza 
              olanak tanır. Bunlar, dil tercihleri veya oturum bilgileri gibi bilgileri kaydedebilir.
            </p>
            
            <h3 className="font-semibold text-white mt-4">Hedefleme/Reklam Çerezleri</h3>
            <p className="text-white/80 high-contrast-text">
              Bu çerezler, size ilgi alanlarınıza göre daha alakalı reklamlar göstermek için kullanılır. Ayrıca, 
              bir reklamın görüntülenme sayısını sınırlamaya ve reklam kampanyalarının etkinliğini ölçmeye yardımcı olurlar.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Çerezleri Nasıl Kontrol Edebilirsiniz?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Çoğu web tarayıcısı, çerezleri otomatik olarak kabul eder. Ancak, tarayıcı ayarlarınızı değiştirerek 
              çerezleri reddedebilir veya çerez gönderildiğinde uyarı alabilirsiniz. Ayrıca, tarayıcınızın yardım 
              bölümünden nasıl çerez silme işlemi yapabileceğinizi öğrenebilirsiniz.
            </p>
            <p className="text-white/80 high-contrast-text">
              Çerezleri devre dışı bırakmanın, web sitemizin bazı özelliklerinin işlevselliğini etkileyebileceğini 
              lütfen unutmayın.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Üçüncü Taraf Çerezleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Web sitemizde, analitik, reklam ve sosyal medya ortaklarımız tarafından yerleştirilen üçüncü taraf 
              çerezleri de bulunabilir. Bu çerezler, ilgili hizmet sağlayıcılarının gizlilik politikalarına tabidir.
            </p>
            <p className="text-white/80 high-contrast-text">
              Örneğin, Google Analytics, web sitemizin ziyaretçi trafiğini analiz etmek için çerezler kullanır.
              Bu çerezlerin nasıl kullanıldığı hakkında daha fazla bilgi için Google'ın gizlilik politikasını 
              inceleyebilirsiniz.
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

export default Cookies;
