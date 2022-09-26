export interface Product {
  id: string;
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
