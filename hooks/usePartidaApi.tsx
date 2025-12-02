import { useEffect, useState } from "react";
import { emiApi2 } from "../api/dist/emiapi2";
import { PartidaResponse } from "../interfaze/interface";
import { FormData } from "./usePartidaForm";

interface UsePartidaApi{
    isLoading:      boolean;
    listPartida:      PartidaResponse;
    loadPartida:      () => void;
    createPartida:    (data: FormData) => void;
    updatePartida:    (data: FormData) => void;
    deletePartida:    (data: FormData) => void;
}

export const usePartidaApi = (): UsePartidaApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ listPartida, setListPartida ] = useState<PartidaResponse>({} as PartidaResponse);

    const apiUrl: string = "http://192.168.100.51:3000/gamer/registro-partida";

    const loadPartida = async () => {
        setIsLoading( true );
        const response = await emiApi2.get<PartidaResponse>( apiUrl );
        setListPartida( response.data );
        setIsLoading( false );
    }

    useEffect(() => {
        loadPartida();
    },[]);

    const createPartida = async ( data: FormData ) => {
        const dataBody = {
            "id_gamer":data.id_gamer,
            "juego": data.juego,
            "fecha_partida": data.fecha_partida,
            "horas_duracion": data.horas_duracion,
            "resultado": data.resultado,
            "puntos": data.puntos,
            
        }
        await emiApi2.post( apiUrl, dataBody );
    }

    const updatePartida = async ( data: FormData ) => {
        const dataBody = {
            "id_gamer":data.id_gamer,
            "juego": data.juego,
            "fecha_partida": data.fecha_partida,
            "horas_duracion": data.horas_duracion,
            "resultado": data.resultado,
            "puntos": data.puntos,
        }
        await emiApi2.patch( apiUrl + `/${data.id_partida}`, dataBody );
    }

    const deletePartida = async ( data: FormData ) => {
        await emiApi2.delete( apiUrl + `/${data.id_partida}`);
    }

    return { isLoading, listPartida, loadPartida, createPartida, updatePartida, deletePartida };
}