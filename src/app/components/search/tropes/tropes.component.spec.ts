import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TropesComponent } from './tropes.component';

describe('TropesComponent', () => {
  let component: TropesComponent;
  let fixture: ComponentFixture<TropesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TropesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TropesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
