import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { catchError, tap, filter, first, concatMap, reduce } from 'rxjs/operators';

import { Content } from './content';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public static readonly CONTENTS_PATH = 'assets/contents.json';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getContents(url: string): Observable<Content[]> {
    return this.http.get<Content[]>(url, { responseType: 'json' }).pipe(
      tap(contents => this.log('fetched contents')),
      catchError(this.handleError<Content[]>('getContents', []))
    );
  }

  /** IDによりヒーローを取得する。見つからなかった場合は404を返却する。 */
  getContent(url: string, id: string): Observable<Content> {
    return this.getContents(url).pipe(
      tap(() => this.log(`fetched content id=${id}`)),
      concatMap((value: Content[]) => from(value)),
      filter((value: Content) => value.id === id),
      first(),
      catchError(this.handleError<Content>(`getContent id=${id}`))
    );
  }

  /* 検索語を含むヒーローを取得する */
  searchContents(url: string, term: string): Observable<Content[]> {
    if (!term.trim()) {
      // 検索語がない場合、空のヒーロー配列を返す
      return of([]);
    }

    return this.getContents(url).pipe(
      tap(() => this.log(`search content term=${term}`)),
      concatMap((value: Content[]) => from(value)),
      filter((value: Content) => value.name === term),
      reduce((acc: Content[], value: Content) => acc.concat(value), []),
      catchError(this.handleError<Content[]>('searchContents', []))
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

  private log(message: string) {
    this.messageService.add(`ContentService: ${message}`);
  }
}
