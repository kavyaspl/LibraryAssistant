import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Book, BOOK_DATA } from 'src/app/book_data';
import { BookEditDialogComponent } from './book-edit-dialog/book-edit-dialog.component';

@Component({
  selector: 'app-maintain-book',
  templateUrl: './maintain-book.component.html',
  styleUrls: ['./maintain-book.component.scss']
})
export class MaintainBookComponent implements OnInit {

  myControl = new FormControl();
  book_no:number;
  book_title:string;
  author:string;
  member_no:string;
  displayedColumns_Books: string[] = ['sno', 'bookno', 'title', 'author', 'rate','takenby','datetaken','datereturned','datedue','star'];
  dataSource:any;
  enteredBook: Book[] = [];
  newEntry:boolean = false;
  
  constructor(private readonly adapter: DateAdapter<Date>,public dialog: MatDialog) { 
    this.adapter.setLocale('fr');
  }
  ngOnInit(): void {
  }

  onSearch(book_no, book_title,author)
  {
    this.newEntry = false;
    this.displayedColumns_Books = ['sno', 'bookno', 'title', 'author', 'rate','takenby','datetaken','datereturned','datedue','star'];
    this.enteredBook = [];
    this.enteredBook = BOOK_DATA.filter(obj => ( (obj.book_no == book_no) || 
    ((book_title)?obj.title.toLowerCase().includes(book_title.toLowerCase()):0) ||
    
    ((author)?obj.author.toLowerCase().includes(author.toLowerCase()):0)));   
    this.dataSource = this.enteredBook;
  }
  addNewBook()
  {
    this.newEntry = true;
    this.displayedColumns_Books = ['sno', 'bookno', 'title', 'author', 'rate'];
    this.dataSource = new MatTableDataSource<any>(this.enteredBook);
    const length = 5;
    for (let i = 0; i < length; i++) 
    {
    this.dataSource._data._value.push(Object.create(null));
    }

  }
  editBook(element)
  {
    const dialogRef = this.dialog.open(BookEditDialogComponent, {
      width: '250px',
      data: {
        book_no: element.bookno,
        title: element.title,
        author: element.author,
        rate: element.rate,
        member_no: element.member_no,
        Date_Take:element.Date_take,
        Date_due:element.Date_due
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != null) {
        //BOOK_DATA.push(result); // logic to store the edited content
        
      }
    });
    

  }
  onSave()
  {
    BOOK_DATA.push(this.dataSource.filter(obj => obj!=null));
  }

}
