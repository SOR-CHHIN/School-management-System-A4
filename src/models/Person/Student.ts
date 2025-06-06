import { Assignment } from "../Assignment";
import { Exam } from "../Exam";
import { Feedback } from "../Feedback";
import { Person } from "./Person";
import { Submission } from "../Submission";
import { Timetable } from "../TimeTable";

export class Student extends Person {
 public viewedTimetables: Timetable[] = [];
 public submittedAssignments: Submission[] = [];
 public feedbacks: Feedback[] = [];

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
  public submitAssignment(assignment: Assignment, files: string[], submissionDate: Date = new Date()): void {
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
      `👩🏻‍🎓 Student ${this.name}:\n` ,
      `  Grade Level: ${this.currentGrade}\n` ,
      `  Submitted assignment: ${assignment.title}\n` ,
      `  Files: ${files.join(", ")}\n` +
      `  On: ${submission.submissionDate.toLocaleDateString()} ` ,
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
  public viewTimetable(timetable: Timetable): void {
    this.viewedTimetables.push(timetable);
  }

  public getTimetables(): Timetable[] {
    return this.viewedTimetables;
  }

  public viewExamSchedule(exams: Exam[]): Exam[] {
    return exams;
  }

  public getExamResults(
    exams: Exam[],
    results: { examId: number; score: number }[]
  ): { examId: number; score: number }[] {
    return results.filter((result) =>
      exams.some((exam) => exam.examId === result.examId)
    );
  }

  public giveFeedback(feedback: Feedback): void {
    this.feedbacks.push(feedback);
    console.log(`Student ${this.name} gave feedback: ${feedback.feedback}`);
  }

  public getSubmittedAssignments(): Submission[] {
    return this.submittedAssignments;
  }

  public getFeedbacks(): Feedback[] {
    return this.feedbacks;
  }
}