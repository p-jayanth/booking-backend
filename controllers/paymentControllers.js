import Payment from "../models/Payment"

export const createPayment = async(req,res)=>{
    
    const newPayment = new Payment(req.body)
    

    try{
       const savedPayment = await newPayment.save()
       res.status(200).json({success:true, message:"your tour is booked",data:savedPayment})

    }catch(err){
        res.status(500).json({success:true, message:"internal server error"})

    }
};