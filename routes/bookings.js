
import express from 'express'
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


const router = express.Router()

router.post("/",createBooking,verifyUser);
router.get("/:id",getBooking,verifyUser);
router.get("/",getAllBooking,verifyAdmin);

export default router