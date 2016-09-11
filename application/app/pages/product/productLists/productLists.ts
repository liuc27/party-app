/**
 * Created by liuchao on 6/25/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page,App, Events, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ProductListsPop1} from "./popoverPages/productListsPop1";
import {ProductListsPop2} from "./popoverPages/productListsPop2";
import {ProductListsPop3} from "./popoverPages/productListsPop3";
import {ProductDetails} from './productDetails/productDetails';
import {ShopDetails} from '../../shop/shopDetails/shopDetails';
import {getSelectedProductLists} from '../../../providers/productLists-GetSelectedProductLists-service/productLists-GetSelectedProductLists-service';

@Component({
    templateUrl: 'build/pages/product/productLists/productLists.html',
    providers:[getSelectedProductLists]
})
export class ProductLists {
    @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
    @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
    shop;
    product;
    productOrShop;
    productLists;
    mySlideOptions = {
      autoplay: 3500,
      loop: true,
      speed: 450
    };

    constructor(private params: NavParams,
    private nav:NavController,
    private popover: PopoverController,
    private events: Events,
    public productListsService:getSelectedProductLists) {
        this.product = params.data.product;
        this.productOrShop = "product";
        console.log("params.data");
        this.loadSelectedProductLists();
        this.shop = params.data.product;
        this.popover = popover;
    }

    onPageWillEnter() {
        this.events.publish('hideTabs');
    }

    loadSelectedProductLists() {
      this.productListsService.load(this.params)
          .then(data => {
            this.productLists = data;
            console.log("this.productLists");
          });
    }

    presentProductListsPop1Popover(ev) {
        let productListsPop1 = this.popover.create(ProductListsPop1, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        productListsPop1.present({
            ev: ev
        });
    }

    presentProductListsPop2Popover(ev) {
        let productListsPop2 = this.popover.create(ProductListsPop2, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        productListsPop2.present({
            ev: ev
        });
    }

    presentProductListsPop3Popover(ev) {
        let productListsPop3 = this.popover.create(ProductListsPop3, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        productListsPop3.present({
            ev: ev
        });
    }

    openProductDetailsPage(product){
      console.log("detail open");
      this.nav.push(ProductDetails,{product:product});
    }

    openShopDetailsPage(shop){
        console.log("shop");
        this.nav.push(ShopDetails,{shop:shop});

    }
}
