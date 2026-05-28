import { prisma } from "../database/prisma";
import { Teacher } from "../models/teacher";
import { IRepository } from "../interfaces/IRepository";
import { createTeacherDto } from "../dtos/createTeacherDtos";

export class teacherRepository implements IRepository<Teacher> {
    async create(data: createTeacherDto): Promise<Teacher> {
        const teacher = await prisma.teacher.create({data})

        return new Teacher(
            teacher.id,
            teacher.name,
            teacher.email,
            teacher.subject,
            teacher.salary
        )
    }

    async findAll(): Promise<Teacher[]> {
        const teacher = await prisma.teacher.findMany()

        return teacher.map(teacher => 
            new Teacher(
                teacher.id,
                teacher.name,
                teacher.email,
                teacher.subject,
                teacher.salary
            )
        )
    }

    async findById(id: number): Promise<Teacher | null> {
        const teacher = await prisma.teacher.findUnique({where: {id}})

        if(!teacher) {
            return null
        }

        return new Teacher(
            teacher.id,
            teacher.name,
            teacher.email,
            teacher.subject,
            teacher.salary
        )
    }
}