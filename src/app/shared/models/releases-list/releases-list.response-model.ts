import { ReleaseResponseModel } from "../release/release.response-model";

export type ReleasesListResponseModel = {
  readonly releases: ReleaseResponseModel[];
}
