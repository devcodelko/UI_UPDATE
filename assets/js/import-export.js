/**
 * AdminPro - Data Import Pipeline using SheetJS (xlsx) & Papa Parse
 * Streamlined Modal File Upload for Data Management
 */

let parsedRawData = [];
let validatedRecords = [];
let importErrors = [];

document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('import-dropzone')) return;

  initFileUploader();
  initConfirmImportButton();

  // Auto-open modal if URL query param action=import exists
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('action') === 'import' || window.location.hash === '#import') {
    const modalEl = document.getElementById('importDataModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  // Handle modal reset on close
  const modalEl = document.getElementById('importDataModal');
  if (modalEl) {
    modalEl.addEventListener('hidden.bs.modal', function () {
      const fileInput = document.getElementById('file-upload-input');
      const fileCard = document.getElementById('selected-file-card');
      const confirmBtn = document.getElementById('btn-confirm-import');

      if (fileInput) fileInput.value = '';
      if (fileCard) fileCard.classList.add('d-none');
      validatedRecords = [];
      parsedRawData = [];
      importErrors = [];

      if (confirmBtn) {
        confirmBtn.setAttribute('disabled', 'disabled');
        confirmBtn.innerHTML = '<i class="bi bi-cloud-arrow-up me-1"></i> Confirm & Import';
      }
    });
  }
});

// Setup Drag & Drop File Upload
function initFileUploader() {
  const dropzone = document.getElementById('import-dropzone');
  const fileInput = document.getElementById('file-upload-input');

  if (!dropzone || !fileInput) return;

  dropzone.addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT') {
      fileInput.click();
    }
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, e => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, e => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });

  dropzone.addEventListener('drop', e => {
    const files = e.dataTransfer.files;
    if (files.length) handleSelectedFile(files[0]);
  });

  fileInput.addEventListener('change', function () {
    if (this.files.length) handleSelectedFile(this.files[0]);
  });
}

// Handle Selected File (CSV or Excel)
function handleSelectedFile(file) {
  const validExtensions = ['csv', 'xlsx', 'xls'];
  const ext = file.name.split('.').pop().toLowerCase();

  if (!validExtensions.includes(ext)) {
    if (typeof AppNotification !== 'undefined') {
      AppNotification.error('Unsupported file format. Please upload a .csv, .xlsx, or .xls file.');
    } else {
      alert('Unsupported file format. Please upload a .csv, .xlsx, or .xls file.');
    }
    return;
  }

  // Max 10MB
  if (file.size > 10 * 1024 * 1024) {
    if (typeof AppNotification !== 'undefined') {
      AppNotification.error('File size exceeds the 10MB limit.');
    } else {
      alert('File size exceeds the 10MB limit.');
    }
    return;
  }

  // Update file info display
  const fileNameEl = document.getElementById('selected-file-name');
  const fileSizeEl = document.getElementById('selected-file-size');
  const fileCard = document.getElementById('selected-file-card');
  const badgeEl = document.getElementById('selected-file-badge');

  if (fileNameEl) fileNameEl.textContent = file.name;
  if (fileSizeEl) fileSizeEl.textContent = (file.size / 1024).toFixed(1) + ' KB';
  if (badgeEl) {
    badgeEl.className = 'badge badge-subtle-primary';
    badgeEl.textContent = 'Parsing File...';
  }
  if (fileCard) fileCard.classList.remove('d-none');

  if (ext === 'csv') {
    parseCsvFile(file);
  } else {
    parseExcelFile(file);
  }
}

// Parse CSV with Papa Parse
function parseCsvFile(file) {
  if (typeof Papa === 'undefined') {
    if (typeof AppNotification !== 'undefined') {
      AppNotification.error('Papa Parse library is not loaded.');
    }
    return;
  }

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      if (results.data && results.data.length) {
        parsedRawData = results.data;
        processParsedData(parsedRawData);
      } else {
        if (typeof AppNotification !== 'undefined') {
          AppNotification.warning('The uploaded CSV file is empty.');
        }
      }
    },
    error: function (err) {
      if (typeof AppNotification !== 'undefined') {
        AppNotification.error('CSV Parsing Error: ' + err.message);
      }
    }
  });
}

// Parse Excel with SheetJS (xlsx)
function parseExcelFile(file) {
  if (typeof XLSX === 'undefined') {
    if (typeof AppNotification !== 'undefined') {
      AppNotification.error('SheetJS library is not loaded.');
    }
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

      if (json && json.length) {
        parsedRawData = json;
        processParsedData(parsedRawData);
      } else {
        if (typeof AppNotification !== 'undefined') {
          AppNotification.warning('The uploaded Excel sheet contains no records.');
        }
      }
    } catch (err) {
      if (typeof AppNotification !== 'undefined') {
        AppNotification.error('Excel Parsing Error: ' + err.message);
      }
    }
  };
  reader.readAsArrayBuffer(file);
}

// Process, Validate Parsed Data
function processParsedData(data) {
  validatedRecords = [];
  importErrors = [];

  const existingRecords = [];
  const existingSkus = new Set();
  const uploadedSkus = new Set();

  data.forEach((row, index) => {
    const rowNum = index + 1;
    const rowErrors = [];

    // Column normalization
    const title = row['Title'] || row['title'] || row['Name'] || row['name'] || '';
    const sku = row['Project Code'] || row['project_code'] || row['ProjectCode'] || row['Code'] || row['code'] || row['SKU'] || row['sku'] || '';
    const category = row['Category'] || row['category'] || 'General';
    const amount = parseFloat(row['Amount'] || row['amount'] || row['Price'] || row['price'] || 0);
    const customer = row['Customer'] || row['customer'] || row['Client'] || '';
    const email = row['Email'] || row['email'] || '';
    const date = row['Date'] || row['date'] || new Date().toISOString().slice(0, 10);
    const status = row['Status'] || row['status'] || 'Active';

    // Validation rules
    if (!title.trim()) {
      rowErrors.push('Title is required');
    }

    if (sku) {
      const skuLower = sku.trim().toLowerCase();
      if (existingSkus.has(skuLower)) {
        rowErrors.push(`Duplicate Project Code "${sku}" in database`);
      } else if (uploadedSkus.has(skuLower)) {
        rowErrors.push(`Duplicate Project Code "${sku}" within file`);
      }
      uploadedSkus.add(skuLower);
    }

    if (isNaN(amount) || amount < 0) {
      rowErrors.push('Amount must be positive number');
    }

    const recordItem = {
      title: title.trim(),
      sku: sku.trim() || 'PRJ-' + Math.floor(1000 + Math.random() * 9000),
      category: category.trim(),
      amount: isNaN(amount) ? 0 : amount,
      customer: customer.trim(),
      email: email.trim(),
      date: date,
      status: status.trim(),
      notes: 'Imported via modal spreadsheet upload on ' + new Date().toLocaleDateString(),
      image: 'assets/images/record-erp-suite.jpg',
      _rowNum: rowNum,
      _errors: rowErrors,
      _isValid: rowErrors.length === 0
    };

    if (rowErrors.length > 0) {
      importErrors.push({ rowNum, errors: rowErrors });
    }

    validatedRecords.push(recordItem);
  });

  renderImportState();
}

// Update Import Modal State
function renderImportState() {
  const confirmBtn = document.getElementById('btn-confirm-import');
  const badgeEl = document.getElementById('selected-file-badge');

  const totalCount = validatedRecords.length;
  const validCount = validatedRecords.filter(r => r._isValid).length;
  const errorCount = validatedRecords.filter(r => !r._isValid).length;

  if (badgeEl) {
    if (validCount > 0) {
      badgeEl.className = 'badge badge-subtle-success';
      badgeEl.textContent = `Ready to Import (${validCount} Records)`;
    } else {
      badgeEl.className = 'badge badge-subtle-danger';
      badgeEl.textContent = 'No Valid Records Found';
    }
  }

  if (confirmBtn) {
    if (validCount > 0) {
      confirmBtn.removeAttribute('disabled');
      confirmBtn.innerHTML = `<i class="bi bi-cloud-arrow-up me-1"></i> Confirm & Import (${validCount} Records)`;
    } else {
      confirmBtn.setAttribute('disabled', 'disabled');
      confirmBtn.innerHTML = '<i class="bi bi-x-circle me-1"></i> No Valid Records to Import';
    }
  }
}

// Confirm & Process Imported Records
function initConfirmImportButton() {
  const confirmBtn = document.getElementById('btn-confirm-import');
  if (!confirmBtn) return;

  confirmBtn.addEventListener('click', function () {
    const validRecords = validatedRecords.filter(r => r._isValid);
    if (!validRecords.length) {
      if (typeof AppNotification !== 'undefined') {
        AppNotification.warning('There are no valid records to import.');
      }
      return;
    }

    const doImport = () => {
      // Close modal
      const modalEl = document.getElementById('importDataModal');
      if (modalEl && typeof bootstrap !== 'undefined') {
        const bsModal = bootstrap.Modal.getInstance(modalEl);
        if (bsModal) bsModal.hide();
      }

      if (typeof Swal !== 'undefined') {
        Swal.fire({
          icon: 'success',
          title: 'Import Successful',
          text: `Successfully imported ${validRecords.length} records!`,
          timer: 2000,
          showConfirmButton: false
        });
      } else if (typeof AppNotification !== 'undefined') {
        AppNotification.toast(`Successfully imported ${validRecords.length} records!`, 'success');
      }

      // Refresh listing after short timeout
      setTimeout(() => {
        window.location.href = 'data-list.html';
      }, 1500);
    };

    if (typeof AppNotification !== 'undefined') {
      AppNotification.confirm(
        `Import ${validRecords.length} records into the database?`,
        'Confirm Data Import',
        'Import Now',
        doImport
      );
    } else {
      if (confirm(`Import ${validRecords.length} records into the database?`)) {
        doImport();
      }
    }
  });
}
