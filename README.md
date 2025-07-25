frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/                # Logos, images, CSS files
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Notification.jsx
│   │   └── Loader.jsx
│   │
│   ├── pages/                 # Pages mapped to routes
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── EmployeeDashboard.jsx
│   │   ├── EmployeesList.jsx
│   │   ├── EmployeeForm.jsx
│   │   ├── AttendanceReport.jsx
│   │   ├── LeaveApply.jsx
│   │   ├── LeaveRequests.jsx
│   │   ├── LeaveHistory.jsx
│   │   ├── PayrollSetup.jsx
│   │   ├── PayslipDownload.jsx
│   │   ├── TaskAssign.jsx
│   │   ├── TasksList.jsx
│   │   ├── Reports.jsx
│   │   ├── Settings.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/              # Axios calls and API helpers
│   │   ├── authService.js
│   │   ├── employeeService.js
│   │   ├── attendanceService.js
│   │   ├── leaveService.js
│   │   ├── payrollService.js
│   │   ├── taskService.js
│   │   ├── reportService.js
│   │   └── notificationService.js
│   │
│   ├── context/               # AuthContext, global state
│   │   ├── AuthProvider.jsx
│   │   ├── NotificationProvider.jsx
│   │
│   ├── App.js                 # Main app + routes
│   ├── index.js               # Entry point
│   ├── App.css                # Global styles
│   └── .env                   # REACT_APP_API_URL=http://localhost:5000/api
│
├── package.json
└── .gitignore




backend/
├── app.py                 # Flask entry point
├── config.py              # Config: DB, JWT, CORS
├── requirements.txt       # pip install -r requirements.txt
├── instance/              # Local instance config (optional)
│   └── config.py
│
├── /routes/               # Routes (API endpoints)
│   ├── __init__.py
│   ├── auth_routes.py
│   ├── employee_routes.py
│   ├── attendance_routes.py
│   ├── leave_routes.py
│   ├── payroll_routes.py
│   ├── task_routes.py
│   ├── report_routes.py
│   ├── notification_routes.py
│   └── settings_routes.py
│
├── /controllers/          # Business logic handlers
│   ├── __init__.py
│   ├── auth_controller.py
│   ├── employee_controller.py
│   ├── attendance_controller.py
│   ├── leave_controller.py
│   ├── payroll_controller.py
│   ├── task_controller.py
│   ├── report_controller.py
│   ├── notification_controller.py
│   └── settings_controller.py
│
├── /models/               # ORM or raw SQL models
│   ├── __init__.py
│   ├── user.py
│   ├── employee.py
│   ├── attendance.py
│   ├── leave.py
│   ├── payroll.py
│   ├── task.py
│   ├── notification.py
│   └── company_settings.py
│
├── /utils/                # Helpers (JWT, email, PDF, CSV)
│   ├── __init__.py
│   ├── jwt_handler.py
│   ├── email_service.py
│   ├── pdf_generator.py
│   ├── csv_exporter.py
│   └── logger.py
│
├── /migrations/           # DB migration scripts (optional)
│   ├── versions/
│   ├── env.py
│   └── README
│
└── .env                   # DB creds, JWT_SECRET, etc.
