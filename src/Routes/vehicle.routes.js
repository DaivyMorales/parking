import { Router } from "express";
import {
  getVehicles,
  getVehicle,
  deleteVehicles,
  updateVehicles,
  createVehicles,
} from "../Controllers/vehicle.controller.js";

const router = Router();

router.get("/", getVehicles);
router.get("/:vehicleId", getVehicle);
router.post("/", createVehicles);
router.put("/:vehicleId", updateVehicles);
router.delete("/:vehicleId", deleteVehicles);

export default router;
