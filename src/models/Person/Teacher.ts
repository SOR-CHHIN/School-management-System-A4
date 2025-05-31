import { Assignment } from "../Assignment";
import { Material } from "../Material";
import { Subject } from "../Subject";
import { Person } from "./Person";
// import { Subject } from "./Subject";

export class Teacher extends Person {
    private uploadedMaterials: Material[] = [];
    private gradedAssignments: Assignment[] = [];
    name: any;

    constructor(
        id_number: string,
        name: string,
        email: string,
        public department: string
    ) {
        super(id_number, name, email);
    }

    // User Story 2: As a teacher, I want to upload study materials and assignments for students
    uploadMaterial(subject: Subject, material: Material): void {
        console.log(`Uploading material ${material.title} for subject ${subject.name}`);
        this.uploadedMaterials.push(material);
    }

    gradeAssignment(assignment: Assignment, grade: number, feedback: string): void {
        this.gradedAssignments.push(assignment);
        // Update the submission with grade and feedback (logic to be linked with Submission)
        console.log(`Graded assignment ${assignment.title} with score ${grade} and feedback: ${feedback}`);
    }

    getUploadedMaterials(): Material[] {
        return this.uploadedMaterials;
    }

    getGradedAssignments(): Assignment[] {
        return this.gradedAssignments;
    }
}