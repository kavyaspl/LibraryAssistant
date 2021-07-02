
export interface Book {
  book_no: number;
  title: string;
  author: string;
  rate: number;
  Date_take: any;
  Date_return: any;
  Date_due:any;
  availability: boolean;
  member_no: number;
}

export let BOOK_DATA: Book[] = [

    {
        "book_no": 123,
        "title": "Signals and Systems",
        "author": "prasanna",
        "rate": 120.00,
        "Date_take": "20/01/2021",
        "Date_return": "",
        "Date_due": "",
        "availability": false,
        "member_no" : 1
    },
    {
        "book_no" : 134,
        "title": "DCN",
        "author": "rohit",
        "rate": 60.00,
        "Date_take": "20/01/2021",
        "Date_return": "",
        "Date_due": "",
        "availability": false,
        "member_no" : 1
    },
    {
        "book_no" : 222,
        "title": "Mobile",
        "author": "Shweta",
        "rate": 120.00,
        "Date_take": "15/02/2021",
        "Date_return": "",
        "Date_due": "",
        "availability": false,
        "member_no": 2
    },
    {
        "book_no" : 333,
        "title": "Master Data",
        "author": "Arindam",
        "rate": 600.00,
        "Date_take": "30/01/2021",
        "Date_return": "",
        "Date_due": "",
        "availability": true,
        "member_no": null
    }

]