export type LoginRequestDto = {
  readonly login_data: {
    readonly first_factor: string,
    readonly password: string
  }
}
