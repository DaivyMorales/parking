import { createContext, useState } from "react";
import {
  getVehiclesRequest,
  deleteVehicleRequest,
  createVehicleRequest,
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
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
