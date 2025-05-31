export class Exam {
    constructor(
        public examId: number,
        public examDate: Date,
        public room: string
    ) {
        this.examId = examId;
        this.examDate = examDate
        this.room = room;
    }
}