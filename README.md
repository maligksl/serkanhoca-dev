# CodeCraft Kulübü Web Sitesi

Kampüsteki kodlama kulübü için hazırladığım 3 sayfalık statik web sitesi. Amaç; kulübü tanıtmak, etkinlikleri listelemek ve etkinlikler arasında arama yapılmasını sağlamak.

## Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa: slogan ("Geleceği Kodlayan Topluluk"), vizyon, 3 ana alan kartı (Web Geliştirme, Yapay Zeka, Siber Güvenlik), iletişim/sosyal medya bağlantıları |
| `etkinlikler.html` | 5 etkinlik kartı (başlık, tarih, yer, açıklama) ve arama özelliği |
| `hakkimizda.html` | Kulübün amacı ve yönetim ekibi kartları |

## Özellikler

- Tüm sayfalar tek bir `style.css` dosyasını kullanır.
- Mobil uyumlu: `@media` ile kartlar küçük ekranda tek sütun olur, 320px'te yatay kaydırma çıkmaz.
- Etkinlik araması (`script.js`):
  - Yazdıkça anlık filtreleme (büyük/küçük harf duyarsız)
  - "Gösterilen Etkinlik Sayısı: X" sayacı
  - Sonuç yoksa "Sonuç bulunamadı" uyarısı
  - "Temizle" butonu ile aramayı sıfırlama

## Çalıştırma Adımları

1. Projeyi indir veya klonla.
2. `index.html` dosyasını tarayıcıda aç (çift tıkla).
   - Alternatif: VS Code / Codespaces'te **Live Server** eklentisiyle `index.html`'e sağ tıklayıp "Open with Live Server" seç.
3. Menüden diğer sayfalara geçebilirsin. Arama özelliği `etkinlikler.html` sayfasındadır.

Ek kurulum gerekmez. Google Fonts yazı tipleri ve ana sayfadaki görsel harici kaynaklardan yüklendiği için bu kaynakların görünmesi için internet bağlantısı gerekir.

## Dosya Yapısı

```
OGRNO_AD_SOYAD/
├── index.html
├── etkinlikler.html
├── hakkimizda.html
├── style.css
├── script.js
├── README.md
├── AI_NOTLARI.md
└── TEST_NOTLARI.md
```

## Repository Bağlantısı

TODO: GitHub repository linkini buraya yapıştır (https://github.com/KULLANICI/REPO)

## Kullanılan Araçlar

HTML, CSS, JavaScript, GitHub Codespaces, GitHub Copilot (kullanımı `AI_NOTLARI.md` içinde anlatıldı).
