export interface CategoryModel {
    id: string;
    name: string;
    active: boolean;
    url: string;
    subCategories: [
        {
            id: string;
            name: string;
        }
    ]
}