import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DiasTrabajadosScreen } from "../screens/empleadosscreen/diastrabajadosscreen";
import { EmpleadosScreen } from "../screens/empleadosscreen/empleadosScreen";
import { NominaScreen } from "../screens/empleadosscreen/nominascreen";
import { ReporteAsistencia } from "../screens/empleadosscreen/reporteasistenciascreen";
import { ReporteProduccion } from "../screens/empleadosscreen/reporteproduccionscreen";
import { TotalAsistenciaScreen } from "../screens/empleadosscreen/totalasistenciasscreen";
import { MenuEmpleadosScreen } from "../screens/empleadosscreen/menuempleadosscreen";

export type RootStackParams = {
    DiasTrabajadosScreen: undefined;
    EmpleadosScreen: undefined;
    NominaScreen:undefined;
    ReporteAsistencia:undefined;
    ReporteProduccion:undefined;
    TotalAsistenciaScreen:undefined;
    MenuEmpleadosScreen:undefined
    
};

export const EmpleadoNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
            initialRouteName="MenuEmpleadosScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="MenuEmpleadosScreen" component={MenuEmpleadosScreen} />
            <Stack.Screen name="DiasTrabajadosScreen" component={DiasTrabajadosScreen} />
            <Stack.Screen name="EmpleadosScreen" component={EmpleadosScreen} />
            <Stack.Screen name="ReporteAsistencia" component={ReporteAsistencia} />
            <Stack.Screen name="ReporteProduccion" component={ReporteProduccion} />
            <Stack.Screen name="NominaScreen" component={NominaScreen} />
            <Stack.Screen name="TotalAsistenciaScreen" component={TotalAsistenciaScreen} />
        </Stack.Navigator>
    );
};