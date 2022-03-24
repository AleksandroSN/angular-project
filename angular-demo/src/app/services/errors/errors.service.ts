import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LogService } from "../log";

@Injectable({
  providedIn: "root",
})
export class ErrorService {
  constructor(private logService: LogService) {}

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.logService.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
