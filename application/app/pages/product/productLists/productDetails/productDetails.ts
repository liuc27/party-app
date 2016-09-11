/**
 * Created by liuchao on 6/25/16.
 */
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Page,App, ActionSheetController, Events, NavController, NavParams, Popover} from 'ionic-angular';
import {getSelectedProductDetails} from '../../../../providers/productDetails-GetSelectedProductDetails-service/productDetails-GetSelectedProductDetails-service';
import {ShopDetails} from '../../../shop/shopDetails/shopDetails';
import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import {ProductService} from '../../../../providers/product-getAllProducts-service/product-getAllProducts-service';


@Component({
    templateUrl: 'build/pages/product/productLists/productDetails/productDetails.html',
    providers:[getSelectedProductDetails, ProductService]
})
export class ProductDetails {
    @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
    @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;
    product;
    chatRoomId;
    morphPageId;
    productOrShop;
    productDetails;
    url: SafeResourceUrl;
    constructor(private params: NavParams,
    private nav:NavController,
    sanitizer: DomSanitizationService,
    private actionSheet:ActionSheetController,
    private events: Events,
    public productDetailsService:getSelectedProductDetails,
    public chatRoomService:ProductService,
    public morphPageService:ProductService,
    public productService:ProductService) {
        this.product = params.data.product;
        this.productOrShop = "product";
      console.log("params.data");
        this.loadSelectedproductDetails();
        this.actionSheet = actionSheet;
        this.url = sanitizer.bypassSecurityTrustResourceUrl('http://youtube.com/embed/U92mEUV1Ka4?rel=0&modestbranding=1&autohide=1&showinfo=0&');
    }

    onPageWillEnter() {
        this.events.publish('hideTabs');
    }

    shareActionSheet() {
        let actionSheet = this.actionSheet.create({
            title: 'SHARE',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Facebook',
                    icon: 'logo-facebook',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'email',
                    icon: 'ios-mail',
                    handler: () => {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Wechat',
                    icon: 'arrow-dropright-circle',
                    handler: () => {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Twitter',
                    icon: 'logo-twitter',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Google',
                    icon: 'logo-google',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: 'md-close',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();

    }

    loadSelectedproductDetails() {
      this.productDetailsService.load()
          .then(data => {
            this.productDetails = data;
            console.log("this.productDetails");
          });
    }

    openShopDetailsPage(shop){
        console.log("showShopDetails");
        console.log("shop");
        this.nav.push(ShopDetails,{shop:shop});
    }

    enterChatRoom() {
        console.log("enterChatRoom");

    }

    enterMorphPage() {
        console.log("enterMorphPage");
    }
}
