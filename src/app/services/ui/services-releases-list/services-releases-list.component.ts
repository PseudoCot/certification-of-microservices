import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReleaseDataModel } from '../../../shared/models/release/release.data-model';
import { TextLinkComponent } from "../../../shared/ui/text-link/text-link.component";

@Component({
  selector: 'app-services-releases-list',
  templateUrl: './services-releases-list.component.html',
  styleUrls: ['./services-releases-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, TextLinkComponent],
})
export class ServicesReleasesListComponent {
  @Input() releases?: ReleaseDataModel[];
}
