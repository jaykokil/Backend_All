import mongoose from "mongoose";
const schema = new mongoose.Schema({ type:{type:String, enum:["ASSIGN","TRANSFER"], required:true}, barcode:String, productId:String, brandName:String, category:String, fromOutlet:String, fromLocation:String, toOutlet:String, toLocation:String, quantityFull:{type:Number,default:0}, quantityOpen:{type:Number,default:0}, openBottleML:{type:Number,default:0}, note:String }, { timestamps: true });
export default mongoose.model("Movement", schema);
