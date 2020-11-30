import { Component, OnInit } from "@angular/core";
import { Employee, employees } from "../app/employees";
import { Store, select } from "@ngrx/store";
import { CartState, selectCart } from "../app/NGRXstore/reducers/cart.reducer";
import { Cart } from "../app/NGRXstore/models/cart";
import { TestserviceService } from "./services/testservice.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  cart: Cart;
  title = "sampleProject";
  public data: Employee[] = employees;
  value = "";
  onEnter(value: string) {
    this.cart.entitlementsObj.test_param_next = value;
  }

  constructor(
    private store: Store<CartState>,
    private testservice: TestserviceService
  ) {
    this.store.pipe(select(selectCart)).subscribe(cart => {
      this.cart = cart;
    });
  }
  ngOnInit(): void {
    this.cart.browser = "Sample browser";
    this.testservice.changeCartValue();
    this.testservice.changeCartObjValue();
  }
}
