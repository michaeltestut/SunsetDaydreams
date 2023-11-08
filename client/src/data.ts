import { Product } from "./types/Product"
import image1 from '../public/images/mens-classic-tee-black-front-64c04f21c5610.webp'
import image2 from '../public/images/mens-classic-tee-white-front-64c170ff7337b.webp'
export const sampleProducts:Product[] = [
    {
        name: 'new shirt',
        url_slug:'new_shirt',
        image: image1,
        price: 20,
        category: 
            {mainCategory: 'Mens',
            subCategories: ['Shirts']},
        countInStock: 100,
        description: 'really cool new shirt'
        
    },
    {
        name: 'old shirt',
        url_slug:'old_shirt',
        image: image2,
        price: 20,
        category: 
            {mainCategory: 'Mens',
            subCategories: ['Shirts']},
        countInStock: 100,
        description: 'really cool old shirt'
        
    }

]