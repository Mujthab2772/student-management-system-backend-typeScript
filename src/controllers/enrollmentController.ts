import { Request, Response } from "express";

import { EnrollmentService } from "../services/enrollmentService";

export class EnrollmentController {

    constructor(
        private enrollmentService: EnrollmentService
    ) {}

    enrollStudent = async (
        req: Request,
        res: Response
    ) => {

        try {

            const enrollment =
                await this.enrollmentService
                    .enrollStudent(req.body);

            res.status(201).json(enrollment);

        } catch (error) {

            res.status(400).json({
                message: (error as Error).message
            });
        }
    };

    getEnrollments = async (
        req: Request,
        res: Response
    ) => {

        const enrollments =
            await this.enrollmentService
                .getEnrollments();

        res.json(enrollments);
    };

    getEnrollment = async (
        req: Request,
        res: Response
    ) => {

        const id = Number(req.params.id);

        const enrollment =
            await this.enrollmentService
                .getEnrollment(id);

        if (!enrollment) {

            res.status(404).json({
                message: "Enrollment not found"
            });

            return;
        }

        res.json(enrollment);
    };
}