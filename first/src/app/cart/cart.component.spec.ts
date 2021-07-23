import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { UserService } from './cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(CartComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should use the user name from service',()=>{
    let fixture = TestBed.createComponent(CartComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });
});
