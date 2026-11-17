/**
 * AdminPro - Notifications & Alert Helpers (SweetAlert2)
 */

const AppNotification = {
  // Toast Alert (top-end notification)
  toast: function(message, icon = 'success', timer = 3000) {
    if (typeof Swal === 'undefined') {
      alert(message);
      return;
    }
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: icon,
      title: message
    });
  },

  // Success Modal
  success: function(message, title = 'Success!') {
    if (typeof Swal === 'undefined') { alert(message); return Promise.resolve(); }
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonColor: '#4f46e5',
      customClass: {
        confirmButton: 'btn btn-primary px-4'
      },
      buttonsStyling: false
    });
  },

  // Error Modal
  error: function(message, title = 'Error Occurred') {
    if (typeof Swal === 'undefined') { alert(message); return Promise.resolve(); }
    return Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonColor: '#ef4444',
      customClass: {
        confirmButton: 'btn btn-danger px-4'
      },
      buttonsStyling: false
    });
  },

  // Warning Modal
  warning: function(message, title = 'Warning') {
    if (typeof Swal === 'undefined') { alert(message); return Promise.resolve(); }
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      confirmButtonColor: '#f59e0b',
      customClass: {
        confirmButton: 'btn btn-warning px-4 text-white'
      },
      buttonsStyling: false
    });
  },

  // Info Modal
  info: function(message, title = 'Information') {
    if (typeof Swal === 'undefined') { alert(message); return Promise.resolve(); }
    return Swal.fire({
      icon: 'info',
      title: title,
      text: message,
      confirmButtonColor: '#0ea5e9',
      customClass: {
        confirmButton: 'btn btn-info px-4 text-white'
      },
      buttonsStyling: false
    });
  },

  // Confirmation Modal
  confirm: function(message = 'Are you sure you want to proceed?', title = 'Confirm Action', confirmBtnText = 'Yes, Delete', callback = null) {
    if (typeof Swal === 'undefined') {
      const res = confirm(message);
      if (res && typeof callback === 'function') callback();
      return Promise.resolve({ isConfirmed: res });
    }

    return Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#64748b',
      confirmButtonText: confirmBtnText,
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn btn-danger px-4 ms-2',
        cancelButton: 'btn btn-secondary px-4'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed && typeof callback === 'function') {
        callback();
      }
      return result;
    });
  }
};

window.AppNotification = AppNotification;

