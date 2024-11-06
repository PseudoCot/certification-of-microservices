import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user.page.html',
  styleUrl: './user.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage { }
