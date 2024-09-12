import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherStandaloneComponent } from './another-standalone.component';

describe('AnotherStandaloneComponent', () => {
  let component: AnotherStandaloneComponent;
  let fixture: ComponentFixture<AnotherStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
