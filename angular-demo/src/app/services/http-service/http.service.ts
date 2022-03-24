import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, catchError, Observable, of } from "rxjs";
import { ErrorService } from "../errors";
import { LogService } from "../log";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private heroesUrl = "api/heroes";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private logService: LogService,
    private errorService: ErrorService
  ) {}

  get<T>(logMessage: string, errorMessage: string, id: number): Observable<T> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<T>(url).pipe(
      tap((_) => this.logService.log(logMessage)),
      catchError(this.errorService.handleError<T>(errorMessage))
    );
  }

  getAll<T>(logMessage: string, errorMessage: string): Observable<T[]> {
    return this.http.get<T[]>(this.heroesUrl).pipe(
      tap((_) => this.logService.log(logMessage)),
      catchError(this.errorService.handleError<T[]>(errorMessage, []))
    );
  }

  add<T>(logMessage: string, errorMessage: string, entity: T): Observable<T> {
    return this.http.post<T>(this.heroesUrl, entity, this.httpOptions).pipe(
      tap((_) => this.logService.log(logMessage)),
      catchError(this.errorService.handleError<T>(errorMessage))
    );
  }

  update<T>(
    logMessage: string,
    errorMessage: string,
    entity: T
  ): Observable<T> {
    return this.http.put<T>(this.heroesUrl, entity, this.httpOptions).pipe(
      tap((_) => this.logService.log(logMessage)),
      catchError(this.errorService.handleError<T>(errorMessage))
    );
  }

  delete<T>(
    logMessage: string,
    errorMessage: string,
    id: number
  ): Observable<T> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<T>(url, this.httpOptions).pipe(
      tap((_) => this.logService.log(logMessage)),
      catchError(this.errorService.handleError<T>(errorMessage))
    );
  }

  find<T>(term: string): Observable<T[]>{
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<T[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.logService.log(`found matching "${term}"`)
          : this.logService.log(`no matching "${term}"`)
      ),
      catchError(this.errorService.handleError<T[]>("find", []))
    );
  }
}
