export type Product = {
    name: string;
    url_slug: string;
    image: string;
    price: number;
    category:{
        mainCategory:string;
        subCategories ?:string[];
    }
    description: string;
    countInStock: number;



}