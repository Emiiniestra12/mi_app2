import { useReducer } from "react";
import { usePartidaApi } from "./usePartidaApi";



export interface FormData{
    id_partida:   number;
    id_gamer:number;
    juego: string;
    fecha_partida:string;
    horas_duracion:number;
    resultado:string;
    puntos:number;
}

export interface UsePartidaForm{
    state:              FormData;
    handleInputChange:  ( fieldName: keyof FormData, value: string | number| boolean ) => void;
    handleSubmit:       () => void;
    handleDelete:       () => void;
}

export const usePartidaForm = (): UsePartidaForm => {

    const { createPartida, updatePartida, deletePartida  } = usePartidaApi();

    const initialForm: FormData = {
            "id_partida": 0,
            "id_gamer":0,
            "juego": "",
            "fecha_partida": "",
            "horas_duracion": 0,
            "resultado": "",
            "puntos": 0,
            
    }

    type Action = { type: "handleInputChange", payload: { fieldName: keyof FormData, value: string | number | boolean } };

    const formReducer = ( state: FormData, action: Action ) => {
        switch( action.type ){
            case "handleInputChange":
                return {
                    ...state,
                    [action.payload.fieldName] : action.payload.value
                }
                default:
             return state; 
        }
    }

    const [ state, dispatch ] = useReducer(formReducer, initialForm);

    const handleInputChange = ( fieldName: keyof FormData, value: string | number | boolean) => {
        dispatch({ type: "handleInputChange", payload: { fieldName, value } });
    }

    const handleSubmit = () => ( state.id_partida == 0 ) ?  createPartida(state) : updatePartida(state)


    const handleDelete = () => deletePartida(state);

    return { state, handleInputChange, handleSubmit, handleDelete };

}