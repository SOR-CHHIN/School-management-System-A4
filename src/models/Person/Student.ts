import { Assignment } from "../categories/Assignment";
import { Exam } from "../categories/Exam";
import { Feedback } from "../categories/Feedback";
import { Person } from "./Person";
import { Submission } from "../categories/Submission";
import { Timetable } from "../categories/TimeTable";
import { Teacher } from "./Teacher";

export class Student extends Person {
  public viewedTimetables: Timetable[] = [];
  public submittedAssignments: Submission[] = [];
  public feedbacks: Feedback[] = [];
  public teachers: Teacher[] = [];

  constructor(
    idNumber: string,
    name: string,
    email: string,
    public readonly enrolledDate: Date,
    public readonly currentGrade: string
  ) {
    super(idNumber, name, email);
  }

  // User Story 3: Submit assignments
  submitAssignment(assignment: Assignment, files: string[], submissionDate: Date = new Date()): void {
    if (!assignment || !files.length) {
      throw new Error("Assignment and at least one file must be provided.");
    }

    const submission = new Submission(
      assignment.title,
      submissionDate,
      files,
      0,
      ""
    );
    this.submittedAssignments.push(submission);

    console.log(
      `👩🏻‍🎓 Student ${this.name}:\n`,
      `  Grade Level: ${this.currentGrade}\n`,
      `  Submitted assignment: ${assignment.title}\n`,
      `  Files: ${files.join(", ")}\n`,
      `  On: ${submission.submissionDate.toLocaleDateString()} `,
      `at ${submission.submissionDate.toLocaleTimeString()} \n`
    );
  }

  // User Story 3: View grades for submitted assignments
  public getGrades(): string {
    if (this.submittedAssignments.length === 0) {
      return `No grades available for ${this.name}.`;
    }

    const gradesOutput = this.submittedAssignments.map((submission) =>
      `- Assignment: ${submission.submission}\n` +
      `  Grade: ${submission.score}\n` +
      `  Feedback: ${submission.feedback || "No feedback provided yet"}`
    ).join("\n");

    return `👩🏻‍🎓 Student ${this.name}'s Grades:\n${gradesOutput}`;
  }

  // Other methods (unchanged)
  viewTimetable(timetable: Timetable): void {
    this.viewedTimetables.push(timetable);
  }

  getTimetables(): Timetable[] {
    return this.viewedTimetables;
  }

  viewExamSchedule(exams: Exam[]): Exam[] {
    return exams;
  }

  getExamResults(
    exams: Exam[],
    results: { examId: number; score: number }[]
  ): { examId: number; score: number }[] {
    return results.filter((result) =>
      exams.some((exam) => exam.examId === result.examId)
    );
  }

  giveFeedback(feedback: Feedback, teacher:Teacher): void {
    this.feedbacks.push(feedback);
    console.log(`👩🏻‍🎓  Student ${this.name} gave feedback: ${feedback.feedback} by ${teacher.name}`);
  }

  public getSubmittedAssignments(): Submission[] {
    return this.submittedAssignments;
  }

  public getFeedbacks(): Feedback[] {
    return this.feedbacks;
  }
}