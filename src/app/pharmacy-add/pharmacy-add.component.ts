import { Component, OnInit } from '@angular/core';
import {PharmacyService} from '../pharmacy.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pharmacy-add',
  templateUrl: './pharmacy-add.component.html',
  styleUrls: ['./pharmacy-add.component.css']
})
export class PharmacyAddComponent implements OnInit {
  public pharmacyForm;

  constructor(private pharmacyService: PharmacyService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.pharmacyForm = this.formBuilder.group({
      pharmacyName: [''],
      neighborhood: [''],
      phoneNumber: [''],
      group: [''],
      username: [''],
      email: [''],
      password: [''],
      pharmacyCity: [''],
      latitude: [''],
      longitude: ['']
    });
  }

  onSubmit(): void {
    this.pharmacyService.addPharmacy(this.pharmacyForm.value).subscribe();
    this.router.navigate(['/addPharmacy']).then(r => {} );
  }

}
