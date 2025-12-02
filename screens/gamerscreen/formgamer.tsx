import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, ImageBackground, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { appTheme } from '../../diseñopredefinido';
import { BtnTouch } from '../../boton';
import { useGamerForm } from '../../hooks/useGamerForm';
import { StackScreenProps } from '@react-navigation/stack';
import { State, Switch } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navegador/gamer_navegador';


interface Props extends StackScreenProps<RootStackParams, 'GamerScreen'> {}

export const GamerScreen = ({ navigation, route }: Props) => {
  const { state, handleSubmit, handleInputChange, handleDelete } = useGamerForm();

  useEffect(() => {
    if (!route.params) return;
    const gamer = route.params;
    handleInputChange("id_gamer", gamer.id_gamer);
    handleInputChange("nickname", gamer.nickname);
    handleInputChange("nivel", gamer.nivel);
    handleInputChange("pais", gamer.pais);
    handleInputChange("fecha_registro", gamer.fecha_registro);
    handleInputChange("activo", gamer.activo);
  }, [route.params]);


  return (
    <ImageBackground
      source={require("../../assets/fondoregistro2.jpg")} 
      style={styles.fondo}
      imageStyle={{ resizeMode: "cover" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...appTheme.title, fontSize: 26, fontFamily: "fantasy", marginTop: 30, color:"white"}}>
            REGISTRO GAMER
          </Text>

          <View style={{ flex: 1 }}>
            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 20 }}>NICKNAME</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='NICKNAME'
              placeholderTextColor="#d4dbe3ff"
              value={state.nickname}
              onChangeText={(v) => handleInputChange("nickname", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>NIVEL</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Nivel del jugador'
              placeholderTextColor="#d4dbe3ff"
              value={state.nivel}
              onChangeText={(v) => handleInputChange("nivel", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>PAIS DEL JUGADOR</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Pais del jugador '
              placeholderTextColor="#d4dbe3ff"
              value={state.pais}
              onChangeText={(v) => handleInputChange("pais", v)}
            />

            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>FECHA DE REGISTRO</Text>
            <TextInput
              style={appTheme.textInput}
              placeholder='Fecha de registro del jugador'
              placeholderTextColor="#d4dbe3ff"
              value={state.fecha_registro}
              onChangeText={(v) => handleInputChange("fecha_registro", v)}
            />
            
            <Text style={{ ...appTheme.title, fontSize: 18, marginTop: 10 }}>JUGADOR ACTIVO</Text>
            <Switch
            value={state.activo}
            onValueChange={(v)=>handleInputChange("activo",v)}

            />
            

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
               <BtnTouch
                titulo='Inicio'
                color='#9a1b9aff'
                 action={ () => navigation.navigate("MenuScreen",) }
                />
              
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
                action={async  () => {
                         await handleSubmit();
                        navigation.navigate("GamerScreen");
                    }}
              />
            </View>
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}> 
              <BtnTouch
                titulo='Logros'
                color='gray'
                 action={ () => navigation.navigate("LogroScreen",) }
                />
                <BtnTouch
                titulo='Partidas'
                color='#1a798eff'
                 action={ () => navigation.navigate("PartidaScreen",) }
                />
             </View>

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
