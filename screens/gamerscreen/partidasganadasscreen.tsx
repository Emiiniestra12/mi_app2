import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { usePartidasGanadas } from "../../hooks/useConsultasGamerApi";
import { appTheme } from "../../diseñopredefinido";
import { temaCarta } from "../../diseñopredefinido";

export const PartidasGanadas = () => {
    const { partidas, loading, load } = usePartidasGanadas();

    useEffect(() => {
        load();
    }, []);

    return (
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#d4d5d5ff", justifyContent:"center"}}>
            <Text style={[temaCarta.titleCard, { marginBottom: 40, fontSize:28}]}>PARTIDAS GANADAS:</Text>
                <FlatList
                    data={partidas}
                    keyExtractor={(item) => item.id_gamer.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={temaCarta.cardEstilo}
                        >
                            <Text style={{ ...appTheme.title }}>
                                {item.nickname}
                            </Text>
                            <Text style={{ ...temaCarta.cardText, color: "#55fb52ff" }}>ID Gamer: {item.id_gamer}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#4edad0ff" }}>Nivel: {item.nivel}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#d2f00aff" }}>País: {item.pais}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#fb52baff" }}>Partidas Ganadas: {item.partidas_ganadas}</Text>
                            
                        </View>
                    )}
                />

            </View>

    );
};
