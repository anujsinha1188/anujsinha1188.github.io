import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  title = 'MyApp';
  isAuthenticated: boolean = false;
  submitted = false;
  userName: string = '';
  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 1, name: "TypeScript" }
  ];

  value = 0;
  nextChoice() {
    this.value++;
  }

  colorName = 'red';
  fontWeight = 'bold';
  borderStyle = '1px solid black';

  isBordered = true;

  myMessage = 'Hello, I am from attribute directive';

  imgUrl = 'assets/imgs/logo.jpg';

  value2 = '2';

  name = 'Angular';

  title2 = 'product details';
  productCode = 'PROD_P001';
  productName = 'Laptop';

  productCode2 = 'PROD_P001';
  productName2 = 'Apple MPTT2 MacBook Pro';
  productPrice = 217021;
  purchaseDate = '1/17/2018';
  productTax = '0.1';
  productRating = 4.92;

  product: Object = {
    'productCode': 'PROD_P001', 'productName': 'Laptop', 'productPrice': 25000,
    'purchaseDate': '5/12/2017', 'productTax': '0.1', 'productRating': 4.53
  };

  productRatings: number[] = [4, 3, 2, 4, 1];
  productMapping: { [k: string]: string } =
    { '=4': ' # - Excellent', '=3': ' # - Good', '=2': '# - Average', 'other': ' # - Very Bad' };

  message: string = "";
  messageMap: any = { 'en': 'Good Morning', 'fr': 'Bonjour', 'es': 'Buenos dÃƒÂ­as', 'de': 'Guten Morgen' };

  sortoption: string = "";
  productsList: any = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Lenovo K5 Note', price: 10000 },
    { productName: 'Nokia 6', price: 15000 },
    { productName: 'Vivo V5 Plus', price: 26000 }
  ];

  show: boolean = false;

  name2: string = "";

  message2: string = "";
  courseReg(courseName: string) {
    this.message2 = `Your registration for ${courseName} is successful`;
  }

  data: string = 'Angular 2';
  ngOnInit() {
    console.log('Init');
  }
  ngDoCheck() {
    console.log('Change detected');
  }
  ngAfterContentInit() {
    console.log('After content init');
  }
  ngAfterContentChecked() {
    console.log('After content checked');
  }
  ngAfterViewInit() {
    console.log('After view init');
  }
  ngAfterViewChecked() {
    console.log('After view checked');
  }
  ngOnDestroy() {
    console.log('Destroy');
  }
}
