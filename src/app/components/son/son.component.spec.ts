/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SonComponent } from './son.component';

describe('SonComponent', () => {
  let component: SonComponent;
  let fixture: ComponentFixture<SonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
