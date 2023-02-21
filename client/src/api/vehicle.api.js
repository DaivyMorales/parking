import axios from "axios";

export const getVehicles = async () =>
  await axios.get("http://localhost:4000/vehicles");
