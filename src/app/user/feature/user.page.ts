import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrl: './user.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage { }
