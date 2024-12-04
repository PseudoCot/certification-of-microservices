import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() classes = '';
  @Input() small = false;
  @Input() verticalAlignCenter = false;
  @Input() horizontalAlignCenter = false;
  @Input() alignCenter = !this.verticalAlignCenter && !this.horizontalAlignCenter;
}
