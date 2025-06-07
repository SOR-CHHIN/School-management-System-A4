 *******School Management System ******
 
Earlier this year, I enrolled in a new school to start my academic journey. First, I created a student account by providing my personal details and selecting my preferred classes. After registration, I was assigned to different subjects including Math, Science, and History.
Each subject has a name, code, assigned teacher, classroom location, and scheduled time. Some subjects are compulsory, while others are optional.
I could view my timetable online and received notifications before each class. The system also allowed me to download study materials uploaded by teachers.
After completing each lesson, we had assignments and quizzes. I submitted my work online, and the teacher graded them. I was able to see my grades and feedback.
Later, I had to take a midterm exam. The exam schedule was visible in the system, and I could see the exam room and date. After exams, I received my results and overall score report.
Finally, I gave feedback on one of the teachers and rated the subject to help the school improve its teaching quality.
User Stories
1.	As a student, I want to view my class timetable so that I know when and where my subjects take place.
2.	As a teacher, I want to upload study materials and assignments for students.
3.	As a student, I want to submit my assignments and see my grades..
4.	As an admin, I want to assign subjects and teachers to students.
5.	As a student, I want to view my exam schedule and results.
6.	As a student, I want to give feedback and ratings for subjects and teachers.
Assignment
1.	Make a list of the entities described in the story.
2.	Use a UML class diagram to define the structure and relationships between the entities.
(e.g., Student has many Subjects, each Subject has one Teacher, etc.)
3.	Create the OOP classes to handle the entities and their relations.
4.	Within your classes, write functions that will help with the user stories below. 

Example of methods related to a user story:
1. Class timetable
getStudentTimetable(student: Student): Timetable[]

2. Upload materials
uploadMaterial(subject: Subject, file: Material): void

3. Submit and grade assignments
submitAssignment(student: Student, assignment: Assignment): void

getGrades(student: Student): Grade[]

******* Note it’s just an example, many solutions are possible to fit with the user story ******
