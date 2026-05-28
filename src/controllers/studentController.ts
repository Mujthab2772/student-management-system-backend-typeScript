import { Request, Response } from "express";
import { studentService } from "../services/studentService";

export class studentController {
    constructor(private service: studentService) {}

    createStudent = async (req: Request, res: Response ) => {
        try {
            const Student = await this.service.createStudent(req.body)

            res.status(201).json(Student)
        } catch (error) {
            res.status(400).json({
                message: (error as Error).message
            })
        };
        
    }

    getStudents = async (req: Request, res: Response) => {
        const students = await this.service.getStudents()

        res.json(students)
    }

    getStudent = async (req: Request, res: Response) => {
        const id = Number(req.params.id)

        const Student = await this.service.getStudent(id)

        if(!Student) {
            res.status(404).json({
                message: "student not found"
            })
            return
        }
        res.json(Student)
    }
}