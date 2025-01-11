import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextLinkComponent } from "../../../shared/ui/text-link/text-link.component";
import { ReleaseData } from '../../../shared/models/data/release.data';

@Component({
  selector: 'app-services-releases-list',
  templateUrl: './services-releases-list.component.html',
  styleUrls: ['./services-releases-list.component.scss', '../../../shared/ui/card/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, TextLinkComponent],
})
export class ServicesReleasesListComponent {
  @Input() releasesData?: ReleaseData[];
}
