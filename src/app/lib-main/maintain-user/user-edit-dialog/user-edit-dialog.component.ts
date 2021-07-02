import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/user_data';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.scss']
})
export class UserEditDialogComponent implements OnInit {

  user: User;
  constructor(public dialogRef: MatDialogRef<UserEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {

    this.user = data;
   }

  ngOnInit(): void {
  }

  onDiscard(): void {
    this.dialogRef.close();
  }
  storeUserData()
  {
    this.data = this.user;
    
  }

}
