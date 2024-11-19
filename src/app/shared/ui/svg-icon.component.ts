import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg attr.width="{{width}}px" attr.height="{{height}}px" attr.fill="{{fill}}" attr.class="{{class}}">
      <use attr.xlink:href="icons/{{icon}}.svg#{{icon}}"></use>
    </svg>
  `,
  // svg id must be the same as svg file name
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SvgIconComponent implements OnInit {
  @Input({ required: true }) icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number = 24;
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {
    if (this.size) {
      this.height = this.width = this.size;
    }
  }
}
