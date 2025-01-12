import { ServicesService } from './../../../shared/data-access/services.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ListCardComponent } from "../../../shared/feature/list-card/list-card.component";
import { DataItem } from '../../../shared/types/models/data-item.type';
import { BehaviorSubject } from 'rxjs';
import { GetServicesDataModel } from '../../../shared/models/services-get/get-services.data-model';

@Component({
  selector: 'app-services-list-page',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    ListCardComponent,
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListPage {
  protected showCreateServiceModal$ = new BehaviorSubject(false);


  constructor(protected servicesService: ServicesService) {
    const model = new GetServicesDataModel();
    servicesService.getServices(model);
  }

  protected trackByService(_: number, service: DataItem) {
    return service.id;
  }
}
