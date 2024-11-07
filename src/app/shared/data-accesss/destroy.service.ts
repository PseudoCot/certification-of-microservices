import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DestroyService implements OnDestroy {
  private destroy$ = new Subject<void>();

  get onDestroy() {
    return this.destroy$.asObservable();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
