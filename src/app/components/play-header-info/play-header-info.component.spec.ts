import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayHeaderInfoComponent } from './play-header-info.component';

describe('PlayHeaderInfoComponent', () => {
  let component: PlayHeaderInfoComponent;
  let fixture: ComponentFixture<PlayHeaderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayHeaderInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayHeaderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
