import {Injectable} from '@angular/core';

export class Pharmacy {

  constructor(
    public pharmacyName: string,
    public pharmacyCity: string,
    public neighborhood: string,
    public phoneNumber: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class PharmacyAdapter{

  adapt(item: any): Pharmacy{
    return new Pharmacy(item.pharmacyName, item.pharmacyCity, item.neighborhood, item.phoneNumber);
  }
}
