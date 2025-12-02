import { useEffect, useState } from "react";
import { emiApi2 } from "../api/dist/emiapi2";
import { LogroResponse } from "../interfaze/interface";
import { FormData } from "./useLogroForm";

interface UseLogroApi{
    isLoading:      boolean;
    listLogro:      LogroResponse;
    loadLogro:      () => void;
    createLogro:    (data: FormData) => void;
    updateLogro:    (data: FormData) => void;
    deleteLogro:    (data: FormData) => void;
}

export const useLogroApi = (): UseLogroApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ listLogro, setListLogro ] = useState<LogroResponse>({} as LogroResponse);

    const apiUrl: string = "http://192.168.100.51:3000/gamer/registro-logro";

    const loadLogro = async () => {
        setIsLoading( true );
        const response = await emiApi2.get<LogroResponse>( apiUrl );
        setListLogro( response.data );
        setIsLoading( false );
    }

    useEffect(() => {
        loadLogro();
    },[]);

    const createLogro = async ( data: FormData ) => {
        const dataBody = {
            "id_gamer":data.id_gamer,
            "titulo": data.titulo,
            "descripcion": data.descripcion,
            "dificultad": data.dificultad,
            "fecha_obtenida": data.fecha_obtenida,
            
            
        }
        await emiApi2.post( apiUrl, dataBody );
    }

    const updateLogro = async ( data: FormData ) => {
        const dataBody = {
             "id_gamer":data.id_gamer,
            "titulo": data.titulo,
            "descripcion": data.descripcion,
            "dificultad": data.dificultad,
            "fecha_obtenida": data.fecha_obtenida,
            
        }
        await emiApi2.patch( apiUrl + `/${data.id_logro}`, dataBody );
    }

    const deleteLogro = async ( data: FormData ) => {
        await emiApi2.delete( apiUrl + `/${data.id_logro}`);
    }

    return { isLoading, listLogro, loadLogro, createLogro, updateLogro, deleteLogro };
}