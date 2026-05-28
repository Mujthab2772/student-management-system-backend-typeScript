import { prisma } from "../database/prisma";
import { student } from "../models/student";
import { IRepository } from "../interfaces/IRepository";
import { createStudentDto } from "../dtos/createStudentDtos";

export class studentRepository implements IRepository<student> {
    async create(data: createStudentDto): Promise<student> {
        const Student = await prisma.student.create({data})

        return new student(
            Student.id,
            Student.name,
            Student.email,
            Student.age
        );
    }

    async findAll(): Promise<student[]> {
        const Student = await prisma.student.findMany();

        return Student.map(students => 
            new student(
                students.id,
                students.name,
                students.email,
                students.age
            )
        )
    }

    async findById(id: number): Promise<student | null> {
        const Student = await prisma.student.findUnique({where: {id}})

        if(!Student) {
            return null
        }

        return new student (
            Student.id,
            Student.name,
            Student.email,
            Student.age
        )
    }
}