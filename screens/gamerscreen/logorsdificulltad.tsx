import { useState } from "react";
import { View, Text, TextInput, Button, FlatList, ActivityIndicator, TouchableOpacity,StyleSheet} from "react-native";
import { useLogroDificultad } from "../../hooks/useConsultasGamerApi";
import { temaCarta } from "../../diseñopredefinido";

export const LogroDificultad = () => {

  const [dificultad, setDificultad] = useState("");
  const { logros, loading, load } = useLogroDificultad();

  

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#1d1420ff", justifyContent:"center"}}>
    <Text style={{...temaCarta.titleCard, backgroundColor:"#107d8eff",color:"white", fontSize:26}}>LOGROS POR DIFICULTAD:</Text>
      
      <Text style={[temaCarta.cardText, styles.label]}>Ingresa la dificultad:</Text>

      <TextInput
        value={dificultad}
        onChangeText={setDificultad}
        placeholder="FACIL,MEDIO,DIFICIL,LOCURA"
        placeholderTextColor="#d8d0d0ff"
        style={styles.input}
      />

      

       <TouchableOpacity style={styles.button} onPress={() => load(dificultad)}>
        <Text style={styles.buttonText}>Buscar logros</Text>
        </TouchableOpacity>

      <FlatList
        data={logros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item,index}) => (
          <View  style={[
                        temaCarta.cardEstilo,
                        styles.card,
                        { backgroundColor: index % 2 === 0 ? "#10b5b5ff" : "#0ea1d6ff" }
                      ]}>

            <Text style={{ ...temaCarta.cardText, color: "#d7d41aff" }}>Jugador: {item.nickname}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#d909e8ff" }}>Título: {item.titulo}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#28e917ff" }}>Descripción: {item.descripcion}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#3e4ec7ff" }}>Dificultad: {item.dificultad}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#a70aceff" }}>Fecha obtenida: {new Date(item.fecha_obtenida).toLocaleDateString()}</Text>
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
