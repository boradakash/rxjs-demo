import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DblclickComponent } from './dblclick.component';

describe('DblclickComponent', () => {
  let component: DblclickComponent;
  let fixture: ComponentFixture<DblclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DblclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DblclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
