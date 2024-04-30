import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
  
    },
    tourName:{
      type:String,
      required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    Card_Number:{
       type:Number,
       required:true,
    },
    Cardholder_Name:{
        type:String,
        required:true,
    },
    bookAt:{
        type:Date,
        required:true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
