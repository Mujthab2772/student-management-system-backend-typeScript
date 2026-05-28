import { teacherRepository } from "../repositories/teacherRepository";
import { Teacher } from "../models/teacher";
import { createTeacherDto } from "../dtos/createTeacherDtos";

export class teacherService {
    constructor(
        private teacherRepo: teacherRepository
    ) {}

    async createTeacher(
        data: createTeacherDto
    ): Promise<Teacher> {
        if (data.salary <= 0) {
            throw new Error("salary must be greate than 0")
        }

        if(data.subject.length < 2) {
            throw new Error('invaild subject')
        }

        return this.teacherRepo.create(data)
    }

    async getTeachers(): Promise<Teacher[]> {
        return this.teacherRepo.findAll()
    }

    async getTeacher(id: number): Promise<Teacher | null> {
        return this.teacherRepo.findById(id)
    }
}