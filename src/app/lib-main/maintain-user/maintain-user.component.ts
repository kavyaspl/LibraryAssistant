import { Component, OnInit } from '@angular/core';
import {User,USER_DATA} from '../../user_data';
import {Book, BOOK_DATA} from '../../book_data';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';


@Component({
  selector: 'app-maintain-user',
  templateUrl: './maintain-user.component.html',
  styleUrls: ['./maintain-user.component.scss']
})
export class MaintainUserComponent implements OnInit {
  myControl = new FormControl();
  member_no : number;
  member_name :any;
  category:any;
  courseduration:any;
  class:any;
  branch:any;
  hello:boolean = false;
  dataSource:any;
  enteredUser: User[] = [];
  newEntry:boolean = false;
  displayedColumns_Users: string[] = ['sno','member_no','member_name', 'category', 'courseduration', 'class', 'branch','star'];
 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  onSearch(member_no, member_name, category, branch,course_class)
  {
    this.newEntry = false;
    this.displayedColumns_Users = ['sno','member_no','member_name', 'category', 'courseduration', 'class', 'branch','star'];
    this.enteredUser = [];
    this.enteredUser = USER_DATA.filter(obj => ( (obj.member_no == member_no) || 
    (member_name?obj.member_name.toLowerCase().includes(member_name.toLowerCase()):0) &&
    (category?obj.category == category :0) &&
    (course_class?obj.class == course_class:0) &&   
    (branch?obj.branch.toLowerCase().includes(branch.toLowerCase()):0) ));   
    this.dataSource = this.enteredUser;
  }
  addNewUser()
  {
    this.newEntry = true;
    this.enteredUser = [];
    this.displayedColumns_Users = ['sno','member_no','member_name', 'category', 'courseduration', 'class', 'branch'];
    this.dataSource = new MatTableDataSource<any>(this.enteredUser);
    const length = 5;
    for (let i = 0; i < length; i++) 
    {
    this.dataSource._data._value.push(Object.create(null));
    }

  }
  editUser(element)
  {
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '250px',
      data: {
        member_no: element.member_no,
        member_name: element.member_name,
        category: element.category,
        course_duration: element.course_duration,
        course_year_start: element.course_year_start,
        course_year_end: element.course_year_end,
        class: element.class,
        branch: element.branch
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
         // logic to store the edited content
        
      }
    });
    

  }
  onSave()
  {
    USER_DATA.push(this.dataSource.filter(obj => obj!=null));
  }

}
