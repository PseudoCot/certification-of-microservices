import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class SvgIconComponent implements OnInit {
  @Input({ required: true }) icon!: string;
  @Input() width?: number | string;
  @Input() height?: number | string;
  @Input() size?: number | string;
  @Input() fill?: string;
  @Input() classes?: string;

  ngOnInit(): void {
    if (this.size) {
      this.height = this.width = this.size;
    }
  }
}
