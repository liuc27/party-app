import {Component} from '@angular/core';
import {Platform, Events, ActionSheetController, NavController,NavParams} from 'ionic-angular';
import {ProductService} from '../../providers/product-getAllProducts-service/product-getAllProducts-service';
import {ProductLists} from './productLists/productLists';
import {ProductDetails} from './productLists/productDetails/productDetails';
import {ShopDetails} from '../shop/shopDetails/shopDetails';

@Component({
  templateUrl: 'build/pages/product/product.html',
  providers:[ProductService]
})
export class ProductPage {
  public products:any;
  public product:any;
  private menu1:any;
  private menu2:any;
  private shop;
  point;

  constructor(private nav:NavController,
              private actionSheet:ActionSheetController,
              private params:NavParams,
              public productService:ProductService,
              private events:Events,
              public platform:Platform) {
    this.product=params.data.product;
    this.loadProducts();
    this.actionSheet=actionSheet;

    this.menu1=[{
      id: 0,
      name: 'cute',
      icon: 'ios-wine',
      color: 'red',
      type: 'food'
    }, {
      id: 1,
      name: 'beautiful',
      icon: 'ios-basket',
      color: '#5383FF',
      type: 'shopping'

    }, {
      id: 2,
      name: 'sexy',
      icon: 'ios-color-wand',
      color: 'pink',
      type: 'beauty'
    }, {
      id: 3,
      name: 'elegant',
      icon: 'ios-moon',
      color: '#5383FF',
      type: 'hotel'
    }, {
      id: 4,
      name: 'season',
      icon: 'ios-film',
      color: 'silver',
      type: 'movie'
    }];
    this.menu2=[{
      id: 5,
      name: 'date',
      icon: 'ios-car',
      color: 'gold',
      type: 'car'
    }, {
      id: 6,
      name: 'work',
      icon: 'ios-cafe',
      color: 'lightgreen',
      type: 'job'
    }, {
      id: 7,
      name: 'party',
      icon: 'ios-musical-notes',
      color: 'lightgreen',
      type: 'job'
    }, {
      id: 8,
      name: 'wedding',
      icon: 'md-add',
      color: 'lightgreen',
      type: 'job'
    }, {
      id: 9,
      name: 'All',
      icon: 'ios-eye',
      color: 'orange',
      type: 'all'
    }];
  }

  onPageWillEnter() {
    this.events.publish('showTabs');
  }

  loadProducts() {
    this.productService.load()
        .then(data => {
          this.products = data;
        });
  }

  openMenu() {
    let actionSheet = this.actionSheet.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();

  }

  openProductListsPage(product){
    this.nav.push(ProductLists,{product:product});
  }

  openProductDetailsPage(product){
    console.log("detail open");
    console.log("product");
    this.nav.push(ProductDetails,{product:product});
  }

  openShopDetailsPage(shop){
      console.log("shop");
      this.nav.push(ShopDetails,{shop:shop});
  }

}
