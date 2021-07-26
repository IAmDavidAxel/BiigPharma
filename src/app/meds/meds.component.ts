import { Component, OnInit } from '@angular/core';
import {MedsService} from '../meds.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.component.html',
  styleUrls: ['./meds.component.css']
})
export class MedsComponent implements OnInit {
public  medsForm;


  constructor(private medsService: MedsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.medsForm = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      pharmacy_id: [''],
      need_prescription: ['']
    });
  }

  onSubmit(): void {
    this.medsService.addDrugs(this.medsForm.value).subscribe();
  }
}
