import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileServiceComponent } from './mobile-service.component';

describe('MobileServiceComponent', () => {
  let component: MobileServiceComponent;
  let fixture: ComponentFixture<MobileServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
