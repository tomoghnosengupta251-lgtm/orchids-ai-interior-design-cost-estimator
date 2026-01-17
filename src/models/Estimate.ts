import mongoose from "mongoose";

const EstimateSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  bhk: String,
  basePackage: Number,
  upgrades: [{ name: String, cost: Number }],
  complexityFactor: Number,
  totalCost: Number
}, { timestamps: true });

export default mongoose.models.Estimate || mongoose.model("Estimate", EstimateSchema);
