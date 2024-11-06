import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, mapTo } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configuration: { [key: string]: any } = {};

  constructor(private http: HttpClient) { }

  load(): Observable<void> {
    return this.http.get('/assets/config.json')
      .pipe(
        tap((configuration: any) => this.configuration = configuration),
        mapTo(undefined),
      );
  }

  getValue(key: string, defaultValue?: any): any {
    return this.configuration[key] || defaultValue;
  }
}
