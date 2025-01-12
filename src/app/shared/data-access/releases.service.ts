import { ServicesService } from './services.service';
import { Injectable } from "@angular/core";
import { ReleaseData } from "../models/data/release.data";
import { BehaviorSubject, tap } from "rxjs";
import { ApiRoutes } from "../consts";
import { EmptyData } from "../models/data/empty.data";
import { RequirementData } from "../models/data/requirement.data";
import { RequestState } from "../types/http/request-state.type";
import { CreateReleaseArbitrarilyDataModel } from "../models/release-create-arbitrarily/create-release-arbitrarily.data-model";
import { CreateReleaseByAnotherDataModel } from "../models/release-create-by-another/create-release-by-another.data-model";
import { GetReleasesDataModel } from "../models/releases-search/search-releases.data-model";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";
import { GetReleaseDataModel } from "../models/release-get/get-release.data-model";
import { AddReleaseRequirementDataModel } from "../models/release-add-requirement/add-release-requirement.data-model";
import { EditReleaseRequirementDataModel } from "../models/release-edit-requirement/edit-release-requirement.data-model";
import { DeleteReleaseRequirementDataModel } from "../models/release-delete-requirement/delete-release-requirement.data-model";

@Injectable({
  providedIn: 'root',
})
export class ReleasesService {
  public releasesData$?: BehaviorSubject<RequestState<ReleaseData[]> | null>;
  public releaseData$?: BehaviorSubject<RequestState<ReleaseData> | null>;

  constructor(
    private http: HttpService,
    private router: Router,
    private servicesService: ServicesService
  ) { }


  public createReleaseArbitrarily(dataModel: CreateReleaseArbitrarilyDataModel) {
    return this.http.dataModelRequest<ReleaseData>(
      dataModel,
      ApiRoutes.CreateReleaseArbitrarily
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          this.router.navigate(['services', { serviceId: res.data.service_id },
            'releases', { releaseId: res.data.id }])
        }
      })
    );
  }

  public createReleaseByAnother(dataModel: CreateReleaseByAnotherDataModel) {
    return this.http.dataModelRequest<ReleaseData>(
      dataModel,
      ApiRoutes.CreateReleaseByAnother
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          this.router.navigate(['services', { serviceId: res.data.service_id },
            'releases', { releaseId: res.data.id }])
        }
      })
    );
  }

  public getReleases(dataModel: GetReleasesDataModel) {
    this.releasesData$ = new BehaviorSubject<RequestState<ReleaseData[]> | null>(null);
    const req = this.http.dataModelRequest<ReleaseData[]>(
      dataModel,
      ApiRoutes.SearchReleases
    );
    req.subscribe(this.releasesData$);
    return req;
  }

  public getRelease(dataModel: GetReleaseDataModel) {
    this.releaseData$ = new BehaviorSubject<RequestState<ReleaseData> | null>(null)
    const req = this.http.dataModelRequest<ReleaseData>(
      dataModel,
      ApiRoutes.GetRelease
    );
    req.subscribe(this.releaseData$);
    return req;
  }

  public addReleaseRequirement(dataModel: AddReleaseRequirementDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.AddReleaseRequirement
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          const model = new GetReleaseDataModel();
          model.id = res.data.id;
          this.getRelease(model);
        }
      })
    );
  }

  public editReleaseRequirement(dataModel: EditReleaseRequirementDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.EditReleaseRequirement
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          const model = new GetReleaseDataModel();
          model.id = res.data.id;
          this.getRelease(model);
        }
      })
    );
  }

  public deleteReleaseRequirement(dataModel: DeleteReleaseRequirementDataModel) {
    return this.http.dataModelRequest<EmptyData>(
      dataModel,
      ApiRoutes.DeleteReleaseRequirement
    ).pipe(
      tap((res) => {
        if (res.isSuccess && this.servicesService.serviceData$?.value?.data?.id) {
          const model = new GetReleaseDataModel();
          model.id = this.servicesService.serviceData$.value.data.id;
          this.getRelease(model);
        }
      })
    );
  }
}
