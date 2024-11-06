import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services-unit-page',
  templateUrl: './services-unit.page.html',
  styleUrl: './services-unit.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesUnitPage {
  constructor() { }
}
