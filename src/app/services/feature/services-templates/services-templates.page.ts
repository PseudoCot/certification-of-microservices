import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services-templates-page',
  templateUrl: './services-templates.page.html',
  styleUrl: './services-templates.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesTemplatesPage { }
