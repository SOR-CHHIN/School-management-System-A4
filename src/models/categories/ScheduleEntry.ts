export class ScheduleEntry {
    constructor(
        public dayOfWeek: string,
        public time: string,
        public room: string
    ) {
        this.dayOfWeek = dayOfWeek;
        this.time = time;
        this.room = room;
    }

    getScheduleEntry(): string {
        return `${this.dayOfWeek} at ${this.time} in ${this.room}`;
    }
}