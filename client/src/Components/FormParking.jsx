import { Formik, Form } from "formik";
import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../Context/CompanyContextProvider";

import { useParams } from "react-router-dom";

export const FormParking = () => {
  const { id } = useParams();

  const { createVehicle, loadVehicle } = useContext(CompanyContext);

  const [vehicle, setVehicle] = useState({
    plates: "",
    name: "",
    lastName: "",
    product: "",
    timeOff: "",
  });

  useEffect(() => {
    const getVehicle = async () => {
      if (id) {
        const vehicleFound = await loadVehicle(id);
        console.log("vehicleFound", vehicleFound);
        setVehicle({
          plates: vehicleFound.plates,
          name: vehicleFound.name,
          lastName: vehicleFound.lastName,
          product: vehicleFound.product,
        });
      }
    };

    getVehicle();
  }, []);

  return (
    <Formik
      initialValues={vehicle}
      onSubmit={async (values) => {
        if (id) {
          await createVehicle(values);
        } else {
          setVehicle();
        }
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="px-10 py-6 ">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Placas
              </label>
              <input
                type="text"
                name="plates"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
                onChange={handleChange}
                value={vehicle.plates}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombres
              </label>
              <input
                name="name"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                onChange={handleChange}
                value={vehicle.name}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Apellidos
              </label>
              <input
                name="lastName"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                value={vehicle.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product
              </label>
              <input
                name="product"
                type="text"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={vehicle.product}
                required
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {id ? "UPDATE" : "CREATE"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
