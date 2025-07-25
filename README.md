# erp

erp flowchart
Employee ERP System
├── 1. Authentication
│     ├── Employee Login/Register
│     │     ├── Input Credentials
│     │     ├── Backend Auth API
│     │     ├── Verify in MySQL
│     │     ├── JWT Session Token
│     │     └── Redirect to Employee Dashboard
│     ├── Admin/HR Login
│     │     ├── Input Admin Credentials
│     │     ├── Backend Auth API
│     │     ├── Verify in MySQL
│     │     ├── JWT Session Token
│     │     └── Redirect to Admin Dashboard
│     └── Role-Based Access Control
│           ├── Validate JWT & Role
│           ├── Grant Access to Modules
│           └── Redirect Unauthorized

├── 2. Dashboard
│     ├── Admin Dashboard
│     │     ├── View Total Employees
│     │     ├── View Leave Requests Summary
│     │     ├── Attendance Overview Chart
│     │     ├── Payroll Summary & Reports
│     └── Employee Dashboard
│           ├── Profile Summary
│           ├── Attendance Status
│           ├── Leave Status
│           ├── Payslip Download Button

├── 3. Employee Management
│     ├── Add/Edit/Delete Employee Form
│     ├── Assign Department & Role Dropdown
│     ├── View Employee Details Page

├── 4. Attendance Management
│     ├── Employee Mark Check-in/Check-out
│     ├── Backend Attendance API
│     ├── Store in MySQL Attendance Table
│     ├── Daily & Monthly Attendance Report
│     └── Late/Early Entry Notifications

├── 5. Leave Management
│     ├── Employee Apply Leave Form
│     ├── Leave Types Dropdown (Sick, Casual)
│     ├── HR/Manager Approval Workflow
│     ├── Update Status in DB
│     ├── Notify Employee
│     └── Leave History Report

├── 6. Payroll Management
│     ├── Admin Salary Setup Form
│     ├── Auto Salary Calculation Logic
│     ├── Bonus & Deduction Logic
│     ├── Generate Payslip (PDF)
│     ├── Store Payslip in DB
│     ├── Employee Download Payslip

├── 7. Task Management (Optional)
│     ├── HR/Admin Assign Task Form
│     ├── Assign to Employee
│     ├── Employee View Task
│     ├── Update Task Status (Pending, In Progress, Done)
│     ├── Set Deadlines
│     └── Notifications & Reminders

├── 8. Notifications / Alerts
│     ├── Leave Approved/Rejected Email
│     ├── Task Assigned Notification
│     ├── Payslip Generated Notification
│     ├── General Announcements

├── 9. Reports
│     ├── Generate Attendance Report (CSV/PDF)
│     ├── Generate Leave Report
│     ├── Payroll Report
│     ├── Export All to Excel/PDF

└── 10. Settings & Profile
      ├── Employee/HR Change Password
      ├── Edit Profile Details
      ├── Admin Company Settings (Company Name, Leave Policies)
      └── Upload Company Logo / Branding
