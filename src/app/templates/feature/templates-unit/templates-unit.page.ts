import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-templates-unit-page',
  templateUrl: './templates-unit.page.html',
  styleUrl: './templates-unit.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesUnitPage { }
