import { Router } from 'express';
import { deleteProduct, getProduct, getProducts, insertProduct, updateProduct } from './controllers';

const productsController = Router();
productsController.get('/', getProducts);
productsController.get('/:id', getProduct);
productsController.post('/', insertProduct);
productsController.put('/:id', updateProduct);
productsController.delete('/:id', deleteProduct);
export default productsController;
