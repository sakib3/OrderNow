import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Product page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  private id: String;
  private shopId: String;
  product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.shopId = navParams.get('shopId');
    this.product = {id:this.id, name:"Berger", shopId: this.shopId, ingredients:[{id:'1',name:'Onion'},{id:'2',name:'Gerlic'},{id:'3',name:'Salt'}]};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage',this.id, this.shopId);  
  }

}
