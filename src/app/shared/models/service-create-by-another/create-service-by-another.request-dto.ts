export type CreateServiceByAnotherRequestDto = {
  readonly service: {
    readonly name: string,
    readonly description: string,
    readonly source_service_id: string
  }
}
