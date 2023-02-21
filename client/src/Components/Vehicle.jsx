import { useContext, useState } from "react";
import { CompanyContext } from "../Context/CompanyContextProvider";

export const Vehicle = ({ vehicle }) => {
  const { deleteVehicle } = useContext(CompanyContext);

  const [date, setDate] = useState(new Date(vehicle.updatedAt));

  const hour = date.getHours();
  const minutes = date.getSeconds();

  const showTime = `${hour.toString().padStart(2, "0")}:${minutes
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
      <td className="px-6 py-4">{showTime}</td>
      <td className="px-6 py-4 text-right">
        <a
          onClick={() => deleteVehicle(vehicle._id)}
          href="#"
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Eliminar
        </a>
      </td>
    </tr>
  );
};
