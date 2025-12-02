import { useEffect, useState } from "react";
import { emiApi2 } from "../api/dist/emiapi2";
import { GamerResponse } from "../interfaze/interface";
import { FormData } from "./useGamerForm";

interface UseGamerApi{
    isLoading:      boolean;
    listGamer:      GamerResponse;
    loadGamer:      () => void;
    createGamer:    (data: FormData) => void;
    updateGamer:    (data: FormData) => void;
    deleteGamer:    (data: FormData) => void;
}

export const useGamerApi = (): UseGamerApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ listGamer, setListGamer ] = useState<GamerResponse>({} as GamerResponse);

    const apiUrl: string = "http://192.168.100.51:3000/gamer";

    const loadGamer = async () => {
        setIsLoading( true );
        const response = await emiApi2.get<GamerResponse>( apiUrl );
        setListGamer( response.data );
        setIsLoading( false );
    }

    useEffect(() => {
        loadGamer();
    },[]);

    const createGamer = async ( data: FormData ) => {
        const dataBody = {
            "nickname": data.nickname,
            "nivel": data.nivel,
            "pais": data.pais,
            "fecha_registro": data.fecha_registro,
            "activo": data.activo,
            
        }
        await emiApi2.post( apiUrl, dataBody );
    }

    const updateGamer = async ( data: FormData ) => {
        const dataBody = {
            "nickname": data.nickname,
            "nivel": data.nivel,
            "pais": data.pais,
            "fecha_registro": data.fecha_registro,
            "activo": data.activo,
        }
        await emiApi2.patch( apiUrl + `/${data.id_gamer}`, dataBody );
    }

    const deleteGamer = async ( data: FormData ) => {
        await emiApi2.delete( apiUrl + `/${data.id_gamer}`);
    }

    return { isLoading, listGamer, loadGamer, createGamer, updateGamer, deleteGamer };
}