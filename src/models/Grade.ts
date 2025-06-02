import { LetterGrade } from "../enum/LetterGrade";
import { NameSubjects } from "../enum/NameSubject";
import { Student } from "./Person/Student";
import { Subject } from "./Subject";

export class Grade  {
    constructor(
        public finalScore: number, 
        public letterGrade: string,
        public subjects: Subject[],
        public students: Student[]
    ){
            this.finalScore = finalScore;
            this.letterGrade = letterGrade;
            this.subjects = subjects;
            this.students = students;
    }
}
