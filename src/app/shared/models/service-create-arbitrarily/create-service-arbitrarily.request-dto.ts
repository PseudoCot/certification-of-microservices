import { AddServiceRequirementRequestDto } from "../service-add-requirement/add-service-requirement.request-dto";

export type CreateServiceArbitrarilyRequestDto = {
  readonly service: {
    readonly name: string,
    readonly description: string,
    readonly requirements: AddServiceRequirementRequestDto[]
  }
}
