import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEmployee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  employees: IEmployee[];
  allEmployees: IEmployee[];
  searchText = '';
  sorting: any;
  contactForm: FormGroup;
  sort: any;

  constructor(private fb: FormBuilder) {
    // Employee Details
    this.sorting = ['[A-Z]', '[Z-A]', 'Age', 'Email'];

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

  // Departments filter
  departmentChangeEvent(dep: string): void {
    this.employees = this.allEmployees.filter(item => {
      return item.departments.indexOf(dep) >= 0;
    });
  }

  // Searching via Name / Email
  searchData(): void {
    this.employees = this.allEmployees.filter((item) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase()) || item.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  //  Reset / Reloading Employee Data
  resetData(): void {
    this.employees = this.allEmployees;
  }

  //  Sorting
  changeSortHandler(sorts: string): void {
    if (sorts === '[A-Z]') {
      this.employees = this.allEmployees.sort((a: any, b: any) =>
      a.name > b.name ? 1 : -1);
    }
    else if (sorts === '[Z-A]') {
      this.employees = this.allEmployees.sort((a: any, b: any) =>
      a.name < b.name ? 1 : -1);
    }
    else if (sorts === 'Age') {
      this.employees = this.allEmployees.sort((a: any, b: any) =>
      a.age > b.age ? 1 : -1);
    }
    else if (sorts === 'Email') {
      this.employees = this.allEmployees.sort((a: any, b: any) =>
      a.email > b.email ? 1 : -1);
    }
    else {
      this.employees = this.allEmployees.sort((a: any, b: any) =>
      a.name > b.name ? 1 : -1);
    }
  }

}
