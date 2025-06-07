import { Admin } from "./Person/Admin";
import { Teacher } from "./Person/Teacher";
import { Student } from "./Person/Student";
import { Timetable } from "./TimeTable";

export class School {
 public admins: Admin[] = [];
 public teachers: Teacher[] = [];
 public students: Student[] = [];
 public timetables: Timetable[] = [];

  constructor(
   
    public name: string,
    public address: string,
    public email: string,
    public phone: string
  ) {}

  public addAdmin(admin: Admin): void {
    if (!admin) throw new Error("Admin must be provided.");
    this.admins.push(admin);
  }

  public addTeacher(teacher: Teacher): void {
    if (!teacher) throw new Error("Teacher must be provided.");
    this.teachers.push(teacher);
  }

  public addStudent(student: Student): void {
    if (!student) throw new Error("Student must be provided.");
    this.students.push(student);
  }

  public addTimetable(timetable: Timetable): void {
    if (!timetable) throw new Error("Timetable must be provided.");
    this.timetables.push(timetable);
    console.log(`Added timetable for ${timetable} to ${this.name}.`);
  }

  public getAdmins(): Admin[] {
    return this.admins;
  }

  public getTeachers(): Teacher[] {
    return this.teachers;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getTimetables(): Timetable[] {
    return this.timetables;
  }
}