import { Router } from "express";
import {
  getVehicles,
  getVehicle,
  deleteVehicles,
  updateVehicles,
  createVehicles,
  productFilter,
  dateFilter
} from "../Controllers/vehicle.controller.js";

const router = Router();

router.get("/", getVehicles);
router.get("/:vehicleId", getVehicle);
router.post("/", createVehicles);
router.put("/:vehicleId", updateVehicles);
router.delete("/:vehicleId", deleteVehicles);

router.get("/products/:vehicleProduct", productFilter);
router.get("/date/:startDate/:endDate", dateFilter)

export default router;
