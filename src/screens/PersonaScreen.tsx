import React, { useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/stackNavigation';
import { styles } from '../themes/appTheme'

// interface RouteParams {
//     id: number,
//     nombre: string
// }
interface props  extends StackScreenProps<RootStackParams , 'PersonaScreen'>{};
export const PersonaScreen = ({route , navigation}:any) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre
    })
  }, [])
  
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params , null, 2)}
      </Text>
    </View>
  )
}
