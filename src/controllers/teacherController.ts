import { Request, Response } from "express";
import { teacherService } from "../services/teacherService";
import { student } from "../models/student";

export class teacherController {
    constructor(private teacherservice: teacherService) {}

    createTeacher = async (req: Request, res: Response) => {
        try {
            const teacher = await this.teacherservice.createTeacher(req.body)

            res.status(201).json(teacher)
        } catch (error) {
            res.status(400).json({
                message: (error as Error).message
            })
        }
    }

    getTeachers = async (req: Request, res: Response) => {
        const teachers = await this.teacherservice.getTeachers()

        res.json(teachers)
    }

    getTeacher = async (req: Request, res: Response) => {
        const id = Number(req.params.id)

        const teacher = await this.teacherservice.getTeacher(id)

        if(!teacher) {
            res.status(404).json({
                message: "teacher not found"
            })
            return
        }
        res.json(teacher)
    }
}