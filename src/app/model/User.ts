import {Injectable} from '@angular/core';


export class User {
  constructor(
    public name: string,
    public lastName: string,
    public username: string,
    public email: string,
    public phoneNumber: string,
    public neighborhood: string,
    public latitude: string,
    public longitude: string,
    public token: string
  ) {
  }

}
@Injectable({
  providedIn: 'root'
})

export class UserAdapter {

  adapt(item: any): User{
    return new User(item.name, item.lastName, item.username, item.email,
      item.phoneNumber, item.neighborhood, item.latitude, item.longitude,
      item.token);
  }
}


