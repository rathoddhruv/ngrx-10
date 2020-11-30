import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { CartState, selectCart } from "../NGRXstore/reducers/cart.reducer";
import { Cart } from "../NGRXstore/models/cart";

@Injectable({
  providedIn: "root"
})
export class TestserviceService {
  private cart: Cart;

  constructor(private store: Store<CartState>) {
    this.store.pipe(select(selectCart)).subscribe(cart => {
      this.cart = cart;
    });
  }

  changeCartValue() {
    let that = this;
    let valueArray = ["mozilla", "safari", "IE", "Chrome", "Firefox", "sample"];
    let i = 0;
    (function repeat(times) {
      if (++i > 5) return;
      setTimeout(function() {
        that.cart.browser = valueArray[i];
        repeat();
      }, 5000);
    })();
  }
  changeCartObjValue() {
    //this.cart.entitlementsObj.test_param = "my test";
    //return;
    let that = this;
    let valueArray = ["test2", "test3", "test4", "test5", "test6", "test7"];
    let i = 0;
    (function repeat(times) {
      if (++i > 5) return;
      setTimeout(function() {
        that.cart.entitlementsObj.test_param = valueArray[i];
        repeat();
      }, 5000);
    })();
  }
}
