import { Component, OnInit } from '@angular/core';
import { Example } from '../../common/example';
import { ExampleService } from '../../common/example.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  examples: Example[] = [];

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.exampleService.getExamples()
      .subscribe(examples => this.examples = examples);
  }
}
