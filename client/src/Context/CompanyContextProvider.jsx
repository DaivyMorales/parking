import { createContext, useState } from "react";
import {
  getVehiclesRequest,
  deleteVehicleRequest,
  createVehicleRequest,
  getVehicleRequest,
  updateVehicleRequest,
} from "../api/vehicle.api";

export const CompanyContext = createContext();

export const CompanyContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState(false);

  const loadVehicles = async () => {
    const response = await getVehiclesRequest();
    setVehicles(response.data);
  };

  const deleteVehicle = async (idVehicle) => {
    const response = await deleteVehicleRequest(idVehicle);
    setVehicles(vehicles.filter((vehicle) => vehicle._id !== idVehicle));
    console.log(response);
  };

  const createVehicle = async (vehicle) => {
    const response = await createVehicleRequest(vehicle);
    setVehicles([...vehicles, response.data]);
    console.log(response.data);
  };

  const loadVehicle = async (idVehicle) => {
    const response = await getVehicleRequest(idVehicle);
    console.log(response);
    return response.data;
  };

  const updateVehicles = async (idVehicle, newVehicle) => {
    const response = await updateVehicleRequest(idVehicle, newVehicle);
    setVehicles(vehicles.filter((vehicle) => vehicle._id !== idVehicle));
    setVehicles([...vehicles, response.data]);
    // console.log("Update", response.data.updatedAt !==);
  };

  return (
    <CompanyContext.Provider
      value={{
        vehicles,
        setVehicles,
        loadVehicles,
        deleteVehicle,
        form,
        setForm,
        createVehicle,
        loadVehicle,
        updateVehicles,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
