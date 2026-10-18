// Simple bilingual system (Indonesian / English)
const translations = {
  id: {
    // Nav
    nav_home: "Beranda",
    nav_suppliers: "Pemasok",
    nav_about: "Tentang",
    nav_contact: "Kontak",
    nav_login: "Masuk",
    nav_register: "Daftar",

    // Hero
    hero_title: "Menghubungkan Pemasok Sumber Daya Alam dengan Dunia",
    hero_subtitle: "Platform B2B terpercaya untuk mineral, energi, kayu, pertanian, dan sumber daya alam lainnya. Temukan mitra bisnis global dengan mudah dan aman.",
    hero_cta1: "Mulai sebagai Pemasok",
    hero_cta2: "Cari Pemasok",
    stat_suppliers: "Pemasok Terverifikasi",
    stat_countries: "Negara",
    stat_categories: "Kategori Utama",

    // Categories
    cat_title: "Kategori Sumber Daya Alam",
    cat_subtitle: "Temukan pemasok terpercaya di berbagai sektor sumber daya alam",
    cat_minerals: "Mineral & Tambang",
    cat_minerals_desc: "Batu bara, nikel, tembaga, emas, bijih besi",
    cat_energy: "Energi",
    cat_energy_desc: "Minyak, gas, batubara, energi terbarukan",
    cat_timber: "Kayu & Hasil Hutan",
    cat_timber_desc: "Kayu olahan, plywood, pulp, rotan",
    cat_agriculture: "Pertanian & Agribisnis",
    cat_agriculture_desc: "Sawit, karet, kopi, kakao, rempah",
    cat_metals: "Logam & Alloy",
    cat_metals_desc: "Besi, aluminium, tembaga, nikel refined",
    cat_water: "Air & Mineral Water",
    cat_water_desc: "Air minum dalam kemasan, mineral water",

    // How it works
    how_title: "Cara Kerja Platform",
    how_subtitle: "Proses sederhana untuk pemasok dan pembeli",
    step1_title: "Daftar & Verifikasi",
    step1_desc: "Buat akun perusahaan, unggah dokumen legal, dan verifikasi profil bisnis Anda.",
    step2_title: "Tampilkan Produk",
    step2_desc: "Upload katalog sumber daya alam yang Anda pasok lengkap dengan spesifikasi dan kapasitas.",
    step3_title: "Terima Inquiry",
    step3_desc: "Pembeli global dapat mengirim permintaan penawaran secara langsung melalui platform.",
    step4_title: "Deal & Transaksi",
    step4_desc: "Negosiasi, kontrak, dan transaksi dilakukan dengan dukungan platform yang aman.",

    // CTA
    cta_title: "Siap Mengembangkan Bisnis Sumber Daya Alam Anda?",
    cta_subtitle: "Bergabunglah dengan ribuan pemasok dan pembeli yang sudah terhubung di NaturaLink B2B.",
    cta_button: "Daftar Sekarang — Gratis",

    // Footer
    footer_desc: "Platform B2B terpercaya yang menghubungkan pemasok sumber daya alam dengan pembeli di seluruh dunia.",
    footer_company: "Perusahaan",
    footer_resources: "Sumber Daya",
    footer_contact: "Kontak",
    footer_privacy: "Privasi",
    footer_terms: "Syarat & Ketentuan",
    footer_blog: "Blog",
    footer_help: "Pusat Bantuan",

    // Auth
    login_title: "Masuk ke Akun Anda",
    login_subtitle: "Akses dashboard pemasok atau pembeli",
    email_label: "Email Perusahaan",
    password_label: "Kata Sandi",
    login_button: "Masuk",
    no_account: "Belum punya akun?",
    register_link: "Daftar di sini",
    register_title: "Daftar sebagai Pemasok / Pembeli",
    register_subtitle: "Buat akun perusahaan gratis dalam beberapa menit",
    company_label: "Nama Perusahaan",
    role_label: "Saya adalah",
    role_supplier: "Pemasok (Supplier)",
    role_buyer: "Pembeli (Buyer)",
    register_button: "Buat Akun",
    have_account: "Sudah punya akun?",
    login_link: "Masuk di sini",
    auth_note: "Ini adalah prototype. Untuk login & database sungguhan, hubungkan dengan Supabase atau Bubble.",

    // Suppliers
    suppliers_title: "Direktori Pemasok Sumber Daya Alam",
    suppliers_subtitle: "Temukan dan hubungi pemasok terverifikasi dari seluruh dunia",
    filter_category: "Semua Kategori",
    filter_country: "Semua Negara",
    search_placeholder: "Cari pemasok atau produk...",
    contact_supplier: "Hubungi",
    view_profile: "Lihat Profil",

    // Dashboard
    dash_welcome: "Selamat datang kembali",
    dash_overview: "Ringkasan",
    dash_products: "Produk Saya",
    dash_inquiries: "Inquiry Masuk",
    dash_messages: "Pesan",
    dash_settings: "Pengaturan",
    dash_logout: "Keluar",
    dash_title: "Dashboard Pemasok",
    stat_products: "Produk Aktif",
    stat_inquiries: "Inquiry Baru",
    stat_views: "Kunjungan Profil",
    recent_inquiries: "Inquiry Terbaru",

    // About
    about_title: "Tentang NaturaLink B2B",
    about_lead: "Kami membangun jembatan antara pemasok sumber daya alam dan pembeli global dengan transparansi, kepercayaan, dan teknologi modern.",
    about_mission: "Misi Kami",
    about_mission_text: "Mempermudah perdagangan sumber daya alam yang berkelanjutan dan bertanggung jawab melalui platform digital yang aman dan efisien.",
    about_vision: "Visi Kami",
    about_vision_text: "Menjadi platform B2B terdepan di Asia Tenggara untuk perdagangan sumber daya alam yang transparan dan berkelanjutan.",

    // Contact
    contact_title: "Hubungi Kami",
    contact_lead: "Tim kami siap membantu Anda. Silakan isi formulir atau hubungi langsung.",
    name_label: "Nama Lengkap",
    message_label: "Pesan",
    send_button: "Kirim Pesan"
  },

  en: {
    nav_home: "Home",
    nav_suppliers: "Suppliers",
    nav_about: "About",
    nav_contact: "Contact",
    nav_login: "Login",
    nav_register: "Register",

    hero_title: "Connecting Natural Resource Suppliers with the World",
    hero_subtitle: "Trusted B2B platform for minerals, energy, timber, agriculture, and other natural resources. Find global business partners easily and securely.",
    hero_cta1: "Start as Supplier",
    hero_cta2: "Find Suppliers",
    stat_suppliers: "Verified Suppliers",
    stat_countries: "Countries",
    stat_categories: "Main Categories",

    cat_title: "Natural Resource Categories",
    cat_subtitle: "Discover trusted suppliers across natural resource sectors",
    cat_minerals: "Minerals & Mining",
    cat_minerals_desc: "Coal, nickel, copper, gold, iron ore",
    cat_energy: "Energy",
    cat_energy_desc: "Oil, gas, coal, renewable energy",
    cat_timber: "Timber & Forest Products",
    cat_timber_desc: "Processed wood, plywood, pulp, rattan",
    cat_agriculture: "Agriculture & Agribusiness",
    cat_agriculture_desc: "Palm oil, rubber, coffee, cocoa, spices",
    cat_metals: "Metals & Alloys",
    cat_metals_desc: "Iron, aluminum, copper, refined nickel",
    cat_water: "Water & Mineral Water",
    cat_water_desc: "Bottled drinking water, mineral water",

    how_title: "How the Platform Works",
    how_subtitle: "Simple process for suppliers and buyers",
    step1_title: "Register & Verify",
    step1_desc: "Create a company account, upload legal documents, and verify your business profile.",
    step2_title: "List Your Products",
    step2_desc: "Upload your natural resource catalog with full specifications and capacity.",
    step3_title: "Receive Inquiries",
    step3_desc: "Global buyers can send quotation requests directly through the platform.",
    step4_title: "Deal & Transact",
    step4_desc: "Negotiate, contract, and transact with the support of a secure platform.",

    cta_title: "Ready to Grow Your Natural Resources Business?",
    cta_subtitle: "Join thousands of suppliers and buyers already connected on NaturaLink B2B.",
    cta_button: "Register Now — Free",

    footer_desc: "Trusted B2B platform connecting natural resource suppliers with buyers worldwide.",
    footer_company: "Company",
    footer_resources: "Resources",
    footer_contact: "Contact",
    footer_privacy: "Privacy",
    footer_terms: "Terms & Conditions",
    footer_blog: "Blog",
    footer_help: "Help Center",

    login_title: "Login to Your Account",
    login_subtitle: "Access your supplier or buyer dashboard",
    email_label: "Company Email",
    password_label: "Password",
    login_button: "Login",
    no_account: "Don't have an account?",
    register_link: "Register here",
    register_title: "Register as Supplier / Buyer",
    register_subtitle: "Create a free company account in minutes",
    company_label: "Company Name",
    role_label: "I am a",
    role_supplier: "Supplier",
    role_buyer: "Buyer",
    register_button: "Create Account",
    have_account: "Already have an account?",
    login_link: "Login here",
    auth_note: "This is a prototype. For real login & database, connect with Supabase or Bubble.",

    suppliers_title: "Natural Resources Supplier Directory",
    suppliers_subtitle: "Find and contact verified suppliers from around the world",
    filter_category: "All Categories",
    filter_country: "All Countries",
    search_placeholder: "Search suppliers or products...",
    contact_supplier: "Contact",
    view_profile: "View Profile",

    dash_welcome: "Welcome back",
    dash_overview: "Overview",
    dash_products: "My Products",
    dash_inquiries: "Inquiries",
    dash_messages: "Messages",
    dash_settings: "Settings",
    dash_logout: "Logout",
    dash_title: "Supplier Dashboard",
    stat_products: "Active Products",
    stat_inquiries: "New Inquiries",
    stat_views: "Profile Views",
    recent_inquiries: "Recent Inquiries",

    about_title: "About NaturaLink B2B",
    about_lead: "We build bridges between natural resource suppliers and global buyers with transparency, trust, and modern technology.",
    about_mission: "Our Mission",
    about_mission_text: "To facilitate sustainable and responsible natural resource trade through a secure and efficient digital platform.",
    about_vision: "Our Vision",
    about_vision_text: "To become the leading B2B platform in Southeast Asia for transparent and sustainable natural resource trade.",

    contact_title: "Contact Us",
    contact_lead: "Our team is ready to help you. Please fill out the form or contact us directly.",
    name_label: "Full Name",
    message_label: "Message",
    send_button: "Send Message"
  }
};

let currentLang = localStorage.getItem('naturalink_lang') || 'id';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('naturalink_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update language toggle label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'id' ? 'EN' : 'ID';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      setLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }
});
