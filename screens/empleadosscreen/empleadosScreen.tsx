import { useEffect } from "react";
import { View, Text, ScrollView, FlatList ,ActivityIndicator} from "react-native";
import { useEmpleados } from "../../hooks/useConsultasEmpleados";
import { appTheme } from "../../diseñopredefinido";
import { temaCarta } from "../../diseñopredefinido";
import { AnimatedColorText } from "../../componentes/animacioncolortexto";
import { BlurView } from "@react-native-community/blur";



export const EmpleadosScreen = () => {
    const { empleados, loading, load } = useEmpleados();

    useEffect(() => {
        load();
    }, []);

    

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
              EMPLEADOS
            </AnimatedColorText>
            {loading && <ActivityIndicator size="large" color="#2de4e1ff" style={{ marginTop: 20 }} />}


            
                <FlatList
                    data={empleados}
                    keyExtractor={(item) => item.id_empleado.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={temaCarta.cardEstilo3}>
                                

                            <Text style={temaCarta.label}>Nombre</Text>
                            <Text style={temaCarta.value}>{item.nombre}</Text>

                            <Text style={temaCarta.label }>APELLIDO PATERNO:</Text>
                            <Text style={temaCarta.value}>{item.apellido_p}</Text>

                            <Text style={temaCarta.label }>APELLIDO MATERNO:</Text>
                            <Text style={temaCarta.value}>{item.apellido_m}</Text>

                            <Text style={temaCarta.label }>AREA:</Text>
                            <Text style={temaCarta.value}>{item.area}</Text>

                            <Text style={temaCarta.label }>TURNO:</Text>
                            <Text style={temaCarta.value}>{item.turno}</Text>

                            
                            <Text style={temaCarta.label }>SALARIO:</Text>
                            <Text style={temaCarta.value}>{item.salarioDiario}</Text>

                            
                            <Text style={temaCarta.label}>Activo</Text>
                            <Text style={temaCarta.value}>{item.activo ? "Sí" : "No"}</Text>
                        </View>
                    )}
                />

            </View>
    
    );
};
