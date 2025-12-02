import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useGamerActivos } from "../../hooks/useConsultasGamerApi";
import { appTheme } from "../../diseñopredefinido";
import { temaCarta } from "../../diseñopredefinido";

export const GamerAcivos = () => {
    const { gamers, loading, load } = useGamerActivos();

    useEffect(() => {
        load();
    }, []);

    return (

            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#d4d5d5ff", justifyContent:"center"}}>

            <Text style={[temaCarta.titleCard, { marginBottom: 40 }]}>GAMERS ACTIVOS:</Text>

                <FlatList
                    data={gamers}
                    keyExtractor={(item) => item.g_id_gamer.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={temaCarta.cardEstilo}>

                            <Text style={temaCarta.cardText}>
                                {item.nickname}
                            </Text>
                            <Text style={{ ...temaCarta.cardText, color: "#2de4e1ff" }}>Nickname: {item.g_nickname}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#85be4bff" }}>Nivel: {item.g_nivel}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#e165d7ff" }}>País: {item.g_pais}</Text>

                        </View>
                    )}
                />

            </View>
    
    );
};
