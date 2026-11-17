/**
 * AdminPro - User Management & Profile System (100% Pure Static HTML Architecture)
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. User Listing Table
  if (document.getElementById('users-table')) {
    initUsersListing();
  }

  // 2. User Form (Add / Edit)
  if (document.getElementById('user-form')) {
    initUserForm();
  }

  // 3. User Profile Overview
  if (document.getElementById('profile-view-container')) {
    initUserProfileView();
  }

  // 4. Edit Profile Page
  if (document.getElementById('edit-profile-form')) {
    initEditProfile();
  }
});

let usersDataTableInstance = null;

// User Listing Page (Static Data in Table)
function initUsersListing() {
  usersDataTableInstance = AppDataTable.init('#users-table', {
    order: [[1, 'asc']],
    columnDefs: [
      { orderable: false, targets: [0, 7] }
    ]
  });

  // Role filter
  $('#filter-user-role').on('change', function () {
    const val = $(this).val();
    if (val === 'all' || !val) {
      usersDataTableInstance.column(4).search('').draw();
    } else {
      usersDataTableInstance.column(4).search(val).draw();
    }
  });

  // Status filter
  AppDataTable.bindStatusFilter(usersDataTableInstance, '#filter-user-status', 5);

  // Single Delete (Removes row from DataTable in memory)
  $('#users-table').on('click', '.btn-delete-user', function () {
    const row = $(this).closest('tr');

    AppNotification.confirm('This user account will be permanently removed.', 'Delete User?', 'Delete User', function () {
      usersDataTableInstance.row(row).remove().draw();
      AppNotification.toast('User removed successfully.', 'success');
      AppDataTable.updateSelectedCount('#users-table');
    });
  });

  // Bulk Delete (Removes selected rows from DataTable in memory)
  $('.btn-bulk-delete').on('click', function () {
    const selectedIds = AppDataTable.getSelectedIds('#users-table');
    if (!selectedIds.length) return;

    AppNotification.confirm(`Delete ${selectedIds.length} selected users?`, 'Bulk Delete Users', 'Delete Selected', function () {
      $('#users-table tbody input.row-select:checked').each(function () {
        usersDataTableInstance.row($(this).closest('tr')).remove();
      });
      usersDataTableInstance.draw();
      $('#users-table-select-all').prop('checked', false);
      AppDataTable.updateSelectedCount('#users-table');
      AppNotification.toast(`${selectedIds.length} users deleted successfully.`, 'success');
    });
  });
}

function getUserRoleBadgeClass(role) {
  switch (role) {
    case 'Super Admin': return 'badge-subtle-danger';
    case 'Admin': return 'badge-subtle-primary';
    case 'Manager': return 'badge-subtle-warning';
    case 'Editor': return 'badge-subtle-info';
    default: return 'badge-subtle-secondary';
  }
}

function getUserStatusBadgeClass(status) {
  switch (status) {
    case 'Active': return 'badge-subtle-success';
    case 'Inactive': return 'badge-subtle-secondary';
    case 'Suspended': return 'badge-subtle-danger';
    default: return 'badge-subtle-secondary';
  }
}

// User Form (Add / Edit) - Static Form Handling
function initUserForm() {
  const userId = AppUtils.getQueryParam('id');
  const isEditMode = !!userId;

  const titleEl = document.getElementById('user-form-page-title');
  const breadcrumbEl = document.getElementById('breadcrumb-action');
  const submitBtn = document.getElementById('btn-submit-user');
  const passwordSection = document.getElementById('password-section');

  AppForm.initImagePreview('#user-avatar-input', '#user-avatar-preview');

  if (isEditMode) {
    if (titleEl) titleEl.textContent = `Edit User #${userId}`;
    if (breadcrumbEl) breadcrumbEl.textContent = 'Edit User';
    if (submitBtn) submitBtn.innerHTML = '<i class="bi bi-check-circle me-1"></i> Update User';
    if (passwordSection) {
      const pwdInput = document.getElementById('user-password');
      if (pwdInput) pwdInput.removeAttribute('required');
      const pwdHelp = document.getElementById('password-help');
      if (pwdHelp) pwdHelp.textContent = 'Leave blank to retain existing password.';
    }

    // Pre-populate with realistic static demo data if empty
    const nameInput = document.getElementById('user-name');
    if (nameInput && !nameInput.value) {
      nameInput.value = 'Sophia Reynolds';
      document.getElementById('user-email').value = 'test@gmail.com';
      document.getElementById('user-phone').value = '9876543210';
      document.getElementById('user-role').value = 'Admin';
      document.getElementById('user-status').value = 'Active';
      document.getElementById('user-bio').value = 'Senior Operations Administrator with 8+ years enterprise system experience.';
      
      const previewImg = document.getElementById('user-avatar-preview');
      if (previewImg) {
        previewImg.src = 'assets/images/avatar-sophia.jpg';
        previewImg.style.display = 'block';
        const placeholder = previewImg.parentElement.querySelector('.placeholder-icon');
        if (placeholder) placeholder.style.display = 'none';
      }
    }
  }

  // Handle Form Submit
  AppForm.initValidation('#user-form', function (form) {
    AppNotification.toast(isEditMode ? 'User updated successfully!' : 'New user registered successfully!', 'success');

    setTimeout(() => {
      window.location.href = 'user-list.html';
    }, 700);
  });
}

// User Profile View - Pure Static Display
function initUserProfileView() {
  const savedUserStr = localStorage.getItem('adminpro_current_user');
  let targetUser = null;
  if (savedUserStr) {
    try { targetUser = JSON.parse(savedUserStr); } catch (e) {}
  }
  if (!targetUser) {
    targetUser = (typeof Auth !== 'undefined' ? Auth.getUser() : null) || {
      name: 'Alexander Mitchell',
      email: 'test@gmail.com',
      role: 'Super Admin',
      status: 'Active',
      phone: '9876543210',
      bio: 'Lead System Architect & Senior Operations Manager.',
      avatar: 'assets/images/avatar-alexander.jpg'
    };
  }

  const elName = document.getElementById('profile-name');
  const elRole = document.getElementById('profile-role');
  const elStatus = document.getElementById('profile-status');
  const elEmail = document.getElementById('profile-email');
  const elPhone = document.getElementById('profile-phone');
  const elBio = document.getElementById('profile-bio');
  const elAvatar = document.getElementById('profile-avatar');

  if (targetUser) {
    if (elName && targetUser.name) elName.textContent = targetUser.name;
    if (elRole && targetUser.role) {
      elRole.textContent = targetUser.role;
      elRole.className = 'badge ' + getUserRoleBadgeClass(targetUser.role);
    }
    if (elStatus && targetUser.status) {
      elStatus.textContent = targetUser.status;
      elStatus.className = 'badge ' + getUserStatusBadgeClass(targetUser.status);
    }
    if (elEmail && targetUser.email) elEmail.textContent = targetUser.email;
    if (elPhone && targetUser.phone) elPhone.textContent = targetUser.phone;
    if (elBio && targetUser.bio) elBio.textContent = targetUser.bio;
    if (elAvatar && targetUser.avatar) elAvatar.src = targetUser.avatar;
  }
}

// Edit Profile Page
function initEditProfile() {
  const savedUserStr = localStorage.getItem('adminpro_current_user');
  let currentUser = null;
  if (savedUserStr) {
    try { currentUser = JSON.parse(savedUserStr); } catch (e) {}
  }
  if (!currentUser) {
    currentUser = (typeof Auth !== 'undefined' ? Auth.getUser() : null) || {
      name: 'Alexander Mitchell',
      email: 'test@gmail.com',
      phone: '9876543210',
      bio: 'Lead System Architect & Senior Operations Manager.',
      avatar: 'assets/images/avatar-alexander.jpg'
    };
  }

  AppForm.initImagePreview('#edit-profile-avatar-input', '#edit-profile-avatar-preview');

  const nameEl = document.getElementById('edit-profile-name');
  const emailEl = document.getElementById('edit-profile-email');
  const phoneEl = document.getElementById('edit-profile-phone');
  const bioEl = document.getElementById('edit-profile-bio');
  const charCountEl = document.getElementById('bio-char-count');

  if (nameEl) nameEl.value = currentUser.name || '';
  if (emailEl) emailEl.value = currentUser.email || 'test@gmail.com';
  if (phoneEl) phoneEl.value = currentUser.phone || '9876543210';
  if (bioEl) {
    bioEl.value = currentUser.bio || '';
    if (charCountEl) charCountEl.textContent = `${bioEl.value.length} / 500`;
    bioEl.addEventListener('input', function() {
      if (charCountEl) charCountEl.textContent = `${this.value.length} / 500`;
    });
  }

  if (currentUser.avatar) {
    const previewImg = document.getElementById('edit-profile-avatar-preview');
    if (previewImg) previewImg.src = currentUser.avatar;
  }

  // Handle live clear of invalid styles on input
  [nameEl, phoneEl].forEach(input => {
    if (input) {
      input.addEventListener('input', function () {
        if (this.checkValidity()) {
          this.classList.remove('is-invalid');
        }
      });
    }
  });

  AppForm.initValidation('#edit-profile-form', function (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Saving...';
      submitBtn.setAttribute('disabled', 'disabled');
    }

    const previewImg = document.getElementById('edit-profile-avatar-preview');
    const updated = {
      ...currentUser,
      name: nameEl.value.trim(),
      phone: phoneEl.value.trim(),
      bio: bioEl ? bioEl.value.trim() : '',
      avatar: previewImg && previewImg.src ? previewImg.src : currentUser.avatar
    };

    localStorage.setItem('adminpro_current_user', JSON.stringify(updated));

    // Also sync with Auth session so topbar updates
    const sessionKey = 'adminpro_auth_session';
    const sessionRaw = localStorage.getItem(sessionKey) || sessionStorage.getItem(sessionKey);
    if (sessionRaw) {
      try {
        const sess = JSON.parse(sessionRaw);
        sess.name = updated.name;
        if (updated.avatar) sess.avatar = updated.avatar;
        if (localStorage.getItem(sessionKey)) {
          localStorage.setItem(sessionKey, JSON.stringify(sess));
        } else {
          sessionStorage.setItem(sessionKey, JSON.stringify(sess));
        }
      } catch (e) {}
    }

    AppNotification.toast('Profile updated successfully!', 'success');
    setTimeout(() => {
      window.location.href = 'user-profile.html';
    }, 600);
  });
}
