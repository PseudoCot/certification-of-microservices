import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, map } from "rxjs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Config = Record<string, any>;

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configuration: Config = {};

  constructor(private http: HttpClient) { }

  load(): Observable<void> {
    return this.http.get('/config.json')
      .pipe(
        tap((configuration: Config) => this.configuration = configuration),
        map(() => undefined),
      );
  }

  getValue<T = string>(key: string, defaultValue?: T): T {
    return this.configuration[key] || defaultValue;
  }
}
