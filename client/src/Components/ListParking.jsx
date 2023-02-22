import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { CompanyContext } from "../Context/CompanyContextProvider";

import { Vehicle } from "./Vehicle";

export const ListParking = () => {
  const navigate = useNavigate();
  const params = useParams();

  // console.log(params)

  const { vehicles, form, setForm, loadVehicles } = useContext(CompanyContext);

  useEffect(() => {
    loadVehicles();
  }, []);

  const showForm = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    columnGap: "0.25rem" /* 36px */,
  };

  // const withoutForm = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  // };

  return (
    <div className="w-screen  flex justify-center items-center px-10">
      <div style={showForm} className="flex justify-center items-center">
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
              <button
                onClick={() => {
                  setForm(!form);

                  if (form) {
                    navigate("/list");
                  } else {
                    navigate("/list/form");
                  }
                }}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Crear
              </button>
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
                  DURACION
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
        <div className=" p-1">{form ? <Outlet /> : ""}</div>
      </div>
    </div>
  );
};
