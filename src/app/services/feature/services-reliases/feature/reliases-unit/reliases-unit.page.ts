import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reliases-unit-page',
  templateUrl: './reliases-unit.page.html',
  styleUrl: './reliases-unit.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReliasesUnitPage {
  constructor() { }
}
