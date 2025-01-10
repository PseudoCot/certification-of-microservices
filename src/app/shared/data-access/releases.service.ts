import { Injectable } from "@angular/core";
import { ReleaseData } from "../models/data/release.data";
import { BehaviorSubject } from "rxjs";
import { ApiRoutes } from "../consts";
import { EmptyData } from "../models/data/empty.data";
import { RequirementData } from "../models/data/requirement.data";
import { RequestState } from "../types/http/request-state.type";
import { CreateReleaseArbitrarilyDataModel } from "../models/release-create-arbitrarily/create-release-arbitrarily.data-model";
import { CreateReleaseByAnotherDataModel } from "../models/release-create-by-another/create-release-by-another.data-model";
import { GetReleasesDataModel } from "../models/releases-search/search-releases.data-model";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root',
})
export class ReleasesRelease {
  public releasesData$ = new BehaviorSubject<RequestState<ReleaseData[]> | null>(null);
  public releaseData$ = new BehaviorSubject<RequestState<ReleaseData> | null>(null);

  constructor(private http: HttpService) { }


  public createReleaseArbitrarily(dataModel: CreateReleaseArbitrarilyDataModel) {
    return this.http.dataModelRequest<ReleaseData>(
      dataModel,
      ApiRoutes.CreateReleaseArbitrarily
    );
  }

  public createReleaseByAnother(dataModel: CreateReleaseByAnotherDataModel) {
    return this.http.dataModelRequest<ReleaseData>(
      dataModel,
      ApiRoutes.CreateReleaseByAnother
    );
  }

  public getReleases(dataModel: GetReleasesDataModel) {
    const req = this.http.dataModelRequest<ReleaseData[]>(
      dataModel,
      ApiRoutes.SearchReleases
    );
    req.subscribe(this.releasesData$);
    return req;
  }

  public getRelease(dataModel: GetReleasesDataModel) {
    const req = this.http.dataModelRequest<ReleaseData>(
      dataModel,
      ApiRoutes.GetRelease
    );
    req.subscribe(this.releaseData$);
    return req;
  }

  public addReleaseRequirement(dataModel: GetReleasesDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.AddReleaseRequirement
    );
  }

  public editReleaseRequirement(dataModel: GetReleasesDataModel) {
    return this.http.dataModelRequest<RequirementData>(
      dataModel,
      ApiRoutes.EditReleaseRequirement
    );
  }

  public deleteReleaseRequirement(dataModel: GetReleasesDataModel) {
    return this.http.dataModelRequest<EmptyData>(
      dataModel,
      ApiRoutes.DeleteReleaseRequirement
    );
  }
}