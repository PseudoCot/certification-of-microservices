import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SvgIconComponent } from "../../../shared/ui/svg-icon/svg-icon.component";
import { RequirementsService } from '../../../shared/data-access/requirements.service';
import { BehaviorSubject, map, takeUntil, tap } from 'rxjs';
import { GetAllServiceRequirementsDataModel } from '../../../shared/models/requirements-get-all-service/get-all-service-requirements.data-model';
import { GetAllReleaseRequirementsDataModel } from '../../../shared/models/requirements-get-all-release/get-all-release-requirements.data-model';
import { CreatingRequirementFormComponent } from "../creating-requirement-form/creating-requirement-form.component";
import { SubmitingModalWindowComponent } from "../../../shared/ui/submiting-modal-window/submiting-modal-window.component";
import { LoaderComponent } from "../../../shared/ui/loader/loader.component";
import { DestroyService } from '../../../shared/data-access/destroy.service';

type RequirementsListType = 'services' | 'releases';

@Component({
  selector: 'app-requirements-list-page',
  templateUrl: './requirements-list.page.html',
  styleUrls: [
    './requirements-list.page.scss',
    '../../../shared/ui/card/card.component.scss',
    '../../../shared/ui/requirement-entity/requirement-entity.component.scss'
  ],
  imports: [
    CommonModule,
    SvgIconComponent,
    CreatingRequirementFormComponent,
    SubmitingModalWindowComponent,
    LoaderComponent
],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RequirementsListPage {
  protected listType = new BehaviorSubject<RequirementsListType>('services');

  protected showCreatingModal$ = new BehaviorSubject(false);

  protected editReqId$ = new BehaviorSubject<string | null>(null);
  protected showEditModal$ = this.editReqId$.pipe(
    map((id) => !!id)
  );
  protected deleteReqId$ = new BehaviorSubject<string | null>(null);
  protected showDeleteModal$ = this.deleteReqId$.pipe(
    map((id) => !!id)
  );

  constructor(
    private route: ActivatedRoute,
    protected requirementsService: RequirementsService,
    private destroyService: DestroyService
  ) {
    route.queryParamMap.pipe(
      tap((routeMap) => {
        const type = routeMap.get('type');
        if (!type) {
          this.listType.next('services');
        } else if (type === 'services') {
          this.listType.next('services');
          const model = new GetAllServiceRequirementsDataModel();
          model.limit = 10;
          model.offset = 0;
          requirementsService.getAllServicesRequirements(model);
        } else if (type === 'releases') {
          this.listType.next('releases');
          const model = new GetAllReleaseRequirementsDataModel();
          model.limit = 10;
          model.offset = 0;
          requirementsService.getAllReleasesRequirements(model);
        }
      }),
      takeUntil(destroyService.onDestroy)
    ).subscribe();
  }

  protected addRequirement() {
    // TODO
    this.showCreatingModal$.next(false);
  }

  protected editRequirement() {
    // TODO
    this.editReqId$.next(null);
  }

  protected deleteRequirement() {
    // TODO
    this.deleteReqId$.next(null);
  }
}
