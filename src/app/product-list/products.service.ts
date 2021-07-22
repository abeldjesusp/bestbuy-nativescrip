import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// SERVICES
import { BestBuyAPIConfService } from '../best-buy-api-conf.service';

// MODELS
import { ProductModel } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private bestBuyApiService: BestBuyAPIConfService, private http: HttpClient) { }

  getProducts(categoryID: string, numberPage: number): Observable<ProductModel>{
    const PAGESIZE = 10;
    return this.http.get(`${this.bestBuyApiService.getEndPoint}products(categoryPath.id=${categoryID})?format=json&apiKey=${this.bestBuyApiService.getApiKey}&pageSize=${PAGESIZE}&page=${numberPage}`)
               .pipe( map(resp => this.formattedData(resp)) );
  }

  private formattedData(data: any): ProductModel {

    if(!data.total) { return null; }
    let products: ProductModel;

    products = {
      from: data.from,
      to: data.to,
      total: data.total,
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      products: data.products.map((product: any) => {
        return {
          name: product.name,
          sku: product.sku,
          longDescription: product.longDescription,
          largeFrontImage: product.largeFrontImage,
          mediumImage: product.mediumImage,
          thumbnailImage: product.thumbnailImage,
          image: product.image,
          regularPrice: product.regularPrice,
          salePrice: product.salePrice,
          customerReviewCount: product.customerReviewCount,
          customerReviewAverage: product.customerReviewAverage,
          isNew: product.new,
          active: product.active,
          onSale: product.onSale,
          freeShipping: product.freeShipping,
          images: product.images.map((image: any) => {
            return {
              rel: image.rel,
              href: image.href,
              primary: image.primary
            };
          })
        };
      })
    };

    return products;
  }


}
