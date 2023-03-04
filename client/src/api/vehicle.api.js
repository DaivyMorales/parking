import axios from "axios";

export const getVehiclesRequest = async () =>
  await axios.get("http://localhost:3000/vehicles");

export const deleteVehicleRequest = async (idVehicle) =>
  await axios.delete(`http://localhost:3000/vehicles/${idVehicle}`);

export const createVehicleRequest = async (vehicle) =>
  await axios.post("http://localhost:3000/vehicles", vehicle);

export const getVehicleRequest = async (idVehicle) =>
  await axios.get(`http://localhost:3000/vehicles/${idVehicle}`);

export const updateVehicleRequest = async (id, newFields) =>
  await axios.put(`http://localhost:3000/vehicles/${id}`, newFields);

export const getProductVehicleRequest = async (product) =>
  await axios.get(`http://localhost:3000/vehicles/products/${product}`);
