import { async, TestBed } from '@angular/core/testing';
import { NgSharedMaterialModule } from './ng-shared-material.module';

describe('NgSharedMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgSharedMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgSharedMaterialModule).toBeDefined();
  });
});
