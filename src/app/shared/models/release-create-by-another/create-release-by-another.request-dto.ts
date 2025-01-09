export type CreateReleaseByAnotherRequestDto = {
  readonly release: {
    readonly service_id: string
    readonly name: string,
    readonly semantic_version: string,
    readonly source_release_id: string
  }
}
