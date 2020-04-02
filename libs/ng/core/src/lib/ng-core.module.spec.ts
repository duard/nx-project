import { async, TestBed } from '@angular/core/testing';
import { NgCoreModule } from './ng-core.module';

describe('NgCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgCoreModule).toBeDefined();
  });
});
