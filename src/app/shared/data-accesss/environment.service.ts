/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";

export const ENVIRONMENT = new InjectionToken<Record<string, any>>('environment');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly environment: any;

  // We need @Optional to be able start app without providing environment file
  constructor(@Optional() @Inject(ENVIRONMENT) environment: any) {
    this.environment = environment !== null ? environment : {};
  }

  getValue<T = string>(key: string, defaultValue?: T): T {
    return this.environment[key] || defaultValue;
  }
}
