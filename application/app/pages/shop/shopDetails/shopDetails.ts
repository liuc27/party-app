/**
 * Created by liuchao on 6/25/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page,App, Events, NavController, NavParams, PopoverController} from 'ionic-angular';
import {shopDetailsPop1} from "./popoverPages/shopDetailsPop1";
import {shopDetailsPop2} from "./popoverPages/shopDetailsPop2";
import {shopDetailsPop3} from "./popoverPages/shopDetailsPop3";
import {getSelectedShopDetails} from '../../../providers/shopDetails-GetSelectedShopDetails-service/shopDetails-GetSelectedShopDetails-service';
import {ProductDetails} from '../../product/productLists/productDetails/productDetails';

@Component({
    templateUrl: 'build/pages/shop/shopDetails/shopDetails.html',
    providers:[getSelectedShopDetails]
})
export class ShopDetails {
    @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
    @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
    shop;
    productOrShop;
    shopDetails;

    constructor(private params: NavParams,
    private nav:NavController,
    private popover: PopoverController,
    private events: Events,
    public shopDetailsService:getSelectedShopDetails) {
        this.shop = params.data.shop;
        this.events = events;
        this.productOrShop = "shop";
        console.log(params.data);
        this.loadSelectedShopDetails();
        this.popover = popover;

    }

    onPageWillEnter() {
        this.events.publish('hideTabs');
    }

    loadSelectedShopDetails() {
      this.shopDetailsService.load()
          .then(data => {
            this.shopDetails = data;
            console.log(this.shopDetails);
          });
    }

    presentShopDetailsPop1Popover(ev) {
        let shopDetailsPop1Page = this.popover.create(shopDetailsPop1, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        shopDetailsPop1Page.present({
            ev: ev
        });
    }

    presentShopDetailsPop2Popover(ev) {
        let shopDetailsPop2Page = this.popover.create(shopDetailsPop2, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        shopDetailsPop2Page.present({
            ev: ev
        });
    }

    presentShopDetailsPop3Popover(ev) {
        let shopDetailsPop3Page = this.popover.create(shopDetailsPop3, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        console.log("presentPopover");
        shopDetailsPop3Page.present({
            ev: ev
        });
    }

    openProductDetailsPage(product){
        console.log("detail open");
        this.nav.push(ProductDetails,{product:product});
    }
}
