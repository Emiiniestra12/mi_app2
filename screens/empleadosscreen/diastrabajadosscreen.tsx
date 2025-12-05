import { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet,ActivityIndicator } from "react-native";
import { useDiasTrabajados } from "../../hooks/useConsultasEmpleados";
import { temaCarta } from "../../diseñopredefinido";
import { AnimatedColorText } from "../../componentes/animacioncolortexto";

export const DiasTrabajadosScreen = () => {
  
  const [id_empleado, setIdEmpleado] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");

  const { trabajo, loading, load } = useDiasTrabajados();

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#1d1420ff", justifyContent:"center"}}>
      
       <AnimatedColorText
              style={{
                ...temaCarta.titleCard,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
              colors={["#ff00ff", "#00eaff", "#00ff2f", "#ffdd00", "#ff0099"]}
              duration={3000}
            >
              DIAS TRABAJADOS
            </AnimatedColorText>
      
      <Text style={[temaCarta.cardText, styles.label]}>Ingresa el id del empleado:</Text>

      <TextInput
        value={id_empleado}
        onChangeText={setIdEmpleado}
        placeholder="id"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <Text style={[temaCarta.cardText, styles.label]}>Ingresa la fecha de inicio:</Text>

      <TextInput
        value={fechaInicio}
        onChangeText={setFechaInicio}
        placeholder="2025/01/01"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <Text style={[temaCarta.cardText, styles.label]}>Ingresa la fecha de fin:</Text>

      <TextInput
        value={fechaFinal}
        onChangeText={setFechaFinal}
        placeholder="2025/01/01"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      <TouchableOpacity 
        style={temaCarta.button2} 
        onPress={() => load(id_empleado, fechaInicio, fechaFinal)}
      >
        <Text style={temaCarta.buttonText2}>Buscar total de dias trabajados</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" color="#2de4e1ff" style={{ marginTop: 20 }} />}
      <FlatList

  data={trabajo || []} 
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={[temaCarta.cardEstilo, styles.card]}>

      <Text style={{ ...temaCarta.cardText, color: "#2de4e1ff" }}>
        FECHA DE ASISTENCIA: {new Date(item.a_fecha).toLocaleDateString()}
      </Text>

      <Text style={{ ...temaCarta.cardText, color: "#2de4e1ff" }}>
        HORA DE ENTRADA: {new Date(item.a_horaEntrada).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </Text>

      <Text style={{ ...temaCarta.cardText, color: "#2de4e1ff" }}>
        HORA DE SALIDA: {new Date(item.a_horaSalida).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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
