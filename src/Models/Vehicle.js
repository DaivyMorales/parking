import { Schema, model } from "mongoose";

//America/Bogotá
process.env.TZ = "America/Bogota";

const vehicleSchema = new Schema(
  {
    plates: String,
    name: String,
    lastName: String,
    product: String,
    timeOff: {
      type: Date,
      default: undefined,
    },
  },
  {
    timestamps: { currentTime: () => new Date().getTime() - (5 * 60 * 60 * 1000) },
    versionKey: false,
  }
);

//(pre) -> Function that will run when all process to create new Vehicle has finished
vehicleSchema.pre("save", function (next) {
  this.name = this.name.toUpperCase();
  this.lastName = this.lastName.toUpperCase();
  next();
});

export default model("Vehicle", vehicleSchema);
