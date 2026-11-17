/**
 * AdminPro - Reusable jQuery DataTables Configuration & Enhancements
 */

const AppDataTable = {
  // Common default configurations for all DataTables
  getDefaultOptions: function (customOptions = {}) {
    return {
      responsive: true,
      autoWidth: false,
      pageLength: 10,
      lengthMenu: [
        [10, 25, 50, 100, -1],
        ['10 rows', '25 rows', '50 rows', '100 rows', 'Show all']
      ],
      dom:
        "<'row align-items-center mb-3'<'col-12 col-md-6 d-flex align-items-center gap-2 flex-wrap'lB><'col-12 col-md-6 d-flex justify-content-md-end align-items-center mt-2 mt-md-0'f>>" +
        "<'row'<'col-12'tr>>" +
        "<'row align-items-center mt-3'<'col-12 col-md-5'i><'col-12 col-md-7 d-flex justify-content-md-end'p>>",
      buttons: [
        {
          extend: 'excelHtml5',
          text: '<i class="bi bi-file-earmark-excel text-success me-1"></i> Excel',
          className: 'dt-export-btn btn-export-excel',
          title: 'Export_' + new Date().toISOString().slice(0, 10),
          exportOptions: { columns: ':visible:not(.no-export)' }
        },
        {
          extend: 'csvHtml5',
          text: '<i class="bi bi-file-earmark-text text-primary me-1"></i> CSV',
          className: 'dt-export-btn btn-export-csv',
          title: 'Export_' + new Date().toISOString().slice(0, 10),
          exportOptions: { columns: ':visible:not(.no-export)' }
        }
      ],
      language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search records...',
        lengthMenu: '_MENU_',
        info: 'Showing _START_ to _END_ of _TOTAL_ entries',
        infoEmpty: 'No records available',
        infoFiltered: '(filtered from _MAX_ total records)',
        emptyTable: '<div class="py-4 text-muted"><i class="bi bi-inbox fs-1 d-block mb-2"></i>No data available in table</div>',
        zeroRecords: '<div class="py-4 text-muted"><i class="bi bi-search fs-1 d-block mb-2"></i>No matching records found</div>',
        paginate: {
          first: '<i class="bi bi-chevron-double-left"></i>',
          last: '<i class="bi bi-chevron-double-right"></i>',
          next: '<i class="bi bi-chevron-right"></i>',
          previous: '<i class="bi bi-chevron-left"></i>'
        }
      },
      ...customOptions
    };
  },

  // Initialize a DataTable instance
  init: function (tableSelector, customOptions = {}) {
    if (typeof $ === 'undefined' || !$.fn.DataTable) {
      console.error('jQuery or DataTables not loaded!');
      return null;
    }

    if ($.fn.dataTable.Buttons) {
      $.fn.dataTable.Buttons.defaults.dom.button.className = 'btn dt-export-btn';
    }

    const options = this.getDefaultOptions(customOptions);
    const table = $(tableSelector).DataTable(options);

    // Bind Select All Checkbox logic
    this.bindSelectAll(tableSelector, table);

    return table;
  },

  // Select-All Checkbox Handling
  bindSelectAll: function (tableSelector, tableInstance) {
    const $table = $(tableSelector);
    const selectAllSelector = `${tableSelector}-select-all`;
    const $selectAll = $(selectAllSelector);

    // Header checkbox toggle
    $selectAll.on('change', function () {
      const isChecked = $(this).is(':checked');
      $table.find('tbody input[type="checkbox"].row-select').prop('checked', isChecked);
      AppDataTable.updateSelectedCount(tableSelector);
    });

    // Row checkbox toggle
    $table.on('change', 'tbody input[type="checkbox"].row-select', function () {
      const allChecked = $table.find('tbody input[type="checkbox"].row-select').length ===
                         $table.find('tbody input[type="checkbox"].row-select:checked').length;
      $selectAll.prop('checked', allChecked);
      AppDataTable.updateSelectedCount(tableSelector);
    });
  },

  // Update selected count badges and toggle bulk actions
  updateSelectedCount: function (tableSelector) {
    const $table = $(tableSelector);
    const checkedBoxes = $table.find('tbody input[type="checkbox"].row-select:checked');
    const count = checkedBoxes.length;

    const $countBadge = $('.selected-rows-count');
    const $bulkBtn = $('.btn-bulk-delete');

    if ($countBadge.length) $countBadge.text(count);
    if ($bulkBtn.length) {
      if (count > 0) {
        $bulkBtn.removeAttr('disabled').removeClass('d-none');
      } else {
        $bulkBtn.attr('disabled', 'disabled');
      }
    }
  },

  // Get selected row IDs
  getSelectedIds: function (tableSelector) {
    const $table = $(tableSelector);
    const selected = [];
    $table.find('tbody input[type="checkbox"].row-select:checked').each(function () {
      selected.push($(this).val());
    });
    return selected;
  },

  // Custom Status Filter Binding
  bindStatusFilter: function (tableInstance, filterSelector, columnIndex = 5) {
    $(filterSelector).on('change', function () {
      const statusVal = $(this).val();
      if (statusVal === '' || statusVal === 'all') {
        tableInstance.column(columnIndex).search('').draw();
      } else {
        tableInstance.column(columnIndex).search(statusVal, true, false).draw();
      }
    });
  },

  // Custom Date Range Filter Binding
  bindDateRangeFilter: function (tableInstance, dateInputSelector, columnIndex = 6) {
    $(dateInputSelector).on('change', function () {
      const val = $(this).val();
      if (!val) {
        $.fn.dataTable.ext.search.pop();
        tableInstance.draw();
        return;
      }

      // Check if range "YYYY-MM-DD to YYYY-MM-DD"
      const dates = val.split(' to ');
      const startDate = dates[0] ? new Date(dates[0]) : null;
      const endDate = dates[1] ? new Date(dates[1]) : (dates[0] ? new Date(dates[0]) : null);

      $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
        const rowDateStr = data[columnIndex];
        if (!rowDateStr) return true;
        const rowDate = new Date(rowDateStr);

        if (startDate && endDate) {
          return rowDate >= startDate && rowDate <= endDate;
        } else if (startDate) {
          return rowDate >= startDate;
        }
        return true;
      });

      tableInstance.draw();
    });
  }
};

window.AppDataTable = AppDataTable;

