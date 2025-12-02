import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, ImageBackground, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { appTheme } from '../../diseñopredefinido';
import { BtnTouch } from '../../boton';
import { usePartidaForm } from '../../hooks/usePartidaForm';
import { StackScreenProps } from '@react-navigation/stack';
import { State, Switch } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navegador/gamer_navegador';


interface Props extends StackScreenProps<RootStackParams, 'PartidaScreen'> {}

export const PartidaScreen = ({ navigation, route }: Props) => {
  const { state, handleSubmit, handleInputChange, handleDelete } = usePartidaForm();

  useEffect(() => {
    if (!route.params) return;
    const partida = route.params;
    handleInputChange("id_partida", partida.id_partida);
    handleInputChange("id_gamer", partida.id_gamer);
    handleInputChange("juego", partida.juego);
    handleInputChange("fecha_partida", partida.fecha_partida);
    handleInputChange("horas_duracion", partida.horas_duracion);
    handleInputChange("resultado", partida.resultado);
    handleInputChange("puntos", partida.puntos);
  }, [route.params]);


  return (
    <ImageBackground
      source={require("../../assets/partidafondo.jpg")} 
      style={styles.fondo}
      imageStyle={{ resizeMode: "cover" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>

          <Text style={{ ...appTheme.title, fontSize: 26, fontFamily: "fantasy", marginTop: 30, color:"white"}}>
            REGISTRO PARTIDA
          </Text>

          <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>ID GAMER</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Pon el id del gamer '
              placeholderTextColor="#d4dbe3ff"
              value={state.id_gamer.toString()}
              onChangeText={(v) => handleInputChange("id_gamer",Number (v))}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>JUEGO</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Nombre del juego'
              placeholderTextColor="#d4dbe3ff"
              value={state.juego}
              onChangeText={(v) => handleInputChange("juego", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>FECHA DE LA PARTIDA</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Fecha de la partida '
              placeholderTextColor="#d4dbe3ff"
              value={state.fecha_partida}
              onChangeText={(v) => handleInputChange("fecha_partida", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>HORAS DE DURACON</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Horas de duracion'
              placeholderTextColor="#d4dbe3ff"
              value={state.horas_duracion.toString()}
              onChangeText={(v) => handleInputChange("horas_duracion",Number (v))}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>RESULTADOS</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Resultados '
              placeholderTextColor="#d4dbe3ff"
              value={state.resultado}
              onChangeText={(v) => handleInputChange("resultado", v)}
            />
            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>PUNTOS</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Puntos obtenidos '
              placeholderTextColor="#d4dbe3ff"
              value={state.puntos.toString()}
              onChangeText={(v) => handleInputChange("puntos",Number (v))}
            />
            
            

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <BtnTouch
                titulo='Eliminar'
                color='#620808ff'
                action={async() => {
                        await handleDelete();
                        navigation.popToTop();
                    }}
              />
              <BtnTouch
                titulo='Guardar'
                color='#089c12ff'
                action={  () => {
                         handleSubmit();
                        navigation.navigate("PartidaScreen");
                    }}
              />
              <BtnTouch
                titulo='Regresar'
                color='gray'
                 action={ () => navigation.navigate("GamerScreen") }
                />
            </View>
          </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
