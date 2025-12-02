import { useReducer } from "react";
import { useGamerApi } from "./useGamerApi";



export interface FormData{
    id_gamer:   number;
    nickname: string;
    nivel:string;
    pais:string;
    fecha_registro:string;
    activo:boolean;
}

export interface UseGamerForm{
    state:              FormData;
    handleInputChange:  ( fieldName: keyof FormData, value: string | number| boolean ) => void;
    handleSubmit:       () => void;
    handleDelete:       () => void;
}

export const useGamerForm = (): UseGamerForm => {

    const { createGamer, updateGamer, deleteGamer  } = useGamerApi();

    const initialForm: FormData = {
            "id_gamer": 0,
            "nickname": "",
            "nivel": "",
            "pais": "",
            "fecha_registro": "",
            "activo": false,
            
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

    const handleSubmit = () => ( state.id_gamer == 0 ) ?  createGamer(state) : updateGamer(state)


    const handleDelete = () => deleteGamer(state);

    return { state, handleInputChange, handleSubmit, handleDelete };

}