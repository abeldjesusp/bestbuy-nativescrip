import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { EventData, ListPicker } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

// MODELS
import { ProductDetailModel } from './product-detail.model';

@Component({
  selector: 'ProductDetail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.common.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: ProductDetailModel;
  public isBusy: boolean;
  public breadCrumb = '';
  public isShowBackButton = false;
  public pagesNumber: number[] = [];
  public categoryID = '';
  public categoryName = '';

  constructor(private activatedRoute: ActivatedRoute, router: RouterExtensions) {
    this.isBusy = true;
    this.product = router.router.getCurrentNavigation().extras.state.product;
    this.isBusy = false;
    // console.log(this.product.customerReviewAverage);
    
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.categoryID = params.id;
    //   this.categoryName = params.name;
    //   this.breadCrumb = `Result for: ${this.categoryName}`;
    //   this.getProducts(this.categoryID, 1);
    // });
  }

  // starReviewAverage(avg: number): string {
  //   let imageUrl = '';

  //   switch (avg.toFixed()) {
  //     case '1':
  //       imageUrl = '~/images/ratings_star_1.png';
  //       break;
  //     case '2':
  //       imageUrl = '~/images/ratings_star_2.png';
  //       break;
  //     case '3':
  //       imageUrl = '~/images/ratings_star_3.png';
  //       break;
  //     case '4':
  //       imageUrl = '~/images/ratings_star_4.png';
  //       break;
  //     case '5':
  //       imageUrl = '~/images/ratings_star_5.png';
  //       break;  
  //   }
  //   return imageUrl;
  // }

  // getProducts(categoryID: string, numberPage: number): void {
  //   this.isBusy = true;
  //   this.productsService.getProducts(categoryID, numberPage).subscribe(
  //   (resp: ProductModel) => {
  //     if(resp){
  //       this.products = resp;
  //       this.generatePagesNumber(this.products.totalPages);
  //     } else {
  //       alert('There are not category');
  //     }
  //     this.isBusy = false;
  //   }, error => {
  //     alert('An error occurred');
  //     console.log('An error occurred: ', error);
  //     this.isBusy = false;
  //   });
  // }

  // onItemTap(event){
    
  //   const product = this.products.products[event.index];
  //   console.log(product);
    
    
  // }

  // generatePagesNumber(totalPages: number): void {
  //   for (let i = 1; i <= totalPages; i++) {
  //     this.pagesNumber.push(i);
  //   }
  // }

  // onSelectedIndexChanged(event: EventData){
  //   const picker = <ListPicker>event.object;
  //   this.getProducts(this.categoryID, this.pagesNumber[picker.selectedIndex]); 
  // }
}
