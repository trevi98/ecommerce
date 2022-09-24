import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductModel from './models';

export const getProducts = async (_: Request, res: Response) => {
  const products = await ProductModel.find();
  return res.json(products.map(product => product.toJSON()));
};

export const getProduct = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = req.params['id']!;
  const product = await ProductModel.findById(id);
  if (product !== null) {
    return res.json(product.toJSON());
  } else {
    return res.status(StatusCodes.NOT_FOUND);
  }
};

export const insertProduct = async (req: Request, res: Response) => {
  const body = req.body;
  const product = new ProductModel({
    name: body.name,
    description: body.description,
    category: body.category,
    colors: body.colors,
    price: body.price,
    quantity: body.quantity,
    tags: body.tags,
    imageUrls: [],
    coverImageUrl: '',
    SKU: body.SKU,
    socialLinks: body.socialLinks,
  });
  await product.save();
  return res.status(StatusCodes.CREATED);
};

export const updateProduct = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = req.params['id']!;
  const body = req.body;
  const updatedProduct = await ProductModel.findByIdAndUpdate(id, {
    $set: {
      name: body.name,
      description: body.description,
      category: body.category,
      colors: body.colors,
      price: body.price,
      quantity: body.quantity,
      tags: body.tags,
      imageUrls: [],
      coverImageUrl: '',
      SKU: body.SKU,
      socialLinks: body.socialLinks,
    },
  });
  if (updatedProduct !== null) {
    res.json(updatedProduct.toJSON());
  } else {
    res.status(StatusCodes.NOT_FOUND);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = req.params['id']!;
  await ProductModel.deleteOne({ id });
  return res.status(StatusCodes.NO_CONTENT);
};
