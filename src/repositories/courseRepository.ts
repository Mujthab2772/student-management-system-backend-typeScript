
import { prisma } from "../database/prisma";

import { IRepository } from "../interfaces/IRepository";

import { Course } from "../models/course";
import { Teacher } from "../models/teacher";

import { CreateCourseDto } from "../dtos/createCourseDtos";

export class CourseRepository
implements IRepository<Course> {

    async create(
        data: CreateCourseDto
    ): Promise<Course> {

        const course =
            await prisma.course.create({
                data,
                include: {
                    teacher: true
                }
            });

        const teacher = new Teacher(
            course.teacher.id,
            course.teacher.name,
            course.teacher.email,
            course.teacher.subject,
            course.teacher.salary
        );

        return new Course(
            course.id,
            course.title,
            course.code,
            course.description,
            teacher
        );
    }

    async findAll(): Promise<Course[]> {

        const courses =
            await prisma.course.findMany({
                include: {
                    teacher: true
                }
            });

        return courses.map(course => {

            const teacher = new Teacher(
                course.teacher.id,
                course.teacher.name,
                course.teacher.email,
                course.teacher.subject,
                course.teacher.salary
            );

            return new Course(
                course.id,
                course.title,
                course.code,
                course.description,
                teacher
            );
        });
    }

    async findById(
        id: number
    ): Promise<Course | null> {

        const course =
            await prisma.course.findUnique({
                where: { id },
                include: {
                    teacher: true
                }
            });

        if (!course) {
            return null;
        }

        const teacher = new Teacher(
            course.teacher.id,
            course.teacher.name,
            course.teacher.email,
            course.teacher.subject,
            course.teacher.salary
        );

        return new Course(
            course.id,
            course.title,
            course.code,
            course.description,
            teacher
        );
    }
}
