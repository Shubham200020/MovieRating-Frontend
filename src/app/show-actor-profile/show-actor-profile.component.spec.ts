import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActorProfileComponent } from './show-actor-profile.component';

describe('ShowActorProfileComponent', () => {
  let component: ShowActorProfileComponent;
  let fixture: ComponentFixture<ShowActorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowActorProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
