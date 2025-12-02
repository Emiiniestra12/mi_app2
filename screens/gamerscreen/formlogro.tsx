import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, ImageBackground, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { appTheme } from '../../diseñopredefinido';
import { BtnTouch } from '../../boton';
import { useLogroForm } from '../../hooks/useLogroForm';
import { StackScreenProps } from '@react-navigation/stack';
import { State, Switch } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navegador/gamer_navegador';


interface Props extends StackScreenProps<RootStackParams, 'LogroScreen'> {}

export const LogroScreen = ({ navigation, route }: Props) => {
  const { state, handleSubmit, handleInputChange, handleDelete } = useLogroForm();

  useEffect(() => {
    if (!route.params) return;
    const logro = route.params;
    handleInputChange("id_logro", logro.id_logro);
    handleInputChange("id_gamer", logro.id_gamer);
    handleInputChange("titulo", logro.titulo);
    handleInputChange("descripcion", logro.descripcion);
    handleInputChange("dificultad", logro.dificultad);
    handleInputChange("fecha_obtenida", logro.fecha_obtenida);
  }, [route.params]);


  return (
    <ImageBackground
      source={require("../../assets/logrofondo2.jpg")} 
      style={styles.fondo}
      imageStyle={{ resizeMode: "cover" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...appTheme.title, fontSize: 26, fontFamily: "fantasy", marginTop: 30, color:"white"}}>
            REGISTRO DE LOGROS DEL GAMER
          </Text>

          <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>ID GAMER</Text>
                      <TextInput
                        style={appTheme.textInput}
                        placeholder='Pon el id del gamer '
                        placeholderTextColor="#d4dbe3ff"
                        value={state.id_gamer.toString()}
                        onChangeText={(v) => handleInputChange("id_gamer",Number (v))}
                      />
          
            
            

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>TITULO</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='TITULO'
              placeholderTextColor="#d4dbe3ff"
              value={state.titulo}
              onChangeText={(v) => handleInputChange("titulo", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>Descripcion</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Descripcion de logro '
              placeholderTextColor="#d4dbe3ff"
              value={state.descripcion}
              onChangeText={(v) => handleInputChange("descripcion", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>DIFICULTAD</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='dificultad'
              placeholderTextColor="#d4dbe3ff"
              value={state.dificultad}
              onChangeText={(v) => handleInputChange("dificultad", v)}
            />
            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>FECHA OBTENIDA DEL LOGRO</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Fecha obtenida del logro'
              placeholderTextColor="#d4dbe3ff"
              value={state.fecha_obtenida}
              onChangeText={(v) => handleInputChange("fecha_obtenida", v)}
            />
            
            
            

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
              <BtnTouch
                titulo='Eliminar'
                color='#620808ff'
                action={() => {
                        handleDelete();
                        navigation.popToTop();
                    }}
              />
              <BtnTouch
                titulo='Guardar'
                color='#089c12ff'
                action={ async () => {
                        await handleSubmit();
                        navigation.navigate("LogroScreen");
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
