import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../Context/CompanyContextProvider";

import { HiOutlineX } from "react-icons/hi";

import { useParams, useNavigate } from "react-router-dom";

export const FormParking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { createVehicle, form, setForm, loadVehicle, updateVehicles } =
    useContext(CompanyContext);

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
      enableReinitialize={true}
      onSubmit={async (values) => {
        console.log("VALUES", values);
        if (!id) {
          console.log("CREAR");
          await createVehicle(values);
          setForm(!form);
          navigate("/list");
        } else {
          await updateVehicles(id, values);
          window.location.reload();
          setForm(!form);
          navigate("/list");
        }
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="  px-10 py-6  flex flex-col gap-y-8 ">
            <div className="">
              <HiOutlineX
                size={40}
                className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setForm(!form);
                }}
              />
            </div>
            <div>
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
                  placeholder="HGD876"
                  onChange={handleChange}
                  value={values.plates}
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
                  placeholder="JHON"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Apellido
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="DOE"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="products"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Selecciona un producto
                </label>
                <Field
                  name="product"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>Selecciona un producto</option>
                  <option value="Polvo">Polvo</option>
                  <option value="Maiz">Maiz</option>
                  <option value="Harina">Harina</option>
                  <option value="Pollo">Pollo</option>
                </Field>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {id ? "Actualizar" : "Crear"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
