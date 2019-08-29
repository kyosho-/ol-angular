import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs';

import { ContentService } from '../../common/content.service';
import { Content } from '../../common/content';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  public static readonly PATH = 'assets/example';
  public static readonly NAME = 'contents.json';

  constructor(
    private contentService: ContentService,
    private location: Location) { }

  get url() {
    const path = this.location.prepareExternalUrl(
      `${ExampleService.PATH}/${ExampleService.NAME}`);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return url;
  }

  getExamples(): Observable<Content[]> {
    return this.contentService.getContents(this.url);
  }

  getExample(id: string): Observable<Content> {
    return this.contentService.getContent(this.url, id);
  }

  searchExamples(term: string): Observable<Content[]> {
    return this.contentService.searchContents(this.url, term);
  }

  getTsCode(id: string): Observable<string> {
    const path = this.location.prepareExternalUrl(
      `${ExampleService.PATH}/${id}/${id}.component.ts`);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return this.contentService.getText(url);
  }

  getCssCode(id: string): Observable<string> {
    const path = this.location.prepareExternalUrl(
      `${ExampleService.PATH}/${id}/${id}.component.css`);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return this.contentService.getText(url);
  }

  getHtmlCode(id: string): Observable<string> {
    const path = this.location.prepareExternalUrl(
      `${ExampleService.PATH}/${id}/${id}.component.html`);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return this.contentService.getText(url);
  }

  getHtmlDescriptionCode(id: string): Observable<string> {
    const path = this.location.prepareExternalUrl(
      `${ExampleService.PATH}/${id}/description.html`);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return this.contentService.getText(url);
  }
}
