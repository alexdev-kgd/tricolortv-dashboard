import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallStatisticsContainerComponent } from './small-statistics-container.component';

describe('SmallStatisticsContainerComponent', () => {
  let component: SmallStatisticsContainerComponent;
  let fixture: ComponentFixture<SmallStatisticsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallStatisticsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallStatisticsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
