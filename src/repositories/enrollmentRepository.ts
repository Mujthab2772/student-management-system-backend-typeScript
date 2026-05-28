import { prisma } from "../database/prisma";

import { IRepository } from "../interfaces/IRepository";

import { Enrollment } from "../models/enrollment";
import { student } from "../models/student";
import { Teacher } from "../models/teacher";
import { Course } from "../models/course";

import { EnrollStudentDto } from "../dtos/createEnrollStudentDto";

export class EnrollmentRepository
implements IRepository<Enrollment> {

    async create(
        data: EnrollStudentDto
    ): Promise<Enrollment> {

        const enrollment =
            await prisma.enrollment.create({
                data,
                include: {
                    student: true,
                    course: {
                        include: {
                            teacher: true
                        }
                    }
                }
            });

        const Student = new student(
            enrollment.student.id,
            enrollment.student.name,
            enrollment.student.email,
            enrollment.student.age
        );

        const teacher = new Teacher(
            enrollment.course.teacher.id,
            enrollment.course.teacher.name,
            enrollment.course.teacher.email,
            enrollment.course.teacher.subject,
            enrollment.course.teacher.salary
        );

        const course = new Course(
            enrollment.course.id,
            enrollment.course.title,
            enrollment.course.code,
            enrollment.course.description,
            teacher
        );

        return new Enrollment(
            enrollment.id,
            Student,
            course,
            enrollment.createdAt
        );
    }

    async findAll(): Promise<Enrollment[]> {

        const enrollments =
            await prisma.enrollment.findMany({
                include: {
                    student: true,
                    course: {
                        include: {
                            teacher: true
                        }
                    }
                }
            });

        return enrollments.map(enrollment => {

            const Student = new student(
                enrollment.student.id,
                enrollment.student.name,
                enrollment.student.email,
                enrollment.student.age
            );

            const teacher = new Teacher(
                enrollment.course.teacher.id,
                enrollment.course.teacher.name,
                enrollment.course.teacher.email,
                enrollment.course.teacher.subject,
                enrollment.course.teacher.salary
            );

            const course = new Course(
                enrollment.course.id,
                enrollment.course.title,
                enrollment.course.code,
                enrollment.course.description,
                teacher
            );

            return new Enrollment(
                enrollment.id,
                Student,
                course,
                enrollment.createdAt
            );
        });
    }

    async findById(
        id: number
    ): Promise<Enrollment | null> {

        const enrollment =
            await prisma.enrollment.findUnique({
                where: { id },
                include: {
                    student: true,
                    course: {
                        include: {
                            teacher: true
                        }
                    }
                }
            });

        if (!enrollment) {
            return null;
        }

        const Student = new student(
            enrollment.student.id,
            enrollment.student.name,
            enrollment.student.email,
            enrollment.student.age
        );

        const teacher = new Teacher(
            enrollment.course.teacher.id,
            enrollment.course.teacher.name,
            enrollment.course.teacher.email,
            enrollment.course.teacher.subject,
            enrollment.course.teacher.salary
        );

        const course = new Course(
            enrollment.course.id,
            enrollment.course.title,
            enrollment.course.code,
            enrollment.course.description,
            teacher
        );

        return new Enrollment(
            enrollment.id,
            Student,
            course,
            enrollment.createdAt
        );
    }
}