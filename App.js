import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet,  View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import CardExample from "./CardExample";
import Home from "./Home";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
      <Stack.Navigator
          //initialRouteName="Home"
      >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home Page' }}
        />

      </Stack.Navigator>
  );
}



function CardStack() {
    return (
        <Stack.Navigator
            //initialRouteName="Home"
        >
            <Stack.Screen
                name="Card"
                component={CardExample}
              options={{ title: 'Card Page' }}
            />

        </Stack.Navigator>
    );
}




export default class App extends Component {


  render() {

    return     <NavigationContainer>

      <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#50e3c2',
          }}>
        <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
        />
        <Tab.Screen
            name="Card"
            component={CardStack}
            options={{
              tabBarLabel: 'Card',
              tabBarIcon: ({ color, size }) => (

                  <AntDesign name="user"  size={size}color={color}/>

              ),
            }}
        />


      </Tab.Navigator>
    </NavigationContainer>;
  }
}
