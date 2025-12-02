import { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useGamersPorPais } from "../../hooks/useConsultasGamerApi";
import { temaCarta } from "../../diseñopredefinido";

export const GamersPorPais = () => {
  const [pais, setPais] = useState("");
  const { gamers, loading, load } = useGamersPorPais();

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#1d1420ff", justifyContent:"center"}}>

    
      <Text style={{...temaCarta.titleCard, backgroundColor:"#107d8eff",color:"white"}}>LISTA DE GAMERS POR PAIS:</Text>

  
      <Text style={[temaCarta.cardText, styles.label]}>Ingresa el país:</Text>

      
      <TextInput
        value={pais}
        onChangeText={setPais}
        placeholder="Ej. México, Perú, España"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      
      <TouchableOpacity style={styles.button} onPress={() => load(pais)}>
        <Text style={styles.buttonText}>Buscar Gamers</Text>
      </TouchableOpacity>

      
      <FlatList
        data={gamers}
        keyExtractor={(item) => item.g_id_gamer.toString()}
        contentContainerStyle={{ paddingVertical: 20 }}
        renderItem={({ item, index }) => (
          <View
            style={[
              temaCarta.cardEstilo,
              styles.card,
              { backgroundColor: index % 2 === 0 ? "#10b5b5ff" : "#0ea1d6ff" }
            ]}
          >
            <Text style={{ ...temaCarta.cardText, color: "#3e4ec7ff" }}>Nickname: {item.g_nickname}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#2fe306ff" }}>Nivel: {item.g_nivel}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#e6e61cf6" }}>Fecha de registro: {new Date(item.g_fecha_registro).toLocaleDateString()}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#310332ff" }}>Activo: {item.g_activo ? "Sí" : "No"}</Text>
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
