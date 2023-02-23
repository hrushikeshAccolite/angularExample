import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {

  constructor(private studentService: StudentServiceService){
  }
  students = this.studentService.getStudent();

  selectedStudent = {
    id: 0,
    name: '',
    gender: '',
    rank: 0
  }

  prevRank = 0;

  selectStudent(student : any){
    this.prevRank = student.rank;
    this.selectedStudent = student;
  }

  updateDetailsFromChild(s : any){
    console.log("updateDetailsFromChild");

    if(this.prevRank < s.rank){
      for(let stud of this.students){
        if(stud.rank <= s.rank && stud.rank > this.prevRank && stud.id != s.id){
          stud.rank--;
        }
      }
    } else {
      for(let stud of this.students){
        if(stud.rank >= s.rank && stud.rank < this.prevRank && stud.id != s.id){
          stud.rank++;
        }
      }
    }
  }

  sortByRankAsc(students:any){
    students.sort((a:any,b:any) => a.rank - b.rank);

  }

  sortByRankDesc(students:any){
    students.sort((a:any,b:any) => b.rank - a.rank);
  }

}
