# NaturaLink B2B — Prototype Website Powered by AGroup 

Website B2B profesional untuk **pemasok sumber daya alam** (Natural Resources Suppliers).

## Fitur yang Sudah Ada
- ✅ Desain profesional modern (responsive, mobile-friendly)
- ✅ Bilingual (Bahasa Indonesia ↔ English) — klik tombol EN/ID di kanan atas
- ✅ Beberapa landing page: Beranda, Direktori Pemasok, Tentang, Kontak
- ✅ Halaman Login & Register (mock)
- ✅ Dashboard pemasok (mock data)
- ✅ Kategori: Mineral, Energi, Kayu, Pertanian, Logam, Air

## Cara Melihat Website Ini

### Opsi 1 — Langsung di komputer / HP
1. Download semua file di folder ini
2. Buka file `index.html` dengan browser (Chrome / Safari / Firefox)
3. Semua halaman akan berfungsi (termasuk ganti bahasa & mock login)

### Opsi 2 — Hosting gratis (agar bisa diakses online)
Upload folder ini ke:
- **Netlify** (drag & drop) → netlify.com
- **Vercel** → vercel.com
- **GitHub Pages**
- **Cloudflare Pages**

Semua gratis.

---

## Cara Menambahkan Login + Database Sungguhan (Gratis)

Karena ini masih prototype, data login hanya disimpan di browser. Untuk versi sungguhan:

### Rekomendasi termudah (tanpa coding berat):
1. **Bubble.io** — paling powerful untuk marketplace B2B
2. **Softr + Airtable** — lebih sederhana
3. **Glide** — cocok kalau mau versi mobile-app juga

### Rekomendasi teknis (gratis & profesional):
1. Buat akun gratis di **Supabase** (supabase.com)
   - Auth (login/register)
   - Database PostgreSQL
   - Storage untuk dokumen
2. Host frontend di **Vercel** atau **Netlify**
3. Hubungkan frontend dengan Supabase (ada dokumentasi lengkap)

---

## Struktur File
```
naturalink-b2b/
├── index.html          → Beranda
├── suppliers.html      → Direktori pemasok
├── about.html          → Tentang kami
├── contact.html        → Kontak
├── login.html          → Halaman masuk
├── register.html       → Halaman daftar
├── dashboard.html      → Dashboard setelah login
├── styles.css          → Desain
├── i18n.js             → Sistem bilingual
├── main.js             → Interaksi (menu, login mock)
└── README.md           → File ini
```

## Langkah Selanjutnya yang Disarankan
1. Ganti nama "NaturaLink" sesuai merek kamu
2. Ganti nomor WhatsApp & email di footer
3. Tambah logo perusahaan
4. Bebas mau pakai no-code (Bubble) atau Supabase
5. Setelah live, daftarkan domain (bisa beli di Niagahoster / Rumahweb / Cloudflare)

---
