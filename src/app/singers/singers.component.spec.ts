import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingersComponent } from './singers.component';

describe('SingersComponent', () => {
  let component: SingersComponent;
  let fixture: ComponentFixture<SingersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
