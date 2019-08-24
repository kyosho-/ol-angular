import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { catchError, map, tap, filter, first, concatMap, scan, reduce } from 'rxjs/operators';

import { Example } from './example';
import { MessageService } from '../../common/message.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  public static readonly EXAMPLES_PATH = 'assets/examples.json';

  constructor(
    private http: HttpClient,
    private location: Location,
    private messageService: MessageService) { }

  get examplesUrl() {
    const path = this.location.prepareExternalUrl(ExampleService.EXAMPLES_PATH);
    const url = `${window.location.protocol}//${window.location.host}${path}`;
    return url;
  }

  /** サーバーからヒーローを取得する */
  getExamples(): Observable<Example[]> {
    return this.http.get<Example[]>(this.examplesUrl, { responseType: 'json' }).pipe(
      // tap(examples => console.log(examples)),
      tap(examples => this.log('fetched Examples')),
      catchError(this.handleError<Example[]>('getExamples', []))
    );
  }

  /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
  getExample(id: string): Observable<any> {
    return this.getExamples().pipe(
      tap(() => this.log(`fetched Example id=${id}`)),
      concatMap((value: Example[]) => from(value)),
      filter((value: Example) => value.id === id),
      first(),
      catchError(this.handleError<Example>(`getExample id=${id}`))
    );
  }

  /* 検索語を含むヒーローを取得する */
  searchExamples(term: string): Observable<Example[]> {
    if (!term.trim()) {
      // 検索語がない場合、空のヒーロー配列を返す
      return of([]);
    }

    return this.getExamples().pipe(
      tap(() => this.log(`search Example term=${term}`)),
      concatMap((value: Example[]) => from(value)),
      filter((value: Example) => value.name === term),
      reduce((acc: Example[], value: Example) => acc.concat(value), []),
      catchError(this.handleError<Example[]>('searchExamples', []))
    );
  }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  /** ExampleServiceのメッセージをMessageServiceを使って記録 */
  private log(message: string) {
    this.messageService.add(`ExampleService: ${message}`);
  }
}
