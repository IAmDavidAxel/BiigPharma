import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsAddComponent } from './meds-add.component';

describe('MedsAddComponent', () => {
  let component: MedsAddComponent;
  let fixture: ComponentFixture<MedsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
