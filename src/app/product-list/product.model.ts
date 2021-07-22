export interface ProductModel {
    from: number;
    to: number;
    total: number;
    currentPage: number,
    totalPages: number,
    products: [
        {
            name: string;
            sku: string;
            longDescription: string;
            largeFrontImage: string;
            mediumImage: string;
            thumbnailImage: string;
            image: string;
            regularPrice: number;
            salePrice: number;
            customerReviewCount: number;
            customerReviewAverage: number;
            isNew: boolean;
            active: boolean;
            onSale: boolean;
            freeShipping: boolean;
            images: [
                {
                    rel: string;
                    href: string;
                    primary: boolean;
                },
            ];
        }
    ]
}