
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Transparency = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Şeffaflık Raporu</h1>
        
        <div className="mb-8">
          <p className="text-white/80 high-contrast-text">
            AIHUB360 olarak, kullanıcılarımızla şeffaf bir ilişki kurmayı ve faaliyetlerimiz hakkında 
            düzenli olarak bilgi vermeyi taahhüt ediyoruz. Bu rapor, platformumuzun işleyişi, veri 
            kullanımı, güvenlik uygulamaları ve yasal talepler hakkında bilgiler içermektedir.
          </p>
        </div>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>1. Yasal Talepler ve Bilgi İstekleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360, yürürlükteki yasalara uygun olarak, yetkili kurumlardan gelen bilgi taleplerine 
              yanıt vermektedir. Aşağıda, son 6 ayda aldığımız taleplerin özeti yer almaktadır:
            </p>
            
            <div className="space-y-6 mt-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Kullanıcı Bilgisi Talepleri</span>
                  <span className="text-sm">12</span>
                </div>
                <Progress value={40} className="h-2" />
                <p className="text-xs text-white/60 mt-1">
                  Resmi kurumlar tarafından yapılan kullanıcı bilgisi talepleri
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">İçerik Kaldırma Talepleri</span>
                  <span className="text-sm">18</span>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-white/60 mt-1">
                  Telif hakkı ihlali, yasadışı içerik vb. sebeplerle yapılan kaldırma talepleri
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Hesap Dondurma Talepleri</span>
                  <span className="text-sm">5</span>
                </div>
                <Progress value={20} className="h-2" />
                <p className="text-xs text-white/60 mt-1">
                  Yasal gerekçelerle hesapların dondurulması talepleri
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="font-semibold text-white">Taleplerin Sonuçları:</h3>
              <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text mt-2">
                <li>Karşılanan Talepler: %85</li>
                <li>Kısmen Karşılanan Talepler: %10</li>
                <li>Reddedilen Talepler: %5</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>2. Platform Kullanım İstatistikleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Kullanıcılarımıza platformumuzun nasıl kullanıldığına dair şeffaf bilgiler sunmak amacıyla,
              aşağıdaki istatistikleri paylaşıyoruz:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h3 className="font-semibold text-white mb-4">Model Kullanım Dağılımı</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Metin Tamamlama</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Görsel Oluşturma</span>
                      <span className="text-sm">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Metin/Vektör Gömme</span>
                      <span className="text-sm">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Sınıflandırma</span>
                      <span className="text-sm">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-4">Kullanıcı Sektörleri</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Yazılım Geliştirme</span>
                      <span className="text-sm">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">E-Ticaret</span>
                      <span className="text-sm">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Eğitim</span>
                      <span className="text-sm">18%</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Sağlık</span>
                      <span className="text-sm">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Diğer</span>
                      <span className="text-sm">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>3. Güvenlik İstatistikleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              Platformumuzun güvenliği hakkında bilgilendirme amacıyla, son 6 aya ait güvenlik 
              istatistiklerini paylaşıyoruz:
            </p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-white">Güvenlik Olayları:</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text mt-2">
                  <li>Tespit Edilen Güvenlik Açıkları: 18</li>
                  <li>Düzeltilen Güvenlik Açıkları: 18 (100%)</li>
                  <li>Ortalama Düzeltme Süresi: 72 saat</li>
                  <li>Başarısız Giriş Denemeleri: 11,524</li>
                  <li>Engellenen Kötü Amaçlı Saldırılar: 8,632</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Veri İhlalleri:</h3>
                <p className="text-white/80 high-contrast-text mt-2">
                  Son 6 ay içerisinde, kullanıcı verilerini etkileyen herhangi bir veri ihlali yaşanmamıştır.
                  Platform güvenliğini sürekli olarak iyileştirmek için düzenli güvenlik denetimleri ve 
                  penetrasyon testleri gerçekleştiriyoruz.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>4. Çevresel Etki</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 olarak, yapay zeka modellerinin eğitimi ve çalıştırılması için kullanılan 
              enerji tüketiminin çevresel etkisinin farkındayız. Bu etkiyi azaltmak için aşağıdaki 
              adımları atıyoruz:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-white/80 high-contrast-text">
              <li>Yenilenebilir enerji kullanan veri merkezleri tercih ediyoruz</li>
              <li>Model eğitimlerini enerji verimliliği yüksek donanımlarla gerçekleştiriyoruz</li>
              <li>Sunucu kaynaklarını optimum şekilde kullanmak için verimli mimari tasarımlar uyguluyoruz</li>
              <li>Karbon emisyonlarımızı dengelemek için karbon ofset programlarına katılıyoruz</li>
            </ul>
            
            <div className="mt-4">
              <h3 className="font-semibold text-white">Karbon Ayak İzi Hedeflerimiz:</h3>
              <p className="text-white/80 high-contrast-text mt-2">
                2025 yılına kadar karbon emisyonlarımızı %40 oranında azaltmayı ve 2030 yılına kadar
                karbon-nötr bir şirket olmayı hedefliyoruz.
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="text-white/60 mt-8">
          Bu şeffaflık raporu 6 aylık periyotlarla güncellenmektedir. Son güncelleme: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
        </p>
      </div>
    </div>
  );
};

export default Transparency;
