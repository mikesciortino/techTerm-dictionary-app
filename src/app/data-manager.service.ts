import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
// Import data model classes, for example...
import { termEnglish } from "./data-classes";
import { termNonEnglish} from "./data-classes";
import { definitions} from "./data-classes";
import { idClass} from "./data-classes";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

 // Options object for POST and PUT requests
 private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };

 // Error handler, from the Angular docs
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  // Base URL for the web API
  //private url: string = 'https://example.com/api';
  private url: string = 'https://assignment2-web-api.herokuapp.com/api';

  // Callable methods...
  // For each entity, as appropriate, get, add, edit, delete
  // Add other methods that provide general service to all components in the app

  getEnglishTerms(): Observable<termEnglish[]> {
    return this.http.get<termEnglish[]>(`${this.url}/terms/english`)
  }
  
  getEnglishTermById(id: string): Observable<termEnglish> {
    return this.http.get<termEnglish>(`${this.url}/terms/english/${id}`);
  }

  getEnglishTermByWord(word: string): Observable<termEnglish[]> {
    return this.http.get<termEnglish[]>(`${this.url}/terms/english/word/${encodeURIComponent(word)}`);
  }

  addEnglishTerm(term: termEnglish): Observable<termEnglish> {
    return this.http.post<termEnglish>(`${this.url}/terms/english`, term, this.httpOptions)
  }

  addNonEnglishTerm(term: termNonEnglish): Observable<termNonEnglish> {
    return this.http.post<termNonEnglish>(`${this.url}/terms/other`, term, this.httpOptions)
    
  }

  helpYesEnglish(id: number, idObject: idClass): Observable<termEnglish> {
    return this.http.put<termEnglish>(`${this.url}/terms/english/helpyes/${id}`, idObject, this.httpOptions);
  }
  
  helpNoEnglish(id: number, idObject: idClass): Observable<termEnglish> {
    return this.http.put<termEnglish>(`${this.url}/terms/english/helpno/${id}`, idObject, this.httpOptions);
  }

  helpYesNonEnglish(id: number, idObject: idClass): Observable<termNonEnglish> {
    return this.http.put<termNonEnglish>(`${this.url}/terms/other/helpyes/${id}`, idObject, this.httpOptions);
  }
  
  helpNoNonEnglish(id: number, idObject: idClass): Observable<termNonEnglish> {
    return this.http.put<termNonEnglish>(`${this.url}/terms/other/helpno/${id}`, idObject, this.httpOptions);
  }

  likeEnglishDefinition(id: number): Observable<termEnglish> {
    return this.http.put<termEnglish>(`${this.url}/terms/english/definition-like/${id}`, this.httpOptions)
  }

  likeNonEnglishDefinition(id: number): Observable<termNonEnglish> {
    return this.http.put<termNonEnglish>(`${this.url}/terms/other/definition-like/${id}`, this.httpOptions)
  }

  addEnglishDefinition(id: string, definition: definitions): Observable<termEnglish> {
    return this.http.put<termEnglish>(`${this.url}/terms/english/${id}/add-definition`, definition, this.httpOptions)
  }

  addNonEnglishDefinition(id: string, definition: definitions): Observable<termNonEnglish> {
    return this.http.put<termNonEnglish>(`${this.url}/terms/other/${id}/add-definition`, definition, this.httpOptions)
  }

  getNonEnglishTerms(): Observable<termNonEnglish[]> {
    return this.http.get<termNonEnglish[]>(`${this.url}/terms/other`)
  }

  getNonEnglishTermById(id: string): Observable<termNonEnglish> {
    return this.http.get<termNonEnglish>(`${this.url}/terms/other/${id}`);
  }


}