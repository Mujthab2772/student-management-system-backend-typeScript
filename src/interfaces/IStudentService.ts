import { student } from "../models/student";
import { createStudentDto } from "../dtos/createStudentDtos";

export interface IStudentService {
    createStudent(data: createStudentDto): Promise<student>

    getStudents(): Promise<student[]>;

    getStudent(id: number): Promise<student | null>;
}