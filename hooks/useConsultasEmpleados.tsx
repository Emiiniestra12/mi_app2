import { useState } from "react";
import { emiApi3 } from "../api/dist/emiapi2";

export const useEmpleados = () => {
    const [empleados, setEmpleados] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const load = async () => {
        setLoading(true);

        
        const resp = await emiApi3.get("/empleados?page=11&limit=100");

        
        setEmpleados(resp.data.data);

        setLoading(false);
    }

    return { empleados, loading, load };
};

export const useTotalAsistencia = () => {

    const [asistencias, setAsistencias] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const load = async (id_empleado: string, fechaInicio: string, fechaFin: string) => {
        setLoading(true);

        
            const resp = await emiApi3.get(
                `/empleados/total-asistencias?id_empleado=${id_empleado}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
            );

            setAsistencias(resp.data);

            setLoading(false);
        }
    

    return { asistencias, loading, load };
};
export const useNomina = () => {
    const [nomina, setNomina] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const load = async (id_empleado: string, fechaInicio: string, fechaFin: string) => {
        
            setLoading(true);
            setError(null);

            const resp = await emiApi3.get(`/empleados/nomina`, {
                params: { id_empleado, fechaInicio, fechaFin }
            });

            setNomina(resp.data)
            setLoading(false);
    
    };

    return { nomina, loading, error, load };
};

export const useDiasTrabajados = () => {

    const [trabajo, setTrabajo] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const load = async (id_empleado: string, fechaInicio: string, fechaFin: string) => {
        setLoading(true);

        
            const resp = await emiApi3.get(
                `/empleados/dias-trabajados?id_empleado=${id_empleado}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
            );

            setTrabajo(resp.data);
        
        
            setLoading(false);
        
    };

    return { trabajo, loading, load };
};
export const useReporteAsistencia = () => {

    const [asistencia, setAsistencia] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const load = async (id_empleado: string, fechaInicio: string, fechaFin: string) => {
        setLoading(true);

        
            const resp = await emiApi3.get(
                `/empleados/reporte-asistencia?id_empleado=${id_empleado}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
            );

            setAsistencia(resp.data);
        
        
            setLoading(false);
        
    };

    return { asistencia, loading, load };
};
export const useReporteProduccion = () => {
  const [produccion, setProduccion] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async (id_empleado: string, fechaInicio: string, fechaFin: string) => {
    setLoading(true);

    
      const inicio = fechaInicio.includes("/") 
        ? fechaInicio.split("/").reverse().join("-")
        : fechaInicio;
      const fin = fechaFin.includes("/") 
        ? fechaFin.split("/").reverse().join("-")
        : fechaFin;

      const resp = await emiApi3.get(
        `/empleados/reporte-produccion?id_empleado=${id_empleado}&fechaInicio=${inicio}&fechaFin=${fin}`
      );

      setProduccion(resp.data || []);
   
      setLoading(false);
  };

  return { produccion, loading, load };
};