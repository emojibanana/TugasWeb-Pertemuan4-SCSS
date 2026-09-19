# 🚀 Konversi CSS ke SCSS (7-1 Pattern) - Tugas 4

Proyek ini adalah tugas mata kuliah Pemrograman Web (Pertemuan 2) yang berfokus pada refactoring atau konversi kode CSS murni (*vanilla*) menjadi arsitektur **SCSS** yang lebih rapi dan modular menggunakan standar **7-1 Pattern**.

## 📝 Syarat & Kriteria Tugas yang Diselesaikan

Proyek ini telah memenuhi seluruh kriteria penugasan berikut:

- [x] **Konversi CSS ke SCSS:** Mengganti styling dari file tunggal `.css` ke modular `.scss`.
- [x] **Variabel (Colors & Spacing):** Menggunakan `$variables` untuk standarisasi warna dan jarak.
- [x] **Nesting (Max 3 Level):** Menerapkan aturan bersarang (*nesting*) agar pemilih (*selector*) lebih terstruktur tanpa mengurangi performa.
- [x] **Minimal 3 Mixins Reusable:** Menggunakan `@mixin` untuk *flexbox*, efek *hover/shadow*, dan *media query* (responsive).
- [x] **Struktur 7-1 Pattern (Partials):** Memecah kode menjadi beberapa folder seperti `abstracts`, `base`, `components`, dan `layout`.
- [x] **Gunakan `@use`:** Mengimpor file *partials* dengan `@use` (Sistem modul Dart SASS modern), bukan `@import`.
- [x] **Looping (`@for` / `@each`):** Menggunakan *looping* untuk melakukan *generate* class sistem grid/kolom (seperti `.col-md-1` hingga `.col-md-12`).
- [x] **Dart SASS Compiler:** Dikompilasi menggunakan mesin Dart SASS (melalui ekstensi VS Code).

---

## 📂 Struktur Folder SCSS (7-1 Pattern)

Struktur file SCSS pada proyek ini diatur sebagai berikut:

```text
📁 src/
└── 📁 styles/
    ├── 📁 abstracts/
    │   ├── _mixins.scss      # Kumpulan fungsi mixins (flex, mobile, dll)
    │   └── _variables.scss   # Kumpulan variabel warna, font, dan spacing
    ├── 📁 base/
    │   ├── _grid.scss        # Sistem grid menggunakan @for loop
    │   └── _reset.scss       # Reset margin & padding browser
    ├── 📁 components/
    │   ├── _button.scss      # Styling khusus untuk tombol
    │   └── _table.scss       # Styling khusus untuk tabel
    ├── 📁 layout/
    │   ├── _footer.scss      # Styling area footer
    │   └── _navbar.scss      # Styling navigasi header
    └── main.scss             # Entry point yang menggabungkan semua partials via @use
