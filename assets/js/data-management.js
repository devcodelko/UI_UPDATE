/**
 * AdminPro - General Data Management (Pure Static UI)
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Data Listing Page
  if (document.getElementById('records-table')) {
    initRecordsListing();
  }

  // 2. Data Form (Add / Edit) Page
  if (document.getElementById('record-form')) {
    initRecordForm();
  }

  // 3. Data Preview Page
  if (document.getElementById('record-preview-container')) {
    initRecordPreview();
  }
});

let recordsDataTableInstance = null;

// Initialize Records Listing Table (Static Data)
function initRecordsListing() {
  // Initialize jQuery DataTable directly on static HTML table
  recordsDataTableInstance = AppDataTable.init('#records-table', {
    order: [[1, 'desc']],
    columnDefs: [
      { orderable: false, targets: [0, 8] } // Disable sorting on checkbox and action columns
    ]
  });

  // Bind Status Filter
  AppDataTable.bindStatusFilter(recordsDataTableInstance, '#filter-record-status', 6);

  // Bind Category Filter
  $('#filter-record-category').on('change', function () {
    const val = $(this).val();
    if (val === 'all' || !val) {
      recordsDataTableInstance.column(3).search('').draw();
    } else {
      recordsDataTableInstance.column(3).search(val).draw();
    }
  });

  // Bind Date Range Filter
  AppDataTable.bindDateRangeFilter(recordsDataTableInstance, '#filter-record-date', 7);

  // Single Delete Handler
  $('#records-table').on('click', '.btn-delete-record', function () {
    const row = $(this).closest('tr');

    AppNotification.confirm('This record will be permanently deleted.', 'Delete Record?', 'Delete Record', function () {
      recordsDataTableInstance.row(row).remove().draw();
      AppNotification.toast('Record deleted successfully.', 'success');
      AppDataTable.updateSelectedCount('#records-table');
    });
  });

  // Bulk Delete Handler
  $('.btn-bulk-delete').on('click', function () {
    const selectedIds = AppDataTable.getSelectedIds('#records-table');
    if (!selectedIds.length) return;

    AppNotification.confirm(`You are about to delete ${selectedIds.length} selected records.`, 'Bulk Delete?', 'Delete All Selected', function () {
      // Remove selected rows from DataTable
      $('#records-table tbody input.row-select:checked').each(function () {
        recordsDataTableInstance.row($(this).closest('tr')).remove();
      });
      recordsDataTableInstance.draw();
      $('#records-table-select-all').prop('checked', false);
      AppDataTable.updateSelectedCount('#records-table');
      AppNotification.toast(`${selectedIds.length} records deleted successfully.`, 'success');
    });
  });
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'Active': return 'badge-subtle-success';
    case 'Completed': return 'badge-subtle-info';
    case 'Pending': return 'badge-subtle-warning';
    case 'Cancelled': return 'badge-subtle-danger';
    default: return 'badge-subtle-secondary';
  }
}

// Add or Edit Record Form Handler
function initRecordForm() {
  const recordId = AppUtils.getQueryParam('id');
  const isEditMode = !!recordId;

  const formTitle = document.getElementById('record-form-page-title');
  const breadcrumbAction = document.getElementById('breadcrumb-action');
  const submitBtn = document.getElementById('btn-submit-record');

  // Image preview setup
  AppForm.initImagePreview('#record-image-input', '#record-image-preview');

  if (isEditMode) {
    if (formTitle) formTitle.textContent = `Edit Record #${recordId}`;
    if (breadcrumbAction) breadcrumbAction.textContent = 'Edit Record';
    if (submitBtn) submitBtn.innerHTML = '<i class="bi bi-check-circle me-1"></i> Update Record';
  }

  // Handle Form Submission
  AppForm.initValidation('#record-form', function (form) {
    const actionText = isEditMode ? 'Record updated successfully!' : 'New record created successfully!';
    AppNotification.toast(actionText, 'success');

    setTimeout(() => {
      window.location.href = 'data-list.html';
    }, 700);
  });
}

// Record Preview / Details Page Handler (Pure Static UI)
function initRecordPreview() {
  const recordId = AppUtils.getQueryParam('id');
  if (recordId) {
    const elId = document.getElementById('preview-id');
    const elEditBtn = document.getElementById('preview-edit-btn');
    if (elId) elId.textContent = '#' + recordId;
    if (elEditBtn) elEditBtn.href = `data-form.html?id=${recordId}`;
  }
}
