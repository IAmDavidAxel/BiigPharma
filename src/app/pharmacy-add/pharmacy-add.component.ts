import { Component, OnInit } from '@angular/core';
import {PharmacyService} from '../pharmacy.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pharmacy-add',
  templateUrl: './pharmacy-add.component.html',
  styleUrls: ['./pharmacy-add.component.css']
})
export class PharmacyAddComponent implements OnInit {
  public pharmacyForm;

  constructor(private pharmacyService: PharmacyService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pharmacyForm = this.formBuilder.group({
      name: [''],
      address: [''],
      phoneNumber: [''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.pharmacyService.addPharmacy(this.pharmacyForm.value).subscribe();
  }

}
