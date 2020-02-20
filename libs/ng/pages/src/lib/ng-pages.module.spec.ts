import { async, TestBed } from '@angular/core/testing';
import { NgPagesModule } from './ng-pages.module';

describe('NgPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgPagesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgPagesModule).toBeDefined();
  });
});
