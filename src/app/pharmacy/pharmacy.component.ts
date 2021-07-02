import { Component, OnInit } from '@angular/core';
import {Pharmacy} from '../model/Pharmacy';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  pharmacy: Pharmacy;
  pharmacies: Pharmacy[];

  constructor() { }

  ngOnInit(): void {
  }

}
