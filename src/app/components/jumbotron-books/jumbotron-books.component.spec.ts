import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronBooksComponent } from './jumbotron-books.component';

describe('JumbotronBooksComponent', () => {
  let component: JumbotronBooksComponent;
  let fixture: ComponentFixture<JumbotronBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbotronBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
