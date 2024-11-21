import { LoginRequestModel } from '../request-models/login.request-model';
import { DataModel } from './data-model.type';

export class LoginModel implements DataModel {
  public login!: string;
  public password!: string;

  public toDTO(): LoginRequestModel {
    return {
      login: this.login,
      password: this.password,
    }
  }
}
