import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GamerScreen } from "../screens/gamerscreen/formgamer";
import { PartidaScreen } from "../screens/gamerscreen/formpartida";
import { LogroScreen } from "../screens/gamerscreen/formlogro";
import { MenuScreen } from "../screens/gamerscreen/menuscreengamer";
import { GamerResponse, PartidaResponse, LogroResponse } from "../interfaze/interface";
import { GamersPorPais } from "../screens/gamerscreen/gamerspais";
import { ListaGamers } from "../screens/gamerscreen/listaGamers";
import { LogroDificultad } from "../screens/gamerscreen/logorsdificulltad";
import { PartidasGanadas } from "../screens/gamerscreen/partidasganadasscreen";
import { PartidasPorJuegoScreen } from "../screens/gamerscreen/partidasporjuego";
import { GamerAcivos } from "../screens/gamerscreen/consultasGamersscreen";


export type RootStackParams = {
    MenuScreen: undefined;
    GamerScreen: GamerResponse | undefined;
    PartidaScreen: PartidaResponse | undefined;
    LogroScreen: LogroResponse | undefined;
    GamerPorPais:undefined;
    ListaGamers:undefined;
    LogroDificultad:undefined;
    PartidasGanadas:undefined;
    PartidasPorJuegoScreen:undefined;
    GamerActivos:undefined
};

export const GamerNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
            initialRouteName="MenuScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="MenuScreen" component={MenuScreen} />
            <Stack.Screen name="GamerScreen" component={GamerScreen} />
            <Stack.Screen name="PartidaScreen" component={PartidaScreen} />
            <Stack.Screen name="LogroScreen" component={LogroScreen} />
            <Stack.Screen name="GamerPorPais" component={GamersPorPais} />
            <Stack.Screen name="ListaGamers" component={ListaGamers} />
            <Stack.Screen name="LogroDificultad" component={LogroDificultad} />
            <Stack.Screen name="PartidasGanadas" component={PartidasGanadas} />
            <Stack.Screen name="PartidasPorJuegoScreen" component={PartidasPorJuegoScreen} />
            <Stack.Screen name="GamerActivos" component={GamerAcivos} />
    
        </Stack.Navigator>
    );
};
