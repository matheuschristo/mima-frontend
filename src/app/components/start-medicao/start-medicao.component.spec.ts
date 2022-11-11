import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMedicaoComponent } from './start-medicao.component';

describe('StartMedicaoComponent', () => {
  let component: StartMedicaoComponent;
  let fixture: ComponentFixture<StartMedicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartMedicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartMedicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
