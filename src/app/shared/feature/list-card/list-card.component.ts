import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgIconComponent } from "../../ui/svg-icon/svg-icon.component";
import { CommonModule } from '@angular/common';
import { DataItem } from '../../types/data-item.type';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [SvgIconComponent, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss', '../../../shared/ui/card/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardComponent {
  @Input({ required: true }) classPrefix!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: readonly DataItem[];

  @Output() addClick$ = new EventEmitter();

  protected searchInput = new FormControl('');
  @Output() searchInputChanges$ = this.searchInput.valueChanges;

  @Input({ required: true }) trackItemBy!: (index: number, item: DataItem) => number | string;
}
