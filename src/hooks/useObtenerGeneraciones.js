import { useEffect, useState } from "react";
import {
  obtenerGeneraciones,
  obtenerGeneracionesId,
} from "../api/services/generacionService";

export const useObtenerGeneraciones = () => {
  const [generaciones, setGeneraciones] = useState([]);

  const obtenDatos = async () => {
    const data = await obtenerGeneraciones();
    const arr = data.map(({ name }) => obtenerGeneracionesId(name));
    const arrayDatos = await Promise.all(arr);
    setGeneraciones(arrayDatos);
  };
  useEffect(() => {
    obtenDatos();
  }, []);

  return { generaciones };
};
