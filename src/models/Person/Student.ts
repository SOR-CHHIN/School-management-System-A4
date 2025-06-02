import { Assignment } from "../Assignment";
import { Exam } from "../Exam";
import { Feedback } from "../Feedback";
import { Person } from "./Person";
import { Submission } from "../Submission";
import { Timetable } from "../TimeTable";

export class Student extends Person {
    private viewedTimetables: Timetable[] = [];
    private submittedAssignments: Submission[] = [];
    private feedbacks: Feedback[] = [];

    constructor(
        id_number: string,
        name: string,
        email: string,
        public enrolledDate: Date,
        public currentGrade: string
    ) {
        super(id_number, name, email);
    }

    // // User Story 1: As a student, I want to view my class timetable
    getStudentTimetable(): Timetable[] {
        return this.viewedTimetables;
    }

    viewTimetable(timetable: Timetable): void {
        this.viewedTimetables.push(timetable);
    }

    // User Story 3: As a student, I want to submit my assignments and see my grades
    submitAssignment(assignment: Assignment, files: string[]): void {
        const submission = new Submission(
            `${assignment.title} Submission`,
            new Date("2025-05-30T08:42:00+07:00"),
            files,
            100,
            "Pending"
        );
        this.submittedAssignments.push(submission);
        console.log(`Student ${this.name} submitted assignment: ${assignment.title}`);
    }

    // User Story 3: Get grades for the student
    getGrades(): { assignment: string, grade: number, feedback: string }[] {
        return this.submittedAssignments.map(submission => ({
            assignment: submission.submission,
            grade: submission.grade,
            feedback: submission.feedback
        }));
    }

    // User Story 5: As a student, I want to view my exam schedule and results
    viewExamSchedule(exams: Exam[]): Exam[] {
        return exams; // In a real system, this would filter exams relevant to the student
    }

    getExamResults(exams: Exam[], results: { examId: number, score: number }[]): { examId: number, score: number }[] {
        return results.filter(result => exams.some(exam => exam.examId === result.examId));
    }

    // User Story 6: As a student, I want to give feedback and ratings for subjects and teachers
    giveFeedback(feedback: Feedback): void {
        this.feedbacks.push(feedback);
        console.log(`Student ${this.name} gave feedback: ${feedback.feedback}`);
    }

    getSubmittedAssignments(): Submission[] {
        return this.submittedAssignments;
    }

    getViewedTimetables(): Timetable[] {
        return this.viewedTimetables;
    }
}