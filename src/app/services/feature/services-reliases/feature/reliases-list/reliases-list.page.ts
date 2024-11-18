import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reliases-list-page',
  templateUrl: './reliases-list.page.html',
  styleUrl: './reliases-list.page.scss',
  imports: [
    CommonModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReliasesListPage {
  constructor() { }
}
