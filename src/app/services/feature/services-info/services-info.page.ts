import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesActionsComponent } from "../../ui/services-actions/services-actions.component";
import { LoaderComponent } from "../../../shared/ui/loader/loader.component";
import { InfoCardComponent } from '../../../shared/feature/info-card/feature/info-card.component';
import { ServicesReleasesListComponent } from '../../ui/services-releases-list/services-releases-list.component';
import { ServiceData } from '../../../shared/models/data/service.data';
import { ServiceDataMocks } from '../../../shared/models/mock-data/services.data-mock';
import { ReleaseData } from '../../../shared/models/data/release.data';
import { ReleaseDataMocks } from '../../../shared/models/mock-data/releases.data-mock';


@Component({
  selector: 'app-services-info-page',
  templateUrl: './services-info.page.html',
  styleUrl: './services-info.page.scss',
  imports: [
    CommonModule,
    ServicesActionsComponent,
    ServicesReleasesListComponent,
    InfoCardComponent,
    LoaderComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesInfoPage {
  protected serviceData?: ServiceData;
  protected serviceReleasesData?: ReleaseData[];

  constructor() {
    // temp
    this.serviceData = ServiceDataMocks[0];
    this.serviceReleasesData = ReleaseDataMocks;
  }


  protected checkReadiness() {
    return 'TODO';
  }

  protected generatePage() {
    return 'TODO';
  }

  protected deleteService() {
    return 'TODO';
  }

  protected editService() {
    return 'TODO';
  }

  protected addRequirement() {
    return 'TODO';
  }

  protected deleteRequirement() {
    return 'TODO';
  }
}
