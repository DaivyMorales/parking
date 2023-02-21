import axios from "axios";

export const getVehiclesRequest = async () =>
  await axios.get("http://localhost:4000/vehicles");

export const deleteVehicleRequest = async (idVehicle) =>
  await axios.delete(`http://localhost:4000/vehicles/${idVehicle}`);
