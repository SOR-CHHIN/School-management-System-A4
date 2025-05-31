export class Submission {
    constructor(
        public submission: string,
        public submissionDate: Date,
        public files: string[],
        public grade: number,
        public feedback: string
    ) {
        this.submission = submission;
        this.submissionDate = submissionDate;
        this.files = files;
        this.grade = grade;
        this.feedback = feedback;
    }
}