import axios from "axios";

export const getVehiclesRequest = async () =>
  await axios.get("http://localhost:4000/vehicles");

export const deleteVehicleRequest = async (idVehicle) =>
  await axios.delete(`http://localhost:4000/vehicles/${idVehicle}`);

export const createVehicleRequest = async (vehicle) =>
  await axios.post("http://localhost:4000/vehicles", vehicle);

export const getVehicleRequest = async (idVehicle) =>
  await axios.get(`http://localhost:4000/vehicles/${idVehicle}`);

export const updateVehicleRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/vehicles/${id}`, newFields);
