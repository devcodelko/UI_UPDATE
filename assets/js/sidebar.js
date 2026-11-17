/**
 * AdminPro - Sidebar, Navigation, & Theme Management
 */

(function () {
  'use strict';

  const THEME_STORAGE_KEY = 'adminpro_theme';
  const SIDEBAR_STORAGE_KEY = 'adminpro_sidebar_collapsed';

  // Apply Theme from storage immediately to prevent flicker
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
  document.documentElement.setAttribute('data-bs-theme', savedTheme);

  // Apply Collapsed state if saved
  const savedCollapsed = localStorage.getItem(SIDEBAR_STORAGE_KEY) === 'true';
  if (savedCollapsed && window.innerWidth >= 992) {
    document.body.classList.add('sidebar-collapsed');
  }

  document.addEventListener('DOMContentLoaded', function () {
    initSidebar();
    initThemeToggle();
    highlightActiveMenu();
    updateHeaderUserProfile();
    initCollapsedFlyouts();
  });

  // Initialize Sidebar Toggles & Backdrop
  function initSidebar() {
    const toggleBtns = document.querySelectorAll('.sidebar-toggle-btn');
    const backdrop = document.querySelector('.sidebar-backdrop');
    const closeBtns = document.querySelectorAll('.sidebar-close-btn');

    // Ensure all toggle buttons render the modern animated 3-bar morph icon
    toggleBtns.forEach(btn => {
      if (!btn.querySelector('.toggle-icon-bars')) {
        btn.innerHTML = '<span class="toggle-icon-bars"><span class="bar"></span><span class="bar"></span><span class="bar"></span></span>';
      }
      updateToggleState(btn);

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.innerWidth >= 992) {
          // Desktop Collapse / Expand
          document.body.classList.toggle('sidebar-collapsed');
          const isCollapsed = document.body.classList.contains('sidebar-collapsed');
          localStorage.setItem(SIDEBAR_STORAGE_KEY, isCollapsed);
        } else {
          // Mobile Drawer Open / Close
          document.body.classList.toggle('sidebar-open');
        }
        toggleBtns.forEach(updateToggleState);
      });
    });

    function updateToggleState(btn) {
      const isCollapsed = document.body.classList.contains('sidebar-collapsed');
      const isOpen = document.body.classList.contains('sidebar-open');
      if (isCollapsed || isOpen) {
        btn.classList.add('is-active');
        btn.setAttribute('title', isCollapsed ? 'Expand Sidebar' : 'Close Sidebar');
        btn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('title', 'Collapse Sidebar');
        btn.setAttribute('aria-expanded', 'true');
      }
    }

    // Mobile Close Button(s) inside sidebar
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        document.body.classList.remove('sidebar-open');
        toggleBtns.forEach(updateToggleState);
      });
    });

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        document.body.classList.remove('sidebar-open');
        toggleBtns.forEach(updateToggleState);
      });
    }

    // Close mobile sidebar on navigation link click
    const menuLinks = document.querySelectorAll('#sidebar .nav-link:not([data-bs-toggle])');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          document.body.classList.remove('sidebar-open');
          toggleBtns.forEach(updateToggleState);
        }
      });
    });
  }

  // Theme Switcher
  function initThemeToggle() {
    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    
    function updateIcons(theme) {
      themeBtns.forEach(btn => {
        const icon = btn.querySelector('i');
        if (icon) {
          if (theme === 'dark') {
            icon.className = 'bi bi-sun-fill text-warning';
          } else {
            icon.className = 'bi bi-moon-stars-fill';
          }
        }
      });
    }

    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
    updateIcons(currentTheme);

    themeBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const activeTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        updateIcons(newTheme);
        AppNotification.toast(`Switched to ${newTheme} mode`, 'info', 1500);
      });
    });
  }

  // Highlight Current Menu Item & Expand Submenu
  function highlightActiveMenu() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const cleanPath = currentPath === '' ? 'dashboard.html' : currentPath;

    const navLinks = document.querySelectorAll('#sidebar .nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href === cleanPath || (cleanPath === 'index.html' && href === 'dashboard.html'))) {
        link.classList.add('active');

        // Check if inside a collapse submenu
        const parentCollapse = link.closest('.collapse');
        if (parentCollapse) {
          parentCollapse.classList.add('show');
          const trigger = document.querySelector(`[data-bs-target="#${parentCollapse.id}"]`) || document.querySelector(`[href="#${parentCollapse.id}"]`);
          if (trigger) {
            trigger.setAttribute('aria-expanded', 'true');
            trigger.classList.add('active');
            trigger.classList.remove('collapsed');
          }
        }
      }
    });
  }

  // Update Topbar and Sidebar Profile Details with Active User
  function updateHeaderUserProfile() {
    if (typeof Auth === 'undefined') return;
    const user = Auth.getUser();

    // Topbar
    const topbarNames = document.querySelectorAll('.header-user-name');
    const topbarRoles = document.querySelectorAll('.header-user-role');
    const topbarAvatars = document.querySelectorAll('.header-user-avatar');

    topbarNames.forEach(el => el.textContent = user.name || 'Admin User');
    topbarRoles.forEach(el => el.textContent = user.role || 'Super Admin');
    topbarAvatars.forEach(el => {
      if (user.avatar) el.src = user.avatar;
    });

    // Logout handlers
    const logoutBtns = document.querySelectorAll('.btn-logout-trigger');
    logoutBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        Auth.logout();
      });
    });
  }

  // Collapsed Sidebar Floating Flyout Menu & Tooltips
  function initCollapsedFlyouts() {
    let flyoutEl = document.getElementById('sidebar-collapsed-flyout');
    if (!flyoutEl) {
      flyoutEl = document.createElement('div');
      flyoutEl.id = 'sidebar-collapsed-flyout';
      flyoutEl.className = 'sidebar-flyout';
      document.body.appendChild(flyoutEl);
    }

    let hideTimeout = null;

    function isCollapsed() {
      return document.body.classList.contains('sidebar-collapsed') && window.innerWidth >= 992;
    }

    function showFlyout(item) {
      if (!isCollapsed()) return;
      clearTimeout(hideTimeout);

      const link = item.querySelector('.nav-link');
      if (!link) return;

      const titleEl = link.querySelector('.menu-title');
      const title = titleEl ? titleEl.textContent.trim() : '';
      const iconEl = link.querySelector('.menu-icon');
      const iconClass = iconEl ? iconEl.className : '';

      // Check if this item has submenu links
      const submenuLinks = item.querySelectorAll('.submenu li a');

      let html = '';
      if (submenuLinks && submenuLinks.length > 0) {
        // Multi-level Dropdown Flyout
        html += `<div class="flyout-header"><i class="${iconClass}"></i><span>${title}</span></div>`;
        html += `<ul class="flyout-submenu">`;
        submenuLinks.forEach(subLink => {
          const isActive = subLink.classList.contains('active') ? ' active' : '';
          const href = subLink.getAttribute('href') || '#';
          const text = subLink.textContent.trim();
          html += `<li><a href="${href}" class="flyout-link${isActive}">${text}</a></li>`;
        });
        html += `</ul>`;
        flyoutEl.classList.remove('is-tooltip');
      } else {
        // Single Item Tooltip Badge
        html += `<div class="flyout-tooltip-label"><i class="${iconClass} me-2"></i>${title}</div>`;
        flyoutEl.classList.add('is-tooltip');
      }

      flyoutEl.innerHTML = html;
      flyoutEl.style.display = 'block';

      // Position calculating
      const rect = item.getBoundingClientRect();
      const sidebarWidth = 80;
      let topPos = rect.top;

      flyoutEl.style.left = (sidebarWidth + 8) + 'px';
      flyoutEl.style.top = topPos + 'px';

      // Keep within vertical viewport bounds
      const flyoutRect = flyoutEl.getBoundingClientRect();
      if (flyoutRect.bottom > window.innerHeight - 10) {
        topPos = Math.max(10, window.innerHeight - flyoutRect.height - 10);
        flyoutEl.style.top = topPos + 'px';
      }

      // Smooth entrance
      requestAnimationFrame(() => {
        flyoutEl.classList.add('is-visible');
      });
    }

    function scheduleHide() {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        flyoutEl.classList.remove('is-visible');
        setTimeout(() => {
          if (!flyoutEl.classList.contains('is-visible')) {
            flyoutEl.style.display = 'none';
          }
        }, 150);
      }, 150);
    }

    // Attach to all nav items in sidebar (including footer logout)
    const allItems = document.querySelectorAll('#sidebar .nav-item, #sidebar .sidebar-footer');
    allItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
        if (isCollapsed()) showFlyout(item);
      });
      item.addEventListener('mouseleave', function () {
        if (isCollapsed()) scheduleHide();
      });

      // Handle click when collapsed
      const link = item.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', function (e) {
          if (isCollapsed()) {
            const hasSubmenu = item.querySelector('.submenu');
            if (hasSubmenu) {
              e.preventDefault();
              e.stopPropagation();
              showFlyout(item);
            }
          }
        });
      }
    });

    // Flyout mouse events to allow hovering from icon into the flyout seamlessly
    flyoutEl.addEventListener('mouseenter', function () {
      clearTimeout(hideTimeout);
    });
    flyoutEl.addEventListener('mouseleave', function () {
      scheduleHide();
    });

    // Hide flyout on document click outside or scroll/resize
    document.addEventListener('click', function (e) {
      if (!flyoutEl.contains(e.target) && !e.target.closest('#sidebar')) {
        flyoutEl.classList.remove('is-visible');
        flyoutEl.style.display = 'none';
      }
    });

    window.addEventListener('resize', function () {
      if (!isCollapsed()) {
        flyoutEl.style.display = 'none';
        flyoutEl.classList.remove('is-visible');
      }
    });

    window.addEventListener('scroll', function () {
      if (isCollapsed()) {
        flyoutEl.style.display = 'none';
        flyoutEl.classList.remove('is-visible');
      }
    }, { passive: true });
  }
})();

