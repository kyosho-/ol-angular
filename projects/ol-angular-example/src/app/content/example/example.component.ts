import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';

import { Content } from '../../common/content';
import { ExampleService } from './example.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  htmlDescription: Observable<SafeHtml>;

  htmlCode: string;

  cssCode: string;

  tsCode: string;

  content$: Observable<Content>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private exampleService: ExampleService) { }

  ngOnInit() {
    // Get example info.
    this.content$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.exampleService.getExample(params.get('id'))),
      tap((content: Content) => {
        this.htmlDescription = this.exampleService.getHtmlDescriptionCode(content.id).pipe(
          map((description: string) => {
            return this.sanitizer.bypassSecurityTrustHtml(description);
          })
        );
        // this.cssCode = this.exampleService.getCssCode(content.id);
        this.exampleService.getCssCode(content.id).subscribe((code: string) => this.cssCode = code);
        // this.htmlCode = this.exampleService.getHtmlCode(content.id);
        this.exampleService.getHtmlCode(content.id).subscribe((code: string) => this.htmlCode = code);
        // this.tsCode = this.exampleService.getTsCode(content.id);
        this.exampleService.getTsCode(content.id).subscribe((code: string) => this.tsCode = code);
      }),
      tap((content: Content) => {
        console.log(content);
      }));
  }

  openLink(event: any) {
    this.content$.subscribe((content: Content) =>
      window.open(`${content.url}${content.fileName}`, 'ol'));
  }
}
