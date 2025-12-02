import { useReducer } from "react";
import { useLogroApi } from "./useLogroApi";



export interface FormData{
    id_logro:   number;
    id_gamer:number;
    titulo: string;
    descripcion:string;
    dificultad:string;
    fecha_obtenida:string;
}

export interface UseLogroForm{
    state:              FormData;
    handleInputChange:  ( fieldName: keyof FormData, value: string | number| boolean ) => void;
    handleSubmit:       () => void;
    handleDelete:       () => void;
}

export const useLogroForm = (): UseLogroForm => {

    const { createLogro, updateLogro, deleteLogro  } = useLogroApi();

    const initialForm: FormData = {
            "id_logro": 0,
            "id_gamer":0,
            "titulo": "",
            "descripcion": "",
            "dificultad": "",
            "fecha_obtenida": "",
            
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

    const handleSubmit = () => ( state.id_logro == 0 ) ?  createLogro(state) : updateLogro(state)


    const handleDelete = () => deleteLogro(state);

    return { state, handleInputChange, handleSubmit, handleDelete };

}