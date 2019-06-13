import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeComponent } from './aboutme.component';
describe('checkTest', () => { //fdescribe is to focus on only this describe
  let component: AboutmeComponent;
  let text = "";

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [ AboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    text = "hello"
  });

  it ('check for Hello', //test case to compare 2 srings
  () => {
    expect('hello').toBe(text)
  })
  it ('check for not Hello', //test case to compare 2 srings
  () => {
    expect('world').not.toBe(text)
  })
  xit('should create', () => { // check if the component/service exists
    expect(component).toBeTruthy();
  });
})
fdescribe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
