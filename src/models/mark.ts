import { student } from "./student";
import { Course } from "./course";

export class Mark {

    constructor(
        public id: number,
        public score: number,
        public grade: string,
        public student: student,
        public course: Course
    ) {}

    isPassed(): boolean {
        return this.score >= 40;
    }
}