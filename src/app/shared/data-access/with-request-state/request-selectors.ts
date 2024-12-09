import { RequestState } from "../../types/http/request-state.type";

export function requestSelectors<D, E = unknown>() {
  return {
    selectData: (state: RequestState<D, E>) => state.data,
    selectError: (state: RequestState<D, E>) => state.error,
    selectStatus: (state: RequestState<D, E>) => state.status,

    isPending: (state: RequestState<D, E>) => state.status === 'none',
    isLoading: (state: RequestState<D, E>) => state.status === 'pending',
    isSuccess: (state: RequestState<D, E>) => state.status === 'success',
    hasError: (state: RequestState<D, E>) => state.status === 'error',
    isDone: (state: RequestState<D, E>) => state.status === 'success' || state.status === 'error',
  };
}
