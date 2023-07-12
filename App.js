import React from 'react';
import { NavigationContainer } from "@react-navigation/native";


import MainStackNavigator from './src/navigation/StackNavigation';
import StackNavigation from './src/navigation/StackNavigation';

const App=()=>{
  return (
    
    <NavigationContainer>
      <StackNavigation/>
     </NavigationContainer>
  )
}

export default App;