// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Simple mock login (for prototype only)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      // Mock: any email works
      localStorage.setItem('naturalink_user', JSON.stringify({
        email: email,
        company: 'PT Contoh Sumber Daya',
        role: 'supplier'
      }));
      window.location.href = 'dashboard.html';
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('company').value;
      const email = document.getElementById('email').value;
      const role = document.getElementById('role').value;
      localStorage.setItem('naturalink_user', JSON.stringify({
        email: email,
        company: company,
        role: role
      }));
      alert(currentLang === 'id' 
        ? 'Akun berhasil dibuat! (Prototype – data hanya disimpan di browser Anda)' 
        : 'Account created! (Prototype – data is only stored in your browser)');
      window.location.href = 'dashboard.html';
    });
  }

  // Dashboard protection (mock)
  if (window.location.pathname.includes('dashboard.html')) {
    const user = localStorage.getItem('naturalink_user');
    if (!user) {
      window.location.href = 'login.html';
    } else {
      const userData = JSON.parse(user);
      const welcomeEl = document.getElementById('userCompany');
      if (welcomeEl) {
        welcomeEl.textContent = userData.company || userData.email;
      }
    }
  }

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('naturalink_user');
      window.location.href = 'index.html';
    });
  }
});
