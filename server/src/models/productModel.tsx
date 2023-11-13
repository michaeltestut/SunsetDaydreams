import { Schema } from "mongoose";

// Interface
interface Product {
  name: string;
  url_slug: string;
  images: string[];
  price: number;
  category: {
    mainCategory: string;
    subCategories?: string[];
  };
  description: string;
  countInStock: number;
}

// Schema
const schema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  url_slug: {
    type: String,
    required: true,
  },
  images: {
    type: [],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    mainCategory: String,
    required: true,
    subCategories: Array<String>,
  },
  description: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.model("Product", schema);
