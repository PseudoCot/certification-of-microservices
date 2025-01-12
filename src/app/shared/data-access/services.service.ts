import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { ServiceData } from "../models/data/service.data";
import { BehaviorSubject, tap } from "rxjs";
import { RequestState } from "../types/http/request-state.type";
import { GetServicesDataModel } from "../models/services-get/get-services.data-model";
import { ApiRoutes } from "../consts";
import { ReleaseData } from "../models/data/release.data";
import { CreateServiceArbitrarilyDataModel } from "../models/service-create-arbitrarily/create-service-arbitrarily.data-model";
import { CreateServiceByAnotherDataModel } from "../models/service-create-by-another/create-service-by-another.data-model";
import { RequirementData } from "../models/data/requirement.data";
import { EmptyData } from "../models/data/empty.data";
import { Router } from "@angular/router";
import { GetServiceDataModel } from "../models/service-get/get-service.data-model";
import { GetServiceReleasesDataModel } from "../models/service-get-releases/get-service-releases.data-model";
import { AddServiceRequirementDataModel } from "../models/service-add-requirement/add-service-requirement.data-model";
import { EditServiceRequirementDataModel } from "../models/service-edit-requirement/edit-service-requirement.data-model";
import { DeleteServiceRequirementDataModel } from "../models/service-delete-requirement/delete-service-requirement.data-model";

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public servicesData$?: BehaviorSubject<RequestState<ServiceData[]> | null>;
  public serviceData$?: BehaviorSubject<RequestState<ServiceData> | null>;
  public serviceReleasesData$?: BehaviorSubject<RequestState<ReleaseData[]> | null>;

  constructor(
    private http: HttpService,
    private router: Router
  ) { }


  public createServiceArbitrarily(dataModel: CreateServiceArbitrarilyDataModel) {
    return this.http.dataModelRequest<ServiceData>(
      dataModel,
      ApiRoutes.CreateServiceArbitrarily
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          this.router.navigate(['services', { serviceId: res.data.id }])
        }
      })
    );
  }

  public createServiceByAnother(dataModel: CreateServiceByAnotherDataModel) {
    return this.http.dataModelRequest<ServiceData>(
      dataModel,
      ApiRoutes.CreateServiceByAnother
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          this.router.navigateByUrl(`/services/${res.data.id}`)
        }
      })
    ).subscribe();
  }

  public getServices(dataModel: GetServicesDataModel) {
    this.servicesData$ = new BehaviorSubject<RequestState<ServiceData[]> | null>(null);
    const req = this.http.dataModelRequest<ServiceData[]>(
      dataModel,
      ApiRoutes.GetServices
    );
    req.subscribe(this.servicesData$);
    return req;
  }

  public getService(dataModel: GetServiceDataModel) {
    this.serviceData$ = new BehaviorSubject<RequestState<ServiceData> | null>(null);
    const req = this.http.dataModelRequest<ServiceData>(
      dataModel,
      ApiRoutes.GetService
    );
    req.subscribe(this.serviceData$);
    return req;
  }

  public getServiceReleases(dataModel: GetServiceReleasesDataModel) {
    this.serviceReleasesData$ = new BehaviorSubject<RequestState<ReleaseData[]> | null>(null);
    const req = this.http.dataModelRequest<ReleaseData[]>(
      dataModel,
      ApiRoutes.GetServiceReleases
    );
    req.subscribe(this.serviceReleasesData$);
    return req;
  }

  public addServiceRequirement(dataModel: AddServiceRequirementDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.AddServiceRequirement
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          const model = new GetServiceDataModel();
          model.id = res.data.id;
          this.getService(model).subscribe();
        }
      })
    ).subscribe();
  }

  public editServiceRequirement(dataModel: EditServiceRequirementDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.EditServiceRequirement
    ).pipe(
      tap((res) => {
        if (res.isSuccess && res.data?.id) {
          const model = new GetServiceDataModel();
          model.id = res.data.id;
          this.getService(model);
        }
      })
    );
  }

  public deleteServiceRequirement(dataModel: DeleteServiceRequirementDataModel) {
    return this.http.dataModelRequest<EmptyData>(
      dataModel,
      ApiRoutes.DeleteServiceRequirement
    ).pipe(
      tap((res) => {
        if (res.isSuccess && this.serviceData$?.value?.data) {
          const model = new GetServiceDataModel();
          model.id = this.serviceData$.value.data.id;
          this.getService(model);
        }
      })
    );
  }
}
