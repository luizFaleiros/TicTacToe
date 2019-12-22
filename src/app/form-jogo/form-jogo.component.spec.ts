import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJogoComponent } from './form-jogo.component';

describe('FormJogoComponent', () => {
  let component: FormJogoComponent;
  let fixture: ComponentFixture<FormJogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
