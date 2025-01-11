import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { RequirementData } from "../models/data/requirement.data";
import { GetAllServiceRequirementsDataModel } from "../models/requirements-get-all-service/get-all-service-requirements.data-model";
import { GetAllReleaseRequirementsDataModel } from "../models/requirements-get-all-release/get-all-release-requirements.data-model";
import { BehaviorSubject } from "rxjs";
import { ApiRoutes } from "../consts";
import { RequestState } from "../types/http/request-state.type";

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  public servicesRequirementData$?: BehaviorSubject<RequestState<RequirementData[]> | null>;
  public releasesRequirementData$?: BehaviorSubject<RequestState<RequirementData[]> | null>;

  constructor(private http: HttpService) { }

  public getAllServicesRequirements(dataModel: GetAllServiceRequirementsDataModel) {
    this.servicesRequirementData$ = new BehaviorSubject<RequestState<RequirementData[]> | null>(null);
    const req = this.http.dataModelRequest<RequirementData[]>(
      dataModel,
      ApiRoutes.GetAllServiceRequirements
    );
    req.subscribe(this.servicesRequirementData$);
    return req;
  }
  public getAllReleasesRequirements(dataModel: GetAllReleaseRequirementsDataModel) {
    this.releasesRequirementData$ = new BehaviorSubject<RequestState<RequirementData[]> | null>(null);
    const req = this.http.dataModelRequest<RequirementData[]>(
      dataModel,
      ApiRoutes.GetAllReleaseRequirements
    );
    req.subscribe(this.releasesRequirementData$);
    return req;
  }
}
