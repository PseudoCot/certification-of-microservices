export type JsonValue =
  | string
  | number
  | boolean
  | { readonly [key: string]: JsonValue }
  | JsonValue[];
