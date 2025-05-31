import { TimetableEntry } from "./TimeTableEntry";


export class Timetable {
    constructor(
        public timetable: string,
        public entries: TimetableEntry[]
    ) {
        this.timetable = timetable;
        this.entries = entries;
    }
}