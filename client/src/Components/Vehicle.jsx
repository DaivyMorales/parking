import { useContext, useState } from "react";
import { CompanyContext } from "../Context/CompanyContextProvider";

export const Vehicle = ({ vehicle }) => {
  const { deleteVehicle, setForm, form } = useContext(CompanyContext);

  const [date, setDate] = useState(new Date(vehicle.createdAt));

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // El mes comienza en 0, por lo que debemos sumar 1 para obtener el mes real
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const showDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")} / ${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {vehicle.plates}
      </th>
      <td className="px-6 py-4">{vehicle.name.toUpperCase()}</td>
      <td className="px-6 py-4">{vehicle.lastName.toUpperCase()}</td>
      <td className="px-6 py-4">{vehicle.product}</td>
      <td className="px-6 py-4">{showDate}</td>
      <td className="px-6 py-4 text-right">
        <a
          onClick={() => deleteVehicle(vehicle._id)}
          href="#"
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Eliminar
        </a>
        <br />
        <a
          onClick={() => setForm(!form)}
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar
        </a>
      </td>
    </tr>
  );
};
