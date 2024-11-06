import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services-template-page',
  templateUrl: './services-template.page.html',
  styleUrl: './services-template.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesTemplatePage { }
