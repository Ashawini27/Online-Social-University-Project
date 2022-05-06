export class Course {
  name!: String;
  disc!: String;
  lastOpened?: Date;
  progress?: number;
  id!: String;
  isMyCourse: boolean = false;
  tags!: String[];

}
