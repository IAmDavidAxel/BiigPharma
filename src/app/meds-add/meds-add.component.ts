import { Component, OnInit } from '@angular/core';
import {MedsService} from '../meds.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-meds-add',
  templateUrl: './meds-add.component.html',
  styleUrls: ['./meds-add.component.css']
})
export class MedsAddComponent implements OnInit {

  public medForm;

  constructor(private medService: MedsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.medForm = this.formBuilder.group({
      name: ['']
    }) ;
  }

  onSubmit() {
    this.medService.findDrug(this.medForm).subscribe();
  }
}
