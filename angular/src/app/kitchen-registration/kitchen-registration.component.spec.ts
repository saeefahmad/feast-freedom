import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenMenuFormComponent } from './kitchen-registration.component';

describe('KitchenMenuFormComponent', () => {
  let component: KitchenMenuFormComponent;
  let fixture: ComponentFixture<KitchenMenuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenMenuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
