import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertArtistComponent } from './insert-actor.component';

describe('InsertActorComponent', () => {
  let component: InsertArtistComponent;
  let fixture: ComponentFixture<InsertArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
