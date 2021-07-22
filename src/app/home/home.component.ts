import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';

// SERVICES
import { CategoriesService } from './categories.service';

// MODELS
import { CategoryModel } from './category.model';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.common.scss']
})
export class HomeComponent implements OnInit {
  public categories: CategoryModel[] = [];
  public isBusy: boolean;
  public breadCrumb = '';
  public isShowBackButton = false;

  constructor(private categoriesService: CategoriesService, private router: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.getCategory('cat00000', 'Home');
  }

  getCategory(categoryID: string, categoryName: string): void {
    this.isBusy = true;
    this.categoriesService.getCategories(categoryID).subscribe(
    (resp: CategoryModel) => {
      if(resp){
        this.categories.push(resp);
        this.breadCrumb += categoryName;
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
    let categoryID = this.categories[this.categories.length - 1].subCategories[event.index].id;
    let categoryName = this.categories[this.categories.length - 1].subCategories[event.index].name;

    if(this.categories.length < 3){
      this.isShowBackButton = true;
      this.getCategory(categoryID, ` -> ${categoryName}`);
    } else {
      this.router.navigate( ['/product-list/'+categoryID+'/'+categoryName ], {
        animated: true,
        clearHistory: false,
        transition:
        {
            name: "fade",
            duration: 100
        }
      });
    }
  }

  backCategories(){
    let arrayBreadCrumb = this.breadCrumb.split(' -> ');

    this.categories.pop();

    if(this.categories.length === 1){
      this.isShowBackButton = false;
    }

    arrayBreadCrumb.pop();
    this.breadCrumb = arrayBreadCrumb.join(' -> ');
    
  }
}
