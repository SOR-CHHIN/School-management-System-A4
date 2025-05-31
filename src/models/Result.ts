export class Result {
    constructor(
        private studentId: string,
        private examId: number,
        private score: GLfloat,
        private feedback: string
    ){
        this.studentId = studentId;
        this.examId = examId;
        this.score = score;
        this.feedback = feedback;
    }
}