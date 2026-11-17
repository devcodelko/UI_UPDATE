/**
 * AdminPro - Main Application Scripts & Global Utilities
 */

document.addEventListener('DOMContentLoaded', function () {
  // Enforce Route Authentication Guard
  if (typeof Auth !== 'undefined' && typeof Auth.requireAuth === 'function') {
    Auth.requireAuth();
  }

  // Initialize Bootstrap Tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize Bootstrap Popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Flatpickr global date-picker init if available
  if (typeof flatpickr !== 'undefined') {
    flatpickr('.datepicker', {
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'F j, Y',
      allowInput: true
    });

    flatpickr('.daterangepicker', {
      mode: 'range',
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'M j, Y'
    });
  }
});

// Utility Helpers
const AppUtils = {
  // Format Currency
  formatCurrency: function (num) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Number(num) || 0);
  },

  // Format Date (YYYY-MM-DD to Month Day, Year)
  formatDate: function (dateStr) {
    if (!dateStr) return 'N/A';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return dateStr;
    }
  },

  // Truncate string
  truncate: function (str, maxLen = 60) {
    if (!str) return '';
    return str.length > maxLen ? str.substring(0, maxLen) + '...' : str;
  },

  // Generate URL slug from title
  slugify: function (text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },

  // Read URL query parameter
  getQueryParam: function (param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
};

window.AppUtils = AppUtils;

