import { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useReporteProduccion } from "../../hooks/useConsultasEmpleados";
import { temaCarta } from "../../diseñopredefinido";
import { AnimatedColorText } from "../../componentes/animacioncolortexto";

export const ReporteProduccion = () => {
  const [id_empleado, setIdEmpleado] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const { produccion, loading, load } = useReporteProduccion();

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#1d1420ff" }}>
      
       <AnimatedColorText
              style={{
                ...temaCarta.titleCard,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
              colors={["#ff00ff", "#00eaff", "#00ff2f", "#ffdd00", "#ff0099"]}
              duration={3000}
            >
              REPORTE DE PRODUCCION
            </AnimatedColorText>

      <Text style={[temaCarta.cardText, styles.label]}>ID del empleado:</Text>
      <TextInput
        value={id_empleado}
        onChangeText={setIdEmpleado}
        placeholder="id"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <Text style={[temaCarta.cardText, styles.label]}>Fecha de inicio:</Text>
      <TextInput
        value={fechaInicio}
        onChangeText={setFechaInicio}
        placeholder="2025-01-01"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <Text style={[temaCarta.cardText, styles.label]}>Fecha de fin:</Text>
      <TextInput
        value={fechaFinal}
        onChangeText={setFechaFinal}
        placeholder="2025-01-08"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <TouchableOpacity
        style={temaCarta.button2}
        onPress={() => load(id_empleado, fechaInicio, fechaFinal)}
      >
        <Text style={temaCarta.buttonText2}>Buscar Reporte</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#2de4e1ff" style={{ marginTop: 20 }} />}

      <FlatList
        data={produccion}
        keyExtractor={(item, index) => item.id_reg_p ? item.id_reg_p.toString() : index.toString()}
        renderItem={({ item }) => (
          <View style={[temaCarta.cardEstilo, styles.card]}>
            <Text style={temaCarta.cardText}>FECHA: {new Date(item.p_fecha).toLocaleDateString()}</Text>
            <Text style={temaCarta.cardText}>TURNO: {item.p_turno}</Text>
            <Text style={temaCarta.cardText}>UNIDADES PRODUCIDAS: {item.p_unidadesProducidas}</Text>
            <Text style={temaCarta.cardText}>
              EMPLEADO: {item.e_nombre} {item.e_apellido_p} {item.e_apellido_m}
            </Text>
          </View>
        )}
    
      />

    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 10,
    fontSize: 18,
    color: "#fff",
  },
  input: {
    borderWidth: 2,
    borderColor: "#079a9aff",
    padding: 12,
    borderRadius: 15,
    marginBottom: 20,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2de4e1ff",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#15081aff",
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    padding: 20,
    marginBottom: 16,
    width: "100%",
  },
});
