import { studentRepository } from "../repositories/studentRepository";
import { IStudentService } from "../interfaces/IStudentService";
import { createStudentDto } from "../dtos/createStudentDtos";
import { student } from "../models/student";

export class studentService implements IStudentService {
    constructor(
        private studentRepository: studentRepository
    ) {}

    async createStudent(data: createStudentDto): Promise<student> {
        if (data.age < 5) {
            throw new Error ('Age must be greater than 5')
        }

        return this.studentRepository.create(data)
    }

    getStudents(): Promise<student[]> {
        return this.studentRepository.findAll()
    }

    getStudent(id: number): Promise<student | null> {
        return this.studentRepository.findById(id)
    }
}