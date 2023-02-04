import { Router } from 'express';
import BookController from '../controller/book.controller';

const router = Router();
const bookController = new BookController();

router.get('/books', bookController.getAll);

export default router;
