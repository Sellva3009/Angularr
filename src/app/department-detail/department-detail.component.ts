import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected the department with {{ departmentId }}</h3>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = parseInt(idParam, 10);
      this.departmentId = id;
    } else {
      // Handle the case where 'id' is null.
      this.departmentId = null;
    }

    
  }
}
