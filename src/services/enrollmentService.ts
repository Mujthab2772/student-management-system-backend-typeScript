import { Enrollment } from "../models/enrollment";

import { EnrollmentRepository } from "../repositories/enrollmentRepository";

import { EnrollStudentDto } from "../dtos/createEnrollStudentDto";

export class EnrollmentService {

    constructor(
        private enrollmentRepository: EnrollmentRepository
    ) {}

    async enrollStudent(
        data: EnrollStudentDto
    ): Promise<Enrollment> {

        return this.enrollmentRepository.create(data);
    }

    async getEnrollments(): Promise<Enrollment[]> {

        return this.enrollmentRepository.findAll();
    }

    async getEnrollment(
        id: number
    ): Promise<Enrollment | null> {

        return this.enrollmentRepository.findById(id);
    }
}