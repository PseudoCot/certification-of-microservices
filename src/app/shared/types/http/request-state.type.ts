import { RequestStatus } from "./request-status.type";

export type RequestState<T, E = unknown> = {
  status: RequestStatus;
  error: E | null;
  data: T | null;
}
