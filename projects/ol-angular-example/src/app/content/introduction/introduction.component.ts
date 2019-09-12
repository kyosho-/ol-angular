import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../../common/content';
import { ExampleService } from '../example/example.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  contents$: Observable<Content[]>;

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.contents$ = this.exampleService.getExamples();
  }
}
