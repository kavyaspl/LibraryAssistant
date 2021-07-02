type Categories = "Student" | "Teacher";
type Branches = "ballb" | "ece";

export interface User {
  member_no : number,
  member_name : string,
  category: Categories,
  course_duration: number,
  course_year_start: any,
  course_year_end: any,
  class: number,
  branch: Branches,
  books: number[]
}

export let USER_DATA: User[] = [{
    "member_no" : 1,
    "member_name" : "Suganth",
    "category": "Student",
    "course_duration": 5,
    "course_year_start": 2016,
    "course_year_end": 2021,
    "class": 5,
    "branch": "ballb",
    "books":[123, 134]

},
{
    "member_no" : 2,
    "member_name" : "John",
    "category": "Student",
    "course_duration": 4,
    "course_year_start": 2017,
    "course_year_end": 2021,
    "class": 4,
    "branch": "ece",
    "books":[222]

}



]