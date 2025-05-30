import { Admin } from "./models/Person/Admin";
import { Assignment } from "./models/Assignment";
import { Exam } from "./models/Exam";
import { Feedback } from "./models/Feedback";
import { Material } from "./models/Material";
import { Student } from "./models/Person/Student";
import { Subject } from "./models/Subject";
import { Teacher } from "./models/Person/Teacher";
import { Timetable } from "./models/TimeTable";
// import { TimetableEntry } from "./models/TimetableEntry";

    // Create an Admin
    const admin = new Admin("A001", "John Admin", "john.admin@school.com");

    // Create a Teacher
    const teacher = new Teacher("T001", "Alice Smith", "alice@school.com", "Mathematics");

    // Create a Student
    const student = new Student("S001", "Bob Jones", "bob@school.com", new Date("2024-09-01"), "A");

    // User Story 4: Admin assigns subjects and teachers to students
    const mathSubject = new Subject(Subject.MATH, "MATH101", false, "Room 101", new Date("2025-06-02T09:00:00+07:00"));
    admin.assignTeacherToSubject(teacher, mathSubject, student);

    // User Story 2: Teacher uploads study materials
    const material = new Material("Algebra Basics PDF", new Date("2025-05-30T08:42:00+07:00"));
    teacher.uploadMaterial(mathSubject, material);

    // // User Story 1: Student views their timetable
    // const timetableEntry = new TimetableEntry("Monday", "09:00-10:00", "Room 101");
    // const timetable = new Timetable("Math Timetable", [timetableEntry]);
    // student.viewTimetable(timetable);
    // const studentTimetable = student.getStudentTimetable();
    // console.log(`Student ${student.name}'s timetable: ${studentTimetable[0].timetable}`);

    // // User Story 3: Student submits an assignment and views grades
    // const assignment = new Assignment("A001", "Algebra Quiz", "Solve 10 algebra problems", new Date("2025-06-05T23:59:00+07:00"), 100);
    // student.submitAssignment(assignment, ["answers.pdf"]);
    // teacher.gradeAssignment(assignment, 85, "Great work!");
    // const grades = student.getGrades();
    // console.log(`Student ${student.name}'s grades:`, grades);

    // // User Story 5: Student views exam schedule and results
    // const exam = new Exam(1, new Date("2025-06-10T09:00:00+07:00"), "Room 101");
    // const exams = student.viewExamSchedule([exam]);
    // console.log(`Student ${student.name}'s exam schedule: Exam ID ${exams[0].examId} on ${exams[0].examDate.toISOString()}`);
    // const examResults = student.getExamResults([exam], [{ examId: 1, score: 90 }]);
    // console.log(`Student ${student.name}'s exam results:`, examResults);

    // // User Story 6: Student gives feedback
    // const feedback = new Feedback("Great class!", 5, "I learned a lot about algebra.", new Date("2025-05-30T08:42:00+07:00"));
    // student.giveFeedback(feedback);
