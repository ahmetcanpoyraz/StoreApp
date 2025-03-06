
StoreApp
<img width="419" alt="Screenshot 2025-03-06 at 11 14 15" src="https://github.com/user-attachments/assets/9cbe4372-80c7-4c5d-b6de-8e5ac82076bc" />
<img width="424" alt="Screenshot 2025-03-06 at 11 13 43" src="https://github.com/user-attachments/assets/d46667f2-e59b-480c-b63d-d15472c93bbf" />
<img width="433" alt="Screenshot 2025-03-06 at 11 14 07" src="https://github.com/user-attachments/assets/886a1755-f82e-4184-a487-9d4605618739" />
<img width="412" alt="Screenshot 2025-03-06 at 11 14 01" src="https://github.com/user-attachments/assets/b646ef5b-2939-4648-af35-dfb6e42a70a9" />
<img width="427" alt="Screenshot 2025-03-06 at 11 13 35" src="https://github.com/user-attachments/assets/70c08dba-2fbf-4c0c-a1b0-61291dfc5be7" />
<img width="397" alt="Screenshot 2025-03-06 at 11 13 15" src="https://github.com/user-attachments/assets/79aac4c1-955a-432f-b96b-7530a558d8d0" />

StoreApp, React Native ve Expo kullanılarak geliştirilmiş bir e-ticaret uygulaması prototipidir. Clean Architecture prensiplerine uygun olarak tasarlanmış, modern bir mobil uygulama örneğidir. Kullanıcılar ürünleri görüntüleyebilir, favorilere ekleyebilir, alışveriş sepetine ürün ekleyebilir ve sepetten ürünleri silebilir.
Giriş Bilgisi: 
  email : Test@test.com 
  password : 123456

Özellikler
Ürün Listesi: API’den dinamik olarak çekilen ürünleri görüntüleme.

Favoriler: Ürünleri favorilere ekleme ve çıkarma (Redux ile state yönetimi).

Alışveriş Sepeti: Ürünleri sepete ekleme, sepetten çıkarma ve sepet ikonunda badge ile ürün sayısını gösterme.

Detay Sayfası: Ürün detaylarını görüntüleme ve sepete ekleme butonu.

Navigasyon: Bottom Tab Navigator ile kullanıcı dostu bir arayüz.

TypeScript: Tam tip güvenliği ile yazılmış kod tabanı.

Clean Architecture: İş mantığı, veri ve sunum katmanlarının ayrılması.

Teknolojiler
React Native: Mobil uygulama çerçevesi.

Expo: Geliştirme ve dağıtım kolaylığı.

TypeScript: Tip güvenliği ve kod kalitesi.

Redux Toolkit: State yönetimi.

Axios: API istekleri için HTTP istemcisi.

React Navigation: Ekranlar arası geçiş.

react-native-size-matters: Responsive tasarım için ölçeklendirme.

react-native-vector-icons: İkon desteği.

Kurulum
Gereksinimler
Node.js (v16 veya üstü)

npm veya yarn

Expo CLI (npm install -g expo-cli)

Adımlar
Repoyu Klonlayın
bash

git clone https://github.com/ahmetcanpoyraz/StoreApp.git
cd StoreApp

Bağımlılıkları Yükleyin
bash

npm install

veya
bash

yarn install

Projeyi Başlatın
bash

npx expo start

Expo CLI arayüzünden bir emülatör seçebilir veya QR kodu tarayarak fiziksel bir cihazda çalıştırabilirsiniz.

Kullanım
Uygulama başladığında ana ekranda ürün listesini görürsünüz.

Bir ürüne tıklayarak detay sayfasına gidin ve "Add to Shopping Cart" butonuyla sepete ekleyin.

Favori ikonuna tıklayarak ürünleri favorilere ekleyin/çıkarın.

Bottom Tab Navigator’daki "Shopping Cart" sekmesine giderek sepeti görüntüleyin ve ürünleri silin.

Proje Yapısı

StoreApp/
├── src/
│   ├── api/                # API istemcisi ve servisler
│   ├── components/         # Yeniden kullanılabilir UI bileşenleri
│   ├── constants/          # Sabitler (renkler, API endpoint’leri)
│   ├── domain/             # İş mantığı (modeller, use-case’ler)
│   ├── hooks/              # Custom hook’lar
│   ├── navigation/         # Navigasyon yapılandırması
│   ├── redux/              # Redux store ve slice’lar
│   ├── screens/            # Ekran bileşenleri
│   └── styles/             # Global stiller
├── README.md               # Proje dokümantasyonu
└── package.json            # Bağımlılıklar ve script’ler

Mimari
Proje, Clean Architecture prensiplerine dayanır:
Domain: İş mantığı ve modeller (Item.ts, fetchData.ts).

Data: API servisleri ve veri kaynakları (apiService.ts).

Presentation: UI bileşenleri ve ekranlar (ItemCard.tsx, HomeScreen.tsx).

State yönetimi Redux ile sağlanır ve asenkron işlemler async/await ile gerçekleştirilir.
Katkıda Bulunma
Repoyu fork edin.

Yeni bir branch oluşturun:
bash

git checkout -b feature/yeni-ozellik

Değişikliklerinizi yapın ve commit edin:
bash

git commit -m "Yeni özellik eklendi"

Push yapın ve Pull Request açın:
bash

git push origin feature/yeni-ozellik

Geliştirme Önerileri
Unit testler eklenmesi (Jest + React Testing Library).

Redux state’in persistence’ı için redux-persist entegrasyonu.

Daha kapsamlı API metodları (PUT, DELETE).

Ortam değişkenleri ile yapılandırma (.env dosyası).

CI/CD pipeline’ı (GitHub Actions).

Lisans
Bu proje MIT Lisansı (LICENSE) ile lisanslanmıştır.
İletişim
Sorularınız veya önerileriniz için: ahmetcanpoyraz@example.com (mailto:ahmetcanpoyraz@example.com)
GitHub: ahmetcanpoyraz
Açıklamalar
Başlık ve Görsel: Projenin adını ve varsa bir banner görselini ekledim. Görsel için bir placeholder kullandım; kendi projene ait bir ekran görüntüsü koyabilirsin.

Özellikler: Mevcut ve eklediğimiz özellikleri (favoriler, alışveriş sepeti) listeledim.

Kurulum: Adım adım talimatlar, herkesin projeyi kolayca çalıştırabilmesi için.

Proje Yapısı ve Mimari: Clean Architecture’ı vurguladım, bu senin bilinçli bir tasarım yaptığını gösterir.

Katkıda Bulunma: Açık kaynak projelerde standart bir bölüm, işbirliğini teşvik eder.

Geliştirme Önerileri: Daha profesyonel hale getirmek için önceki analizlerimden öneriler ekledim.

Lisans: MIT gibi yaygın bir lisans önerdim; istersen değiştirebilirsin.

Özelleştirme
E-posta: Kendi e-posta adresini ekle.

Ekran Görüntüleri: README’ye birkaç ekran görüntüsü (<img src="..." alt="Home Screen" />) ekleyerek görselliği 

