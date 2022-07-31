import React from "react"
import { Button, Text, TouchableOpacity, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../themes/appTheme";

interface Props extends StackScreenProps<any , any>{}
export const Pagina1Screen = ({navigation}:Props) =>{    
    return(
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1 Screen</Text>
            <View
            >
            <Button title="Ir a página 2" onPress={()=>navigation.navigate('Pagina2Screen')}/>
            <Button title="Ir a persona" onPress={()=>navigation.navigate('PersonaScreen')}/>
            </View>
            
            <Text style={styles.title}>Navegar con Argumentos</Text>
            <View style={{flexDirection:"row", justifyContent:"space-evenly" , marginVertical:15 , marginHorizontal:10}}>
            <TouchableOpacity
             style={styles.button}
             onPress={()=>navigation.navigate('PersonaScreen',{
                id:1,
                nombre:'pedro'
             })}
            >
                <Text style={styles.buttonText}>Pedro</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
             onPress={()=>navigation.navigate('PersonaScreen',{
                id:2,
                nombre:'maria'
             })}
            >
                <Text style={styles.buttonText}>Maria</Text>
            </TouchableOpacity>

            </View>
        </View>
    )
}