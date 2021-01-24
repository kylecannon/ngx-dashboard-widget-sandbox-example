import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetBScoreboardComponent } from './widget-b-scoreboard.component';

describe('WidgetBScoreboardComponent', () => {
  let component: WidgetBScoreboardComponent;
  let fixture: ComponentFixture<WidgetBScoreboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetBScoreboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBScoreboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
