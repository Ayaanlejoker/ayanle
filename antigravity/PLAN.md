# Enterprise E-Learning Platform Implementation Plan

## 1. Project Setup
- [x] Initialize NestJS Backend (`backend`)
- [x] Initialize Next.js Frontend (`frontend`)
- [ ] Setup Monorepo workspace (Optional, currently separate folders)

## 2. Backend (NestJS + Prisma + MySQL)
- [ ] Configure Database Connection (MySQL)
- [ ] Define Prisma Schema
    - Users, Courses, Lessons, Enrollments, Exams, Questions, Payments
- [ ] Run Prisma Migrations
- [ ] Implement Authentication Module
    - JWT Strategy
    - RBAC Guards (Admin, Instructor, Student)
- [ ] Implement Core Modules
    - User Management
    - Course Management (CRUD, Video handling)
    - Enrollment System
    - Exam System
    - Payment Module

## 3. Frontend (Next.js + Tailwind)
- [ ] Setup UI Components (Shadcn/UI or Custom Tailwind components)
- [ ] Public Pages
    - Landing Page
    - Course Listing
    - Course Details
- [ ] Authentication Pages
    - Login
    - Register
- [ ] Dashboards
    - Student Dashboard (My Courses, Progress)
    - Instructor Dashboard (Course Management, Analytics)
    - Admin Dashboard (User Management, Platform Overview)
- [ ] Lesson Player (Video, Quizzes)

## 4. Integration
- [ ] Connect Frontend to Backend API
- [ ] Handle Video Uploads (Mock or simple URL)
- [ ] Handle Payments (Mock)

## 5. Deployment / Final Polish
- [ ] Environment Variables
- [ ] Build & Production Checks
