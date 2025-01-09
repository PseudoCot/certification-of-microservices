export type AddServiceRequirementRequestDto = {
  readonly requirement: {
    readonly name: string;
    readonly value: string;
  },
  readonly service_id: string;
}
