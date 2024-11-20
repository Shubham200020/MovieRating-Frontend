import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUserDemoComponent } from './insert-user-demo.component';

describe('InsertUserDemoComponent', () => {
  let component: InsertUserDemoComponent;
  let fixture: ComponentFixture<InsertUserDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertUserDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertUserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
