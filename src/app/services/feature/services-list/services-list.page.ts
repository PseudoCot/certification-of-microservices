import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services-list-page',
  templateUrl: './services-list.page.html',
  styleUrl: './services-list.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListPage {
  constructor() { }
}
