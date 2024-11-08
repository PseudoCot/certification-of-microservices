import { environment } from "../../environments/environment";

export const API_URL = !environment.production && environment.useProxy
  ? environment.proxyUrl
  : environment.apiUrl;

export const APIMethods = {
  Register: 'register',
  Login: 'login',
  RefreshSession: 'refresh_session',
  Logout: 'logout',

  FetchUser: 'get_profile',
  UpdateUser: 'update_user_data',
} as const;

export const APIRoutes = {
  Register: 'v1/auth/register',
  Login: 'v1/auth/login',
  RefreshSession: 'v1/auth/refresh_session',
  Logout: 'v1/auth/logout',

  FetchUser: 'v1/user/get_profile',
  UpdateUser: 'v1/user/update_user_data',
} as const;


export const ContentTypes = { // проверить, что работает с заглавными первыми буквами
  Raw: 0,
  Json: 1,
  FormUrlEncoded: 2,
  MultipartFormData: 3,
  Text: 4,
  Blob: 5,
  ArrayBuffer: 6,
  TextXml: 7,
  ImageSvg: 8
} as const;

export const RequestMethodTypes = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Jsonp: 'JSONP',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH'
} as const;

export const RequestResponseTypes = {
  ArrayBuffer: 'arraybuffer',
  Blob: 'blob',
  Json: 'json',
  Text: 'text'
} as const;


export const AuthStatuses = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;
