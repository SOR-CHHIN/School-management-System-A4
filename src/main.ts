import { Admin } from "./models/Person/Admin";
import { Assignment } from "./models/Assignment";
import { Exam } from "./models/Exam";
import { Feedback } from "./models/Feedback";
import { Material } from "./models/Material";
import { Student } from "./models/Person/Student";
import { Subject } from "./models/Subject";
import { Teacher } from "./models/Person/Teacher";
import { Timetable } from "./models/TimeTable";
import { TimetableEntry } from "./models/TimeTableEntry";
import { NameSubjects } from "./enum/NameSubject";
import { Grade } from "./models/Grade";
import { LetterGrade } from "./enum/LetterGrade";


// Create an Admin
const admin = new Admin("A001", "Rady Y", "rady.admin@school.com");

// Create a Teacher
const teacher = new Teacher("T001", "Yon Yen", "yenyon@school.com", "Mathematics");

// Create a Student
const student = new Student("S001", "phanhapich rin", "phanhapich.rin@school.com", new Date("2025-02-06"), "A");

// User Story 4: Admin assigns subjects and teachers to students
// const mathSubject = new Subject(Subject.MATH, "MATH101", false, "Room 101", new Date("2025-06-02T09:00:00+07:00"));
// admin.assignTeacherToSubject(teacher, mathSubject, student);
// // User Story 1: Student views their timetable
const timetableEntry = new TimetableEntry("Monday", "07:30-09:00", "Room B22");
const timetable = new Timetable(NameSubjects.ComputerScience, [timetableEntry]);
student.viewTimetable(timetable);
const studentTimetable = student.getStudentTimetable();
console.log(`The timetable : Subject: ${studentTimetable[0].timetable} by teacher ${teacher.name} on ${timetableEntry.dayOfWeek} at ${timetableEntry.time} in ${timetableEntry.room}`);

// User Story 2: Teacher uploads study materials
const material = new Material("OOP: C2.S2.Practices.PDF", new Date("2025-05-30T08:42:00+07:00"));
teacher.uploadMaterial(material);
// Teacher uploads an assignment
const assignment = new Assignment("A001", "OOP Quiz", "Solve 10 OOP problems", new Date("2025-06-05T23:59:00+07:00"), 100);
teacher.uploadAssignment( assignment);




// User Story 3: Student submits an assignment and views grades
// const assignment = new Assignment("A001", "Algebra Quiz", "Solve 10 algebra problems", new Date("2025-06-05T23:59:00+07:00"), 100);



student.submitAssignment(assignment, ["answers.pdf"]);
// Get grades for the student
const grades = student.getGrades();

console.log(`Student ${student.name}'s grades:`, grades);

// User Story 5: Student views exam schedule and results
const exam = new Exam(1, new Date("2025-06-10T09:00:00+07:00"), "Room 101");
const exams = student.viewExamSchedule([exam]);
console.log(`Student ${student.name}'s exam schedule: Exam ID ${exams[0].examId} on ${exams[0].examDate.toISOString()}`);
const examResults = student.getExamResults([exam], [{ examId: 1, score: 90 }]);
console.log(`Student ${student.name}'s exam results:`, examResults);

// User Story 6: Student gives feedback
const feedback = new Feedback("Great class!", 5, "I learned a lot about algebra.", new Date("2025-05-30T08:42:00+07:00"));
student.giveFeedback(feedback);
