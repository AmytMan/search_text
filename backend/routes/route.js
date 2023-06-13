import express from 'express';
import SearchController from '../controllers/SearchControllers.js';
const router = express.Router();


router.get('/suggest',SearchController)

export default router