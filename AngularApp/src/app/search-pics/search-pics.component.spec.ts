import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPicsComponent } from './search-pics.component';

describe('SearchPicsComponent', () => {
  let component: SearchPicsComponent;
  let fixture: ComponentFixture<SearchPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
