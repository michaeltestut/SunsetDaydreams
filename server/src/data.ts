import { Product } from "./types/Product"

export const sampleProducts: Product[] = [
    {
        name: 'Delorean T-Shirt',
        url_slug: 'delorean_t_shirt',
        images: ['../src/assets/images/mens-classic-tee-black-front-64c04f21c5610.webp', '../src/assets/images/mens-classic-tee-black-front-64c04f21c6c32.webp'],
        price: 20,
        category:
        {
            mainCategory: 'Mens',
            subCategories: ['Shirts']
        },
        countInStock: 100,
        description: 'really cool new shirt'

    },
    {
        name: 'Aliens Exist T-Shirt',
        url_slug: 'aliens_exist_t_shirt',
        images: ['../src/assets/images/mens-classic-tee-white-front-64c170ff7337b.webp'],
        price: 20,
        category:
        {
            mainCategory: 'Mens',
            subCategories: ['Shirts']
        },
        countInStock: 0,
        description: 'really cool old shirt'

    }

]