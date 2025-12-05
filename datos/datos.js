const axios = require("axios");

// ==========================
// CONFIGURACIÓN
// ==========================
const API_BASE = "http://localhost:3000";
const TOTAL_EMPLEADOS = 10;
const YEAR = 2025;

const AREAS = ["OFICINA", "PRODUCCION", "INVENTARIO"];
const TURNOS = ["MATUTINO", "VESPERTINO", "NOCTURNO", "MIXTO"];
const STATUS_ASISTENCIA = ["EN_TURNO", "FINALIZADO"];

const NOMBRES = [
  "Juan","Carlos","Luis","Miguel","Jose","Jorge","Felipe","Hector",
  "Marco","Ricardo","Fernando","Pablo","Rafael","Alberto","Andres",
  "Roberto","Eduardo","Cristian","Mario","Diego","Omar","Sergio",
  "Francisco","Adrian","Hernan","Erick","Kevin","Oscar","Manuel",
  "Víctor","Alan","Emilio","Ramiro","Leonardo","Esteban","Bruno",
  "Mauricio","Gustavo","Elías","Tomás"
];

const APELLIDOS = [
  "Hernandez","Martinez","Gomez","Perez","Lopez","Garcia",
  "Rodriguez","Sanchez","Ramirez","Cruz","Torres","Rivera",
  "Gonzalez","Flores","Vargas","Castillo","Ortega","Ruiz",
  "Aguilar","Chavez","Dominguez","Silva","Navarro","Salazar",
  "Mendoza","Ponce","Morales","Soto","Camacho","Cortés",
  "Arias","Palacios","Estrada","Valdez","Montoya","Ramos"
];

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generarNombreCompleto = () => ({
  nombre: random(NOMBRES),
  apellido_p: random(APELLIDOS),
  apellido_m: random(APELLIDOS)
});
const EMPLEADOS = Array.from({ length: 100 }, (_, i) => i + 1);

const generarFechas2025 = () => {
  const fechas = [];
  const start = new Date(`${YEAR}-01-01T00:00:00`);

  for (let d = 0; d < 365; d++) {
    let cur = new Date(start);
    cur.setDate(cur.getDate() + d);
    fechas.push(cur.toISOString().slice(0, 10)); 
  }
  return fechas;
};

const FECHAS_2025 = generarFechas2025();

const makeISO = (fecha, hour, minute) => {
  const [y, m, d] = fecha.split("-").map(Number);
  return new Date(y, m - 1, d, hour, minute).toISOString();
};

const safePost = async (url, body, maxIntentos = 10) => {
  let intento = 0;

  while (intento < maxIntentos) {
    try {
      return await axios.post(url, body);
    } catch (e) {
      intento++;
      if (intento === maxIntentos) {
        console.error(` Fallo FINAL -> ${url}:`, e.response?.data || e.message);
        return null;
      }
      console.warn(`⚠️ Error (Intento ${intento}/${maxIntentos}) -> ${url}. Reintentando...`);
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
};

const registerA_P = async (fecha, id_empleado) => {
  const entradaISO = makeISO(fecha, 8, 0);
  const salidaISO = makeISO(fecha, 17, 0);

  const fechaISO = `${fecha}T00:00:00`;

  const horas = (new Date(salidaISO) - new Date(entradaISO)) / 3600000;

  const asistenciaPayload = {
    id_empleado,
    fecha: fechaISO,
    horaEntrada: entradaISO,
    horaSalida: salidaISO,
    horasTrabajadas: horas,
    puntual: false,
    turno: random(TURNOS),
    estatus: random(STATUS_ASISTENCIA)
  };

  const produccionPayload = {
    id_empleado,
    fecha: fechaISO,
    turno: random(TURNOS),
    unidadesProducidas: Math.floor(Math.random() * 3000)
  };

  const register_asistencia = await safePost(`${API_BASE}/empleados/create-asistencia`, asistenciaPayload);
  const register_produccion = await safePost(`${API_BASE}/empleados/create-produccion`, produccionPayload);

  return { register_asistencia, register_produccion };
}

const main = async () => {
  const EMPLEADOS = [];

  console.log("========== CREANDO EMPLEADOS ==========");

  for (let i = 1; i <= TOTAL_EMPLEADOS; i++) {
    const n = generarNombreCompleto();

    const empleadoPayload = {
      nombre: n.nombre,
      apellido_p: n.apellido_p,
      apellido_m: n.apellido_m,
      area: random(AREAS),
      turno: random(TURNOS),
      salarioDiario: 200 + Math.random() * 350,
      activo: true
    };

    const register = await safePost(`${API_BASE}/empleados`, empleadoPayload);

    if (register?.data) {
      const emp = register.data;
      EMPLEADOS.push(emp.id_empleado);

      console.log(`Empleado registrado: ${emp.id_empleado} - ${emp.nombre} ${emp.apellido_p}`);
    }
  }


  if (EMPLEADOS.length === 0) return;

  console.log("========== GENERANDO ASISTENCIAS Y PRODUCCION 2025 ==========");

  for (const fecha of FECHAS_2025) {
    console.log(`📅 Fecha: ${fecha}`);

    for (const empleado of EMPLEADOS) {
      const registros = await registerA_P(fecha, empleado);

      if (registros?.register_asistencia && registros?.register_produccion) {
        console.log(`✔ Empleado ${empleado} OK`);
      }
    }
  }

  console.log("FINALIZADO. TODA LA DATA FUE GENERADA CORRECTAMENTE.");
};

main();
