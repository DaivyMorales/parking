import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CompanyContext } from "../Context/CompanyContextProvider";

import { Vehicle } from "./Vehicle";

export const ListParking = () => {
  const { vehicles, form, loadVehicles } = useContext(CompanyContext);

  useEffect(() => {
    loadVehicles();
  }, []);

  const showForm = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  };

  // const withoutForm = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  // };

  console.log(vehicles);
  return (
    <div className="w-screen h-screen flex justify-center items-center px-10">
      <div style={showForm}>
        <div
          style={
            form
              ? { gridColumn: "span 2 / span 2" }
              : { gridColumn: "span 3 / span 3" }
          }
          className="relative overflow-x-auto  sm:rounded-lg"
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Our products
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Browse a list of Flowbite products designed to help you work and
                play, stay organized, get answers, keep in touch, grow your
                business, and more.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  PLACAS
                </th>
                <th scope="col" className="px-6 py-3">
                  NOMBRES
                </th>
                <th scope="col" className="px-6 py-3">
                  APELLIDOS
                </th>
                <th scope="col" className="px-6 py-3">
                  PRODUCTO
                </th>
                <th scope="col" className="px-6 py-3">
                  HORA DE ENTRADA
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <Vehicle vehicle={vehicle} key={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div>{form ? <Outlet /> : ""}</div>
      </div>
    </div>
  );
};
