import { ReleaseRequestModel } from "../release/release.request-model";

export type ReleasesListRequestModel = {
  readonly releases: ReleaseRequestModel[];
}
