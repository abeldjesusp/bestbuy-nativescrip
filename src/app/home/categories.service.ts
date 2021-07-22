import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// SERVICES
import { BestBuyAPIConfService } from '../best-buy-api-conf.service';

// MODELS
import { CategoryModel } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private bestBuyApiService: BestBuyAPIConfService, private http: HttpClient) { }

  getCategories(categoryID: string): Observable<CategoryModel>{
    return this.http.get(`${this.bestBuyApiService.getEndPoint}categories(id=${categoryID})?format=json&apiKey=${this.bestBuyApiService.getApiKey}`)
               .pipe( map(resp => this.formattedData(resp)) );
  }

  private formattedData(data: any): CategoryModel {

    if(!data.total) { return null; }
    let category: CategoryModel;

    category = {
      id: data.categories[0].id,
      name: data.categories[0].name,
      active: data.categories[0].active,
      url: data.categories[0].url,
      subCategories: data.categories[0].subCategories
    };

    return category;
  }
}
