import React from 'react';
import { Button, Text, View } from "react-native"
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any , any>{}

export const Pagina3Screen = ({navigation}:Props) =>{
    return(
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 3 Screen</Text>
            <Button title="Ir a página 2" onPress={()=>navigation.pop()}/>
            <Button title="Ir a página 1" onPress={()=>navigation.popToTop()}/>
        </View>
    )
}