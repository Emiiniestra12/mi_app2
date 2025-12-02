import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { appTheme } from '../diseñopredefinido';
import QRCode from 'react-native-qrcode-svg';
import { BtnTouch } from '../boton';

export const QrScreen = () => {
    const [link, setLink]= useState('');
    const [qrValue, setQrValue]=useState('');


    const generarqr = ()=>{
        setQrValue(link)
    };

    return (
        <View style={appTheme.marginGlobal}>
            <View>
                <TextInput style={appTheme.textInput}
                placeholder='Pon tu link'
                placeholderTextColor="black"
                value={link}
                onChangeText={setLink}
                />
            </View>
            
            <View>
                <BtnTouch 
                titulo='Generar Qr'
                color='Blue'
                action={generarqr}/>
            </View>
            <View>
                <Text  style={appTheme.title}>
                    QR GENERADO
                </Text>
                <QRCode
                    size={200}
                    value={qrValue}
                    />
            </View>

        </View>
    )

}