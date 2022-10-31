import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEstacaoComponent } from './register-estacao.component';

describe('RegisterEstacaoComponent', () => {
  let component: RegisterEstacaoComponent;
  let fixture: ComponentFixture<RegisterEstacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEstacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
