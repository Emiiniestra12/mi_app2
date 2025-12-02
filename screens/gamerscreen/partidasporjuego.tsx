import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { usePartidasPorJuego } from "../../hooks/useConsultasGamerApi";
import { temaCarta } from "../../diseñopredefinido";

export const PartidasPorJuegoScreen = () => {
  const { partidas, loading, load } = usePartidasPorJuego();

  useEffect(() => {
    load();
  }, []);


  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#d4d5d5ff", justifyContent:"center"}}>
      <Text style={[temaCarta.titleCard, { marginBottom: 40, fontSize:28}]}>PARTIDAS POR JUEGO:</Text>

      <FlatList
        data={partidas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={temaCarta.cardEstilo}>
            <Text style={temaCarta.cardText}></Text>
            <Text style={{ ...temaCarta.cardText, color: "#55fb52ff" }}>Juego: {item.juego}</Text>
            <Text style={{ ...temaCarta.cardText, color: "#fc2cc1ff" }}>Total Partidas: {item.total_partidas}</Text>
          </View>
        )}
      />
    </View>
  );
};
