import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screen/Menu';
import GameStart from '../screen/GameStart';
import Setting from '../screen/Setting';
import Game from '../screen/Game';
import Win from '../screen/Win';


import { createDrawerNavigator, } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





// Screens are calling through Stack Navigation

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// function DrawerRoutes() {
//   return (
//     <Tab.Navigator  initialRouteName="Dashboard" >
//           <Tab.Screen name="Dashboard" component={Dashboard} options={{
//             // drawerIcon:({color})=>{
//             //   <MaterialIcons name='dashboard' color={color} size={22}/>
//             // }
//             headerShown: false
//           }} />
//           <Tab.Screen name='AddCamera' component={AddCamera} options={{headerShown: false}}/>
//           <Tab.Screen name='CAMERAS ' component={CAMERAS } options={{headerShown: false}}/>

//          </Tab.Navigator>


//   )
// }

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false, orientation: 'horizontal' }} />
      <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false, orientation: 'horizontal' }} />
      <Stack.Screen name="GameStart" component={GameStart} options={{ headerShown: false, orientation: 'horizontal' }} />
      <Stack.Screen name="Game" component={Game} options={{ headerShown: false, orientation: 'horizontal' }} />
      <Stack.Screen name="Win" component={Win} options={{ headerShown: false, orientation: 'horizontal' }} />
      {/* <Stack.Screen name="Loss" component={Loss} options={{ headerShown: false, orientation: 'horizontal' }} /> */}
      {/* <Stack.Screen name='Home' component={DrawerRoutes} options={{ headerShown: false }} /> */}


    </Stack.Navigator>

  )

}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
export default StackNavigation;