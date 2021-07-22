import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { EventData, ListPicker } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

// SERVICES
import { ProductsService } from './products.service';

// MODELS
import { ProductModel } from './product.model';

@Component({
  selector: 'ProductList',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.common.scss']
})
export class ProductListComponent implements OnInit {
  public products: ProductModel;
  public isBusy: boolean;
  public breadCrumb = '';
  public isShowBackButton = false;
  public pagesNumber: number[] = [];
  public categoryID = '';
  public categoryName = '';

  constructor(private productsService: ProductsService, 
              private activatedRoute: ActivatedRoute,
              private router: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoryID = params.id;
      this.categoryName = params.name;
      this.breadCrumb = `Result for: ${this.categoryName}`;
      this.getProducts(this.categoryID, 1);
    });
  }

  getProducts(categoryID: string, numberPage: number): void {
    this.isBusy = true;
    this.productsService.getProducts(categoryID, numberPage).subscribe(
    (resp: ProductModel) => {
      if(resp){
        this.products = resp;
        this.generatePagesNumber(this.products.totalPages);
      } else {
        alert('There are not category');
      }
      this.isBusy = false;
    }, error => {
      alert('An error occurred');
      console.log('An error occurred: ', error);
      this.isBusy = false;
    });
  }

  onItemTap(event){
    const product = this.products.products[event.index];
    this.router.navigate(['/product-detail'], {
      state: {
        product: product
      },
      animated: true,
      clearHistory: false,
      transition:
      {
          name: "fade",
          duration: 100
      }
    });
  }

  generatePagesNumber(totalPages: number): void {
    for (let i = 1; i <= totalPages; i++) {
      this.pagesNumber.push(i);
    }
  }

  onSelectedIndexChanged(event: EventData){
    const picker = <ListPicker>event.object;
    this.getProducts(this.categoryID, this.pagesNumber[picker.selectedIndex]); 
  }
}
