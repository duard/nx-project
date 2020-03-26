import { async, TestBed } from '@angular/core/testing';
import { NgSharedModule } from './ng-shared.module';

describe('NgSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgSharedModule).toBeDefined();
  });
});
