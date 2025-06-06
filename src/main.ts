// school_management.ts
// Core imports for models and enums
import { Admin } from "./models/Person/Admin";
import { Assignment } from "./models/Assignment";
import { Classroom } from "./models/Classroom";
import { Exam } from "./models/Exam";
import { Feedback } from "./models/Feedback";
import { Grade } from "./models/Grade";
import { Material } from "./models/Material";
import { School } from "./models/School";
import { Student } from "./models/Person/Student";
import { Subject } from "./models/Subject";
import { Teacher } from "./models/Person/Teacher";
import { Timetable } from "./models/TimeTable";
import { TimetableEntry } from "./models/TimeTableEntry";
import { NameSubjects } from "./enum/NameSubject";


  // Creating school instance
   // Initialize school
  const mySchool = new School(
    "SCH001",
    "Tech High School",
    "1234 Elm Street",
    "contact@techhigh.edu",
    "+1234567890"
  );

  // Create admin
  const admin = new Admin("A001", "Rady Y", "rady.admin@school.com");
  mySchool.addAdmin(admin);

  // Create teacher
  const teacher = new Teacher("T001", "Yon Yen", "yenyon@school.com", "ComputerScience");
  mySchool.addTeacher(teacher);

  // Create student
  const student = new Student(
    "S001",
    "Rin Phanhapich",
    "rinphanhapich@school.com",
    new Date("2025-02-06"),
    "Year 2"
  );
  mySchool.addStudent(student);

  // User Story 1: Student views their timetable
  const subject = new Subject(
    NameSubjects.ComputerScience,
    "CS101",
    false,
    "Room B22",
    new Date("2025-06-02T09:00:00+07:00")
  );
  const classroom = new Classroom("WebB2025", teacher, subject, [student]);
  const timetableEntry = new TimetableEntry("Monday", "07:30-09:00", "Room B22");
  const timetable = new Timetable(NameSubjects.ComputerScience, [timetableEntry]);
  
  student.viewTimetable(timetable);
  const studentTimetable = student.getTimetables(); // Fixed method name
  console.log(
    `📅 Timetable: Subject: ${studentTimetable[0].timetable} ` +
    `by teacher ${teacher.name} on ${timetableEntry.dayOfWeek} ` +
    `at ${timetableEntry.time} in ${timetableEntry.room} ` +
    `for student in ${classroom.room}.\n`
  );

  // User Story 2: Teacher uploads study materials and assignment
  const material = new Material(
    "OOP_C2_S2_Practices.pdf",
    new Date("2025-05-30T08:42:00+07:00")
  );
  teacher.uploadMaterial(material);

  const assignment = new Assignment(
    "A001",
    "OOP Quiz",
    "Solve 10 OOP problems",
    new Date("2025-06-05T23:59:00+07:00"),
    100
  );
  teacher.uploadAssignment(assignment);

  // User Story 3: Student submits assignment and views grades
  student.submitAssignment(assignment, ["answers.pdf"], new Date("2025-05-30T08:42:00+07:00"));
  const submission = student.getSubmittedAssignments()[0];
  submission.score = 85; // Simulated grading
  submission.feedback = "Well done, but review question 3 for improvement.\n";
  const grades = student.getGrades();
  console.log(grades);

  // User Story 4: Admin assigns subjects and teachers to students
  admin.assignTeacherToSubject(teacher, subject, classroom);

  // User Story 5: Student views exam schedule and results
  const exam = new Exam(
    1,
    new Date("2025-06-10T09:00:00+07:00"),
    "Room B12",
    "OOP Final Exam"
  );
  const exams = student.viewExamSchedule([exam]);
  console.log(
    `Student ${student.name}'s exam schedule: ` +
    `Exam ID ${exams[0].examId} on ${exams[0].examDate.toISOString()}`
  );
  
  const examResults = student.getExamResults([exam], [{ examId: 1, score: 90 }]);
  console.log(`Student ${student.name}'s exam results:`, examResults);

  // User Story 6: Student provides feedback
  const feedback = new Feedback(
    "Great class!",
    5,
    "I learned a lot about OOP.",
    new Date("2025-05-30T08:42:00+07:00")
  );
  student.giveFeedback(feedback);
  console.log(
    `Student ${student.name} provided feedback: ${feedback.comment} ` +
    `with rating ${feedback.rating}` 
  );