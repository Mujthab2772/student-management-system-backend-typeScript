import { prisma } from "../database/prisma";

import { IRepository } from "../interfaces/IRepository";

import { Mark } from "../models/mark";
import { student } from "../models/student";
import { Teacher } from "../models/teacher";
import { Course } from "../models/course";

import { AddMarkDto } from "../dtos/addMarkDto";

export class MarkRepository
implements IRepository<Mark> {

    async create(
        data: AddMarkDto
    ): Promise<Mark> {

        const mark =
            await prisma.mark.create({
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
            mark.student.id,
            mark.student.name,
            mark.student.email,
            mark.student.age
        );

        const teacher = new Teacher(
            mark.course.teacher.id,
            mark.course.teacher.name,
            mark.course.teacher.email,
            mark.course.teacher.subject,
            mark.course.teacher.salary
        );

        const course = new Course(
            mark.course.id,
            mark.course.title,
            mark.course.code,
            mark.course.description,
            teacher
        );

        return new Mark(
            mark.id,
            mark.score,
            mark.grade,
            Student,
            course
        );
    }

    async findAll(): Promise<Mark[]> {

        const marks =
            await prisma.mark.findMany({
                include: {
                    student: true,
                    course: {
                        include: {
                            teacher: true
                        }
                    }
                }
            });

        return marks.map(mark => {

            const Student = new student(
                mark.student.id,
                mark.student.name,
                mark.student.email,
                mark.student.age
            );

            const teacher = new Teacher(
                mark.course.teacher.id,
                mark.course.teacher.name,
                mark.course.teacher.email,
                mark.course.teacher.subject,
                mark.course.teacher.salary
            );

            const course = new Course(
                mark.course.id,
                mark.course.title,
                mark.course.code,
                mark.course.description,
                teacher
            );

            return new Mark(
                mark.id,
                mark.score,
                mark.grade,
                Student,
                course
            );
        });
    }

    async findById(
        id: number
    ): Promise<Mark | null> {

        const mark =
            await prisma.mark.findUnique({
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

        if (!mark) {
            return null;
        }

        const Student = new student(
            mark.student.id,
            mark.student.name,
            mark.student.email,
            mark.student.age
        );

        const teacher = new Teacher(
            mark.course.teacher.id,
            mark.course.teacher.name,
            mark.course.teacher.email,
            mark.course.teacher.subject,
            mark.course.teacher.salary
        );

        const course = new Course(
            mark.course.id,
            mark.course.title,
            mark.course.code,
            mark.course.description,
            teacher
        );

        return new Mark(
            mark.id,
            mark.score,
            mark.grade,
            Student,
            course
        );
    }
}