import { useContext, useEffect, useState, useRef } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { CompanyContext } from "../Context/CompanyContextProvider";

import { Vehicle } from "./Vehicle";

import { TiPlus } from "react-icons/ti";
import Footer from "../Pages/Footer";

export const ListParking = () => {
  const navigate = useNavigate();

  const {
    vehicles,
    form,
    setForm,
    loadVehicles,
    loadProductsVehicles,
    getDate,
  } = useContext(CompanyContext);

  const dateStartRef = useRef("");
  const dateEndRef = useRef("");

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleDateStartChange = () => {
    setStart(`${dateStartRef.current.value}:00.000Z`);
  };

  const handleDateEndChange = () => {
    setEnd(`${dateEndRef.current.value}:00.000Z`);
  };

  const [product, setProduct] = useState();

  useEffect(() => {
    loadVehicles();
  }, []);

  useEffect(() => {
    setStart(`${dateStartRef.current.value}:00.000Z`);
  }, [dateStartRef.current.value]);

  useEffect(() => {
    setEnd(`${dateEndRef.current.value}:00.000Z`);
  }, [dateEndRef.current.value]);

  console.log("start:", start);
  console.log("end:", end);

  const handleChange = (event) => {
    event.preventDefault;
    const productSelected = event.target.value;
    setProduct(productSelected);
    productSelected === "Todos"
      ? loadVehicles()
      : loadProductsVehicles(productSelected);
  };

  const showForm = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    columnGap: "0.25rem",
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center px-10">
      <div style={showForm} className="flex justify-center items-center ">
        <div
          style={
            form
              ? { gridColumn: "span 2 / span 2" }
              : { gridColumn: "span 3 / span 3" }
          }
          className="relative overflow-x-auto  sm:rounded-lg "
        >
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              <br />
              <div className="grid grid-cols-5">
                <div className="col-span-4 p-2 flex gap-x-2 ">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Filtrar producto:
                    </label>
                    <select
                      onChange={handleChange}
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="Todos" defaultValue>
                        Todos
                      </option>
                      <option value="Pollo">Pollo</option>
                      <option value="Quimico">Quimico</option>
                      <option value="Harina">Harina</option>
                      <option value="Polvo">Polvo</option>
                      <option value="Maiz">Maiz</option>
                    </select>
                  </div>
                  <div className="flex items-end justify-center gap-x-2">
                    <div>
                      <label htmlFor="">Desde:</label>
                      <input
                        className="rounded-lg"
                        type="datetime-local"
                        ref={dateStartRef}
                        onChange={handleDateStartChange}
                      />
                    </div>
                    <div className="py-2 ">
                      <h3 className="font-black">-</h3>
                    </div>
                    <div>
                      <label htmlFor="">Hasta:</label>
                      <input
                        className=" rounded-lg"
                        type="datetime-local"
                        ref={dateEndRef}
                        onChange={handleDateEndChange}
                      />
                    </div>
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => getDate(start, end)}
                    >
                      Filtrar
                    </button>
                  </div>
                </div>
                <div className=" flex justify-end items-end p-2 ">
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
                    <TiPlus size={20} />
                  </button>
                </div>
              </div>
            </caption>
            <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
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
                  COSTO
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle) => (
                <Vehicle vehicle={vehicle} key={vehicle._id} />
              ))}
            </tbody>
          </table>
        </div>
        <div className=" p-1">{form ? <Outlet /> : ""}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
