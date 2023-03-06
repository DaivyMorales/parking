import { useContext, useState, useEffect } from "react";
import { CompanyContext } from "../Context/CompanyContextProvider";
import { useNavigate } from "react-router-dom";

export const Vehicle = ({ vehicle }) => {
  const navigate = useNavigate();

  const {
    deleteVehicle,
    setForm,
    form,
    horaActual,
    setHoraActual,
    updateFilter,
  } = useContext(CompanyContext);

  const createdAt = new Date(vehicle.createdAt);
  const newDate = new Date(createdAt.getTime() + 5 * 60 * 60 * 1000);
  const [date, setDate] = useState(newDate);

  const duration = horaActual - date;

  const calcularTiempoTranscurrido = (duration) => {
    const segundos = Math.floor(duration / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    const minutosRestantes = minutos % 60;
    const horasRestantes = horas % 24;

    if (dias < 1) {
      if (horasRestantes < 1) {
        return `${minutosRestantes} min`;
      }

      if (horasRestantes === 1) {
        return `${horasRestantes} hora`;
      }
      return `${horasRestantes} horas`;
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

  const calcularPrecioDuracion = (duration) => {
    const segundos = Math.floor(duration / 1000);

    const precio = Math.floor(segundos / 3600);
    const precioHora = 250;

    const precioFinal = precio * precioHora;

    return precioFinal;
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const colorPrice = {
    backgroundColor: "gray",
  };

  // console.log(vehicle.name, date.toLocaleString());

  return (
    <tr className="bg-white shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
      >
        {vehicle.plates}
      </th>
      <td className="px-6 py-4">{vehicle.name}</td>
      <td className="px-6 py-4">{vehicle.lastName}</td>
      <td className="px-6 py-4">{vehicle.product}</td>
      <td className="px-6 py-4">{date.toLocaleString()}</td>
      <td className="px-6 py-4">{calcularTiempoTranscurrido(duration)}</td>
      <td className="px-6 py-4 font-bold ">
        <div
          style={calcularPrecioDuracion(duration) > 0 ? null : colorPrice}
          className="bg-[#09c212] p-2 rounded-full flex justify-center text-white text-xs"
        >
          ${calcularPrecioDuracion(duration)}
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <a
          onClick={() => {
            deleteVehicle(vehicle._id);
            navigate("/list");
          }}
          href="#"
          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
        >
          Pago
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
