import { DestroyService } from './../../../shared/data-access/destroy.service';
import { ServicesService } from './../../../shared/data-access/services.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServicesActionsComponent } from "../../ui/services-actions/services-actions.component";
import { LoaderComponent } from "../../../shared/ui/loader/loader.component";
import { InfoCardComponent } from '../../../shared/feature/info-card/feature/info-card.component';
import { ServicesReleasesListComponent } from '../../ui/services-releases-list/services-releases-list.component';
import { ActivatedRoute } from '@angular/router';
import { tap, takeUntil, BehaviorSubject } from 'rxjs';
import { GetServiceDataModel } from '../../../shared/models/service-get/get-service.data-model';
import { RawRequirementData } from '../../../shared/models/data/raw-requirement.data';
import { AddServiceRequirementDataModel } from '../../../shared/models/service-add-requirement/add-service-requirement.data-model';
import { DeleteServiceRequirementDataModel } from '../../../shared/models/service-delete-requirement/delete-service-requirement.data-model';
import { ModalWindowComponent } from "../../../shared/ui/modal-window/modal-window.component";


@Component({
  selector: 'app-services-info-page',
  templateUrl: './services-info.page.html',
  styleUrl: './services-info.page.scss',
  imports: [
    CommonModule,
    ServicesActionsComponent,
    ServicesReleasesListComponent,
    InfoCardComponent,
    LoaderComponent,
    ModalWindowComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesInfoPage {
  protected showCheckModal$ = new BehaviorSubject(false);
  protected showGenerateModal$ = new BehaviorSubject(false);


  constructor(
    protected servicesService: ServicesService,
    private route: ActivatedRoute,
    private destroyService: DestroyService
  ) {
    route.paramMap.pipe(
      tap((routeMap) => {
        const serviceId = routeMap.get('serviceId');
        if (serviceId) {
          const model = new GetServiceDataModel();
          model.id = serviceId;
          servicesService.getService(model);
        }
      }),
      takeUntil(destroyService.onDestroy)
    ).subscribe();
  }

  protected checkReadiness() {
    return 'TODO';
  }

  protected generatePage() {
    return 'TODO';
  }

  protected handleRequirementCreating(reqData: RawRequirementData) {
    const model = new AddServiceRequirementDataModel();
    model.name = reqData.name;
    model.value = reqData.value;
    model.serviceId = this.servicesService.serviceData$?.value?.data?.id || '';
    this.servicesService.addServiceRequirement(model);
  }

  protected handleRequirementDeleting(reqId: string) {
    const model = new DeleteServiceRequirementDataModel();
    model.requirementId = reqId;
    this.servicesService.deleteServiceRequirement(model);
  }

  protected handleDataDeleting() {
    // const model = new DeleteServiceDataModel();
    // model.id = this.servicesService.serviceData$?.value?.data?.id || '';
    // this.servicesService.deleteService(model);
  }
}
