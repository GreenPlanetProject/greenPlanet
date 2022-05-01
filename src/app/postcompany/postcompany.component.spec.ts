import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcompanyComponent } from './postcompany.component';

describe('PostcompanyComponent', () => {
  let component: PostcompanyComponent;
  let fixture: ComponentFixture<PostcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
