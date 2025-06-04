export class Exam {
    constructor(
        public examId: number,
        public examDate: Date,
        public room: string,
        public subject?: string,
    ) {
        this.examId = examId;
        this.examDate = examDate
        this.room = room;
    }
}