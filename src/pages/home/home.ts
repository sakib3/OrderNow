import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  restaurants: any;
  isRecentOrder: Boolean = false;
  constructor(public navCtrl: NavController) {
    this.restaurants = [
      { id: 1, name: 'Macdonalds' },
      { id: 2, name: 'Max' },
      { id: 3, name: 'Burger King' },
      { id: 4, name: 'Subway' }];
    setTimeout(() => {
      this.isRecentOrder = true;
    }, 2000);
  }
  showOrder(): void { }
  selectShopForOrder(shopId): void {
    console.log(shopId);
    this.navCtrl.push(ShopPage);
  }
}
