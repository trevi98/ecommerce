import { faker } from '@faker-js/faker';
import type { Product } from 'products/models';
import ProductModel from 'products/models';
import { fakeArray } from './helpers';

export function up() {
  const products: Product[] = [];
  for (let i = 0; i < 1000; i++) {
    products.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()),
      category: faker.commerce.department(),
      quantity: faker.datatype.number(),
      SKU: faker.datatype.hexadecimal({ length: 5 }),
      colors: fakeArray(() => faker.color.human()),
      tags: fakeArray(() => faker.commerce.department()),
      socialLinks: {
        facebook: faker.internet.url(),
      },
      coverImageUrl: faker.image.business(1080, 1920, true),
      imageUrls: fakeArray(() => faker.image.business(1080, 1920, true)),
    });
  }
  return ProductModel.insertMany(products);
}

export function down() {
  return ProductModel.deleteMany();
}
