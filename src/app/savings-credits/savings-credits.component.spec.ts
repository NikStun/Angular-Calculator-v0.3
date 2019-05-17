import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCreditsComponent } from './savings-credits.component';

describe('SavingsCreditsComponent', () => {
  let component: SavingsCreditsComponent;
  let fixture: ComponentFixture<SavingsCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
