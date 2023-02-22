import { Children, useContext, useState, useEffect } from "react";
import { CompanyContext } from "../Context/CompanyContextProvider";
import { useNavigate } from "react-router-dom";

export const Vehicle = ({ vehicle }) => {
  const navigate = useNavigate();

  const { deleteVehicle, setForm, form } = useContext(CompanyContext);

  const [date, setDate] = useState(new Date(vehicle.createdAt));

  const [horaActual, setHoraActual] = useState(new Date());

  const calcularTiempoTranscurrido = () => {
    const duration = horaActual - date;

    const segundos = Math.floor(duration / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const segundosRestantes = segundos % 60;
    const minutosRestantes = minutos % 60;
    const horasRestantes = horas % 24;

    if (dias < 1) {
      if (horasRestantes < 1) {
        return `${minutosRestantes} min`;
      }
      return `${horasRestantes} horas, ${minutosRestantes} min`;
    }
    if (dias > 0) {
      if (dias === 1) {
        return `${dias} día`;
      }
      return `${dias} días`;
    }

    if (horasRestantes < 1) {
      return `${dias} días`;
    }

    if (minutos < 1) {
      return `Hace un momento`;
    }

    return `${dias} días, ${horasRestantes} horas, ${minutosRestantes} minutos`;
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {vehicle.plates}
      </th>
      <td className="px-6 py-4">{vehicle.name}</td>
      <td className="px-6 py-4">{vehicle.lastName}</td>
      <td className="px-6 py-4">{vehicle.product}</td>
      <td className="px-6 py-4">{date.toLocaleString()}</td>
      <td className="px-6 py-4">{calcularTiempoTranscurrido()}</td>
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
          onClick={() => {
            setForm(!form);
            if (form) {
              navigate("/list");
            } else {
              navigate(`/list/edit/${vehicle._id}`);
              // console.log(vehicle._id);
            }
          }}
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar
        </a>
      </td>
    </tr>
  );
};
