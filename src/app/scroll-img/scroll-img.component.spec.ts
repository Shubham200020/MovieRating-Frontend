import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollImgComponent } from './scroll-img.component';

describe('ScrollImgComponent', () => {
  let component: ScrollImgComponent;
  let fixture: ComponentFixture<ScrollImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
