import { Person } from "./Person";
import { Student } from "./Student";
// import { Subject } from "./Subject";
import { Teacher } from "./Teacher";


export class Admin extends Person {
    private assignedTeachers: Teacher[] = [];
    private managedEnrollments: Student[] = [];

    constructor(
        id_number: string,
        name: string,
        email: string
    ) {
        super(id_number, name, email);
    }

    // // User Story 4: As an admin, I want to assign subjects and teachers to students
    // assignTeacherToSubject(teacher: Teacher, subject: Subject, student: Student): void {
    //     console.log(`Admin ${this.name} assigned teacher ${teacher.name} to subject ${subject.name} for student ${student.name}`);
    //     this.assignTeacher(teacher);
    //     this.manageEnrollment(student);
    //     // In a real system, this would link the subject to the student and teacher
    // }

    // assignTeacher(teacher: Teacher): void {
    //     this.assignedTeachers.push(teacher);
    // }

    // manageEnrollment(student: Student): void {
    //     this.managedEnrollments.push(student);
    // }

    // getAssignedTeachers(): Teacher[] {
    //     return this.assignedTeachers;
    // }

    // getManagedEnrollments(): Student[] {
    //     return this.managedEnrollments;
    // }
}