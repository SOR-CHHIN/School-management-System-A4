export class TimetableEntry {
    constructor(
        public dayOfWeek: string,
        public time: string,
        public room: string
    ) {
        this.dayOfWeek = dayOfWeek;
        this.time = time;
        this.room = room;
    }

    // getTimetableEntry(): string {
    //     return `${this.dayOfWeek} at ${this.time} in ${this.room}`;
    // }
}