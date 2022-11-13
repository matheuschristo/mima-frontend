import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaoComponent } from './medicao.component';

describe('MedicaoComponent', () => {
  let component: MedicaoComponent;
  let fixture: ComponentFixture<MedicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
