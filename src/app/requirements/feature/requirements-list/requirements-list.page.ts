import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-requirements-list-page',
  templateUrl: './requirements-list.page.html',
  styleUrl: './requirements-list.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequirementsListPage {
  constructor() { }
}
