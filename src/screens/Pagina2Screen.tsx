import React, { useEffect } from "react"
import { Button, Text, View } from "react-native"
import { CommonActions, useNavigation } from "@react-navigation/core"
import { styles } from "../themes/appTheme"
import {StackNavigationOptions} from '@react-navigation/stack';

export const Pagina2Screen = () =>{
    const navigator = useNavigation();

    const options: StackNavigationOptions = {
        title:'Hola Mundo',
        headerBackTitle:'Atras'
    }

    useEffect(() => {
      navigator.setOptions(options)
    }, []);
    
    return(
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 2 Screen</Text>
            <Button 
               title="Ir a página 3" 
               onPress={()=>navigator.dispatch(CommonActions.navigate('Pagina3Screen'))}
        />
        </View>
    )
}