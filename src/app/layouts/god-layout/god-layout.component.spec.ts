import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodLayoutComponent } from './god-layout.component';

describe('GodLayoutComponent', () => {
  let component: GodLayoutComponent;
  let fixture: ComponentFixture<GodLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
