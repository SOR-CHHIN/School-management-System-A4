import { Student } from "./Person/Student";
import { Subject } from "./Subject";

export class Grade {
    constructor(
        private finalScore: GLfloat | undefined, 
        private letterGrade: string,
        public subjects: Subject[],
        public students: Student[]
    ){
            this.finalScore = finalScore;
            this.letterGrade = letterGrade;
            this.subjects = subjects;
            this.students = students;
    }
}