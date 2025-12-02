import axios from "axios";

const API = "http://localhost:3000/gamer";
const TOTAL = 100;

const NIVELES = ["NOVATO", "MEDIO", "EXPERTO"];
const DIFICULTADES = ["FACIL", "MEDIO", "DIFICIL", "LOCURA"];
const RESULTADOS = ["GANO", "PERDIO", "EMPATO"];

const nombres = ["Alan", "Bruno", "Carlos", "David", "Eduardo", "Sergio", "Hector", "Luis", "Marco", "Oscar", "Pablo", "Rafael", "Tomas", "Victor"];
const paises = ["México", "Argentina", "Chile", "Colombia", "España", "EEUU", "Perú", "Ecuador"];

const rand = a => a[Math.floor(Math.random() * a.length)];
const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const post = async (url, data) => {
  try { return await axios.post(url, data); }
  catch (e) {
    console.log("ERROR", url);
    console.log(e.response?.data);
  }
};

(async () => {
  const gamers = [];

  console.log(" Creando gamers...");

  for (let i = 0; i < TOTAL; i++) {
    const g = await post(API, {
      nickname: rand(nombres) + randNum(100, 999),
      nivel: rand(NIVELES),
      pais: rand(paises),
      fecha_registro: new Date().toISOString().split("T")[0],
      activo: true
    });

    if (g?.data?.id_gamer) {
      gamers.push(g.data.id_gamer);
      console.log(`✔ Gamer ${g.data.id_gamer} creado`);
    }
  }

  console.log("\n Creando partidas y logros...");

  for (const id of gamers) {
    const p = randNum(3, 8);
    const l = randNum(1, 5);

    for (let i = 0; i < p; i++)
      await post(`${API}/create-partida`, {
        id_gamer: id,
        juego: "Call of Duty",
        fecha_partida: new Date().toISOString().split("T")[0],
        horas_duracion: randNum(10, 120),
        resultado: rand(RESULTADOS)
      });

    for (let i = 0; i < l; i++)
      await post(`${API}/create-logro`, {
        id_gamer: id,
        titulo: "Misión " + randNum(1, 500),
        descripcion: "Logro desbloqueado automáticamente",
        dificultad: rand(DIFICULTADES),
        fecha_obtenida: new Date().toISOString().split("T")[0]
      });

    console.log(`✔ Gamer ${id} → ${p} partidas | ${l} logros`);
  }

  console.log("\n FINALIZADO SIN ERRORES");
})();
