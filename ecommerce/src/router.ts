import { Router } from 'express';
import productsController from 'products/router';
const router = Router();
router.use('/products', productsController);

export default router;
