# INSTRUCTION.md — Website Digital Heritage Sendang Ngampel Wetan

> **STATUS: MASTER PROJECT INSTRUCTION**
>
> Dokumen ini adalah sumber instruksi utama untuk seluruh proses pengembangan website.
> Seluruh requirement di dalam dokumen ini bersifat **WAJIB DITERAPKAN**, bukan sekadar saran.
> Agent boleh mengambil keputusan teknis selama keputusan tersebut tidak bertentangan dengan tujuan,
> identitas visual, struktur konten, prinsip performance, dan batasan yang dijelaskan di bawah.

---

# 1. PROJECT OVERVIEW

## 1.1 Nama Project

**Website Digital Heritage Sendang Ngampel Wetan**

Nama utama yang digunakan pada website:

> **Sendang Ngampel Wetan**

Jangan mengubah nama utama menjadi variasi lain seperti "Sendang Ngampel", "Sendang Sunan Ampel",
atau nama lain sebagai branding utama kecuali pengguna memberikan instruksi baru.

---

## 1.2 Lokasi

Sendang berada di:

- Desa Ngampel Wetan
- Dusun/Krajan: Krajan 1
- RT 01 / RW 01
- Kecamatan Ngampel
- Kabupaten Kendal
- Jawa Tengah, Indonesia

Informasi lokasi ini harus digunakan secara konsisten ketika diperlukan.

---

## 1.3 Fokus Project

Website hanya membahas **satu lokasi**, yaitu:

> Sendang Ngampel Wetan

Jangan membuat arsitektur yang seolah-olah website ini merupakan portal untuk banyak Sendang,
banyak destinasi, atau seluruh potensi desa.

Website bukan:

- portal desa
- dashboard pemerintahan
- CMS desa
- marketplace
- website wisata komersial
- aplikasi administrasi
- aplikasi dengan login
- aplikasi dengan database

Website ini adalah **website digital heritage / dokumentasi sejarah lokal yang ringan dan statis**.

---

# 2. LATAR BELAKANG DAN TUJUAN

## 2.1 Latar Belakang

Sendang Ngampel Wetan merupakan lokasi yang telah ada sebelum perkembangan Desa Ngampel Wetan
seperti yang dikenal sekarang dan memiliki cerita/legenda tersendiri yang diwariskan dalam
masyarakat.

Terdapat arsip fisik mengenai legenda Sendang. Arsip tersebut memiliki nilai penting dan
dijaga dengan baik karena merupakan arsip berharga serta tidak tersedia secara bebas dalam
bentuk salinan publik.

Di sisi lain, Sendang juga mengalami kegiatan revitalisasi agar kondisinya lebih bersih,
tertata, dan nyaman digunakan oleh masyarakat, termasuk dalam konteks kegiatan tradisi seperti
Nyadran.

Papan informasi fisik/Materai MMT akan dipasang di area Sendang. Karena ukuran dan biaya MMT
perlu diperhatikan, papan fisik tidak akan memuat keseluruhan legenda.

Sebagai solusi, papan informasi akan memiliki **QR Code** yang mengarah ke website.

Dengan demikian:

```text
ARSIP FISIK ASLI
      ↓
Sumber sejarah/legenda
      ↓
WEBSITE DIGITAL
      ↓
Akses publik terhadap informasi yang telah disetujui
      ↓
QR CODE
      ↓
PAPAN INFORMASI DI SENDANG
```

---

## 2.2 Tujuan Utama

Website bertujuan untuk:

1. Mendokumentasikan sejarah dan legenda Sendang Ngampel Wetan secara digital.
2. Memudahkan masyarakat membaca legenda tanpa harus mengakses arsip fisik asli.
3. Memberikan akses kepada pengunjung dari luar desa yang ingin mengetahui sejarah Sendang.
4. Menjadi media pendamping papan informasi fisik.
5. Mendokumentasikan kondisi dan revitalisasi Sendang pada tahun 2026.
6. Membantu menjaga pengetahuan sejarah lokal agar lebih mudah diwariskan kepada generasi
   berikutnya.
7. Tetap menjaga kehormatan dan konteks arsip asli dengan hanya mempublikasikan informasi
   yang memang telah disetujui untuk publik.

---

# 3. PRINSIP PALING PENTING

Prioritaskan hal-hal berikut secara berurutan:

1. **Keakuratan informasi**
2. **Readability / kenyamanan membaca**
3. **Kualitas visual**
4. **Immersive storytelling**
5. **Smooth interaction**
6. **Performance**
7. **Kesederhanaan arsitektur**
8. **Maintainability**

Website harus terasa hidup dan polished, tetapi tidak boleh terasa berat.

Jangan mengorbankan performance hanya demi menambah efek visual.

---

# 4. ATURAN INFORMASI DAN FAKTA

## 4.1 DILARANG MENGARANG

Agent **DILARANG mengarang**:

- legenda
- sejarah
- nama tokoh
- tanggal
- tahun
- kejadian
- kutipan masyarakat
- silsilah
- fakta budaya
- tradisi
- lokasi spesifik
- asal-usul nama
- informasi sejarah yang belum diberikan
- isi arsip yang belum tersedia

Jika informasi belum diberikan, gunakan placeholder yang jelas dan profesional.

Contoh:

```text
[ISI LEGENDA AKAN DIISI BERDASARKAN ARSIP DAN WAWANCARA]
```

Bukan membuat cerita palsu untuk mengisi kekosongan.

---

## 4.2 SUMBER UTAMA

Ketika data sudah tersedia, sumber informasi diprioritaskan sebagai berikut:

1. Arsip fisik legenda Sendang.
2. Keterangan perangkat Desa Ngampel Wetan.
3. Wawancara/dokumentasi masyarakat yang telah dilakukan.
4. Dokumentasi revitalisasi.
5. Sumber publik di internet hanya sebagai referensi pendukung dan bukan dasar untuk
   mengarang isi legenda.

Jika terjadi perbedaan antara sumber internet dan arsip/keterangan resmi lokal, jangan
mengambil keputusan sendiri. Prioritaskan sumber lokal yang telah dikonfirmasi pengguna.

---

## 4.3 INFORMASI YANG TIDAK UNTUK PUBLIK

Website hanya boleh menampilkan informasi yang memang disetujui untuk dipublikasikan.

Tidak perlu membuat section khusus mengenai "informasi rahasia", "informasi terlarang",
atau daftar isi arsip yang tidak boleh dipublikasikan.

Jika ada informasi yang tidak boleh dipublikasikan, cukup jangan masukkan informasi tersebut
ke website.

---

# 5. CONTENT STATUS SAAT INI

Beberapa konten belum tersedia pada saat development awal:

- teks legenda asli
- hasil wawancara dengan perangkat desa
- beberapa foto Sendang berkualitas tinggi
- beberapa detail sejarah
- data final revitalisasi
- kemungkinan foto arsip lama

Website harus dirancang agar semua konten tersebut **mudah diganti/ditambahkan kemudian**.

Jangan membuat struktur yang mengharuskan developer membongkar seluruh component ketika konten
asli sudah tersedia.

---

# 6. TARGET USER

Target utama:

1. Masyarakat Desa Ngampel Wetan.
2. Masyarakat sekitar.
3. Pengunjung Sendang.
4. Wisatawan/pengunjung dari luar desa.
5. Generasi muda yang ingin mengetahui sejarah lokal.
6. Orang yang menemukan QR Code pada papan informasi.

Karena pengunjung kemungkinan besar mengakses website dari smartphone melalui QR Code,
mobile harus sangat diperhatikan.

Namun desktop juga harus memiliki kualitas visual yang sama baiknya karena website akan
diaudit dan digunakan melalui laptop/desktop.

---

# 7. VISUAL DIRECTION

## 7.1 Karakter Visual

Gunakan kombinasi:

- Natural
- Heritage
- Manuscript
- Modern editorial
- Calm
- Warm
- Immersive

Website harus terasa seperti membuka cerita sejarah lokal yang dirawat dengan baik,
bukan seperti website SaaS atau landing page startup.

---

## 7.2 COLOR DIRECTION

Gunakan palet earthy.

Warna dominan harus berasal dari keluarga:

- dark brown
- medium brown
- light brown
- beige
- cream
- warm off-white
- muted earth tones

Contoh arah warna:

```text
Dark Brown
#2A1B14

Deep Brown
#3B261B

Warm Brown
#5A3A28

Light Brown
#8A674F

Cream
#E8DCC7

Warm Cream
#F3EBDD

Paper
#F8F2E7
```

Nilai di atas hanya contoh arah visual. Agent boleh menyesuaikan nilai final selama tetap
berada dalam karakter earthy brown/cream.

### Hindari:

- hijau sebagai warna dominan
- neon
- cyan terang
- purple gradient
- blue corporate
- gradient berlebihan
- glassmorphism berlebihan
- warna yang terasa seperti dashboard SaaS

Hijau boleh digunakan sebagai aksen yang sangat terbatas jika memang membantu memberikan
kesan natural.

---

# 8. TYPOGRAPHY

Gunakan kombinasi:

> **Serif + Sans-serif**

## Heading

Gunakan serif dengan karakter heritage/editorial/manuscript.

## Body

Gunakan sans-serif atau serif yang sangat nyaman dibaca untuk teks panjang.

Prioritas:

1. readability
2. dukungan karakter Bahasa Indonesia
3. hierarchy yang jelas
4. ukuran teks nyaman di smartphone
5. line-height lega

Jangan menggunakan font dekoratif berlebihan untuk body text.

Legenda kemungkinan akan panjang, sehingga typography harus diperlakukan sebagai bagian
utama dari experience.

---

# 9. ORNAMEN DAN MANUSCRIPT STYLE

Boleh menggunakan ornamen yang terinspirasi dari:

- naskah
- ukiran
- motif tradisional
- elemen alam
- daun
- air
- garis dekoratif
- simbol sederhana yang relevan

Namun:

> **ORNAMEN HARUS SUBTLE.**

Jangan membuat website menjadi terlalu dekoratif.

Jangan menggunakan ornamen di setiap section.

Tujuan ornamen adalah memperkuat atmosphere, bukan mengambil perhatian dari teks.

---

# 10. BRANDING / LOGO

Website harus menyediakan area untuk **3 logo**.

Contoh penggunaan:

```text
[LOGO 1]    [LOGO 2]    [LOGO 3]
```

Logo harus ditempatkan dengan rapi dan tidak mendominasi hero.

Asset logo harus mudah diganti tanpa perlu mengubah layout secara signifikan.

Jika logo final belum tersedia:

- gunakan placeholder visual yang jelas
- jangan mengarang logo organisasi
- jangan menggunakan logo random dari internet

Buat struktur asset yang mudah diganti.

---

# 11. WEBSITE STRUCTURE

Website harus sederhana.

Tidak perlu membuat banyak page.

Struktur utama:

```text
/
├── Hero
├── Tentang Sendang
├── Sejarah Singkat
├── Preview Legenda
├── Revitalisasi 2026
├── Galeri
├── Lokasi
└── Footer

/legenda
├── Hero/Heading
├── Context singkat
├── Legenda panjang
├── Catatan sejarah bila tersedia
└── Navigasi kembali
```

Jangan menambahkan page lain kecuali memang dibutuhkan dan diperintahkan pengguna.

---

# 12. HOMEPAGE

Homepage harus bersifat:

> **immersive storytelling landing page**

Homepage bukan dashboard dan bukan kumpulan card.

---

## 12.1 HERO

Hero adalah bagian paling penting secara visual.

Hero harus menampilkan:

- nama **Sendang Ngampel Wetan**
- visual Sendang/lingkungannya
- nuansa heritage
- storytelling
- CTA/navigasi yang tidak terlalu agresif
- 3 logo jika memang secara visual lebih cocok ditempatkan di area header/hero
- visual parallax jika implementasi sesuai

Jangan menggunakan teks "Parallax" sebagai konten final.

---

## 12.2 PARALLAX HERO

Gunakan component parallax dari referensi 21st.dev/Osmo yang diberikan pengguna sebagai
referensi teknis.

Component tersebut menggunakan:

- GSAP
- ScrollTrigger
- Lenis
- multiple visual layers

Tujuannya adalah menghasilkan depth dan storytelling saat user melakukan scroll.

### PENTING

Jangan sekadar copy-paste demo dan mempertahankan:

- judul "Parallax"
- credit demo Osmo sebagai elemen visual utama
- imagery demo sebagai konten final
- styling demo yang tidak sesuai identitas Sendang

Logic parallax boleh dipertahankan/adaptasi.

Visual harus diubah menjadi visual yang relevan dengan Sendang.

---

# 13. IMPLEMENTASI PARALLAX DALAM ASTRO

Framework utama project adalah Astro.

React boleh digunakan hanya jika memang diperlukan oleh component interaktif seperti
parallax.

Preferred architecture:

```text
Astro
│
├── static/content sections
│
└── React island jika dibutuhkan
      │
      └── Parallax component
            │
            ├── GSAP
            ├── ScrollTrigger
            └── Lenis
```

Jangan mengubah seluruh website menjadi React hanya karena satu component menggunakan React.

Jika memungkinkan dan lebih sederhana, logic interaktif boleh dikonversi menjadi Astro
client-side script/vanilla JavaScript.

Namun jangan memaksakan conversion jika itu justru membuat implementasi lebih kompleks.

Prinsip:

> **Gunakan teknologi paling sederhana yang memenuhi requirement.**

---

# 14. HERO IMAGE STRATEGY

Saat asset asli belum tersedia, development boleh menggunakan:

1. Foto publik yang sumber/penggunaannya legal.
2. Generated visual.
3. Kombinasi keduanya.

Namun asset tersebut bersifat sementara.

Ketika foto asli Sendang sudah tersedia, asset harus dapat diganti dengan mudah.

---

# 15. ASSET STRUCTURE

Gunakan struktur asset yang terorganisasi, misalnya:

```text
public/
└── images/
    └── sendang/
        ├── hero-bg.webp
        ├── hero-middle.webp
        ├── hero-foreground.webp
        ├── sendang-before.webp
        ├── sendang-after.webp
        ├── gallery-01.webp
        ├── gallery-02.webp
        ├── gallery-03.webp
        └── archive-01.webp
```

Nama file dapat disesuaikan.

Yang penting:

- mudah ditemukan
- mudah diganti
- tidak tersebar tanpa alasan
- tidak bergantung pada URL gambar eksternal untuk production

---

# 16. EXTERNAL IMAGES

External image URL hanya boleh digunakan sementara untuk development jika diperlukan.

Production sebaiknya menggunakan local/static assets yang telah diperoleh secara sah.

Jangan membuat website production bergantung pada:

```text
https://random-site.com/image.jpg
```

karena asset eksternal dapat berubah/hilang.

---

# 17. TENTANG SENDANG

Section ini memberikan pengenalan singkat.

Isi dapat mencakup:

- nama Sendang
- lokasi
- konteks keberadaan Sendang
- nilai sejarah/budaya
- hubungan Sendang dengan masyarakat

Jangan membuat klaim sejarah yang belum dikonfirmasi.

Section harus singkat dan tidak mengalahkan halaman legenda.

---

# 18. SEJARAH

Section sejarah pada homepage merupakan versi ringkas.

Tujuannya:

> memberikan konteks sebelum user membaca legenda lengkap.

Jika data belum tersedia:

gunakan placeholder profesional yang menunjukkan bahwa konten akan diisi berdasarkan
arsip/wawancara.

Jangan membuat sejarah fiktif.

---

# 19. PREVIEW LEGENDA

Homepage harus memiliki section yang mengarahkan user menuju legenda lengkap.

Contoh konsep:

```text
Kisah di Balik Sendang

[cuplikan pendek yang telah dikonfirmasi]

Baca kisah lengkap →
```

CTA tidak perlu berbentuk tombol SaaS yang besar.

Karena website ingin terasa immersive, CTA boleh dibuat editorial/subtle.

---

# 20. HALAMAN /LEGENDA

Ini adalah **halaman terpenting dalam website**.

Tujuan utamanya adalah:

> memberikan pengalaman membaca legenda yang panjang, nyaman, dan immersive.

Jangan membuat halaman ini menjadi kumpulan card.

---

## 20.1 LONG-FORM CONTENT

Halaman harus mampu menampilkan:

- banyak paragraf
- subjudul
- kutipan
- catatan
- gambar jika diperlukan
- pemisah bab/section
- metadata jika tersedia

Legenda dapat berjumlah banyak paragraf.

Jangan:

- meringkas secara otomatis
- memotong isi
- mengubah cerita menjadi bullet list
- mengisi kekosongan dengan AI-generated folklore
- membuat placeholder satu paragraf sebagai pengganti struktur final

---

# 21. EDITING LEGENDA

Ketika arsip asli sudah tersedia:

Gunakan pendekatan:

> **light editorial editing**

Artinya:

- memperbaiki typo
- memperbaiki ejaan yang jelas
- membagi paragraf panjang
- membuat subheading bila sesuai
- memperbaiki readability

Namun:

> **Jangan mengubah substansi cerita.**

Jangan menambahkan fakta baru.

Jangan mengubah tokoh, kejadian, urutan cerita, atau makna legenda hanya demi estetika.

---

# 22. GAYA HALAMAN LEGENDA

Gunakan kombinasi:

> **Digital Manuscript + Modern Editorial**

Contoh karakter:

```text
                LEGENDA
        SENDANG NGAMPEL WETAN

              ─── ❦ ───

Pada suatu masa...

Lorem ipsum tidak boleh digunakan
sebagai konten final.

Paragraf panjang tetap diberikan
ruang untuk bernapas.

                ❦
```

Halaman harus terasa seperti membaca arsip yang dipresentasikan secara modern.

Namun jangan membuatnya seperti simulasi buku digital yang terlalu berat.

---

# 23. REVITALISASI

Homepage memiliki section:

> **Revitalisasi Sendang — 2026**

Section ini mendokumentasikan kegiatan revitalisasi.

Bisa mencakup:

- kondisi sebelum revitalisasi
- proses pembersihan
- pemasangan/perbaikan fasilitas
- kondisi setelah revitalisasi
- dokumentasi kegiatan
- hubungan dengan kenyamanan masyarakat ketika kegiatan seperti Nyadran berlangsung

Tujuannya bukan membuat laporan KKN.

Tujuannya adalah:

> mendokumentasikan salah satu bagian dari perjalanan Sendang.

Beberapa tahun kemudian section ini tetap harus masuk akal.

---

# 24. KKN CREDIT

Kontribusi KKN boleh disebutkan secara subtle.

Contoh:

> Revitalisasi dan dokumentasi Sendang, 2026  
> Posko KKN [nama]

Identitas KKN tidak boleh mengambil alih branding website.

Website harus tetap terasa sebagai:

> **website untuk Sendang Ngampel Wetan**

bukan:

> **website portfolio KKN**

---

# 25. GALERI

Gallery dapat menampilkan:

- Sendang
- lingkungan sekitar
- sebelum revitalisasi
- proses revitalisasi
- sesudah revitalisasi
- foto arsip jika tersedia dan disetujui
- aktivitas masyarakat jika relevan

Gallery harus sederhana.

Jangan membuat gallery terlalu berat.

Gunakan:

- responsive image sizing
- lazy loading untuk image non-hero
- optimized image format jika memungkinkan
- aspect ratio yang konsisten bila sesuai

---

# 26. FOTO ARSIP

Jika foto lama tersedia dan diizinkan untuk dipublikasikan, foto dapat digunakan sebagai
bagian dokumentasi sejarah.

Jangan mengklaim foto sebagai foto sejarah tertentu jika sumber/tahun tidak diketahui.

Jika metadata tidak tersedia, jangan mengarang tahun.

---

# 27. LOKASI

Homepage harus memiliki section lokasi.

Pengguna secara eksplisit menginginkan:

> **Google Maps terlihat langsung di website.**

Jadi gunakan Google Maps embed/iframe atau implementasi embed yang sesuai.

Jangan hanya memberikan tombol keluar ke Google Maps sebagai satu-satunya representasi lokasi.

Namun website tetap harus ringan.

Jika iframe Google Maps terlalu berat, gunakan strategi lazy-loading atau load-on-interaction
yang tetap mempertahankan pengalaman bahwa map tersedia di website.

Jangan menambahkan Google Maps API key jika embed standar sudah mencukupi.

---

# 28. QR CODE

QR Code akan dicetak di papan MMT.

Tujuan QR:

```text
QR CODE
   ↓
HOMEPAGE
```

QR tidak diarahkan langsung ke `/legenda`.

Homepage harus menjadi entry point yang memberikan konteks sebelum user membaca legenda.

URL harus mudah dipertahankan dalam jangka panjang.

---

# 29. NAVIGATION

Navigation harus sederhana.

Tidak perlu menu dengan banyak item.

Minimal dapat mencakup:

- Beranda
- Tentang/Sejarah
- Legenda
- Revitalisasi
- Galeri
- Lokasi

Agent boleh membuat navigation yang lebih minimal selama akses ke bagian penting tetap jelas.

---

# 30. SMOOTH INTERACTION

Website harus terasa smooth.

Contoh:

- smooth scrolling
- smooth anchor navigation
- smooth scroll-to-top
- transisi antar state
- button hover/focus transition
- image reveal yang halus
- parallax yang halus
- page transition bila memang relevan
- back/navigation experience yang tidak terasa patah

Namun:

> **Smooth ≠ banyak animasi.**

Jangan membuat setiap element bergerak.

---

# 31. ANIMATION DIRECTION

Target animation:

> "User merasa website hidup."

Bukan:

> "User merasa website penuh animasi."

Animation harus berada di tingkat:

- subtle
- elegant
- cinematic ringan
- heritage
- immersive

Hindari:

- bouncing berlebihan
- spinning
- parallax berlebihan
- text flying everywhere
- scroll hijacking
- modal animation yang tidak perlu
- infinite animation pada banyak element
- animasi yang menghalangi pembacaan

---

# 32. PERFORMANCE RULE

Ini adalah requirement **WAJIB**.

Website harus smooth **dan** ringan.

Jangan mengejar smoothness dengan mengorbankan performance.

---

## 32.1 PRIORITAS PERFORMANCE

Perhatikan:

1. ukuran JavaScript
2. jumlah dependency
3. ukuran image
4. image format
5. lazy loading
6. client-side JavaScript
7. jumlah event listener
8. animation loop
9. rendering frequency
10. mobile performance

---

## 32.2 JAVASCRIPT

Karena Astro digunakan:

> Manfaatkan static rendering sebanyak mungkin.

Jangan membuat seluruh halaman menjadi client-side application.

Interactive JavaScript hanya digunakan ketika memang diperlukan.

---

## 32.3 REACT

React hanya digunakan jika dibutuhkan oleh component interactive.

Jangan membuat:

```text
Entire website = React client application
```

hanya karena parallax menggunakan React.

Gunakan Astro untuk konten statis.

---

## 32.4 GSAP

GSAP digunakan terutama untuk parallax/animation yang memang membutuhkan kontrol lebih.

Jangan menggunakan GSAP untuk:

- hover sederhana
- fade sederhana
- button transition sederhana
- layout animation yang bisa dilakukan CSS

Jika CSS cukup:

> gunakan CSS.

---

## 32.5 LENIS

Lenis hanya digunakan jika benar-benar memberikan pengalaman scroll yang lebih baik.

Pastikan integrasinya:

- tidak membuat scroll lag
- tidak membuat CPU usage tinggi
- tidak mengganggu accessibility
- tidak menyebabkan memory leak
- dibersihkan saat component unmount

Jika versi package lama/deprecated, gunakan package Lenis yang maintained dan adaptasikan API
sesuai versi yang digunakan.

---

# 33. REDUCED MOTION

Jika memungkinkan, hormati:

```text
prefers-reduced-motion
```

User yang memilih reduced motion tidak boleh dipaksa menerima animation/parallax yang
berlebihan.

---

# 34. RESPONSIVE DESIGN

Desktop dan mobile sama-sama harus menjadi first-class experience.

Jangan:

> membuat mobile lalu sekadar memperbesar ke desktop.

Jangan juga:

> membuat desktop lalu mengecilkan semuanya untuk mobile.

Keduanya harus dirancang dengan baik.

---

## 34.1 MOBILE

Perhatikan:

- readable typography
- comfortable spacing
- tap target
- image sizing
- scroll performance
- parallax behavior
- menu
- long-form reading
- Google Maps
- logo layout

QR visitor kemungkinan besar menggunakan smartphone.

---

## 34.2 DESKTOP

Desktop harus:

- visually balanced
- memiliki max-width yang nyaman
- tidak membuat teks terlalu lebar
- menggunakan whitespace dengan baik
- memanfaatkan visual hero secara optimal
- tidak terlihat seperti mobile yang diperbesar

---

# 35. ACCESSIBILITY

Requirement wajib:

- semantic HTML
- alt text untuk gambar
- heading hierarchy benar
- contrast yang cukup
- keyboard navigation
- visible focus state
- button/link yang jelas
- form tidak relevan karena website statis
- reduced motion jika memungkinkan

Jangan mengorbankan accessibility demi efek visual.

---

# 36. SEO

SEO bukan fokus utama project.

Jangan menghabiskan waktu untuk membangun sistem SEO kompleks.

Namun implementasi dasar seperti berikut tetap boleh dilakukan jika tersedia secara natural
dalam setup Astro:

- title
- description
- semantic headings
- favicon
- canonical bila sederhana
- sitemap/robots jika setup mudah

Jangan membuat SEO menjadi scope besar.

---

# 37. SHADCN/UI

Jika menggunakan shadcn/ui:

- gunakan hanya component yang memang dibutuhkan
- jangan memasukkan seluruh library/component
- jangan membuat UI terasa seperti template shadcn default
- sesuaikan styling dengan visual heritage

Project tidak wajib menggunakan shadcn untuk setiap element.

---

# 38. ICONS

Jika membutuhkan icon:

> Gunakan `lucide-react` jika sesuai.

Jangan mengandalkan SVG random dari internet untuk icon sederhana.

Untuk ornament visual heritage, SVG custom boleh digunakan jika memang diperlukan.

---

# 39. DEPENDENCY RULE

Jangan menambahkan dependency hanya karena dependency tersebut populer.

Setiap dependency harus memiliki alasan.

Target:

> **minimal dependency, maximum clarity**

Dependency utama yang mungkin diperlukan:

- Astro
- TypeScript
- Tailwind
- GSAP
- Lenis
- React/React DOM jika diperlukan untuk parallax island
- Lucide React jika icon diperlukan

Gunakan versi package yang kompatibel dan maintained.

---

# 40. PROJECT ARCHITECTURE

Preferred structure:

```text
project-root/
├── public/
│   ├── images/
│   │   └── sendang/
│   ├── logos/
│   └── favicon.*
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── parallax-scrolling.tsx
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── AboutSendang.astro
│   │   │   ├── History.astro
│   │   │   ├── LegendPreview.astro
│   │   │   ├── Revitalization.astro
│   │   │   ├── Gallery.astro
│   │   │   └── Location.astro
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   └── legenda.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.*
├── package.json
├── tsconfig.json
└── INSTRUCTION.md
```

Struktur boleh disesuaikan dengan standar Astro yang digunakan.

Jangan membuat struktur folder kompleks hanya demi terlihat profesional.

---

# 41. COMPONENT REUSE

Gunakan componentization yang masuk akal.

Pisahkan section jika:

- cukup besar
- punya tanggung jawab jelas
- digunakan kembali
- lebih mudah dirawat

Jangan membuat component untuk setiap `<div>`.

Hindari overengineering.

---

# 42. CONTENT MANAGEMENT

Website ini **STATIC**.

Tidak boleh membuat:

- database
- CMS
- authentication
- admin panel
- CRUD
- API backend
- dashboard
- user account
- login

Konten disimpan sebagai:

- Astro content/data
- Markdown/MDX bila memang membantu long-form content
- static object/data file
- component content

Pilih cara yang paling sederhana.

Untuk legenda panjang, Markdown/MDX sangat dipertimbangkan karena memudahkan editing
teks tanpa mengotori component.

Namun jangan membuat content architecture yang terlalu kompleks.

---

# 43. LEGEND CONTENT FILE

Jika legenda akan sering diperbarui atau cukup panjang, preferred approach:

```text
src/
└── content/
    └── legenda/
        └── sendang-ngampel-wetan.md
```

atau struktur Astro Content Collections yang sederhana.

Tujuannya:

> teks legenda terpisah dari UI.

Dengan begitu ketika arsip asli sudah tersedia, developer dapat mengganti isi legenda tanpa
membongkar layout.

---

# 44. PLACEHOLDER RULE

Placeholder diperbolehkan selama data asli belum tersedia.

Contoh:

```text
[TEKS LEGENDA AKAN DIISI DARI ARSIP ASLI]
```

```text
[FOTO SENDANG FINAL AKAN DIGANTI]
```

```text
[LOGO 1]
[LOGO 2]
[LOGO 3]
```

Namun placeholder harus:

- jelas
- tidak terlihat seperti konten final
- mudah dicari
- mudah diganti

Jangan menggunakan lorem ipsum sebagai konten final.

---

# 45. SOURCE CODE QUALITY

Code harus:

- readable
- typed jika menggunakan TypeScript
- tidak memiliki dead code
- tidak memiliki import tidak terpakai
- tidak memiliki console.log yang tidak diperlukan
- tidak memiliki hardcoded data yang seharusnya menjadi content
- tidak memiliki duplicate code yang jelas
- menggunakan semantic naming

---

# 46. SECURITY / PRIVACY

Tidak ada data sensitif yang perlu dikumpulkan.

Jangan membuat:

- form identitas
- tracking invasive
- login
- analytics kompleks
- database user

Website hanya memberikan informasi publik.

---

# 47. DEVELOPMENT WORKFLOW

Agent harus mengikuti alur:

## STEP 1 — Inspect

Periksa:

- project structure
- package manager
- Astro version
- TypeScript
- Tailwind
- existing dependencies
- existing components
- existing global styles

Jangan langsung overwrite project.

---

## STEP 2 — Determine Existing Setup

Jika project sudah memiliki Astro:

> adaptasikan.

Jika belum memiliki Astro:

> setup Astro sesuai kebutuhan.

Jangan membuat ulang project jika tidak diperlukan.

---

## STEP 3 — Install Dependencies

Install hanya dependency yang diperlukan.

Jika menggunakan Parallax component:

- GSAP
- ScrollTrigger dari GSAP
- Lenis maintained package
- React/React DOM jika React island digunakan

Sesuaikan dengan versi package saat ini.

---

## STEP 4 — Build Foundation

Buat:

- layout
- global typography
- color system
- page structure
- asset structure
- responsive base

Sebelum menambahkan animasi berat.

---

## STEP 5 — Build Hero

Implementasikan visual hero terlebih dahulu.

Hero harus memenuhi:

- Sendang branding
- earthy palette
- manuscript/heritage atmosphere
- parallax
- responsive
- smooth
- performant

---

## STEP 6 — Build Content Sections

Implementasikan:

1. Tentang Sendang
2. Sejarah
3. Preview Legenda
4. Revitalisasi
5. Galeri
6. Lokasi

---

## STEP 7 — Build Legend Page

Pastikan long-form content benar-benar nyaman dibaca.

---

## STEP 8 — Responsive Audit

Audit minimal:

- desktop
- tablet
- mobile

Perhatikan:

- overflow
- typography
- images
- spacing
- navigation
- parallax
- map
- footer
- logo

---

## STEP 9 — Performance Audit

Periksa:

- image sizes
- lazy loading
- JS bundle
- unnecessary dependencies
- animation loops
- excessive client-side code
- mobile smoothness

---

## STEP 10 — Build Verification

Wajib menjalankan build command yang sesuai project.

Contoh:

```bash
npm run build
```

atau command package manager yang setara.

Jika build gagal:

> perbaiki error sampai build berhasil.

Jangan berhenti hanya karena development server dapat berjalan.

Linting boleh dijalankan jika sudah tersedia, tetapi tidak perlu menambahkan konfigurasi
linting kompleks hanya untuk memenuhi formalitas.

---

# 48. VISUAL QA

Jangan hanya memeriksa apakah website "berfungsi".

Agent harus mengevaluasi:

- apakah hero terlihat premium?
- apakah typography nyaman?
- apakah warna terasa earthy?
- apakah website terasa heritage?
- apakah halaman terasa terlalu kosong?
- apakah halaman terasa terlalu ramai?
- apakah animation terasa natural?
- apakah text terlalu lebar?
- apakah spacing konsisten?
- apakah mobile tetap bagus?
- apakah desktop tetap bagus?
- apakah image crop terlihat benar?
- apakah logo terlihat proporsional?
- apakah CTA terasa immersive?
- apakah website terasa seperti website Sendang, bukan template AI?

---

# 49. ANTI-AI-SLOP RULE

Website harus menghindari ciri khas hasil AI-generated frontend yang generik.

Jangan menggunakan kombinasi template seperti:

- hero gradient generik
- glassmorphism card
- floating blobs
- excessive rounded cards
- excessive shadow
- random decorative circles
- terlalu banyak badge
- terlalu banyak CTA
- terlalu banyak section card
- typography terlalu besar tanpa alasan
- animasi random
- icon random
- layout SaaS

Visual harus memiliki:

> **intentional composition**

Bukan sekadar banyak komponen.

---

# 50. IMMERSIVE EXPERIENCE

Website harus terasa seperti:

> "Saya sedang memasuki cerita sebuah tempat."

Bukan:

> "Saya sedang melihat website dokumentasi biasa."

Tetapi immersive tidak berarti berat.

Gunakan:

- typography
- whitespace
- imagery
- parallax
- subtle transitions
- manuscript details
- color
- storytelling sequence

untuk menciptakan atmosphere.

---

# 51. NAVIGATION SMOOTHNESS

Jika user:

- klik navigasi
- klik "Baca Kisah Lengkap"
- klik kembali ke atas
- klik anchor
- berpindah section

transisi harus terasa natural.

Hindari:

- jump yang kasar
- scroll yang patah
- animation blocking
- scroll lock yang tidak diperlukan

---

# 52. BACK TO TOP

Jika halaman cukup panjang, boleh menyediakan tombol back-to-top.

Behavior:

- muncul secara subtle setelah user scroll
- klik → smooth scroll ke top
- tidak mengganggu teks
- tidak terlalu besar
- menggunakan icon yang jelas

---

# 53. ERROR / MISSING ASSET HANDLING

Jika asset belum tersedia:

- jangan membuat broken image
- gunakan placeholder yang elegan
- gunakan fallback yang jelas
- pastikan layout tidak rusak

Ketika asset diganti, layout harus tetap stabil.

---

# 54. IMAGE OPTIMIZATION

Gunakan image optimization yang sesuai dengan Astro.

Prefer:

- WebP
- AVIF jika sesuai
- ukuran yang sesuai kebutuhan
- responsive image
- lazy loading untuk non-critical image
- eager loading hanya untuk hero/critical visual

Jangan mengirim foto kamera resolusi penuh langsung ke browser jika tidak diperlukan.

---

# 55. HERO PERFORMANCE

Hero adalah area visual paling berat.

Karena itu:

- jangan memuat terlalu banyak gambar besar
- gunakan optimized image
- prioritaskan critical asset
- hindari video background kecuali benar-benar diperlukan
- jangan membuat 10 layer parallax

Parallax harus tetap terasa walaupun jumlah layer dibatasi.

---

# 56. ACCESSIBILITY OF ANIMATION

Pastikan animation tidak menghambat:

- reading
- navigation
- keyboard usage
- mobile interaction

Jika device low-end atau user menggunakan reduced-motion, visual tetap harus usable.

---

# 57. GOOGLE MAP PERFORMANCE

Map embed boleh digunakan.

Namun jangan membuat map iframe menjadi elemen paling berat saat initial load jika dapat
dihindari.

Gunakan lazy loading jika sesuai.

---

# 58. FINAL URL / DEPLOYMENT

Deployment target:

> **Vercel**

Tidak perlu domain custom untuk MVP.

Subdomain Vercel dapat digunakan.

QR Code nantinya diarahkan ke homepage production.

Contoh:

```text
https://nama-project.vercel.app/
```

URL final akan ditentukan setelah deployment.

Jangan hardcode URL sementara di banyak tempat.

---

# 59. LOGO PLACEHOLDER

Siapkan tiga slot logo yang mudah diganti:

```text
logo-01.*
logo-02.*
logo-03.*
```

Jangan mengunci ukuran berdasarkan logo sementara.

Gunakan container yang menjaga:

- aspect ratio
- visual balance
- responsive behavior

---

# 60. FOOTER

Footer harus sederhana.

Boleh berisi:

- Sendang Ngampel Wetan
- lokasi singkat
- copyright/documentation
- credit revitalisasi 2026
- credit KKN secara subtle
- 3 logo jika layout lebih sesuai di footer

Jangan membuat footer penuh link.

---

# 61. LANGUAGE

Seluruh UI dan konten website menggunakan:

> **Bahasa Indonesia**

Jangan mencampurkan Bahasa Inggris untuk UI final kecuali istilah teknis yang memang tidak
perlu diterjemahkan.

---

# 62. CONTENT WRITING STYLE

Bahasa:

- formal tetapi hangat
- mudah dipahami masyarakat umum
- tidak terlalu akademis
- tidak terlalu promosi
- tidak clickbait
- tidak berlebihan
- tetap menghormati konteks budaya lokal

Website bukan artikel berita dan bukan iklan wisata.

---

# 63. HISTORICAL TONE

Ketika menampilkan legenda:

Gunakan framing yang jelas apabila informasi berasal dari tradisi/cerita masyarakat.

Jangan otomatis mengubah legenda menjadi klaim sejarah faktual.

Jika sumber mengatakan:

> "Menurut cerita yang diwariskan masyarakat..."

gunakan framing yang sesuai.

Jangan mengubahnya menjadi:

> "Secara historis terbukti bahwa..."

kecuali memang ada sumber yang mendukung.

---

# 64. FUTURE CONTENT UPDATE

Design harus memungkinkan pengguna mengganti:

- teks legenda
- sejarah
- foto
- logo
- informasi lokasi
- dokumentasi revitalisasi
- metadata

tanpa harus melakukan rewrite total pada website.

---

# 65. WHAT THE AGENT MUST NOT DO

Jangan:

1. Membuat database.
2. Membuat backend.
3. Membuat authentication.
4. Membuat CMS.
5. Membuat dashboard.
6. Membuat API.
7. Membuat admin panel.
8. Menambahkan state management global tanpa alasan.
9. Menambahkan dependency besar tanpa alasan.
10. Mengarang legenda.
11. Mengarang sejarah.
12. Mengarang wawancara.
13. Mengarang kutipan.
14. Menggunakan lorem ipsum sebagai konten final.
15. Menggunakan foto random sebagai asset final tanpa pertimbangan hak penggunaan.
16. Membuat website terlalu hijau.
17. Membuat website seperti SaaS.
18. Membuat animasi berlebihan.
19. Mengorbankan performance demi animasi.
20. Membuat desktop hanya sebagai versi besar mobile.
21. Membuat mobile hanya sebagai versi kecil desktop.
22. Membuat terlalu banyak page.
23. Membuat UI terlalu card-heavy.
24. Menambahkan fitur yang tidak diminta.
25. Mengubah tujuan project tanpa instruksi pengguna.

---

# 66. ACCEPTANCE CRITERIA

Project dianggap berhasil jika:

## Content

- [ ] Nama Sendang menggunakan "Sendang Ngampel Wetan".
- [ ] Lokasi sesuai data yang diberikan.
- [ ] Homepage memiliki storytelling.
- [ ] Ada section sejarah.
- [ ] Ada preview legenda.
- [ ] Ada halaman `/legenda`.
- [ ] Halaman legenda siap untuk teks panjang.
- [ ] Ada section revitalisasi 2026.
- [ ] Ada gallery.
- [ ] Ada Google Maps embed.
- [ ] Ada footer dengan credit KKN yang subtle.
- [ ] Ada tiga slot logo.

## Visual

- [ ] Natural.
- [ ] Heritage.
- [ ] Manuscript.
- [ ] Earthy.
- [ ] Brown/cream dominan.
- [ ] Hijau hanya aksen.
- [ ] Typography serif + sans.
- [ ] Ornamen subtle.
- [ ] Hero immersive.
- [ ] Parallax terintegrasi secara relevan.

## Interaction

- [ ] Smooth scrolling.
- [ ] Smooth anchor navigation.
- [ ] Smooth back-to-top jika digunakan.
- [ ] Transisi tidak patah.
- [ ] Animation terasa cukup tetapi tidak berlebihan.
- [ ] User tetap fokus membaca.

## Performance

- [ ] Static rendering dimaksimalkan.
- [ ] Client-side JS diminimalkan.
- [ ] Images optimized.
- [ ] Non-critical images lazy-loaded.
- [ ] Tidak ada dependency tidak perlu.
- [ ] Parallax tidak menyebabkan scrolling berat.
- [ ] Mobile tetap smooth.
- [ ] Desktop tetap smooth.
- [ ] Google Maps tidak membebani initial experience secara tidak perlu.

## Accessibility

- [ ] Semantic HTML.
- [ ] Alt text.
- [ ] Contrast memadai.
- [ ] Keyboard navigation.
- [ ] Focus state.
- [ ] Reduced motion dipertimbangkan.

## Technical

- [ ] Astro menjadi framework utama.
- [ ] TypeScript digunakan.
- [ ] Tailwind digunakan jika sesuai setup.
- [ ] React hanya digunakan sebagai island bila diperlukan.
- [ ] GSAP digunakan secara terukur.
- [ ] Lenis digunakan secara terukur.
- [ ] Build berhasil.
- [ ] Tidak ada error runtime yang diketahui.
- [ ] Project siap deploy ke Vercel.

---

# 67. DEFINITION OF DONE

Jangan menyatakan project selesai hanya karena:

> "website sudah bisa dibuka."

Project dianggap selesai setelah:

1. Semua requirement utama diimplementasikan.
2. Homepage selesai.
3. Legend page selesai.
4. Parallax selesai.
5. Responsive selesai.
6. Asset structure selesai.
7. Google Maps selesai.
8. Logo slots selesai.
9. Revitalisasi section selesai.
10. Animation dan interaction telah diperiksa.
11. Performance telah diperiksa.
12. Accessibility dasar telah diperiksa.
13. Build berhasil.
14. Tidak ada placeholder yang disamarkan sebagai konten asli.
15. Tidak ada fakta sejarah yang dibuat oleh agent.
16. Deployment target Vercel siap.

---

# 68. FINAL PRINCIPLE

Jika harus memilih antara:

> fitur lebih banyak

dan

> pengalaman membaca yang lebih baik,

pilih:

> **pengalaman membaca yang lebih baik.**

Jika harus memilih antara:

> animasi lebih banyak

dan

> website lebih smooth,

pilih:

> **website lebih smooth.**

Jika harus memilih antara:

> visual lebih kompleks

dan

> website lebih ringan,

pilih:

> **website lebih ringan.**

Jika harus memilih antara:

> konten terlihat lengkap tetapi sebagian dibuat AI

dan

> konten belum lengkap tetapi tetap jujur,

pilih:

> **tetap jujur dan tunggu sumber asli.**

Jika harus memilih antara:

> architecture kompleks

dan

> architecture sederhana yang mudah dirawat,

pilih:

> **architecture sederhana.**

Website ini bukan dibuat untuk memamerkan teknologi.

Website ini dibuat untuk:

> **menjaga cerita Sendang Ngampel Wetan tetap dapat dibaca, dikenali, dan diwariskan.**

---

# 69. IMPLEMENTATION NOTE FOR AI AGENT

Sebelum coding:

1. Baca seluruh `INSTRUCTION.md`.
2. Inspect project yang sudah ada.
3. Jangan langsung mengubah banyak file.
4. Tentukan architecture paling sederhana yang memenuhi requirement.
5. Jika ada requirement yang bertentangan, prioritaskan bagian:
   - accuracy
   - readability
   - performance
   - visual identity
   - simplicity
6. Jika data konten belum tersedia, gunakan placeholder yang jelas.
7. Jangan mengarang informasi.
8. Setelah implementasi, lakukan visual dan technical QA.
9. Jalankan build.
10. Perbaiki error sampai build berhasil.
11. Jangan menambahkan fitur di luar scope tanpa alasan yang kuat.

**Seluruh isi dokumen ini harus dianggap sebagai requirement project.**
