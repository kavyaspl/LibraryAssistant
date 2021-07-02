import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Inject } from '@angular/core';
import {User,USER_DATA} from '../../user_data';
import {Book, BOOK_DATA} from '../../book_data';
import { MatTableDataSource } from '@angular/material/table';
import { DateAdapter, MatDateFormats, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const GRI_DATE_FORMATS: MatDateFormats = {
  ...MAT_NATIVE_DATE_FORMATS,
  display: {
    ...MAT_NATIVE_DATE_FORMATS.display,
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions,
  }
};

@Component({
  selector: 'app-lib-detail',
  templateUrl: './lib-detail.component.html',
  styleUrls: ['./lib-detail.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS },
  ]
})

export class LibDetailComponent implements OnInit {
  myControl = new FormControl();
  member_no : number;
  hello:boolean = false;
  dataSource:any;
  enteredUser: User[] = [];
  enteredBook: Book[] = [];
  displayedColumns: string[] = ['name', 'category', 'course', 'class', 'branch','duration'];
  displayedColumns_Books: string[] = ['sno', 'bookno', 'title', 'author', 'rate','datetaken','datereturned','datedue'];
  editSelected:boolean = false;
  
  constructor(private readonly adapter: DateAdapter<Date>) { 
    this.adapter.setLocale('fr');
  }
 
  ngOnInit(): void {
  }

  onEnter(member_no): void {
   this.hello= true;
   let user = USER_DATA.find(obj => obj.member_no == member_no);   
   this.enteredUser = [];
   this.enteredUser.push(user);
   this.enteredBook = BOOK_DATA.filter(obj => obj.member_no == member_no);   
   this.dataSource = this.enteredBook;
  }

  toggleEdit() {
  this.editSelected = !this.editSelected;
  console.log("hello");
  this.dataSource = new MatTableDataSource<any>(this.enteredBook);
  const length = 10 - this.dataSource._data._value.length;
  for (let i = 0; i < length; i++) 
  {
  this.dataSource._data._value.push(Object.create(null));
  }

  }

  onSave(){
    this.enteredBook = this.dataSource.data.filter(value => Object.keys(value).length !== 0);
  }

  onRowEnter(index, book_no){

    console.log(book_no);
    console.log(index);
    let book = BOOK_DATA.find(obj => obj.book_no == book_no); 
    this.enteredBook[index] = book;
    this.dataSource = this.enteredBook;
  }

}
