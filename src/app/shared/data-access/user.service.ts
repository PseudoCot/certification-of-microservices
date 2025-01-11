import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { UserData } from "../models/data/user.data";
import { GetUserDataModel } from "../models/user-get/get-user.data-model";
import { ApiRoutes } from "../consts";
import { BehaviorSubject } from "rxjs";
import { RequestState } from "../types/http/request-state.type";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUserData$?: BehaviorSubject<RequestState<UserData> | null>;

  constructor(private http: HttpService) { }

  public getCurrentUser(dataModel: GetUserDataModel) {
    this.currentUserData$ = new BehaviorSubject<RequestState<UserData> | null>(null);
    const req = this.http.dataModelRequest<UserData>(
      dataModel,
      ApiRoutes.GetUser
    );
    req.subscribe(this.currentUserData$);
    return req;
  }

  // public updateUser(dataModel: GetUserDataModel) {
  //   this.userData$ = this.http.dataModelRequest<GetUserResponseDto, GetUserRequestDto>(
  //     dataModel,
  //     ApiRoutes.GetUser
  //   );
  //   return this.userData$;
  // }

  // public deleteUser(dataModel: GetUserDataModel) {
  //   this.userData$ = this.http.dataModelRequest<GetUserResponseDto, GetUserRequestDto>(
  //     dataModel,
  //     ApiRoutes.GetUser
  //   );
  //   return this.userData$;
  // }
}
