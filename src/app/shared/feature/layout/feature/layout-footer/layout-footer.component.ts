import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from "../../../../ui/svg-icon/svg-icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrl: './layout-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent, RouterModule],
})
export class LayoutFooterComponent { }
