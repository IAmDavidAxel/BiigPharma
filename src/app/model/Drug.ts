import {Injectable} from '@angular/core';

export class Drug {
  constructor(
    public name: string,
    public description: string,
    public price: Float64Array,
    public needPrescription: boolean,
    public stock: BigInteger
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})

export class DrugAdapter {

  adapt(item: any): Drug{
    return new Drug(item.name, item.description, item.price, item.need_prescription,
       item.stock);
  }
}

