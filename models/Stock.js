import mongoose from "mongoose";
const schema = new mongoose.Schema({
  bottle: { type: mongoose.Schema.Types.ObjectId, ref: "Bottle", required: true },
  productId: String, barcode: String, brandName: String, category: String,
  bottleSizeML: Number, emptyBottleWeightG: Number, costPrice: Number,
  outlet: { type: String, required: true }, location: { type: String, required: true },
  fullBottles: { type: Number, default: 0 }, openBottles: { type: Number, default: 0 }, openBottleML: { type: Number, default: 0 }, stockValue: { type: Number, default: 0 }
}, { timestamps: true });
schema.index({ barcode: 1, outlet: 1, location: 1 }, { unique: true });
export default mongoose.model("Stock", schema);
