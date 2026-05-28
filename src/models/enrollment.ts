import { student } from "./student";
import { Course } from "./course";

export class Enrollment {

    constructor(
        public id: number,
        public student: student,
        public course: Course,
        public createdAt: Date
    ) {}
}