import { Observable, catchError, map, of, startWith } from 'rxjs';
import { createRequestAdapter } from './create-request-adapter';

export function withRequestState<D, E = unknown>() {
  const adapter = createRequestAdapter<D, E>();
  const initialState = adapter.getInitialState();

  return (request: Observable<D>) =>
    request
      .pipe(
        map((data: D) => adapter.setSuccess(initialState, data)),
        catchError((error: E) => of(adapter.setError(initialState, error))),
        startWith(adapter.setLoading(initialState))
      )
      .pipe(
        map((state) => ({
          ...state,
          isLoading: adapter.isLoading(state),
          isSuccess: adapter.isSuccess(state),
          hasError: adapter.hasError(state),
          isDone: adapter.isDone(state),
        }))
      );
}
