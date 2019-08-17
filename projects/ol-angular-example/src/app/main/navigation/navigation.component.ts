import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../common/example.service';
import { Example } from '../../common/example';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  examples$: Observable<Example[]>;

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.examples$ = this.exampleService.getExamples();
  }
}
