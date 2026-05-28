import { Router } from "express";

import { CourseRepository } from "../repositories/courseRepository";

import { CourseService } from "../services/courseService";

import { CourseController } from "../controllers/courseController";

const router = Router();

const courseRepository = new CourseRepository();

const courseService = new CourseService(courseRepository);

const courseController = new CourseController(courseService);

router.post(
    "/",
    courseController.createCourse
);

router.get(
    "/",
    courseController.getCourses
);

router.get(
    "/:id",
    courseController.getCourse
);

export default router;