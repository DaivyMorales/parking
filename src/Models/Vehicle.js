import { Schema, model } from "mongoose";

const vehicleSchema = new Schema(
  {
    plates: String,
    product: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Vehicle", vehicleSchema);
