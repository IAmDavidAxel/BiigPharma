import { Component, OnInit } from '@angular/core';
import {Pharmacy} from '../model/Pharmacy';
import {PharmacyService} from '../pharmacy.service';
import {FormBuilder} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {
  pharmacyForm;
  public pharmacy: Pharmacy;
  public pharmacies: Pharmacy[] = [];

  constructor(private pharmacyService: PharmacyService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPharmacy();
  }

  // tslint:disable-next-line:typedef
  getPharmacy() {
    this.pharmacyService.findPharmacy().subscribe((pharmacies =>
        this.pharmacies = pharmacies
      ),
    );
  }
}
