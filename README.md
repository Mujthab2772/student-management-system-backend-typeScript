# Student Management System Backend

A scalable backend application built using TypeScript, Express.js, Prisma ORM, and SQLite following Repository Pattern and Clean Architecture principles.

---

# 🚀 Tech Stack

* TypeScript
* Node.js
* Express.js
* Prisma ORM
* SQLite

---

# 🏗️ Architecture

* Layered Architecture
* Repository Pattern
* DTO Pattern
* Clean Architecture
* OOP Principles
* SOLID Principles
* Dependency Injection

---

# 📦 Features

* Student CRUD Operations
* Teacher CRUD Operations
* Course Management
* Enrollment Management
* Marks Management
* Grade Calculation
* Prisma ORM Integration
* Relational Database Design
* Type-Safe APIs

---

# 📁 Project Structure

```txt
student-management-system/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│
│   ├── models/
│   │   ├── Person.ts
│   │   ├── Student.ts
│   │   ├── Teacher.ts
│   │   ├── Course.ts
│   │   ├── Enrollment.ts
│   │   └── Mark.ts
│   │
│   ├── interfaces/
│   │   ├── IRepository.ts
│   │   └── IStudentService.ts
│   │
│   ├── repositories/
│   │   ├── StudentRepository.ts
│   │   ├── TeacherRepository.ts
│   │   ├── CourseRepository.ts
│   │   ├── EnrollmentRepository.ts
│   │   └── MarkRepository.ts
│   │
│   ├── services/
│   │   ├── StudentService.ts
│   │   ├── TeacherService.ts
│   │   ├── CourseService.ts
│   │   ├── EnrollmentService.ts
│   │   └── MarkService.ts
│   │
│   ├── controllers/
│   │   ├── StudentController.ts
│   │   ├── TeacherController.ts
│   │   ├── CourseController.ts
│   │   ├── EnrollmentController.ts
│   │   └── MarkController.ts
│   │
│   ├── routes/
│   │   ├── studentRoutes.ts
│   │   ├── teacherRoutes.ts
│   │   ├── courseRoutes.ts
│   │   ├── enrollmentRoutes.ts
│   │   └── markRoutes.ts
│   │
│   ├── dtos/
│   │   ├── CreateStudentDto.ts
│   │   ├── CreateTeacherDto.ts
│   │   ├── CreateCourseDto.ts
│   │   ├── EnrollStudentDto.ts
│   │   └── AddMarkDto.ts
│   │
│   ├── utils/
│   │   ├── generateGrade.ts
│   │   └── validator.ts
│   │
│   ├── database/
│   │   └── prisma.ts
│   │
│   └── index.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---
🧠 OOP Concepts Used

# 🧩 SOLID Principles

| Principle | Usage                                             |
| --------- | ------------------------------------------------- |
| SRP       | Controllers, services, and repositories separated |
| OCP       | Generic repository interface                      |
| LSP       | Student and Teacher extend Person                 |
| ISP       | Service interfaces                                |
| DIP       | Dependency Injection                              |

---

# 🗃️ Database Models

* Student
* Teacher
* Course
* Enrollment
* Mark

---

# 🔗 Relationships

## Teacher → Course

One teacher can teach multiple courses.

## Student ↔ Course

Many-to-many relationship handled using Enrollment.

## Student + Course → Mark

Each mark belongs to one student and one course.

---

# ⚙️ Installation

## Install Dependencies

```bash
npm install
```

---

# 🔥 Run Development Server

```bash
npm run dev
```

---

# 🛠️ Prisma Commands

## Generate Prisma Client

```bash
npx prisma generate
```

## Run Migration

```bash
npx prisma migrate dev --name init
```

## Open Prisma Studio

```bash
npx prisma studio
```

---

# 📡 API Endpoints

## Students

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /students     |
| GET    | /students     |
| GET    | /students/:id |

---

## Teachers

| Method | Endpoint      |
| ------ | ------------- |
| POST   | /teachers     |
| GET    | /teachers     |
| GET    | /teachers/:id |

---

## Courses

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /courses     |
| GET    | /courses     |
| GET    | /courses/:id |

---

## Enrollments

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /enrollments     |
| GET    | /enrollments     |
| GET    | /enrollments/:id |

---

## Marks

| Method | Endpoint   |
| ------ | ---------- |
| POST   | /marks     |
| GET    | /marks     |
| GET    | /marks/:id |

---

# ✅ Future Improvements

* Authentication & Authorization
* JWT Integration
* Validation Middleware
* Pagination
* Docker Support
* Unit Testing
* Logging System
* Swagger API Documentation

---

# 👨‍💻 Author

Muhammed Mujthab
