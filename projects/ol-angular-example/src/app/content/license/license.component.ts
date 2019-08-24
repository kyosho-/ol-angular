import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  license$: Observable<string>;

  constructor(
    private http: HttpClient,
    private location: Location) {
  }

  ngOnInit() {
    // 3rdpartylicenses.txtを読み込むストリームを生成
    const path = this.location.prepareExternalUrl('3rdpartylicenses.txt');
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    this.license$ = this.http.get(url, { responseType: 'text' }
    ).pipe(share());
  }
}
