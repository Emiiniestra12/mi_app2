import { useState } from "react";
import { emiApi2 } from "../api/dist/emiapi2";

export const useGamerActivos = () => {
    const [gamers, setGamers] = useState<any[]>([]);
    const [loading, setLoading]= useState(false);


    const load = async () => {
        setLoading(true);
        const resp = await emiApi2.get("/gamer/activos");

        setGamers(resp.data);
        setLoading(false);
    }

    return{ gamers, loading, load};

    
};

export const usePartidaGamer = () => {
    const [partidas, setPartidas] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const load = async (id_gamer: number) => {
        setLoading(true);

        const resp = await emiApi2.get(
            `/gamer/partidas?id_gamer=${id_gamer}`
        );

        setPartidas(resp.data);
        setLoading(false);
    };

    return { partidas, loading, load };
};

export const usePartidasGanadas = () => {
    const [partidas, setPartidas] = useState<any[]>([]);
    const [loading, setLoading]= useState(false);


    const load = async (resultado: string="GANO") => {
        setLoading(true);
        const resp = await emiApi2.get("/gamer/partidas-ganadas?resultado=GANO");

        setPartidas(resp.data);
        setLoading(false);
    }

    return{ partidas, loading, load};

    
};

export const useListaGamers = () => {
    const [gamer, setGamer] = useState<any[]>([]);
    const [loading, setLoading]= useState(false);


    const load = async () => {
        setLoading(true);
        const resp = await emiApi2.get("/gamer");

        setGamer(resp.data.data);
        setLoading(false);
    }

    return{ gamer, loading, load};

    
};


export const useLogroDificultad = () => {
    const [logros, setLogro] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const load = async (dificultad:string) => {
        setLoading(true);

        const resp = await emiApi2.get(
            `gamer/logros-dificultad`,{params: {dificultad}}
        );
        

        setLogro(resp.data);
        setLoading(false);
    };

    return { logros, loading, load };
};


export const usePartidasPorJuego = () => {
  const [partidas, setPartidas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
      setLoading(true);
      const resp = await emiApi2.get(`/gamer/partidas-juego`);
      setPartidas(resp.data);
    
      setLoading(false);
    
  };

  return { partidas, loading, load };
};


export const useGamersPorPais = () => {
    const [gamers, setGamers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const load = async (pais: string) => {
        setLoading(true);

            const resp = await emiApi2.get(`/gamer/gamers-pais`,  { params: { pais } }
            );

            setGamers(resp.data);
            setLoading(false);
        
    };

    return { gamers, loading, load };
};