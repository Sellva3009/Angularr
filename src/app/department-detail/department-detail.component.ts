import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected the department with {{ departmentId }}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: [],
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // const idParam = this.route.snapshot.paramMap.get('id');
    // if (idParam !== null) {
    //   const id = parseInt(idParam, 10);
    //   this.departmentId = id;
    // } else {
    //   this.departmentId = null;
    // }
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get('id');
      if (idParam !== null) {
        const id = parseInt(idParam, 10);
        this.departmentId = id;
      } else {
        this.departmentId = null;
      }
    });
  }
  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
