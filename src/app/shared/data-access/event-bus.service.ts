import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventData } from '../types/event-data.type';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject<EventData>();

  emit(event: EventData) {
    this.subject$.next(event);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(eventName: string, action: (() => void) | ((value: any) => void)): Subscription {
    return this.subject$.pipe(
      filter((e: EventData) => e.name === eventName),
      map((e: EventData) => e["value"])).subscribe(action);
  }
}
