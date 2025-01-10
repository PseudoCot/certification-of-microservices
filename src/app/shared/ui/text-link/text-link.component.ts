import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss'],
  standalone: true,
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLinkComponent {
  @Input() classes = '';
  @Input({ required: true }) linkPath!: string;
  @Input() highlight = false;
}
