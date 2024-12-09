import { RequestState } from "../../types/http/request-state.type";
import { requestSelectors } from "./request-selectors";
import { requestSetters } from "./request-setters";

export function createRequestAdapter<D, E = unknown>() {
  return {
    getInitialState: (
      data: D | null = null,
      initialState: Partial<RequestState<D, E>> = {}
    ): RequestState<D, E> => ({
      status: 'none',
      error: null,
      ...initialState,
      data,
    }),

    ...requestSetters<D, E>(),
    ...requestSelectors<D, E>(),
  };
}
