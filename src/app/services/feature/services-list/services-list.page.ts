import { ServicesService } from './../../../shared/data-access/services.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ListCardComponent } from "../../../shared/feature/list-card/list-card.component";
import { DataItem } from '../../../shared/types/models/data-item.type';
import { LoaderComponent } from "../../../shared/ui/loader/loader.component";
import { BehaviorSubject } from 'rxjs';
import { GetServicesDataModel } from '../../../shared/models/services-get/get-services.data-model';
import { RequirementCheckInputComponent } from "../../../shared/ui/requirement-check-input/requirement-check-input.component";

@Component({
  selector: 'app-services-list-page',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    ListCardComponent,
    LoaderComponent,
    RequirementCheckInputComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListPage {
  // protected servicesData?: BehaviorSubject<RequestState<ServiceData[]> | null>;

  protected showCreateServiceModal$ = new BehaviorSubject(false);
  // protected servicesData$$: BehaviorSubject<RequestState<DataItem[]> | null>;


  constructor(protected servicesService: ServicesService) {
    // this.servicesData$$ = new BehaviorSubject<RequestState<DataItem[]> | null>(null);
    // servicesService.servicesData$?.subscribe(this.servicesData$$)
    const model = new GetServicesDataModel();
    servicesService.getServices(model);
  }

  protected trackByService(_: number, service: DataItem) {
    return service.id;
  }
}
