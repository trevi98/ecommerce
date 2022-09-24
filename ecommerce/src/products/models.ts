import mongoose from 'mongoose';
export interface Product {
  name: string;
  price: number;
  description: string;
  SKU: string;
  quantity: number;
  category: string;
  tags: string[];
  colors: string[];
  socialLinks: {
    facebook: string;
  };
  coverImageUrl: string;
  imageUrls: string[];
}
const productSchema = new mongoose.Schema<Product>({
  name: String,
  price: Number,
  description: String,
  SKU: String,
  quantity: Number,
  category: [String],
  tags: [String],
  colors: [String],
  socialLinks: {
    facebook: String,
  },
  coverImageUrl: String,
  imageUrls: [String],
});
const ProductModel = mongoose.model('product', productSchema);
export default ProductModel;
