import { RawRequirementData } from "../data/raw-requirement.data"

export type CreateServiceArbitrarilyRequestDto = {
  readonly service: {
    readonly name: string,
    readonly description: string,
    readonly requirements: RawRequirementData[]
  }
}
