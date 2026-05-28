import { Router } from "express";

import { EnrollmentRepository } from "../repositories/enrollmentRepository";

import { EnrollmentService } from "../services/enrollmentService";

import { EnrollmentController } from "../controllers/enrollmentController";

const router = Router();

const enrollmentRepository = new EnrollmentRepository();

const enrollmentService = new EnrollmentService(enrollmentRepository);

const enrollmentController = new EnrollmentController(enrollmentService);

router.post(
    "/",
    enrollmentController.enrollStudent
);

router.get(
    "/",
    enrollmentController.getEnrollments
);

router.get(
    "/:id",
    enrollmentController.getEnrollment
);

export default router;