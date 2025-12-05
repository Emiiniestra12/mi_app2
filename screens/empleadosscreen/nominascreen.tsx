import { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { useNomina } from "../../hooks/useConsultasEmpleados";
import { temaCarta } from "../../diseñopredefinido";
import { AnimatedColorText } from "../../componentes/animacioncolortexto";

export const NominaScreen = () => {

  const [id_empleado, setIdEmpleado] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const { nomina, loading, load } = useNomina();

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
        NOMINA
      </AnimatedColorText>

      
      <Text style={[temaCarta.cardText, styles.label]}>Ingresa el id del empleado:</Text>

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

      <Text style={[temaCarta.cardText, styles.label]}>Fecha final:</Text>
      <TextInput
        value={fechaFinal}
        onChangeText={setFechaFinal}
        placeholder="2025-01-01"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => load(id_empleado, fechaInicio, fechaFinal)}
      >
        <Text style={styles.buttonText}>Buscar total de Nomina</Text>
      </TouchableOpacity>

      
      {loading && <ActivityIndicator size="large" color="#2de4e1ff" style={{ marginTop: 20 }} />}

      
      {nomina && !loading && (
        <View style={[temaCarta.cardEstilo, styles.card]}>
          <Text style={temaCarta.cardText}>DIAS TRABAJADOS: {nomina.diasTrabajados}</Text>
          <Text style={temaCarta.cardText}>TOTAL: ${nomina.total}</Text>

          <Text style={[temaCarta.cardText, { marginTop: 10 }]}>ASISTENCIAS:</Text>

          
          <FlatList
            data={nomina.asistencias}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={[temaCarta.cardText, { fontSize: 14 }]}>
                • Entrada: {item.horaEntrada}
              </Text>
            )}
          />
        </View>
      )}

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
  borderWidth: 2,
  borderColor: "#00faff",
  shadowColor: "#00faff",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.9,
  shadowRadius: 15,
  elevation: 10,
},
buttonText: {
  color: "#15081aff",
  fontWeight: "bold",
  fontSize: 18,
  textShadowColor: "#00faff",
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 10,
},
  card: {
    padding: 20,
    marginBottom: 16,
    width: "100%",
  },
});
