import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Cart } from './Cart';

@Component({
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.css']
})
export class CartComponent {
    pageTitle = 'My Cart';
    selectedProducts: any = [];
    imageWidth = 50;
    imageMargin = 2;
    grandTotal: any = 0;
    quantity: any = 0;
    submit: boolean;

    // fetches the selectedProducts from the service class and calculates
    // grandTotal and quantity which are then stored in a sessionStorage
    constructor(private productService: ProductService,
        private _route: ActivatedRoute, private _router: Router) {
        this.submit = true;
        this.selectedProducts = this.productService.selectedProducts;
        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    }

    //Updates the cart if user changes the quantity in the page
    updateCart(product: Cart) {
        product.totalPrice = product.price * product.quantity;
        this.grandTotal = 0;
        this.quantity = 0;
        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    }

    // deletes the selected product if delete icon is clicked
    remove(index: number) {
        this.selectedProducts.splice(index, 1);
        this.grandTotal = 0;
        this.quantity = 0;
        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
        sessionStorage.setItem('grandTotal', this.grandTotal);
        sessionStorage.setItem('selectedItems', this.quantity);
    }

    // Invoked when user clicks on 'Continue Shopping' button on the page
    onBack(): void {
        this._router.navigate(['/products', this.selectedProducts]);
    }

    // Invoked when checkout button is clicked
    // Removes the selectedProducts data
    checkout() {
        this.submit = false;
        this.productService.selectedProducts = [];
        sessionStorage.removeItem('selectedProducts');
    }

    // Invoked when user clicks on 'Goto Products Page' in Thank you section
    // Navigates to products page
    gotoProducts() {
        sessionStorage.removeItem('grandTotal');
        sessionStorage.removeItem('selectedItems');
        this._router.navigate(['/products']);
    }
}
