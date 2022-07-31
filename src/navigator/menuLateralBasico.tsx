import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, useWindowDimensions, View } from "react-native";
import { StackNavigation } from "./stackNavigation";


function NotificationsScreen({ navigation }:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }


export const MenuLateralBasico = () =>{
    const Drawer = createDrawerNavigator();
    const {width} =useWindowDimensions();
    return (
    <Drawer.Navigator
    screenOptions={{
        drawerType:width >= 768 ? 'permanent' : 'front'
      }}
    >
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Drawer.Navigator>
    )
}