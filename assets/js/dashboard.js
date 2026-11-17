/**
 * AdminPro - Dashboard Analytics & Charts
 */

document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('dashboard-page-indicator')) return;

  initAnalyticsCharts();
});

// Chart.js Visualizations
function initAnalyticsCharts() {
  if (typeof Chart === 'undefined') return;

  const isDarkMode = document.documentElement.getAttribute('data-bs-theme') === 'dark';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
  const textColor = isDarkMode ? '#94a3b8' : '#64748b';

  // 1. Line Chart - Monthly Record Volume & Revenue Trend
  const ctxLine = document.getElementById('analyticsLineChart');
  if (ctxLine) {
    new Chart(ctxLine.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Project Volume ($k)',
            data: [35, 42, 58, 65, 82, 95, 90, 110, 125, 140, 135, 160],
            borderColor: '#16968f',
            backgroundColor: 'rgba(22, 150, 143, 0.12)',
            fill: true,
            tension: 0.4,
            borderWidth: 2.5,
            pointBackgroundColor: '#16968f',
            pointRadius: 4,
            pointHoverRadius: 6
          },
          {
            label: 'Target ($k)',
            data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
            borderColor: '#94a3b8',
            borderDash: [5, 5],
            fill: false,
            tension: 0.2,
            borderWidth: 1.5,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: textColor, boxWidth: 12, usePointStyle: true }
          },
          tooltip: {
            backgroundColor: '#0f172a',
            padding: 10,
            titleColor: '#fff',
            bodyColor: '#cbd5e1'
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor }
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor, callback: val => '$' + val + 'k' }
          }
        }
      }
    });
  }

  // 2. Bar Chart - Distribution by Category
  const ctxBar = document.getElementById('categoryBarChart');
  if (ctxBar) {
    new Chart(ctxBar.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Software', 'Electronics', 'Services', 'Furniture', 'Marketing'],
        datasets: [{
          label: 'Active Records',
          data: [14, 18, 9, 7, 12],
          backgroundColor: [
            'rgba(22, 150, 143, 0.85)',
            'rgba(16, 185, 129, 0.85)',
            'rgba(14, 165, 233, 0.85)',
            'rgba(224, 122, 30, 0.85)',
            'rgba(239, 68, 68, 0.85)'
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor }
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor, precision: 0 }
          }
        }
      }
    });
  }
}
