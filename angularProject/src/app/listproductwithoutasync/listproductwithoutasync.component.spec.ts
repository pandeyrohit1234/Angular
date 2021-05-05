import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductwithoutasyncComponent } from './listproductwithoutasync.component';

describe('ListproductwithoutasyncComponent', () => {
  let component: ListproductwithoutasyncComponent;
  let fixture: ComponentFixture<ListproductwithoutasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductwithoutasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductwithoutasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
