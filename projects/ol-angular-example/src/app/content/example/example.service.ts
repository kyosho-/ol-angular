import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Example } from './example';
import { MessageService } from '../../common/message.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  public static readonly HTTP_OPTIONS = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private EexamplesUrl = 'api/examples';  // Web APIのURL

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** サーバーからヒーローを取得する */
  getExamples(): Observable<Example[]> {
    return this.http.get<Example[]>(this.EexamplesUrl)
      .pipe(
        // tap(examples => console.log(examples)),
        tap(examples => this.log('fetched Examples')),
        catchError(this.handleError<Example[]>('getExamples', []))
      );
  }

  /** IDによりヒーローを取得する。idが見つからない場合は`undefined`を返す。 */
  getExampleNo404<Data>(id: number): Observable<Example> {
    const url = `${this.EexamplesUrl}/?id=${id}`;
    return this.http.get<Example[]>(url)
      .pipe(
        map(Examplees => Examplees[0]), // {0|1} 要素の配列を返す
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Example id=${id}`);
        }),
        catchError(this.handleError<Example>(`getExample id=${id}`))
      );
  }

  /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
  getExample(id: number): Observable<Example> {
    const url = `${this.EexamplesUrl}/${id}`;
    return this.http.get<Example>(url).pipe(
      tap(_ => this.log(`fetched Example id=${id}`)),
      catchError(this.handleError<Example>(`getExample id=${id}`))
    );
  }

  /* 検索語を含むヒーローを取得する */
  searchExamples(term: string): Observable<Example[]> {
    if (!term.trim()) {
      // 検索語がない場合、空のヒーロー配列を返す
      return of([]);
    }
    return this.http.get<Example[]>(`${this.EexamplesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found Examples matching "${term}"`)),
      catchError(this.handleError<Example[]>('searchExamples', []))
    );
  }

  //////// Save methods //////////

  /** POST: サーバーに新しいヒーローを登録する */
  addExample(example: Example): Observable<Example> {
    return this.http.post<Example>(this.EexamplesUrl, example, ExampleService.HTTP_OPTIONS).pipe(
      tap((newExample: Example) => this.log(`added Example w/ id=${newExample.id}`)),
      catchError(this.handleError<Example>('addExample'))
    );
  }

  /** DELETE: サーバーからヒーローを削除 */
  deleteExample(example: Example | number): Observable<Example> {
    const id = typeof example === 'number' ? example : example.id;
    const url = `${this.EexamplesUrl}/${id}`;

    return this.http.delete<Example>(url, ExampleService.HTTP_OPTIONS).pipe(
      tap(_ => this.log(`deleted Example id=${id}`)),
      catchError(this.handleError<Example>('deleteExample'))
    );
  }

  /** PUT: サーバー上でヒーローを更新 */
  updateExample(example: Example): Observable<any> {
    return this.http.put(this.EexamplesUrl, example, ExampleService.HTTP_OPTIONS).pipe(
      tap(_ => this.log(`updated Example id=${example.id}`)),
      catchError(this.handleError<any>('updateExample'))
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
