import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertActorComponent } from './insert-actor.component';

describe('InsertActorComponent', () => {
  let component: InsertActorComponent;
  let fixture: ComponentFixture<InsertActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertActorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
