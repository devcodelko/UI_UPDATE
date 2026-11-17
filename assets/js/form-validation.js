/**
 * AdminPro - Form Validation & Interactive Form Enhancements
 */

const AppForm = {
  // Initialize standard Bootstrap form validation
  initValidation: function (formSelector = '.needs-validation', onSubmitCallback = null) {
    const forms = document.querySelectorAll(formSelector);

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          AppNotification.toast('Please fill out all required fields properly.', 'error');
        } else {
          event.preventDefault();
          form.classList.add('was-validated');
          if (typeof onSubmitCallback === 'function') {
            onSubmitCallback(form);
          }
        }
      }, false);
    });
  },

  // Setup Image Upload with Instant Preview
  initImagePreview: function (inputSelector, previewImgSelector) {
    const fileInput = document.querySelector(inputSelector);
    const previewImg = document.querySelector(previewImgSelector);

    if (!fileInput || !previewImg) return;

    fileInput.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        if (!file.type.startsWith('image/')) {
          AppNotification.error('Please select an image file (PNG, JPG, WebP).');
          this.value = '';
          return;
        }

        // Limit file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          AppNotification.error('Image size must be less than 5MB.');
          this.value = '';
          return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
          previewImg.src = e.target.result;
          previewImg.style.display = 'block';
          const placeholder = previewImg.parentElement.querySelector('.placeholder-icon');
          if (placeholder) placeholder.style.display = 'none';
        };
        reader.readAsDataURL(file);
      }
    });
  },

  // Auto-generate Slug from Title Input
  initSlugGenerator: function (titleInputSelector, slugInputSelector) {
    const titleInput = document.querySelector(titleInputSelector);
    const slugInput = document.querySelector(slugInputSelector);

    if (!titleInput || !slugInput) return;

    titleInput.addEventListener('input', function () {
      slugInput.value = AppUtils.slugify(this.value);
    });
  },

  // Password Visibility Toggle
  initPasswordToggle: function () {
    const toggleBtns = document.querySelectorAll('.password-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId) || this.previousElementSibling;
        const icon = this.querySelector('i');

        if (input && input.type === 'password') {
          input.type = 'text';
          if (icon) {
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
          }
        } else if (input) {
          input.type = 'password';
          if (icon) {
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
          }
        }
      });
    });
  },

  // Password Strength Meter
  initPasswordStrength: function (inputSelector, meterBarSelector, textSelector) {
    const input = document.querySelector(inputSelector);
    const bar = document.querySelector(meterBarSelector);
    const text = document.querySelector(textSelector);

    if (!input || !bar) return;

    input.addEventListener('input', function () {
      const val = this.value;
      let score = 0;

      if (!val) {
        bar.style.width = '0%';
        bar.className = 'strength-meter-bar';
        if (text) text.textContent = '';
        return;
      }

      if (val.length >= 8) score += 25;
      if (/[A-Z]/.test(val)) score += 25;
      if (/[0-9]/.test(val)) score += 25;
      if (/[^A-Za-z0-9]/.test(val)) score += 25;

      bar.style.width = score + '%';

      if (score <= 25) {
        bar.className = 'strength-meter-bar bg-danger';
        if (text) text.textContent = 'Weak password';
      } else if (score <= 50) {
        bar.className = 'strength-meter-bar bg-warning';
        if (text) text.textContent = 'Fair password';
      } else if (score <= 75) {
        bar.className = 'strength-meter-bar bg-info';
        if (text) text.textContent = 'Good password';
      } else {
        bar.className = 'strength-meter-bar bg-success';
        if (text) text.textContent = 'Strong password';
      }
    });
  }
};

window.AppForm = AppForm;

document.addEventListener('DOMContentLoaded', function () {
  AppForm.initPasswordToggle();
});

