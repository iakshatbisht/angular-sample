import { Component, OnInit} from '@angular/core';
import { UserService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [UserService]
})
export class CartComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  this.user = this.userService.user;
  }
}
