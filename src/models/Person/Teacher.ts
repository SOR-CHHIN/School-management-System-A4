import { GradeLevels } from "../../enum/GradeLevel";
import { NameSubjects } from "../../enum/NameSubject";
import { Assignment } from "../Assignment";
import { Grade } from "../Grade";
import { Material } from "../Material";
import { Person } from "./Person";

export class Teacher extends Person {
  public materials: Material[] = [];
  public assignments: Assignment[] = [];

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
    console.log(`${this.name} uploaded material: ${material.title} to the subject:${NameSubjects.ComputerScience} ,On: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} `);
  }

  // Upload assignment (User Story 2)
  uploadAssignment(assignment: Assignment): void {
    this.assignments.push(assignment);
    console.log(`${this.name} uploaded assignment: ${assignment.title},  deadline on: ${assignment.dueDate.toLocaleDateString()} for Students in ${GradeLevels.Year2},Upload on:  ${new Date().toLocaleDateString()},Time: ${new Date().toLocaleTimeString()} , for Students in ${GradeLevels.Year2} at PNC University`);
  }

  getUploadedMaterials(): Material[] {
    return this.materials;
  }

  getAssignments(): Assignment[] {
    return this.assignments;
  }
}
