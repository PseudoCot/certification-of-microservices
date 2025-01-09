import { environment } from "../../environments/environment";

///// API /////
export const API_URL = !environment.production && environment.useProxy
  ? environment.proxyUrl
  : environment.apiUrl;

export const ApiRoutes = {
  Register: {
    Path: 'v1/auth/register_user',
    Method: 'register_user'
  },
  Login: {
    Path: 'v1/auth/login',
    Method: 'login'
  },
  RefreshSession: {
    Path: 'v1/auth/refresh_session',
    Method: 'refresh_session'
  },
  Logout: {
    Path: 'v1/auth/logout',
    Method: 'logout'
  },

  GetUser: {
    Path: 'v1/auth/get_current_user',
    Method: 'get_current_user'
  },
  UpdateUser: {
    Path: 'v1/auth/update_user_data',
    Method: 'update_user_data'
  },
  DeleteUser: {
    Path: 'v1/auth/delete_user',
    Method: 'delete_user'
  },

  CreateServiceArbitrarily: {
    Path: 'v1/auth/create_service_arbitrarily',
    Method: 'create_service_arbitrarily'
  },
  CreateServiceByAnother: {
    Path: 'v1/auth/create_service_by_another',
    Method: 'create_service_by_another'
  },
  GetServices: {
    Path: 'v1/auth/get_services',
    Method: 'get_services'
  },
  GetService: {
    Path: 'v1/auth/get_service',
    Method: 'get_service'
  },
  GetServiceReleases: {
    Path: 'v1/auth/get_service_releases',
    Method: 'get_service_releases'
  },
  AddServiceRequirement: {
    Path: 'v1/auth/add_service_requirement',
    Method: 'add_service_requirement'
  },
  EditServiceRequirement: {
    Path: 'v1/auth/edit_service_requirement',
    Method: 'edit_service_requirement'
  },
  DeleteServiceRequirement: {
    Path: 'v1/auth/delete_service_requirement',
    Method: 'delete_service_requirement'
  },

  CreateReleaseArbitrarily: {
    Path: 'v1/auth/create_release_arbitrarily',
    Method: 'create_release_arbitrarily'
  },
  CreateReleaseByAnother: {
    Path: 'v1/auth/create_release_by_another',
    Method: 'create_release_by_another'
  },
  SearchReleases: {
    Path: 'v1/auth/search_releases',
    Method: 'search_releases'
  },
  GetRelease: {
    Path: 'v1/auth/get_release',
    Method: 'get_release'
  },
  AddReleaseRequirement: {
    Path: 'v1/auth/add_release_requirement',
    Method: 'add_release_requirement'
  },
  EditReleaseRequirement: {
    Path: 'v1/auth/edit_release_requirement',
    Method: 'edit_release_requirement'
  },
  DeleteReleaseRequirement: {
    Path: 'v1/auth/delete_release_requirement',
    Method: 'delete_release_requirement'
  },

  GetAllServiceRequirements: {
    Path: 'v1/auth/get_all_service_requirements',
    Method: 'get_all_service_requirements'
  },
  GetAllReleaseRequirements: {
    Path: 'v1/auth/get_all_release_requirements',
    Method: 'get_all_release_requirements'
  },
} as const;


///// REQUESTS /////
export const JsonRpcErrorCodes = {
  [-32700]: 'Parse Error',
  [-32600]: 'Invalid Request',
  [-32601]: 'Method not found',
  [-32602]: 'Invalid params',
  [-32603]: 'Internal error',
} as const;

export const ContentTypes = {
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
    Path: 'home',
    Title: 'Сервис для аттестации микросервисов'
  },
  Auth: {
    Path: 'auth',
    Title: 'Аутентификация',
    Children: {
      Login: {
        Path: 'login',
        Title: 'Вход',
      },
      Register: {
        Path: 'register',
        Title: 'Регистрация',
      },
    }
  },
  User: {
    Path: 'user',
    Title: 'Личный кабинет',
  },
  Services: {
    Path: 'services',
    Title: 'Сервисы',
    Children: {
      List: {
        Path: '',
        Title: 'Список сервисов',
      },
      Info: {
        Path: ':id',
        Title: 'Информация о сервисе',
      },
      Releases: {
        Path: 'releases',
        Title: 'Релизы',
        Children: {
          List: {
            Path: '',
            Title: 'Список релизов',
          },
          Info: {
            Path: ':id',
            Title: 'Информация о релизе',
          },
        }
      },
    }
  },
  Requirements: {
    Path: 'requirements',
    Title: 'Требования',
    Children: {
      List: {
        Path: '',
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
    Path: `${AppRoutes.Requirements.Path}?type=services`,
    Title: `${AppRoutes.Requirements.Title} сервисов`
  },
  {
    Path: `${AppRoutes.Requirements.Path}?type=releases`,
    Title: `${AppRoutes.Requirements.Title} релизов`
  },
];


export const AuthStatuses = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown',
} as const;

export const RequirementTypes = {
  Text: 'text',
  Link: 'link',
  File: 'file'
} as const;
