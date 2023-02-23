import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentServiceService {

  constructor() { }

  getStudent(){
    return [{
      id : 1,
      name : 'Rahul',
      gender : 'male',
      rank: 1
    }, {
      id : 2,
      name : 'Raj',
      gender : 'male',
      rank: 3
    },{
      id : 3,
      name : 'Tina',
      gender : 'female',
      rank: 2
    }, {
      id : 4,
      name : 'Shreya',
      gender : 'female',
      rank: 4
    }, {
      id : 5,
      name : 'Hrushikesh',
      gender : 'male',
      rank: 5
    }]
  }

  updateStudentRank(student: any){
    student.rank = student.rank + 1;
  }
}
