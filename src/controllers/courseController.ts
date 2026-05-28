import { Request, Response } from "express";

import { CourseService } from "../services/courseService";

export class CourseController {

    constructor(
        private courseService: CourseService
    ) {}

    createCourse = async (
        req: Request,
        res: Response
    ) => {

        try {

            const course =
                await this.courseService
                    .createCourse(req.body);

            res.status(201).json(course);

        } catch (error) {

            res.status(400).json({
                message: (error as Error).message
            });
        }
    };

    getCourses = async (
        req: Request,
        res: Response
    ) => {

        const courses =
            await this.courseService
                .getCourses();

        res.json(courses);
    };

    getCourse = async (
        req: Request,
        res: Response
    ) => {

        const id = Number(req.params.id);

        const course =
            await this.courseService
                .getCourse(id);

        if (!course) {

            res.status(404).json({
                message: "Course not found"
            });

            return;
        }

        res.json(course);
    };
}