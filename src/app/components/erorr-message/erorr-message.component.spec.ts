import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ErorrMessageComponent } from './erorr-message.component';

describe('ErorrMessageComponent', () => {
  let component: ErorrMessageComponent;
  let fixture: ComponentFixture<ErorrMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErorrMessageComponent ],
      imports: [IonicModule.forRoot()],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ErorrMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
