import express from 'express';

import { createPayment } from '../controllers/paymentControllers';


const router = express.Router()

router.post("/",createPayment);

export default router
