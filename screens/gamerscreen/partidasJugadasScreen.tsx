import { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { usePartidaGamer } from "../../hooks/useConsultasGamerApi";

export const PartidasScreen2 = () => {

  const [idGamer, setIdGamer] = useState("");
  const { partidas, loading, load } = usePartidaGamer();

  return (
    <View style={{ padding: 20 }}>
      
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Ingresa ID del Gamer:</Text>

      <TextInput
        value={idGamer}
        onChangeText={setIdGamer}
        placeholder="Ej: 1"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#aaa",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />

      <Button title="Buscar partidas" onPress={() => load(Number(idGamer))}/>
      <FlatList
        data={partidas}
        keyExtractor={(item) => item.p_id_partida.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, backgroundColor: "#eee", marginBottom: 10 }}>
            <Text>Juego: {item.p_juego}</Text>
            <Text>Resultado: {item.p_resultado}</Text>
            <Text>Puntos: {item.p_puntos}</Text>
            <Text>Fecha: {item.p_fecha_partida}</Text>
          </View>
        )}
      />
    </View>
  );
};
