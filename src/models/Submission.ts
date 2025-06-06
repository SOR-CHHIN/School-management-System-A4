export class Submission {
    constructor(
        public submission: string,
        public submissionDate: Date,
        public files: string[],
        public score: number,
        public feedback: string
    ) {
        this.submission = submission;
        this.submissionDate = submissionDate;
        this.files = files;
        this.score = score;
        this.feedback = feedback;
    }
}