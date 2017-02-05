import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  selectedProductType:any;
  productCategoryTypes: any;
  products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,public alertCtrl: AlertController) {
    console.log('constructor ShopPage');
    this.selectedProductType = '1';
    this.productCategoryTypes = [
      { id: 1, name: 'Foods' },
      { id: 2, name: 'Drinks' },
      { id: 3, name: 'Others' }
    ];
    this.products = [
      { id: 1, name: 'Burger', quantity:0, category:1 , img:"https://www.impossiblefoods.com/images/burger/06_Our-Burger_Impact2.jpg", price:60},
      { id: 2, name: 'Nuggets', quantity:0,category:1 , img:"https://tribwpmt.files.wordpress.com/2014/08/467434343.jpg?quality=85&strip=all", price:40},
      { id: 3, name: 'Coke', quantity:0,category:2, img:"http://www.dairyqueen.com/PageFiles/6085/dq-drinks-soft-coke.png?width=&height=810", price:15 },
      { id: 4, name: 'Coffee', quantity:0,category:2, img:"http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-003.jpg", price:20 },
      { id: 5, name: 'Dip Sauce', quantity:0,category:3, img:"http://39florian.hu/wp-content/uploads/2014/09/suruchi-premium-ketchup-sauce.png", price:6 }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  productDetails(productId): void{
    console.log(productId);
  }
  changeQuantity(product,change): void{
    if(!(product.quantity < 1 && change < 0))
      product.quantity = product.quantity+change;
  }
  orderNow(): void{
    this.presentLoading();
  }

  presentLoading(): void {
      if(this.selectionNotEmpty()){
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 3000
        });
        loader.present();
      }else{
        this.showAlert('Invalid order','No product is selected!');
      } 
  }
  showAlert(title,subTitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
  selectionNotEmpty(): Boolean{
    return this.products.find((p)=> p.quantity > 0) != null;
  }
}
