import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../content/example/example.service';
import { Content } from '../../common/content';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  contents$: Observable<Content[]>;

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.contents$ = this.exampleService.getExamples();
  }
}
