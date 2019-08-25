import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { ContentService } from '../../common/content.service';
import { Content } from '../../common/content';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  public static readonly PATH = 'assets/example/contents.json';

  constructor(
    private contentService: ContentService,
    private location: Location) { }

  get url() {
    const path = this.location.prepareExternalUrl(ExampleService.PATH);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return url;
  }

  getExamples(): Observable<Content[]> {
    return this.contentService.getContents(this.url);
  }

  getExample(id: string): Observable<any> {
    return this.contentService.getContent(this.url, id);
  }

  searchExamples(term: string): Observable<Content[]> {
    return this.contentService.searchContents(this.url, term);
  }
}
