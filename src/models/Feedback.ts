export class Feedback {
    constructor(
        public feedback: string,
        public rating: number,
        public comment: string,
        public date: Date
    ) {
        this.feedback = feedback;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }
}