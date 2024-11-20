import { RequestState } from "../../types/http/request-state.type";

export function requestSetters<D, E = unknown>() {
  return {
    setPending: (state: RequestState<D, E>): RequestState<D, E> => ({
      ...state,
      status: 'none',
      error: null,
    }),

    setLoading: (state: RequestState<D, E>): RequestState<D, E> => ({
      ...state,
      status: 'pending',
      error: null,
    }),

    setSuccess: (state: RequestState<D, E>, data: D): RequestState<D, E> => ({
      ...state,
      status: 'success',
      error: null,
      data,
    }),

    setError: (state: RequestState<D, E>, error: E): RequestState<D, E> => ({
      ...state,
      status: 'error',
      error,
    }),

    reset: (state: RequestState<D, E>): RequestState<D, E> => ({
      ...state,
      status: 'none',
      error: null,
      data: null,
    }),
  };
}
