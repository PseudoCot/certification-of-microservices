import { DataModel } from '../../types/models/data-model.type';
import { LoginRequestModel } from './login.request-model';

export class LoginDataModel implements DataModel {
  public login!: string;
  public password!: string;

  public toDTO(): LoginRequestModel {
    return {
      login: this.login,
      password: this.password,
    }
  }
}
