
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { appTheme } from '../diseñopredefinido';

interface Props{
    title: string;
    navigate: () => void;
}

const BtnDrawer = ( { title, navigate }: Props ) => {
    return(
        <TouchableOpacity
            onPress={ navigate }
        >
            <View
                style={appTheme.menuBtn}
            >
                <Text
                    style={appTheme.textBtn}
                >
                    { title }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export const DrawerMenu = ( { navigation }:DrawerContentComponentProps ) => {
            return(
                <DrawerContentScrollView>
                <View
                    style={appTheme.menuContainer}
                >
                    <BtnDrawer
                        title='PARTIDAS GANADAS'
                        navigate={ () => navigation.navigate("PartidasGanadas") }
                    />
                    <BtnDrawer
                        title='LISTA DE GAMERS'
                        navigate={ () => navigation.navigate("ListaGamers") }
                    />
                    <BtnDrawer
                        title='GAMERS ACTIVOS'
                        navigate={ () => navigation.navigate("GamerActivo") }
                    />
                    <BtnDrawer
                        title='PARTIDAS JUGADAS POR  JUGADOR'
                        navigate={ () => navigation.navigate("PartidasScreen2") }
                    />
                    </View>
        </DrawerContentScrollView>
    );
}
