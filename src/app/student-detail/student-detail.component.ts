import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  @Input() inputStudent : any;
  @Output() newStudent = new EventEmitter();

  constructor() { }

  newComponent = {rank: 0}
  sendToParent(inputStudent : any){
    inputStudent.rank = this.newComponent.rank;
    this.newStudent.emit(this.inputStudent);
  }
}
