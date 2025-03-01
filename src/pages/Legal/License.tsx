
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const License = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Lisans Bilgileri</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>AIHUB360 Platformu Lisans Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformu, kullanıcılar ve geliştiriciler için farklı lisans modelleri sunmaktadır.
              Bu sayfada, platformumuzda kullanılan lisanslar ve kullanım koşulları hakkında detaylı bilgi bulabilirsiniz.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Kullanıcı Lisansları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunun kullanımı, aşağıdaki lisans koşullarına tabidir:
            </p>
            
            <h3 className="font-semibold text-white">Ücretsiz Plan</h3>
            <p className="text-white/80 high-contrast-text">
              Ücretsiz plan kullanıcıları, platformu sınırlı kapasitede ve yalnızca kişisel kullanım 
              amacıyla kullanabilirler. Ücretsiz plan ile oluşturulan içerikler, ticari amaçlarla kullanılamaz.
            </p>
            
            <h3 className="font-semibold text-white mt-4">Kişisel Plan</h3>
            <p className="text-white/80 high-contrast-text">
              Kişisel plan kullanıcıları, platformu bireysel veya serbest çalışan olarak kullanabilirler.
              Bu plan altında oluşturulan içerikler, kişisel ve ticari amaçlarla kullanılabilir, ancak
              içeriklerin yeniden satılması veya dağıtılması yasaktır.
            </p>
            
            <h3 className="font-semibold text-white mt-4">Kurumsal Plan</h3>
            <p className="text-white/80 high-contrast-text">
              Kurumsal plan kullanıcıları, platformu ticari amaçlarla ve kurumsal projelerinde kullanabilirler.
              Bu plan, oluşturulan içeriklerin kurum içinde veya müşterilere sunulan hizmetler kapsamında
              kullanılmasına izin verir.
            </p>
            
            <h3 className="font-semibold text-white mt-4">Özel Lisanslar</h3>
            <p className="text-white/80 high-contrast-text">
              Özel gereksinimleriniz için, yukarıdaki planların kapsamadığı kullanım senaryolarını içeren
              özel lisans anlaşmaları yapılabilir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. İçerik Lisansları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformunda oluşturulan veya paylaşılan içerikler için aşağıdaki lisans seçenekleri geçerlidir:
            </p>
            
            <h3 className="font-semibold text-white">Kullanıcı İçeriği</h3>
            <p className="text-white/80 high-contrast-text">
              Platformumuza yüklediğiniz veya oluşturduğunuz içeriklerin mülkiyeti size aittir. Ancak, bu içerikleri
              platformumuzda barındırmak ve hizmetlerimizi sunmak için gerekli lisans haklarını bize vermiş olursunuz.
            </p>
            
            <h3 className="font-semibold text-white mt-4">AI Tarafından Oluşturulan İçerik</h3>
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformundaki yapay zeka modelleri tarafından oluşturulan içeriklerin lisans hakları,
              seçtiğiniz abonelik planına göre değişiklik gösterir:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Ücretsiz Plan: Yalnızca kişisel kullanım</li>
              <li>Kişisel Plan: Kişisel ve ticari kullanım (yeniden satış hariç)</li>
              <li>Kurumsal Plan: Tam ticari kullanım</li>
            </ul>
            
            <h3 className="font-semibold text-white mt-4">Marketplace İçeriği</h3>
            <p className="text-white/80 high-contrast-text">
              AIHUB360 Marketplace'te satın aldığınız içerikler, ilgili içeriğin satıcısı tarafından belirlenen
              lisans koşullarına tabidir. Her içerik için geçerli lisans koşulları, satın alma öncesinde
              açıkça belirtilmektedir.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. API ve SDK Lisansları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 API ve SDK'larının kullanımı, aşağıdaki lisans koşullarına tabidir:
            </p>
            
            <h3 className="font-semibold text-white">API Kullanımı</h3>
            <p className="text-white/80 high-contrast-text">
              AIHUB360 API'lerini kullanmak için geçerli bir API anahtarına ve abonelik planına sahip olmanız gerekir.
              API'lerin kullanımı, seçtiğiniz abonelik planında belirtilen kullanım limitleri ve koşullarına tabidir.
            </p>
            
            <h3 className="font-semibold text-white mt-4">SDK Lisansı</h3>
            <p className="text-white/80 high-contrast-text">
              AIHUB360 SDK'ları, MIT lisansı altında dağıtılmaktadır. Bu lisans, SDK'yı kullanma, kopyalama, değiştirme,
              birleştirme, yayınlama, dağıtma, alt lisanslama ve/veya satma özgürlüğü verir. Ancak, SDK ile oluşturulan
              uygulamaların AIHUB360 API'lerine erişimi, geçerli bir API anahtarı ve abonelik planı gerektirir.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Üçüncü Taraf Lisansları</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformu, aşağıdaki üçüncü taraf yazılım ve hizmetleri kullanmaktadır. Bu bileşenlerin
              lisans bilgilerini şeffaf bir şekilde paylaşıyoruz:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>React: MIT Lisansı</li>
              <li>TensorFlow: Apache 2.0 Lisansı</li>
              <li>PyTorch: BSD Lisansı</li>
              <li>OpenAI API: OpenAI API Kullanım Politikası'na tabi</li>
              <li>Tailwind CSS: MIT Lisansı</li>
              <li>Postgres: PostgreSQL Lisansı</li>
              <li>Redis: BSD Lisansı</li>
              <li>Node.js: MIT Lisansı</li>
            </ul>
            
            <p className="text-white/80 high-contrast-text mt-4">
              Tam atıf ve lisans metinleri için lütfen <a href="/attribution" className="text-aihub-blue hover:underline">Atıflar</a> sayfamızı ziyaret edin.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>5. Açık Kaynak Katkılarımız</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 olarak, açık kaynak topluluğuna katkıda bulunmanın önemine inanıyoruz. Platformumuzun
              bazı bileşenleri açık kaynak olarak yayınlanmıştır. Bunlar hakkında daha fazla bilgi için
              <a href="/open-source" className="text-aihub-blue hover:underline ml-1">Açık Kaynak</a> sayfamızı ziyaret edebilirsiniz.
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

export default License;
