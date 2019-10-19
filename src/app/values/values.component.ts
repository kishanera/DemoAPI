import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../data-access.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  protected employees: string[] = [];
  constructor(private dataAccessService: DataAccessService) { }

  ngOnInit() {
    this.dataAccessService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

}
