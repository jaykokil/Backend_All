import mongoose from "mongoose";
const schema = new mongoose.Schema({ barcode:String, productId:String, brandName:String, category:String, bottleSizeML:Number, emptyBottleWeightG:Number, currentWeightG:Number, remainingML:Number, outlet:String, location:String, time:String }, { timestamps: true });
export default mongoose.model("Reading", schema);
