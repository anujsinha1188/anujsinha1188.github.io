import { Component, Input } from '@angular/core';

import { ProductService } from '../product.service';
import { Cart } from '../cart/Cart';
import { Product } from '../product';

@Component({
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    rate: number;
    pageTitle = 'mCart';
    imageWidth = 80;
    imageHeight = 120;
    imageMargin = 12;
    showImage = false;
    listFilter: string;
    manufacturers = [{ 'id': 'Samsung', 'checked': false },
    { 'id': 'Microsoft', 'checked': false },
    { 'id': 'Apple', 'checked': false },
    { 'id': 'Micromax', 'checked': false }
    ];
    os = [{ 'id': 'Android', 'checked': false },
    { 'id': 'Windows', 'checked': false },

    { 'id': 'iOS', 'checked': false }];
    price_range = [{ 'id': '300-450', 'checked': false },
    { 'id': '450-600', 'checked': false },
    { 'id': '600-800', 'checked': false },
    { 'id': '800-1000', 'checked': false }];
    errorMessage: string;
    products: any = [];
    selectedItems: any = 0;
    cart: Cart;
    total = 0;
    orderId = 0;
    selectedManufacturers: string[] = [];
    selectedOStypes: string[];
    selectedPrice: string[];
    checkedManufacturers: any[];
    checkedOS: any[];
    checkedPrice: any[];
    sub: any;
    i = 0;
    sortoption = '';
    chkmanosprice: any = [];

    // Fetches the products data from service class
    constructor(private _productService: ProductService) {
        document.getElementById('login').style.display = '';
        document.getElementById('login').innerHTML = 'Logout';
        sessionStorage.setItem('loginTitle', 'Logout');
        this.orderId++;
        document.getElementById('welcome').style.display = '';
        document.getElementById('welcome').style.color = '#ff0080';

        this._productService.getProducts()
            .subscribe(
                products => {
                    this._productService.products = products;
                    this.products = this._productService.products;
                },
                error => this.errorMessage = <any>error);

        if (_productService.selectedProducts.length > 0) {
            this.selectedItems = Number(sessionStorage.getItem('selectedItems'));
            this.total = Number(sessionStorage.getItem('grandTotal'));
        }
    }

    // filtering functionality
    filter(name: any) {
        let checkedProducts: any[];
        let chkman: any = [];
        let chkmanos: any = [];
        this.chkmanosprice = [];
        const index = 0;
        checkedProducts = this._productService.products;
        name.checked = (name.checked) ? false : true;

        this.checkedManufacturers = this.manufacturers.filter(product => product.checked).map(product => product.id);

        this.checkedOS = this.os.filter(product => product.checked).map(product => product.id);

        this.checkedPrice = this.price_range.filter(product => product.checked).map(product => product.id);

        if (this.checkedManufacturers.length > 0) {
            for (let i = 0; i < this.checkedManufacturers.length; i++) {
                for (let j = 0; j < checkedProducts.length; j++) {
                    if (checkedProducts[j].manufacturer.toLowerCase() === this.checkedManufacturers[i].toLowerCase()) {
                        chkman.push(checkedProducts[j]);
                    }
                }
            }
        } else {
            chkman = checkedProducts;
        }
        if (this.checkedOS.length > 0) {
            for (let i = 0; i < this.checkedOS.length; i++) {
                for (let j = 0; j < chkman.length; j++) {
                    if (chkman[j].ostype.toLowerCase() === this.checkedOS[i].toLowerCase()) {
                        chkmanos.push(chkman[j]);
                    }
                }
            }
        } else {
            chkmanos = chkman;
        }
        if (this.checkedPrice.length > 0) {
            for (let i = 0; i < this.checkedPrice.length; i++) {
                for (let j = 0; j < chkmanos.length; j++) {
                    if (this.checkedPrice[i] === '300-450') {
                        if (chkmanos[j].price >= 300 && chkmanos[j].price <= 450) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '450-600') {
                        if (chkmanos[j].price > 450 && chkmanos[j].price <= 600) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '600-800') {
                        if (chkmanos[j].price > 600 && chkmanos[j].price <= 800) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                    if (this.checkedPrice[i] === '800-1000') {
                        if (chkmanos[j].price > 800 && chkmanos[j].price <= 1000) {
                            this.chkmanosprice.push(chkmanos[j]);
                        }
                    }
                }
            }
        } else {
            this.chkmanosprice = chkmanos;
        }

        this.products = [];
        this.products = this.chkmanosprice;
    }


    // Invoked when user clicks on Add to Cart button
    // Adds selected product details to service class variable 
    // called selectedProducts
    addCart(id: number) {
        this.cart = new Cart();
        this.selectedItems += 1;

        // fetching selected product details
        const product = this._productService.products.filter((currProduct: any) => currProduct.productId === id)[0];
        this.total += product.price;
        sessionStorage.setItem('selectedItems', this.selectedItems);
        const sp = this._productService.selectedProducts.filter((currProduct: any) => currProduct.productId === id)[0];
        if (sp) {
            const index = this._productService.selectedProducts.findIndex((currProduct: any) => currProduct.productId === id);
            this._productService.selectedProducts[index].quantity += 1;
            this._productService.selectedProducts[index].totalPrice += product.price;
        } else {
            this.cart.orderId = 'ORD_' + this.orderId;
            this.cart.productId = id;
            this.cart.userId = sessionStorage.getItem('username');
            this.cart.productName = product.productName;
            this.cart.price = product.price;
            this.cart.quantity = 1;
            this.cart.dateOfPurchase = new Date().toString();
            this.cart.totalPrice = product.price * this.cart.quantity;
            this._productService.selectedProducts.push(this.cart);
            sessionStorage.setItem('selectedProducts', JSON.stringify(this._productService.selectedProducts));
            this.orderId++;
        }
    }

    // Search box functionality
    // Searches based on manufacturer name
    searchtext() {
        this.products = this._productService.products;
        if (this.listFilter.length > 0) {
            this.products = this.products.filter((product: Product) =>
                product.manufacturer.toLowerCase().indexOf(this.listFilter) !== -1);
        }
    }

    // Invoked when a tab (Tablets/Mobiles) is clicked
    // Displays tablets or mobiles data accordingly
    tabselect(producttype: string) {
        this.products = [];
        this._productService.producttype = producttype;
        this._productService.getProducts().subscribe(
            products => {
                this._productService.products = products;
                this.products = this._productService.products;
            },
            error => this.errorMessage = <any>error);
    }

    // Invoked when user select an option in sort drop down
    // changes the sortoption value accordingly
    onChange(value: string) {
        this.sortoption = value;
    }
}

