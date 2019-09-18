import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtracaoComponent } from './atracao.component';

describe('AtracaoComponent', () => {
  let component: AtracaoComponent;
  let fixture: ComponentFixture<AtracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
