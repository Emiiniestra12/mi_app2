import { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { DrawerMenu } from "../componentes/drawrmenu";
import { GamerScreen } from "../screens/gamerscreen/formgamer";
import { PartidaScreen } from "../screens/gamerscreen/formpartida";
import { LogroScreen } from "../screens/gamerscreen/formlogro";
import { GamerNavigator } from "./gamer_navegador";
import { GamerAcivos } from "../screens/gamerscreen/consultasGamersscreen";
import { ListaGamers } from "../screens/gamerscreen/listaGamers";
import { PartidasGanadas } from "../screens/gamerscreen/partidasganadasscreen";
import { PartidasScreen2 } from "../screens/gamerscreen/partidasJugadasScreen";


export type RootDrawerNavigator = {
    GamerNavigator:         undefined;
    ListaGamers: undefined;
    GamerActivos: undefined;
    PartidasGanadas: undefined;
    PartidasScreen2: undefined;


}

const Navigator = () => {

    const Drawer = createDrawerNavigator<RootDrawerNavigator>();
    const { width } = useWindowDimensions();

    return( 
        <Drawer.Navigator
            initialRouteName="GamerNavigator"
            screenOptions={{
                headerShown: true,
                drawerType: width >= 768 ? "permanent" : "front",
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: "rgba(255,72,208,0.3)",
                    width: width * 0.7
                }
            }}
            drawerContent={ (props) => <DrawerMenu {...props}/> }
        >
            <Drawer.Screen
            name="GamerNavigator"
            component={GamerNavigator}
            />
            <Drawer.Screen
                name="ListaGamers"
                component={ListaGamers}
            />
            <Drawer.Screen
                name="GamerActivos"
                component={GamerAcivos}
            />
            <Drawer.Screen
                name="PartidasGanadas"
                component={PartidasGanadas}
            />
            <Drawer.Screen
                name="PartidasScreen2"
                component={PartidasScreen2}
            />
            
        </Drawer.Navigator>
    );
}

export const DrawerNavigator = () => {
    //const { authState } = useContext( AuthContext );
    return <Navigator/>;
    //return ( authState.isLoggedIn ) ? <Navigator/> : <LoginScreen/>;
}