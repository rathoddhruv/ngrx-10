import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartState, selectCart } from '../../NGRXstore/reducers/cart.reducer';
import { TestserviceService } from '../../services/testservice.service';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss']
})
export class TestcomponentComponent implements OnInit {
cart: any;

  constructor(
    private store: Store<CartState>,
    private testservice: TestserviceService
  ) {
    this.store.pipe(select(selectCart)).subscribe(cart => {
      this.cart = cart;
    });
  }
  ngOnInit() {
  }

}
