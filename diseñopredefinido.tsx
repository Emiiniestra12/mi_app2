import { StyleSheet, TextInput } from "react-native";

export const appTheme = StyleSheet.create({
    marginGlobal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        fontFamily:"sans-serif"
    },
    textInput: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    height: 50,
    width: 280,
    margin: 5,
    borderWidth: 5,
    borderColor: "#73aae6ff",
    color: "white",
  },
    avatar: {
        height: 140,
        width: 140,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "violet"
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10
    },
    menuBtn:{
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: 180,
        justifyContent: "center",
        borderColor: "violet"
    },
    textBtn:{
        fontSize: 20,
        color: "purple",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "white"
    },
    });

export const temaCarta = StyleSheet.create({

  containerCard: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#f2f2f2" 
  },
  titleCard: { 
    fontSize: 30, 
    fontWeight: "bold", 
    marginBottom: 30,
    fontFamily:"monospace",
    color: "#2de4e1ff",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#3a363bf5",
    borderRadius:12,
    textAlign:"center"
  },
  cardEstilo: {
    width: "90%",
    padding: 10,
    backgroundColor: "#3a363bf5", 
    borderRadius: 20,
    borderColor:"#c109eff5",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#14edbaff",
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  cardText: { 
    color: "#fff", 
    fontSize: 20, 
    fontWeight: "bold",
    fontFamily:"sans-serif-condensed" 

  },
  cardPressable: {
    opacity: 0.8, 
  }
});


