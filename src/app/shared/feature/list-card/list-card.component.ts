import { ServicesService } from './../../data-access/services.service';
import { DestroyService } from './../../data-access/destroy.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconComponent } from "../../ui/svg-icon/svg-icon.component";
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CreatingModalWindowComponent } from "../creating-modal-window/creating-modal-window.component";

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [SvgIconComponent, CommonModule, ReactiveFormsModule, RouterModule, CreatingModalWindowComponent],
  templateUrl: './list-card.component.html',
  styleUrls: [
    './list-card.component.scss',
    '../../../shared/ui/card/card.component.scss',
    '../../../services/feature/services-list/services-list.page.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardComponent {
  protected searchInput = new FormControl('');

  @Input({ required: true }) classPrefix!: string;
  @Input({ required: true }) title!: string;
  // @Input({ required: true }) items$!: BehaviorSubject<RequestState<DataItem[]> | null>;
  // protected filteredItems$ = new BehaviorSubject<DataItem[] | null>(null);

  protected showCreatingModal$ = new BehaviorSubject(false);


  constructor(
    private destroyService: DestroyService,
    protected servicesService: ServicesService
  ) {}

  // ngAfterViewInit(): void {
  //   combineLatest([
  //     this.items$,
  //     this.searchInput.valueChanges.pipe(startWith('')),
  //   ]).pipe(
  //     map(([itemsState, searchTerm]) => {
  //       if (itemsState?.data) {
  //         return itemsState.data.filter((item) => item.name.toLowerCase().includes((searchTerm?.toLowerCase() ?? '')) );
  //       }
  //       return [];
  //     }),
  //     takeUntil(this.destroyService.onDestroy)
  //   ).subscribe((filteredItems) => {
  //     this.filteredItems$.next(filteredItems);
  //   });
  // }
}
