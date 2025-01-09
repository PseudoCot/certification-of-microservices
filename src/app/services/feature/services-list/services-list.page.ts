import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ListCardComponent } from "../../../shared/feature/list-card/list-card.component";
import { DataItem } from '../../../shared/types/models/data-item.type';
import { LoaderComponent } from "../../../shared/ui/loader/loader.component";
import { ServiceData } from '../../../shared/models/data/service.data';
import { ServiceDataMocks } from '../../../shared/models/mock-data/services.data-mock';

@Component({
  selector: 'app-services-list-page',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss', '../../../shared/ui/card/card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    ListCardComponent,
    LoaderComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListPage {
  protected servicesData?: ServiceData[];

  constructor() {
    // temp
    this.servicesData = ServiceDataMocks;
  }

  protected trackByService(index: number, service: DataItem) {
    return service.id;
  }

  protected openAddServiceModal() {
    return 'TODO';
  }

  protected searchServices(searchValue: string | null) {
    return 'TODO' + searchValue;
  }
}
