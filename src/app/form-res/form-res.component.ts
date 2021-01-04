import { Component, OnInit } from '@angular/core';
import {ResultServiceService} from '../../services/result-service.service';
import {Result} from '../../models/result';
import {Query} from '../../models/query';
import {QueryServiceService} from '../../services/query-service.service';

@Component({
  selector: 'app-form-res',
  templateUrl: './form-res.component.html',
  styleUrls: ['./form-res.component.scss']
})
export class FormResComponent implements OnInit {
  results: Result[] = [];
  constructor(private resultService: ResultServiceService, private queryService: QueryServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.results.push(
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1},
      {x: 1, y: 1, r: 1, result: 'Yes', executionTime: 0, creationTime: '1', id: 1}
    );
  }
  getAll(): void {
    this.resultService.getResults()
      .subscribe((data: any) => {
          this.results = data;
        }
      );
  }
  clear(): void {
    this.resultService.clear().subscribe(
      () => {
        this.getAll();
      }
    );
  }

  update(query: Query): void {
    if (query) {
      this.queryService.update(query).subscribe(() => this.getAll());
      return;
    }
    this.getAll();
  }
}
