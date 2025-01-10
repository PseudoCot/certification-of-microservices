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

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  public servicesData$ = new BehaviorSubject<RequestState<ServiceData[]> | null>(null);
  public serviceData$ = new BehaviorSubject<RequestState<ServiceData> | null>(null);
  public serviceReleasesData$ = new BehaviorSubject<RequestState<ReleaseData[]> | null>(null);

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
          this.router.navigate(['services', { id: res.data.id }])
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
          this.router.navigate(['services', { id: res.data.id }])
        }
      })
    );
  }

  public getServices(dataModel: GetServicesDataModel) {
    const req = this.http.dataModelRequest<ServiceData[]>(
      dataModel,
      ApiRoutes.GetServices
    );
    req.subscribe(this.servicesData$);
    return req;
  }

  public getService(dataModel: GetServicesDataModel) {
    const req = this.http.dataModelRequest<ServiceData>(
      dataModel,
      ApiRoutes.GetService
    );
    req.subscribe(this.serviceData$);
    return req;
  }

  public getServiceReleases(dataModel: GetServicesDataModel) {
    const req = this.http.dataModelRequest<ReleaseData[]>(
      dataModel,
      ApiRoutes.GetServiceReleases
    );
    req.subscribe(this.serviceReleasesData$);
    return req;
  }

  public addServiceRequirement(dataModel: GetServicesDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.AddServiceRequirement
    );
  }

  public editServiceRequirement(dataModel: GetServicesDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.EditServiceRequirement
    );
  }

  public deleteServiceRequirement(dataModel: GetServicesDataModel) {
    return this.http.dataModelRequest<EmptyData>(
      dataModel,
      ApiRoutes.DeleteServiceRequirement
    );
  }
}
