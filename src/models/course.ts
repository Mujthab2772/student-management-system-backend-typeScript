import { Teacher } from "./teacher";

export class Course {

    constructor(
        public id: number,
        public title: string,
        public code: string,
        public description: string,
        public teacher: Teacher
    ) {}
}