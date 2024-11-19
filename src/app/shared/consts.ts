import { environment } from "../../environments/environment";

///// API /////
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


///// REQUESTS /////
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


///// OTHER /////
export const AppRoutes = {
  Home: {
    Path: '/home',
    Title: 'Сервис для аттестации микросервисов'
  },
  Auth: {
    Path: '/auth',
    Title: 'Аутентификация',
    Children: {
      Login: {
        Path: '/login',
        Title: 'Вход',
      },
      Register: {
        Path: '/register',
        Title: 'Регистрация',
      },
    }
  },
  User: {
    Path: '/user',
    Title: 'Личный кабинет',
  },
  Services: {
    Path: '/services',
    Title: 'Сервисы',
    Children: {
      List: {
        Path: '/',
        Title: 'Список сервисов',
      },
      Unit: {
        Path: '/:id',
        Title: 'Информация о сервисе',
      },
      Reliases: {
        Path: '/reliases',
        Title: 'Релизы',
        Children: {
          List: {
            Path: '/',
            Title: 'Список релизов',
          },
          Unit: {
            Path: '/:id',
            Title: 'Информация о релизе',
          },
        }
      },
    }
  },
  Templates: {
    Path: '/templates',
    Title: 'Шаблоны',
    Children: {
      List: {
        Path: '/',
        Title: 'Список шаблонов',
      },
      Unit: {
        Path: '/:id',
        Title: 'Информация о шаблоне',
      },
    }
  },
  Requirements: {
    Path: '/requirements',
    Title: 'Требования',
    Children: {
      List: {
        Path: '/',
        Title: 'Список требований',
      }
    }
  },
} as const;

export const HiddenNavRoutes: { Path: string, Title: string }[] = [
  {
    Path: AppRoutes.Services.Path,
    Title: AppRoutes.Services.Title
  },
  {
    Path: AppRoutes.Templates.Path,
    Title: AppRoutes.Templates.Title
  },
  {
    Path: AppRoutes.Requirements.Path,
    Title: AppRoutes.Requirements.Title
  },
];


export const AuthStatuses = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;
