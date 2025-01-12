import { ServicesService } from './../../../shared/data-access/services.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextLinkComponent } from "../../../shared/ui/text-link/text-link.component";
import { LoaderComponent } from "../../../shared/ui/loader/loader.component";
import { GetServiceReleasesDataModel } from '../../../shared/models/service-get-releases/get-service-releases.data-model';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "../../../shared/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-services-releases-list',
  templateUrl: './services-releases-list.component.html',
  styleUrls: ['./services-releases-list.component.scss', '../../../shared/ui/card/card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, TextLinkComponent, LoaderComponent, CommonModule, SvgIconComponent],
})
export class ServicesReleasesListComponent {
  @Input({ required: true }) serviceId!: string;

  constructor(protected servicesService: ServicesService) {
    const model = new GetServiceReleasesDataModel()
    model.serviceId = this.serviceId;
    servicesService.getServiceReleases(model);
  }
}
