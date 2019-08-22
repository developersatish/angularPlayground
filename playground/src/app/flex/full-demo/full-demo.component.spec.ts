import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDemoComponent } from './full-demo.component';

describe('FullDemoComponent', () => {
  let component: FullDemoComponent;
  let fixture: ComponentFixture<FullDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
