import { createContext, useState } from "react";
import { getVehiclesRequest, deleteVehicleRequest } from "../api/vehicle.api";

export const CompanyContext = createContext();

export const CompanyContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  const loadVehicles = async () => {
    const response = await getVehiclesRequest();
    setVehicles(response.data);
  };

  const deleteVehicle = async (idVehicle) => {
    const response = await deleteVehicleRequest(idVehicle);
    setVehicles(vehicles.filter((vehicle) => vehicle._id !== idVehicle));
    console.log(response);
  };

  return (
    <CompanyContext.Provider
      value={{ vehicles, setVehicles, loadVehicles, deleteVehicle }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
