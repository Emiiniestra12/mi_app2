import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { temaCarta } from "../../diseñopredefinido";
import { AnimatedColorText } from "../../componentes/animacioncolortexto";

export const MenuEmpleadosScreen = () => {
  const navigation = useNavigation();

  const cards = [
    { title: "Nómina", route: "NominaScreen", icon: "money", color: "#107d8eff" },
    { title: "Días Trabajados", route: "DiasTrabajadosScreen", icon: "calendar-check-o", color: "#f39c12ff" },
    { title: "Reporte de Asistencia", route: "ReporteAsistencia", icon: "clock-o", color: "#27ae60ff" },
    { title: "Reporte de Producción", route: "ReporteProduccion", icon: "industry", color: "#8e44adff" },
    { title: "TOTAL DE ASISTENCIAS", route: "TotalAsistenciaScreen", icon: "list", color: "#16a085ff" },
    { title: "EMPLEADOS", route: "EmpleadosScreen", icon: "users", color: "#105786ff" },
  ];

  return (
    <ScrollView style={styles.container}>

      <AnimatedColorText
        style={{
          ...temaCarta.titleCard,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
        colors={["#ff00ff", "#00eaff", "#00ff2f", "#ffdd00", "#ff0099"]}
        duration={3000}
      >
        Menú De Empleados
      </AnimatedColorText>

      <View style={styles.grid}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.title}
            style={[styles.card, { backgroundColor: card.color }]}
            onPress={() => navigation.navigate(card.route as never)}
          >
            <FontAwesome name={card.icon} size={40} color="#fff" />
            <Text style={styles.cardText}>{card.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1d1420ff" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: {
    width: "48%",
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },
  cardText: { color: "#fff", fontSize: 18, fontWeight: "bold", marginTop: 10, textAlign: "center" },
});
