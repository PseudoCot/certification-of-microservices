export type RegisterRequestDto = {
  readonly data: {
    readonly name: string;
    readonly email: string;
    readonly nickname: string;
    readonly password: string;
  }
}
