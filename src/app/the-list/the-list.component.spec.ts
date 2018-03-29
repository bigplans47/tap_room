import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheListComponent } from './the-list.component';

describe('TheListComponent', () => {
  let component: TheListComponent;
  let fixture: ComponentFixture<TheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
