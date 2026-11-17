/**
 * AdminPro - Authentication & Session Management (Pure Static UI)
 */

const AUTH_STORAGE_KEY = 'adminpro_auth_session';

const DEFAULT_USER = {
  id: 1,
  name: 'Alexander Mitchell',
  email: 'test@gmail.com',
  phone: '9876543210',
  role: 'Super Admin',
  avatar: 'assets/images/avatar-alexander.jpg'
};

const Auth = {
  // Check if session exists
  isAuthenticated: function() {
    const session = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
    return !!session;
  },

  // Get currently logged-in user profile
  getUser: function() {
    const session = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (session) {
      try {
        const parsed = JSON.parse(session);
        return {
          id: parsed.userId || 1,
          name: parsed.name || DEFAULT_USER.name,
          email: parsed.email || DEFAULT_USER.email,
          phone: parsed.phone || DEFAULT_USER.phone,
          role: parsed.role || DEFAULT_USER.role,
          avatar: DEFAULT_USER.avatar
        };
      } catch (e) {}
    }
    return DEFAULT_USER;
  },

  getCurrentUser: function() {
    return this.getUser();
  },

  // Log in user (Demo friendly)
  login: function(email, password, rememberMe = false) {
    if (!email || !password) {
      AppNotification.error('Please enter both email and password.');
      return false;
    }

    const sessionData = {
      token: 'jwt_mock_' + Math.random().toString(36).substring(2),
      userId: 1,
      email: email.trim(),
      name: email.toLowerCase().includes('alexander') || email.toLowerCase().includes('admin') ? 'Alexander Mitchell' : 'Admin User',
      role: 'Super Admin',
      loginTime: new Date().toISOString()
    };

    if (rememberMe) {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionData));
    } else {
      sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionData));
    }

    AppNotification.toast(`Welcome back, ${sessionData.name}!`, 'success');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 400);

    return true;
  },

  // Log out user
  logout: function() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    window.location.href = 'login.html';
  },

  // Route Guard - Redirect unauthenticated users
  requireAuth: function() {
    const publicPages = ['login.html', 'forgot-password.html', 'reset-password.html', '404.html'];
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    if (!publicPages.includes(currentPath) && currentPath !== '' && currentPath !== 'index.html') {
      if (!this.isAuthenticated()) {
        window.location.href = 'login.html?redirect=' + encodeURIComponent(currentPath);
      }
    }
  },

  // If already logged in, redirect away from login/auth pages to dashboard
  redirectIfAuthenticated: function() {
    if (this.isAuthenticated()) {
      window.location.href = 'dashboard.html';
    }
  }
};

// Auto-bind Change Password Form if present on the page
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('change-password-form');
  if (form && typeof AppForm !== 'undefined') {
    AppForm.initPasswordStrength('#new-pass', '#change-pwd-strength-bar', '#change-pwd-strength-text');

    AppForm.initValidation('#change-password-form', function (formEl) {
      const curPass = document.getElementById('current-password').value;
      const newPass = document.getElementById('new-pass').value;
      const confPass = document.getElementById('confirm-pass').value;
      const errorDiv = document.getElementById('pwd-match-error');

      if (newPass !== confPass) {
        if (errorDiv) errorDiv.classList.remove('d-none');
        return;
      }
      if (errorDiv) errorDiv.classList.add('d-none');

      AppNotification.success('Your password has been updated successfully!');
      formEl.reset();
      formEl.classList.remove('was-validated');
    });
  }
});

window.Auth = Auth;
