import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {WhyComponent} from './why.component';

describe('WhyComponent', () => {
  let component: WhyComponent;
  let fixture: ComponentFixture<WhyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WhyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
