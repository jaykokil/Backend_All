import mongoose from "mongoose";
const schema = new mongoose.Schema({
  productId: String,
  barcode: { type: String, required: true, unique: true, trim: true, index: true },
  brandName: { type: String, required: true, trim: true },
  category: String,
  bottleSizeML: { type: Number, default: 750 },
  emptyBottleWeightG: { type: Number, default: 400 },
  costPrice: { type: Number, default: 0 },
  sellingPrice: { type: Number, default: 0 },
  status: { type: String, default: "Active" }
}, { timestamps: true });
export default mongoose.model("Bottle", schema);
