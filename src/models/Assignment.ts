export class Assignment {
    constructor(
        public assignmentId: string,
        public title: string,
        public description: string,
        public dueDate: Date,
        public maxScore: number
    ) {
        this.assignmentId = assignmentId;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.maxScore = maxScore;
    }
}