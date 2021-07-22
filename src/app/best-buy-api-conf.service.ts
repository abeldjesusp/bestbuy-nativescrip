import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BestBuyAPIConfService {
  private endpoint = 'https://api.bestbuy.com/v1/';
  private apiKey = 'R32n3KzeeXtXzpxMyvumgiHI';

  get getEndPoint() {
    return this.endpoint;
  }

  get getApiKey() {
    return this.apiKey;
  }
  
}
