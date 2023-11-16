export type Product = {
    name: string;
    url_slug: string;
    images: string[];
    price: number;
    category:{
        mainCategory:string;
        subCategories ?:string[];
    }
    description: string;
    countInStock: number;



}

