
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
    "PNC School",
    "1234 Sorla Street371",
    "contact@techhigh.edu",
    "+855-123-4567"
  );
  console.log(`🏫 School created: ${mySchool.name} at ${mySchool.address}`);
  
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
  const studentTimetable = student.getTimetables(); 
  console.log(`================ Student Timetable =================`);
  console.log('📚 Student Timetable:');
  
  console.log(
    `${studentTimetable[0].timetable} ` ,
    `by teacher ${teacher.name} on ${timetableEntry.dayOfWeek} ` ,
    `at ${timetableEntry.time} in ${timetableEntry.room} ` ,
    `for student in ${classroom.room}.\n`
  );

  // User Story 2: Teacher uploads study materials and assignment
  console.log(`================ Teacher Uploads =================`);
  const material = new Material(
        "             OOP_C2_S2_Practices.pdf",
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
  console.log('================ Teacher Assignment =================\n');
  
  teacher.uploadAssignment(assignment);
    console.log(`================ Student Grades =================\n`);
  // User Story 3: Student submits assignment and views grades
  student.submitAssignment(assignment, ["answers.pdf"], new Date("2025-05-30T08:42:00+07:00"));
  const submission = student.getSubmittedAssignments()[0];
  submission.score = 85;
  submission.feedback = "Well done, but review question 3 for improvement.\n";
  const grades = student.getGrades();
  console.log(grades);

console.log(`================ Admin Assigns Teacher to Subject =================\n`);

  // User Story 4: Admin assigns subjects and teachers to students
  admin.assignTeacherToSubject(teacher, subject, classroom);
  
  
  console.log(`================ Student Exam Schedule and Results =================\n`);
  
  // User Story 5: Student views exam schedule and results
  const exam = new Exam(
    1,
    new Date("2025-06-10T09:00:00+07:00"),
    "Room B12",
    "OOP Final Exam"
  );
  const exams = student.viewExamSchedule([exam]);
  console.log(
    `📆 Exam schedule: ` 
     
  );
  console.log(`           📝 Subject: ${exam.subject} \n` ,
    `          📆 Exam Date:${exams[0].examDate.toLocaleDateString()} 
           🏨 Students class: ${classroom.room}\n` );
  
  
  const examResults = student.getExamResults([exam], [{ examId: 1, score: 90}]);
  console.log(`👩🏻‍🎓  Student ${student.name}'s exam results:`,examResults);

  // User Story 6: Student provides feedback
  const feedback = new Feedback(
    "Great class you should know about OOP concepts and practices",
    5,
    "I learned a lot about OOP. I appreciate the teacher's effort",
    new Date("2025-05-30T08:42:00+07:00"),
    // 'YEN YON' // Teacher's name
    
  );
  student.giveFeedback(feedback, teacher);
  console.log(
    
    `👩🏻‍🎓  Student ${student.name} provided feedback: ${feedback.comment} `,
    `with rating ${feedback.rating}` 
  );

  // // User Story 7: Admin views all students and teachers
  // console.log(`================ Admin Views Students and Teachers =================\n`);
  // const allStudents = mySchool.getStudents();
  // const allTeachers = mySchool.getTeachers();
  // console.log(`👩🏻‍🏫 Admin ${admin.name} is viewing all students and teachers:`);


  