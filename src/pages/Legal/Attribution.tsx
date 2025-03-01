
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Attribution = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gradient">Atıflar</h1>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Üçüncü Taraf Yazılım ve Kütüphaneler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-white/80 high-contrast-text">
              AIHUB360 platformu, aşağıdaki açık kaynak yazılımlar ve kütüphaneler kullanılarak geliştirilmiştir.
              Bu projelerin geliştiricilerine katkılarından dolayı teşekkür ederiz.
            </p>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Frontend Kütüphaneleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">React</h3>
                <p className="text-white/80 high-contrast-text">
                  Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Meta Platforms, Inc. and affiliates.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/facebook/react
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Tailwind CSS</h3>
                <p className="text-white/80 high-contrast-text">
                  Hızlı ve özelleştirilebilir bir UI geliştirme için kullanılan utility-first CSS framework.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Tailwind Labs Inc.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/tailwindlabs/tailwindcss" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/tailwindlabs/tailwindcss
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">shadcn/ui</h3>
                <p className="text-white/80 high-contrast-text">
                  Yeniden kullanılabilir, erişilebilir UI bileşenleri.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © shadcn.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/shadcn/ui
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">React Router</h3>
                <p className="text-white/80 high-contrast-text">
                  React uygulamaları için navigasyon kütüphanesi.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Remix Software Inc.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/remix-run/react-router" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/remix-run/react-router
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Lucide React</h3>
                <p className="text-white/80 high-contrast-text">
                  Güzel, düzenlenebilir simgeler için bir kütüphane.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Lucide Contributors.
                  <br />
                  ISC Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/lucide-icons/lucide" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/lucide-icons/lucide
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Recharts</h3>
                <p className="text-white/80 high-contrast-text">
                  React için yeniden kullanılabilir grafik bileşenleri kütüphanesi.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Recharts Group.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/recharts/recharts" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/recharts/recharts
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Backend ve AI Kütüphaneleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">TensorFlow</h3>
                <p className="text-white/80 high-contrast-text">
                  Makine öğrenimi uygulamaları geliştirmek için kullanılan açık kaynak kütüphane.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Google Inc.
                  <br />
                  Apache 2.0 Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/tensorflow/tensorflow" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/tensorflow/tensorflow
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">PyTorch</h3>
                <p className="text-white/80 high-contrast-text">
                  Derin öğrenme için kullanılan açık kaynak makine öğrenimi kütüphanesi.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Facebook, Inc. and its affiliates.
                  <br />
                  BSD Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/pytorch/pytorch" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/pytorch/pytorch
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Hugging Face Transformers</h3>
                <p className="text-white/80 high-contrast-text">
                  Doğal dil işleme için gelişmiş transformers modelleri sağlayan kütüphane.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Hugging Face Inc.
                  <br />
                  Apache 2.0 Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/huggingface/transformers" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/huggingface/transformers
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Node.js</h3>
                <p className="text-white/80 high-contrast-text">
                  JavaScript çalıştırmak için kullanılan açık kaynak, çapraz platform, çalışma zamanı ortamı.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Node.js contributors.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/nodejs/node" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/nodejs/node
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Express.js</h3>
                <p className="text-white/80 high-contrast-text">
                  Node.js için hızlı, önyargısız, minimalist web framework.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © TJ Holowaychuk.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/expressjs/express" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/expressjs/express
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Veritabanı ve Depolama</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">PostgreSQL</h3>
                <p className="text-white/80 high-contrast-text">
                  Güçlü, açık kaynak ilişkisel veritabanı sistemi.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © PostgreSQL Global Development Group.
                  <br />
                  PostgreSQL Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/postgres/postgres" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/postgres/postgres
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Redis</h3>
                <p className="text-white/80 high-contrast-text">
                  Açık kaynak, bellek içi veri yapısı deposu.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Redis Ltd.
                  <br />
                  BSD Lisansı altında lisanslanmıştır.
                </p>
                <a href="https://github.com/redis/redis" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/redis/redis
                </a>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">MongoDB</h3>
                <p className="text-white/80 high-contrast-text">
                  Doküman tabanlı, dağıtılmış veritabanı.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © MongoDB, Inc.
                  <br />
                  Server Side Public License (SSPL) altında lisanslanmıştır.
                </p>
                <a href="https://github.com/mongodb/mongo" target="_blank" rel="noopener noreferrer" className="text-aihub-blue hover:underline text-sm">
                  https://github.com/mongodb/mongo
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6 bg-black/30 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>AI Modeller ve Veri Setleri</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">BERT</h3>
                <p className="text-white/80 high-contrast-text">
                  Bidirectional Encoder Representations from Transformers.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Google Research.
                  <br />
                  Apache 2.0 Lisansı altında lisanslanmıştır.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">CLIP</h3>
                <p className="text-white/80 high-contrast-text">
                  Contrastive Language-Image Pre-Training.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © OpenAI.
                  <br />
                  MIT Lisansı altında lisanslanmıştır.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">T5</h3>
                <p className="text-white/80 high-contrast-text">
                  Text-to-Text Transfer Transformer.
                </p>
                <p className="text-white/60 text-sm">
                  Telif Hakkı © Google Research.
                  <br />
                  Apache 2.0 Lisansı altında lisanslanmıştır.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">COCO Dataset</h3>
                <p className="text-white/80 high-contrast-text">
                  Common Objects in Context, nesne tanıma ve segmentasyon için kullanılan bir veri seti.
                </p>
                <p className="text-white/60 text-sm">
                  Creative Commons Attribution 4.0 License altında lisanslanmıştır.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-white/60 mt-8">
          Bu liste, AIHUB360 platformunun geliştirilmesinde kullanılan tüm açık kaynak yazılımları ve kaynakları içermeyebilir.
          Herhangi bir eksiklik veya düzeltme için lütfen bizimle iletişime geçin.
        </p>
        
        <p className="text-white/60 mt-4">
          Son güncelleme: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
        </p>
      </div>
    </div>
  );
};

export default Attribution;
