import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/book_data';

@Component({
  selector: 'app-book-edit-dialog',
  templateUrl: './book-edit-dialog.component.html',
  styleUrls: ['./book-edit-dialog.component.scss']
})
export class BookEditDialogComponent implements OnInit {

  book_no:any;
  title:any;
  author:any;
  rate:any;
  member_no:any;
  Date_take:any;
  Date_due:any;
  book:Book;

  constructor(public dialogRef: MatDialogRef<BookEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {

    this.book = data;
   }

  ngOnInit(): void {
  }
  onDiscard(): void {
    this.dialogRef.close();
  }
  storeBookData()
  {
    this.data.book_no = this.book.book_no;
    this.data.title = this.book.title;
    this.data.author = this.book.author;
    this.data.rate = this.book.rate;
    this.data.member_no = this.book.member_no;
    var unformattedDate = this.book.Date_take.toDateString().split(' '); // Date is input in std format. Conversion to format Month(3) DD,YYYY
    this.data.Date_take = unformattedDate[1] + ' ' + unformattedDate[2] + ',' + unformattedDate[3];
    unformattedDate = this.book.Date_due.toDateString().split(' '); // Date is input in std format. Conversion to format Month(3) DD,YYYY
    this.data.Date_due = unformattedDate[1] + ' ' + unformattedDate[2] + ',' + unformattedDate[3];
  }
}
