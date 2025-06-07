import { Person } from "./Person";
import { Student } from "./Student";
import { Subject } from "../categories/Subject";
import { Teacher } from "./Teacher";
import { NameSubjects } from "../../enum/NameSubject";
import { TimetableEntry } from "../categories/TimeTableEntry";
import { Classroom } from "../School/Classroom";


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

    // User Story 4: As an admin, I want to assign subjects and teachers to students
    assignTeacherToSubject(teacher: Teacher, subject: Subject,classroom:Classroom): void {
        console.log(`🧑🏼‍💻 Admin ${this.name} assigned teacher ${teacher.name} to subject: ${NameSubjects.ComputerScience} for student class ${classroom.room}\n`);
        this.assignTeacher(teacher);
        // this.manageEnrollment(); // Assuming the first student in the classroom for simplicity
        // In a real system, this would link the subject to the student and teacher
    }

    assignTeacher(teacher: Teacher): void {
        this.assignedTeachers.push(teacher);
    }

    manageEnrollment(student: Student): void {
        this.managedEnrollments.push(student);
    }

    getAssignedTeachers(): Teacher[] {
        return this.assignedTeachers;
    }

    getManagedEnrollments(): Student[] {
        return this.managedEnrollments;
    }
    // Additional methods for admin functionalities can be added here
    public getDetails(): string {
        return `Admin ${this.name} (ID: ${this.id_number}, Email: ${this.email})`;
    }
    
}