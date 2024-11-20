import { Injectable } from '@angular/core';
import { JWTSession } from '../types/jwt-session.type';

const SESSION_KEY = 'session';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _sessionData!: JWTSession | null;

  public getSessionData(): JWTSession | null {
    if (this._sessionData) {
      return this._sessionData;
    } else {
      const sessionData = localStorage.getItem(SESSION_KEY);
      if (sessionData) {
        this._sessionData = JSON.parse(sessionData) as JWTSession;
        return this._sessionData;
      } else {
        return null;
      }
    }
  }

  public setSessionData(data: JWTSession): void {
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    this._sessionData = data;
  }

  public removeSession() {
    localStorage.removeItem(SESSION_KEY);
    this._sessionData = null;
  }
}
