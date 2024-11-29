import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ListCardComponent } from "../../../shared/feature/list-card/list-card.component";
import { ServicesListDataModel } from '../../../shared/models/services-list/services-list.data-model';
import { DataItem } from '../../../shared/types/data-item.type';
import { ServiceDataModel } from '../../../shared/models/service/service.data-model';

@Component({
  selector: 'app-services-list-page',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss', '../../../shared/ui/card/card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    ListCardComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListPage {
  // protected services!: ServicesListDataModel
  protected services = new ServicesListDataModel();

  constructor() {
    this.services.services = [
      new ServiceDataModel({ name: 'Dala loader', id: '1', owner: 'Ivan', description: 'Some interesting project' }),
      new ServiceDataModel({ name: 'Dala picker', id: '2', owner: 'Kolyan', description: 'Some project' }),
      new ServiceDataModel({ name: 'Dala converter', id: '3', owner: 'Ignat', description: 'Some very very very interesting project' }),
    ];
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
