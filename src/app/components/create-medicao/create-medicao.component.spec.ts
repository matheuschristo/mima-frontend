import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicaoComponent } from './create-medicao.component';

describe('CreateMedicaoComponent', () => {
  let component: CreateMedicaoComponent;
  let fixture: ComponentFixture<CreateMedicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMedicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
