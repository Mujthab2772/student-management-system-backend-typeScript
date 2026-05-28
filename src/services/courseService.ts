import { Course } from "../models/course";

import { CourseRepository } from "../repositories/courseRepository";

import { CreateCourseDto } from "../dtos/createCourseDtos";

export class CourseService {

    constructor(
        private courseRepository: CourseRepository
    ) {}

    async createCourse(
        data: CreateCourseDto
    ): Promise<Course> {

        if (data.title.length < 3) {
            throw new Error(
                "Course title is too short"
            );
        }

        if (data.code.length < 2) {
            throw new Error(
                "Invalid course code"
            );
        }

        return this.courseRepository.create(data);
    }

    async getCourses(): Promise<Course[]> {

        return this.courseRepository.findAll();
    }

    async getCourse(
        id: number
    ): Promise<Course | null> {

        return this.courseRepository.findById(id);
    }
}