# AI Notları

Bu projede Codespaces içinde GitHub Copilot Chat kullandım (Copilot erişimim var).

TODO yazan yerleri kendi yaptığına göre doldur.

---

## 1. Kullandığım prompt'lar

### Prompt 1: Plan isteme
**Prompt:** "HTML ve JavaScript öğrenmeye yeni başladım. Kodlama kulübü için 3 sayfalık statik site yapacağım... Henüz dosyaları değiştirme. Kısa bir plan öner: hangi dosyalar gerekli, arama nasıl çalışacak, nasıl test ederim?"
**Amacı:** Kod yazmadan önce neyin nerede yapılacağını anlamak.
**Cevap:** Copilot gerekli dosyaları ve aramanın mantığını anlattı. TODO: 1 cümleyle ne dediğini yaz.

### Prompt 2: HTML ve CSS oluşturma
**Prompt:** "Plana göre index.html, etkinlikler.html, hakkimizda.html ve style.css dosyalarını oluştur... 5 etkinlik kartı, ortak menü, mobilde tek sütun."
**Amacı:** Sitenin iskeletini ve ortak tasarımı hızlıca çıkarmak.
**Cevap:** Copilot 3 sayfayı ve tek style.css dosyasını oluşturdu. TODO: 1 cümle.

### Prompt 3: JavaScript arama
**Prompt:** "etkinlikler.html ve script.js için arama ekle: label, input event ile anlık filtreleme, toLowerCase(), sayaç, sonuç bulunamadı mesajı, Temizle butonu."
**Amacı:** Ödevin asıl özelliği olan etkinlik başlıklarında aramayı eklemek.
**Cevap:** Copilot script.js içinde filtreleme fonksiyonunu yazdı. TODO: 1 cümle.

### Prompt 4: Dokümantasyon
**Prompt:** "README.md yaz, TEST_NOTLARI.md için tablo iskeleti oluştur."
**Amacı:** Teslim edilecek belgelerin taslağını çıkarmak.
**Cevap:** Copilot README'yi yazdı ve boş test tablosunu oluşturdu.

---

## 2. Bir AI önerisinin değerlendirmesi

**Öneri:** TODO (örnek: Copilot'un yazdığı arama kodu / seçtiği renkler / yazdığı kart metinleri)
**Kabul ettim mi, değiştirdim mi?** TODO (örnek: "Kısmen değiştirdim.")
**Ne değiştirdim, neden?** TODO

Örnek (kendi durumuna uyuyorsa kullan, uymuyorsa sil): Copilot'un yazdığı ilk arama kodu aranan metindeki baştaki ve sondaki boşlukları temizlemiyordu. Yönergede boşlukların sonucu etkilememesi istendiği için Copilot'a `trim()` eklemesini söyledim. Yalnızca boşluk yazınca da bütün kartların göründüğünü test ettim.

---

## 3. Kod açıklamaları (kendi cümlelerimle)

> script.js dosyanı aç ve aşağıdaki satırların senin kodundakiyle uyuştuğunu kontrol et. Değişken adları farklıysa düzelt.

### Event listener
```js
searchInput.addEventListener("input", filterEvents);
```
Bu satır, arama kutusunun değeri her değiştiğinde `filterEvents` fonksiyonunu çalıştırıyor. `input` olayı sayesinde kartlar kullanıcı yazarken veya silerken anında filtreleniyor.

### Filtreleme koşulu
```js
const query = searchInput.value.trim().toLowerCase();
...
const title = card.querySelector("h3").textContent.toLowerCase();
const isMatch = title.includes(query);
card.hidden = !isMatch;
```
Arama metninin başındaki ve sonundaki boşluklar `trim()` ile temizlenip metin `toLowerCase()` ile küçük harfe çevriliyor. Her kartın başlığı da küçük harfe çevrilerek `includes()` ile karşılaştırılıyor. Başlık eşleşmezse `card.hidden` true oluyor ve kart gizleniyor. Böylece büyük/küçük harf farkı sonucu etkilemiyor; boş arama metni tüm kartlarla eşleşiyor.

---

## 4. Genel değerlendirme

Copilot işi hızlandırdı ama çıkan kodu her aşamada tarayıcıda deneyerek kontrol ettim. TODO: kendi cümlenle 1-2 cümle ekle.
