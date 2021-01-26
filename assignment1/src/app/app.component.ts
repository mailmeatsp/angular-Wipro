import { Component, OnInit } from '@angular/core';
import { IEmployee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment1';
  employees: IEmployee[];
  allEmployees: IEmployee[];
  searchText = '';
  count = 0;
  total: any;
  sortingNameAtoZ: IEmployee[];
  sortingNameZtoA: IEmployee[];
  sortingAges: IEmployee[];
  sortingEmails: IEmployee[];
  computer: IEmployee[];
  physics: IEmployee[];
  chemistry: IEmployee[];



  constructor() {
    this.employees = [
      {
        name: 'Employee One',
        age: 40,
        email: 'one@gmail.com',
        departments: ['Computer', 'Physics'],
      },
      {
        name: 'Employee Two',
        age: 10,
        email: 'Two@gmail.com',
        departments: ['Computer'],
      },
      {
        name: 'Employee Three',
        age: 10,
        email: 'Three@gmail.com',
        departments: ['Physics', 'Chemistry'],
      },
      {
        name: 'Employee Four',
        age: 60,
        email: 'Four@gmail.com',
        departments: ['Chemistry', 'Physics'],
      },
      {
        name: 'Employee Five',
        age: 70,
        email: 'Five@gmail.com',
        departments: ['Computer', 'Physics', 'Chemistry'],
      },
      {
        name: 'Employee Six',
        age: 70,
        email: 'Six@gmail.com',
        departments: ['Computer', 'Physics'],
      },
    ];
    this.allEmployees = [...this.employees];
  }

  ngOnInit(): void {
    // for (const i of this.employees) {
    //   this.total = i;
    //   console.log(i.length);
    // }
  }

  // Departments filter

  // Searching via Name / Email
  searchData(): void {
    this.employees = this.allEmployees.filter((item) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase()) || item.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  //  Reset / Reloading Employee Data
  refreshHandling(): void {
    this.employees = this.allEmployees;
  }

  //  Sorting
  sorting(): void {
    this.sortingNameAtoZ = this.employees.sort((a: any, b: any) => {
      if (a.name < b.name) {
        return -1;
      }
    });
  }
  sortingZToA(): void {
    this.sortingNameZtoA = this.employees.sort((a: any, b: any) => {
      if (a.name > b.name) {
        return -1;
      }
    });
  }
  sortingAge(): void {
    this.sortingAges = this.employees.sort((a: any, b: any) => {
      if (a.age < b.age) {
        return -1;
      }
    });
  }
  sortingEmail(): void {
    this.sortingEmails = this.employees.sort((a: any, b: any) => {
      if (a.email < b.email) {
        return -1;
      }
    });
  }

}
