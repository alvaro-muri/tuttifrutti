import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuttifruttiAboutComponent } from './tuttifrutti-about.component';

describe('TuttifruttiAboutComponent', () => {
  let component: TuttifruttiAboutComponent;
  let fixture: ComponentFixture<TuttifruttiAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuttifruttiAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuttifruttiAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
