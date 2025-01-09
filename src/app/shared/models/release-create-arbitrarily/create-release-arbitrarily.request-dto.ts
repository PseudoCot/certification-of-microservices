import { RawRequirementData } from "../data/raw-requirement.data";

export type CreateReleaseArbitrarilyRequestDto = {
  readonly requirements: RawRequirementData[],
  readonly service_id: string,
  readonly name: string,
  readonly semantic_version: string,
}
