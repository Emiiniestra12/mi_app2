import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { QrScreen } from './screens/qrscreen';
import { GamerNavigator } from './navegador/gamer_navegador';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GamerAcivos } from './screens/gamerscreen/consultasGamersscreen';
import { PartidasScreen2 } from './screens/gamerscreen/partidasJugadasScreen';
import { PartidasGanadas } from './screens/gamerscreen/partidasganadasscreen';
import { ListaGamers } from './screens/gamerscreen/listaGamers';
import { DrawerNavigator } from './navegador/drawernavigator';
import { LogroDificultad } from './screens/gamerscreen/logorsdificulltad';
import { PartidasPorJuegoScreen } from './screens/gamerscreen/partidasporjuego';
import { GamersPorPais } from './screens/gamerscreen/gamerspais';

const App = () => {
    return (
     <GestureHandlerRootView style={{ flex: 1 }}>     
     <NavigationContainer>
      <GamerNavigator/>
    </NavigationContainer>
    </GestureHandlerRootView> 

        
    );
}

export default App;
