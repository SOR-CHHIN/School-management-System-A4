import { GradeLevels } from "../../enum/GradeLevel";
import { NameSubjects } from "../../enum/NameSubject";
import { Assignment } from "../categories/Assignment";
import { Classroom } from "../School/Classroom";
import { Feedback } from "../categories/Feedback";
import { Grade } from "../categories/Grade";
import { Material } from "../categories/Material";
import { Person } from "./Person";
export { Subject } from "../categories/Subject";
export {Student} from "./Student";

export class Teacher extends Person {
  public materials: Material[] = [];
  public assignments: Assignment[] = [];
  public classrooms: Classroom[] = [];

  constructor(
    id_number: string,
    name: string,
    email: string,
    public department: string
  ) {
    super(id_number, name, email);
  }

  // Upload study material (User Story 2)
  uploadMaterial(material: Material): void {
    this.materials.push(material);
    console.log(`🧑‍🏫 Teacher ${this.name} uploaded material:\n ${material.title} 
              Subject:${NameSubjects.ComputerScience}    
              On: ${new Date().toLocaleDateString()}  
              Time: ${new Date().toLocaleTimeString()} 
                `);
  }

  // Upload assignment (User Story 2)
  uploadAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
    console.log(`🧑‍🏫 Teacher ${this.name} uploaded assignment:
              Assignmet: ${assignment.title}
              Deadline on: ${assignment.dueDate.toLocaleDateString()}
              Upload on:  ${new Date().toLocaleDateString()}
              Time: ${new Date().toLocaleTimeString()} 
              Students:${GradeLevels.Year2} at PNC University\n`);
  }
  
  getUploadedMaterials(): Material[] {
    return this.materials;
  }

  getAssignments(): Assignment[] {
    return this.assignments;
  }
}
