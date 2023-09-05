import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsearchsComponent } from './recentsearchs.component';

describe('RecentsearchsComponent', () => {
  let component: RecentsearchsComponent;
  let fixture: ComponentFixture<RecentsearchsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentsearchsComponent]
    });
    fixture = TestBed.createComponent(RecentsearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
