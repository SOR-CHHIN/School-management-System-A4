import { TimetableEntry } from "./TimeTableEntry";


export class Timetable {
    constructor(
        public timetable: string,
        public entries: TimetableEntry[]
    ) {
        this.timetable = timetable;
        this.entries = entries;
    }

      display(): void {
    console.log(" Class Timetable:");
    this.entries.forEach((entry) => {
      console.log(`${entry.dayOfWeek} - ${entry.time} - ${TimetableEntry} - Room: ${entry.room}`);
    });
  }
}