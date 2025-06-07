
import { Teacher } from '../../models/Person/Teacher';
import { Student } from '../../models/Person/Student';
import { Subject } from '../categories/Subject';
import { TimetableEntry } from '../categories/TimeTableEntry';

export class Classroom {
    public room: string;
    public teacher: Teacher;
    public subject: Subject;
    public students: Student[];
    public timetableEntries: TimetableEntry[];

    constructor(room: string, teacher: Teacher, subject: Subject, students: Student[]) {
        this.room = room;
        this.teacher = teacher;
        this.subject = subject;
        this.students = students;
        this.timetableEntries = [];
    }

    public addTimetableEntry(entry: TimetableEntry): void {
        this.timetableEntries.push(entry);
    }

    public getSchedule(): TimetableEntry[] {
        return this.timetableEntries;
    }
}