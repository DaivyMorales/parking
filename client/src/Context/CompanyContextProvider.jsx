import { createContext, useEffect, useState } from "react";
import {
  getVehiclesRequest,
  deleteVehicleRequest,
  createVehicleRequest,
  getVehicleRequest,
  updateVehicleRequest,
  getProductVehicleRequest,
  getDateRequest,
} from "../api/vehicle.api";

export const CompanyContext = createContext();

export const CompanyContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleCompleted, setVehicleCompleted] = useState([]);
  const [form, setForm] = useState(false);

  const [horaActual, setHoraActual] = useState(new Date());

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

  const updateFilter = (newVehicle) => {
    setVehicleCompleted([...vehicleCompleted, newVehicle]);
  };

  const loadProductsVehicles = async (product) => {
    const response = await getProductVehicleRequest(product);
    setVehicles(response.data);
  };

  const getDate = async (startDate, endDate) => {
    const response = await getDateRequest(startDate, endDate);
    setVehicles(response.data);
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
        loadProductsVehicles,
        horaActual,
        setHoraActual,
        vehicleCompleted,
        setVehicleCompleted,
        updateFilter,
        getDate,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
