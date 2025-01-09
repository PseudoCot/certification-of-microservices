export type GetReleasesRequestDto = {
  readonly batch: {
    readonly limit: number;
    readonly offset: number;
  },
  readonly name?: string;
}
