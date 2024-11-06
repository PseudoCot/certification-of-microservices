import { environment } from "../../environments/environment";

export const API_URL = !environment.production && environment.useProxy
  ? environment.proxyUrl
  : environment.apiUrl;

export const ApiMethods = {
  Register: 'register',
  Login: 'login',
  RefreshSession: 'refresh_session',
  Logout: 'logout',

  FetchUser: 'get_profile',
  UpdateUser: 'update_user_data',
} as const;

export const ApiRoutes = {
  Register: 'v1/auth/register',
  Login: 'v1/auth/login',
  RefreshSession: 'v1/auth/refresh_session',
  Logout: 'v1/auth/logout',

  FetchUser: 'v1/user/get_profile',
  UpdateUser: 'v1/user/update_user_data',
} as const;


export const AuthStatuses = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;
