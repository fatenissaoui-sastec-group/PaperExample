import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {  name as appName } from './app.json';
import Navigation from "./Navigation";


export default function Main() {
    return (
        <PaperProvider>
           <Navigation/>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
