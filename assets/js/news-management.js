/**
 * AdminPro - News, Content Management & CKEditor 5 Integration (100% Pure Static HTML Architecture)
 */

let newsEditorInstance = null;
let aboutEditorInstance = null;
let newsDataTableInstance = null;

document.addEventListener('DOMContentLoaded', function () {
  // 1. News Listing Table
  if (document.getElementById('news-table')) {
    initNewsListing();
  }

  // 2. Add / Edit News Form with CKEditor 5
  if (document.getElementById('news-form')) {
    initNewsForm();
  }

  // 3. News Article Reader Preview
  if (document.getElementById('news-preview-container')) {
    initNewsPreview();
  }

  // 4. About Us Page CMS Editor
  if (document.getElementById('about-us-form')) {
    initAboutUsEditor();
  }

  // 5. Contact Us Page CMS Settings
  if (document.getElementById('contact-settings-form')) {
    initContactSettings();
  }

  // 6. Contact Submissions Listing Table
  if (document.getElementById('contact-submissions-table')) {
    initContactSubmissionsListing();
  }
});

// News Listing Table (Static Data in Table)
function initNewsListing() {
  newsDataTableInstance = AppDataTable.init('#news-table', {
    order: [[1, 'desc']],
    columnDefs: [
      { orderable: false, targets: [0, 7] }
    ]
  });

  // Category filter
  $('#filter-news-category').on('change', function () {
    const val = $(this).val();
    if (val === 'all' || !val) {
      newsDataTableInstance.column(3).search('').draw();
    } else {
      newsDataTableInstance.column(3).search(val).draw();
    }
  });

  // Status filter
  AppDataTable.bindStatusFilter(newsDataTableInstance, '#filter-news-status', 6);

  // Single Delete (Removes row in memory)
  $('#news-table').on('click', '.btn-delete-news', function () {
    const row = $(this).closest('tr');

    AppNotification.confirm('This article will be permanently removed.', 'Delete Article?', 'Delete Article', function () {
      newsDataTableInstance.row(row).remove().draw();
      AppNotification.toast('Article deleted successfully.', 'success');
      AppDataTable.updateSelectedCount('#news-table');
    });
  });

  // Bulk Delete (Removes selected rows in memory)
  $('.btn-bulk-delete').on('click', function () {
    const selectedIds = AppDataTable.getSelectedIds('#news-table');
    if (!selectedIds.length) return;

    AppNotification.confirm(`Delete ${selectedIds.length} selected articles?`, 'Bulk Delete', 'Delete Selected', function () {
      $('#news-table tbody input.row-select:checked').each(function () {
        newsDataTableInstance.row($(this).closest('tr')).remove();
      });
      newsDataTableInstance.draw();
      $('#news-table-select-all').prop('checked', false);
      AppDataTable.updateSelectedCount('#news-table');
      AppNotification.toast(`${selectedIds.length} articles deleted successfully.`, 'success');
    });
  });
}

function getNewsStatusBadgeClass(status) {
  switch (status) {
    case 'Published': return 'badge-subtle-success';
    case 'Draft': return 'badge-subtle-warning';
    case 'Archived': return 'badge-subtle-secondary';
    default: return 'badge-subtle-secondary';
  }
}

// News Form (Add / Edit) with CKEditor 5
function initNewsForm() {
  const newsId = AppUtils.getQueryParam('id');
  const isEditMode = !!newsId;

  const titleEl = document.getElementById('news-form-page-title');
  const breadcrumbEl = document.getElementById('breadcrumb-action');
  const submitBtn = document.getElementById('btn-submit-news');

  AppForm.initImagePreview('#news-image-input', '#news-image-preview');
  AppForm.initSlugGenerator('#news-title', '#news-slug');

  // Initialize CKEditor 5 Classic Build
  if (typeof ClassicEditor !== 'undefined') {
    ClassicEditor.create(document.querySelector('#news-editor'), {
      toolbar: {
        items: [
          'heading', '|',
          'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
          'outdent', 'indent', '|',
          'blockQuote', 'insertTable', 'undo', 'redo'
        ]
      }
    }).then(editor => {
      newsEditorInstance = editor;

      // In edit mode, pre-fill sample editor content if empty
      if (isEditMode && !editor.getData()) {
        editor.setData('<p>AdminPro 4.0 introduces groundbreaking enhancements in modular dashboards, high-speed pure static rendering, and seamless enterprise theme switches.</p><p>Key highlights include streamlined workflows, zero mock database latency, and standardized navigation components.</p>');
      }
    }).catch(error => {
      console.error('CKEditor init error:', error);
    });
  }

  if (isEditMode) {
    if (titleEl) titleEl.textContent = `Edit News Article #${newsId}`;
    if (breadcrumbEl) breadcrumbEl.textContent = 'Edit News';
    if (submitBtn) submitBtn.innerHTML = '<i class="bi bi-check-circle me-1"></i> Update Article';

    const titleInput = document.getElementById('news-title');
    if (titleInput && !titleInput.value) {
      titleInput.value = 'AdminPro 4.0 Released with Next-Gen Enterprise Features';
      document.getElementById('news-slug').value = 'adminpro-4-release';
      document.getElementById('news-category').value = 'Technology';
      document.getElementById('news-author').value = 'Elena Rostova';
      document.getElementById('news-date').value = '2026-03-28';
      document.getElementById('news-status').value = 'Published';
      document.getElementById('news-short-desc').value = 'Explore modern static dashboard architecture and comprehensive management modules.';

      const previewImg = document.getElementById('news-image-preview');
      if (previewImg) {
        previewImg.src = 'assets/images/news-cybersecurity.jpg';
        previewImg.style.display = 'block';
        const placeholder = previewImg.parentElement.querySelector('.placeholder-icon');
        if (placeholder) placeholder.style.display = 'none';
      }
    }
  }

  // Handle Form Submit
  AppForm.initValidation('#news-form', function (form) {
    AppNotification.toast(isEditMode ? 'Article updated successfully!' : 'Article created successfully!', 'success');

    setTimeout(() => {
      window.location.href = 'news-list.html';
    }, 700);
  });
}

// News Article Reader Preview - Static Display
function initNewsPreview() {
  const newsId = AppUtils.getQueryParam('id');
  const editBtn = document.getElementById('preview-news-edit-btn');
  if (editBtn && newsId) {
    editBtn.href = `news-form.html?id=${newsId}`;
  }
}

// About Us Page CMS Editor with CKEditor 5
function initAboutUsEditor() {
  const headlineInput = document.getElementById('about-headline');
  if (headlineInput && !headlineInput.value) {
    headlineInput.value = 'Empowering Data-Driven Enterprise Leaders';
    document.getElementById('about-subheadline').value = 'Pioneering intelligent, high-velocity administration solutions since 2018.';
    document.getElementById('about-mission').value = 'Deliver the most intuitive, performant, and dependable administration suite to organizations worldwide.';
    document.getElementById('about-vision').value = 'To become the global standard for modern, zero-overhead enterprise data operations.';
  }

  if (typeof ClassicEditor !== 'undefined') {
    ClassicEditor.create(document.querySelector('#about-body-editor'), {
      toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'blockQuote', 'insertTable', 'undo', 'redo']
    }).then(editor => {
      aboutEditorInstance = editor;
      if (!editor.getData()) {
        editor.setData('<p>AdminPro was engineered from the ground up to solve complex enterprise operational bottlenecks with speed, elegance, and extreme reliability.</p><p>Used by thousands of engineering leaders and operations teams worldwide, our suite delivers comprehensive visibility into business performance.</p>');
      }
    });
  }

  AppForm.initValidation('#about-us-form', function (form) {
    AppNotification.toast('About Us content saved successfully!', 'success');
  });

  // Modal preview hook
  const modal = document.getElementById('aboutPreviewModal');
  if (modal) {
    modal.addEventListener('show.bs.modal', function () {
      const hl = document.getElementById('modal-preview-headline');
      const sub = document.getElementById('modal-preview-sub');
      const mis = document.getElementById('modal-preview-mission');
      const vis = document.getElementById('modal-preview-vision');
      const cnt = document.getElementById('modal-preview-content');
      if (hl) hl.textContent = document.getElementById('about-headline').value || 'Headline';
      if (sub) sub.textContent = document.getElementById('about-subheadline').value || '';
      if (mis) mis.textContent = document.getElementById('about-mission').value || '';
      if (vis) vis.textContent = document.getElementById('about-vision').value || '';
      if (cnt) cnt.innerHTML = aboutEditorInstance ? aboutEditorInstance.getData() : '';
    });
  }
}

// Contact Us Page CMS Settings
function initContactSettings() {
  const companyInput = document.getElementById('contact-company');
  if (companyInput && !companyInput.value) {
    companyInput.value = 'U.P. Industrial Consultants Ltd. (UPICON)';
    document.getElementById('contact-email').value = 'test@gmail.com';
    document.getElementById('contact-phone').value = '9876543210';
    document.getElementById('contact-address').value = '742 Evergreen Terrace, Suite 500, San Francisco, CA 94107';
    document.getElementById('contact-hours').value = 'Mon - Fri: 8:00 AM - 6:00 PM PST';
    document.getElementById('contact-map').value = 'https://maps.google.com';
    document.getElementById('contact-autoreply').value = 'Thank you for reaching out to AdminPro Support. A specialist will reply within 4 business hours.';
  }

  AppForm.initValidation('#contact-settings-form', function (form) {
    AppNotification.toast('Contact settings updated successfully!', 'success');
  });

  // Test contact inquiry submit handler
  if (document.getElementById('test-contact-form')) {
    AppForm.initValidation('#test-contact-form', function (form) {
      AppNotification.toast('Test inquiry submitted successfully!', 'success');
      form.reset();
      form.classList.remove('was-validated');
    });
  }
}

// Contact Submissions Listing Table (Static Data in Table)
function initContactSubmissionsListing() {
  const table = AppDataTable.init('#contact-submissions-table', {
    order: [[1, 'desc']],
    columnDefs: [{ orderable: false, targets: [0, 6] }]
  });

  // View modal handler (Reads directly from static row attributes)
  $('#contact-submissions-table').on('click', '.btn-view-submission', function () {
    const btn = $(this);
    const name = btn.data('name') || btn.closest('tr').find('td:nth-child(3) .fw-bold').text();
    const email = btn.data('email') || btn.closest('tr').find('td:nth-child(3) small').text();
    const phone = btn.data('phone') || 'N/A';
    const date = btn.data('date') || btn.closest('tr').find('td:nth-child(5)').text();
    const subject = btn.data('subject') || btn.closest('tr').find('td:nth-child(4) .fw-medium').text();
    const message = btn.data('message') || btn.closest('tr').find('td:nth-child(4) small').text();

    btn.closest('tr').find('.badge').text('Read').attr('class', 'badge badge-subtle-secondary');

    document.getElementById('modal-sub-name').textContent = name;
    document.getElementById('modal-sub-email').textContent = email;
    document.getElementById('modal-sub-phone').textContent = phone;
    document.getElementById('modal-sub-date').textContent = date;
    document.getElementById('modal-sub-subject').textContent = subject;
    document.getElementById('modal-sub-message').textContent = message;

    const modal = new bootstrap.Modal(document.getElementById('viewSubmissionModal'));
    modal.show();
  });

  // Single delete (Removes row in memory)
  $('#contact-submissions-table').on('click', '.btn-delete-submission', function () {
    const row = $(this).closest('tr');

    AppNotification.confirm('Delete this message submission?', 'Delete Message', 'Delete', function () {
      table.row(row).remove().draw();
      AppNotification.toast('Submission deleted successfully.', 'success');
      AppDataTable.updateSelectedCount('#contact-submissions-table');
    });
  });
}
