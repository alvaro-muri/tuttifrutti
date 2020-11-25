import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuttifruttiFruitsComponent } from './tuttifrutti-fruits.component';

describe('TuttifruttiFruitsComponent', () => {
  let component: TuttifruttiFruitsComponent;
  let fixture: ComponentFixture<TuttifruttiFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuttifruttiFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuttifruttiFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
