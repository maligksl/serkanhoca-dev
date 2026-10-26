# Test Notları

Otomatik kontroller Node.js ile sahte DOM üzerinde, bağlantı ve responsive kuralları kaynak kodu üzerinden yapıldı. Test tarihi: 26 Ekim 2026 | Tarayıcı: Gerçek tarayıcı testi yapılmadı (ortamda tarayıcı aracı yok).

| # | Girdi / İşlem | Beklenen Sonuç | Gerçekleşen Sonuç | Geçti/Kaldı |
|---|---------------|----------------|-------------------|-------------|
| 1 | Arama kutusuna başlığın bir bölümünü yazdım: `algoritma` | Yalnızca eşleşen kart ("Kampüs Algoritma Yarışması") görünür; sayaç 1 olur | Node.js testinde yalnızca "Kampüs Algoritma Yarışması" eşleşti; sayaç 1 oldu. | Geçti |
| 2 | Aynı kelimeyi önce `github`, sonra `GITHUB` yazdım | Her iki girişte de aynı kartlar ("Git & GitHub İş Birliği Eğitimi") görünür | Node.js testinde iki yazım da aynı Git & GitHub kartını eşleştirdi. | Geçti |
| 3 | Hiçbir başlıkta olmayan `xyz123` yazdım | Sayaç 0 olur; "sonuç bulunamadı" mesajı görünür | Node.js testinde görünür kart sayısı 0 oldu ve sonuç bulunamadı durumu etkinleşti. | Geçti |
| 4 | a) Yalnızca boşluk yazdım (`   `) b) Bir arama yapıp "Temizle"ye bastım | Her iki işlemde de tüm etkinlikler (5 kart) görünür | Node.js testinde boşluk tüm 5 kartı gösterdi; Temizle aramayı sıfırlayıp kartları geri getirdi. | Geçti |
| 5 | Menüdeki Ana Sayfa, Etkinlikler, Hakkımızda bağlantılarını açtım (her sayfadan denedim) | Tüm bağlantılar doğru sayfalara gider | Kaynak kontrolünde üç sayfanın her birinde üç menü hedefi bulundu. Tarayıcıda sayfa geçişi ayrıca denenmedi. | Kısmen geçti |
| 6 | Tarayıcıyı 390 px genişliğe getirdim (F12 > cihaz modu) ve Tab tuşuyla gezdim | Yatay taşma olmaz; Tab ile arama alanına ve Temizle düğmesine ulaşılır | Tarayıcıda görsel taşma ve Tab sırası kontrolü yapılamadı. Kaynakta mobil tek sütun kuralı ve doğal klavye odaklanabilir kontroller mevcut. | Bekliyor |

## Bulunan sorunlar ve düzeltmeler

Gerçek tarayıcı olmadığı için senaryo 5'in sayfalar arası gezinme ve senaryo 6'nın 390 px görsel/klavye kontrolleri henüz elle doğrulanmadı. Kaynak kontrollerinde bu sayfalara ait menü bağlantıları ve mobil tek sütun kuralı bulundu.
