# AdminPro - Modern Responsive Enterprise Admin Dashboard

A complete, production-ready, highly responsive Admin Dashboard built using **pure HTML5, CSS3, vanilla JavaScript, Bootstrap 5, jQuery, jQuery DataTables, and CKEditor 5**.

> **Note:** Strictly developed without React, Angular, Vue, Next.js, Vite, or frontend build frameworks. Runs out of the box in any modern web browser.

---

## 🚀 Key Highlights & Features

- **Standard Modern Web Stack**: Pure HTML5, CSS3, Bootstrap 5.3, and modular JavaScript.
- **Client-Side Persistent Database (`assets/js/db.js`)**: Built-in reactive `localStorage` database layer pre-seeded with rich, realistic mock data for records, users, articles, contact submissions, and audit logs. All CRUD changes, additions, and deletions persist across page reloads.
- **jQuery DataTables Integration**:
  - Global real-time search & sorting
  - Responsive table layout with mobile collapse support
  - Custom page length selection: 10, 25, 50, 100 rows
  - Multi-criteria status and date range filtering
  - Row selection checkboxes with "Select All"
  - Bulk delete with SweetAlert2 confirmation
  - One-click HTML5 exports: **CSV**, **Excel (.xlsx)**, **Print**, and **Clipboard Copy**
- **Rich-Text Editing with CKEditor 5**:
  - Integrated into Add/Edit News, About Us CMS, and Contact Us
  - Supports headings, bold/italic formatting, block quotes, formatted tables, ordered and unordered lists, and clean HTML source output
  - Content loading in edit mode and submission synchronization
- **Spreadsheet Import Pipeline**:
  - Client-side Excel (`.xlsx`, `.xls`) parsing via **SheetJS**
  - High-performance CSV parsing via **Papa Parse**
  - Drag-and-drop file upload zone with file size & format validation
  - Row-level validation errors and duplicate SKU detection
  - Summary metrics: Total rows, Valid count, Error count
  - Sample CSV and Excel template generation and download
  - Two-stage confirmation before saving into the database
- **Interactive Analytics**:
  - **Chart.js** line charts for monthly revenue and volume trends
  - Dynamic category distribution bar chart synchronized with DB records
  - Real-time audit activity log timeline
- **Authentication & Security Guard**:
  - Route protection guard (`Auth.requireAuth()`)
  - Login page with show/hide password toggle and "Remember Me"
  - Convenient 1-click **Demo Auto-fill** button (`admin@adminpro.io` / `admin123`)
  - Forgot password with email recovery simulation
  - Reset password with real-time password strength meter
  - In-dashboard Change Password page
- **Light & Dark Theme**:
  - Built-in theme switcher with instant CSS variable updates and persistent storage in `localStorage`.

---

## 📁 Directory & File Architecture

```text
admin-dashboard/
│
├── index.html                   # Application entry point & authentication redirect
├── login.html                   # Login page with demo credentials helper
├── forgot-password.html         # Password recovery email request
├── reset-password.html          # New password setup with strength meter
├── change-password.html         # In-dashboard password modification
├── dashboard.html               # Main executive analytics dashboard
│
├── data-list.html               # All records listing via jQuery DataTables
├── data-form.html               # Add & Edit record form with image preview
├── data-preview.html            # Record details & preview view
├── import-data.html             # Drag-and-drop CSV / Excel import tool
│
├── user-list.html               # User listing with role badges & DataTables
├── user-form.html               # Add & Edit user account form
├── user-profile.html            # User profile overview with audit history
├── edit-profile.html            # Edit personal profile information & photo
│
├── news-list.html               # News & article listing via jQuery DataTables
├── news-form.html               # Add & Edit article form with CKEditor 5
├── news-preview.html            # Public reader preview for articles
├── about-us.html                # CMS editor for About Us content & live preview modal
├── contact-us.html              # CMS editor for contact details & test form simulator
├── contact-submissions.html     # Contact inquiries DataTable with message modal
│
├── 404.html                     # Custom 404 Page Not Found error page
├── access-denied.html           # Custom 403 Forbidden / Access Denied page
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Core design system, variables, layouts, and dark theme
│   │   ├── responsive.css       # Mobile & tablet breakpoints and offcanvas drawers
│   │   └── datatable-custom.css # DataTables styling, pagination, & button overrides
│   │
│   ├── js/
│   │   ├── app.js               # Global application init, route guards, & formatters
│   │   ├── auth.js              # Session manager, login, logout, & route protection
│   │   ├── db.js                # LocalStorage client database service & initial seed data
│   │   ├── sidebar.js           # Sidebar toggle, active page detector, & theme switcher
│   │   ├── dashboard.js         # KPI computation, Chart.js charts, & activity feeds
│   │   ├── datatable-config.js  # Unified DataTables configuration, filters, & bulk delete
│   │   ├── data-management.js   # CRUD operations for general records
│   │   ├── user-management.js   # CRUD operations for users & profiles
│   │   ├── news-management.js   # CRUD operations for news & CKEditor integration
│   │   ├── import-export.js     # SheetJS & Papa Parse file parsing, preview, & validation
│   │   ├── form-validation.js   # Form validation, image preview, & slug generator
│   │   └── notifications.js     # SweetAlert2 toast, alert, and confirmation dialogs
│   │
│   └── images/
│       └── logo.svg             # Crisp SVG brand vector logo
│
└── README.md                    # Project documentation & usage guide
```

---

## 🛠️ Technology Stack & Libraries

| Library | Version / Source | Purpose |
| :--- | :--- | :--- |
| **Bootstrap** | 5.3.3 CDN | Responsive layout grid, cards, modals, dropdowns |
| **Bootstrap Icons** | 1.11.3 CDN | Comprehensive UI iconography |
| **jQuery** | 3.7.1 CDN | DOM operations and DataTables library core |
| **jQuery DataTables** | 1.13.8 CDN | High-performance search, sort, pagination tables |
| **DataTables Buttons** | 2.4.2 CDN | CSV, Excel, Print, and Copy export buttons |
| **CKEditor 5** | 41.1.0 Classic CDN | Rich text WYSIWYG authoring for news and CMS |
| **SweetAlert2** | 11 CDN | Confirmation dialogs, toasts, and alert modals |
| **Chart.js** | 4.4.2 CDN | Line and bar charts for dashboard analytics |
| **SheetJS (xlsx)** | 0.18.5 CDN | Browser-side Excel (`.xlsx`, `.xls`) file parsing & export |
| **Papa Parse** | 5.4.1 CDN | High-throughput CSV parsing |
| **Flatpickr** | 4.6.13 CDN | Single date and date range selection pickers |

---

## 💻 How to Run the Project

No Node.js compilation, npm installation, or build tools are required!

### Option 1: Direct Browser Launch
1. Open the project folder in File Explorer.
2. Double-click on `index.html` or `login.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option 2: Using Any Local Static Server
If you prefer running through a local HTTP server:
```bash
# Using Python:
python -m http.server 8000

# Using Node (npx serve or http-server):
npx serve .
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 🔑 Demo Access Credentials

The application includes sample credentials configured for quick testing:

- **Email**: `admin@adminpro.io`
- **Password**: `admin123`
- **Role**: Super Admin

Alternatively, click the **Auto-fill** button located directly on the `login.html` page to populate the credentials instantly.

---

## 🧪 Testing Verification Checklist

1. **Authentication Flow**:
   - Access `login.html`, click **Auto-fill**, and sign in. You will be redirected to `dashboard.html`.
   - Access `forgot-password.html` to test the recovery link simulation.
   - Access `reset-password.html` to test password strength calculation.
   - Sign out via the top navbar profile menu or sidebar link.
2. **Dashboard Analytics**:
   - Verify KPI cards update automatically from the DB record counts.
   - View interactive monthly performance line chart and category distribution bar chart.
   - Check real-time audit logs in the activity timeline.
3. **DataTables CRUD**:
   - Navigate to `data-list.html`.
   - Test global search, status filtering, category filtering, and date range filtering.
   - Click column headers to verify multi-column sorting.
   - Select multiple rows and click **Delete Selected** to test bulk deletion with SweetAlert2.
   - Test **Excel**, **CSV**, **Print**, and **Copy** export buttons.
   - Click **Add Record** (`data-form.html`), upload an image to see live preview, fill out fields, and submit.
   - Click **Edit** on any row to test pre-population and updating.
   - Click **Preview** (`data-preview.html`) to view the detailed summary card.
4. **Data Import Pipeline**:
   - Navigate to `import-data.html`.
   - Click **Sample CSV** or **Sample Excel** to download the pre-formatted template.
   - Drag and drop the downloaded template into the upload dropzone.
   - Inspect the validation table, row statuses, and duplicate detection.
   - Click **Confirm & Import** to commit records to the database.
5. **News & CKEditor 5**:
   - Navigate to `news-form.html`.
   - Type a title to test real-time URL slug auto-generation.
   - Format content using the CKEditor 5 rich-text toolbar (headings, bold, lists, tables).
   - Save the article and view it in `news-list.html` and `news-preview.html`.
6. **CMS Pages**:
   - Open `about-us.html`, edit content with CKEditor, and click **Live Page Preview**.
   - Open `contact-us.html`, submit a message via the **Test Contact Form**, and verify it appears in `contact-submissions.html`.
7. **Theme Switcher**:
   - Click the moon/sun icon in the top navigation bar to toggle between Light and Dark mode.

