import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./src/navigator/stackNavigation";
import { MenuLateralBasico } from './src/navigator/menuLateralBasico';

const App = () =>{
  return(
    <NavigationContainer>
      {/* <StackNavigation/> */}
      <MenuLateralBasico/>
    </NavigationContainer>
  )
}

export default App;
