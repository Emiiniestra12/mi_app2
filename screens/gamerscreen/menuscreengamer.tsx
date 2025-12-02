import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { temaCarta } from "../../diseñopredefinido";

export const MenuScreen = () => {
  const navigation = useNavigation();

  const screens = [
    { title: "CRUD DE GAMERS", route: "GamerScreen" },
    { title: "GAMERS POR PAIS", route:"GamerPorPais"},
    { title: "LISTA GENERAL DE GAMERS", route:"ListaGamers"},
    { title: "LOGROS POR DIFICULTAD", route:"LogroDificultad"},
    { title: "PARTIDAS GANADAS", route:"PartidasGanadas"},
    { title: "PARTIDAS POR JUEGO", route:"PartidasPorJuegoScreen"},
    { title: "GAMERS ACTIVOS", route:"GamerActivos"},
  ];

  return (
    <ImageBackground
          source={require("../../assets/fondomenu.jpg")} 
          style={styles.fondo}
          imageStyle={{ resizeMode: "cover" }}>
        
   
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 60, justifyContent:"center"}}>
      <Text style={{...temaCarta.titleCard,backgroundColor:"rgba(0, 0, 0, 0.4)"}}>Menú Principal Gamer</Text>

      {screens.map((screen) => (
        <TouchableOpacity
          key={screen.route}
          style={styles.card}
          onPress={() => navigation.navigate(screen.route as never)}
        >
          <Text style={styles.cardText}>{screen.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30 },
  card: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: { color: "#e0e9eaff", fontSize: 20, fontWeight: "bold" },
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

