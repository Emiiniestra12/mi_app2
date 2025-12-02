import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useListaGamers } from "../../hooks/useConsultasGamerApi";
import { appTheme } from "../../diseñopredefinido";
import { temaCarta } from "../../diseñopredefinido";

export const ListaGamers = () => {
    const { gamer, loading, load } = useListaGamers();

    useEffect(() => {
        load();
    }, []);

    return (
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: "#aeabafff", justifyContent:"center"}}>

            <Text style={[temaCarta.titleCard, { marginBottom: 40 }]}>LISTA DE GAMERS:</Text>

                <FlatList
                    data={gamer}
                    keyExtractor={(item) => item.id_gamer.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={temaCarta.cardEstilo}
                        >
                            <Text style={{ ...appTheme.title }}>
                                {item.nickname}
                            </Text>
                            <Text style={{ ...temaCarta.cardText, color: "#2de4e1ff" }}>ID Gamer: {item.id_gamer}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#2de43fff" }}>Nivel: {item.nivel}</Text>
                            <Text style={{ ...temaCarta.cardText, color: "#c914d5ff" }}>Pais: {item.pais}</Text>
                            
                        </View>
                    )}
                />

            </View>

    );
};
