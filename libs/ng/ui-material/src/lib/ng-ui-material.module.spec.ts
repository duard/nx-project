import { async, TestBed } from '@angular/core/testing';
import { NgUiMaterialModule } from './ng-ui-material.module';

describe('NgUiMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgUiMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgUiMaterialModule).toBeDefined();
  });
});
