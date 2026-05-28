import { Mark } from "../models/mark";

import { MarkRepository } from "../repositories/markRepository";

import { AddMarkDto } from "../dtos/addMarkDto";
import { generateGrade } from "../utils/generateGrade";

export class MarkService {

    constructor(
        private markRepository: MarkRepository
    ) {}

    async addMark(
        data: AddMarkDto
    ): Promise<Mark> {

        if (data.score < 0 || data.score > 100) {
            throw new Error(
                "Score must be between 0 and 100"
            );
        }

        data.grade = generateGrade(
            data.score
        );

        return this.markRepository.create(data);
    }

    async getMarks(): Promise<Mark[]> {

        return this.markRepository.findAll();
    }

    async getMark(
        id: number
    ): Promise<Mark | null> {

        return this.markRepository.findById(id);
    }
}