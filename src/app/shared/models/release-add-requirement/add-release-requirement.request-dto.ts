import { RawRequirementData } from "../data/raw-requirement.data";

export type AddReleaseRequirementRequestDto = {
  readonly requirement: RawRequirementData,
  readonly release_id: string;
}
