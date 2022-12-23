import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../screens/Welcome'
import SigIn from '../screens/Signin'
import HomeScreen from '../screens/Home'

import { NavigationStackProps } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<NavigationStackProps>();


export default function Stack () {

    return (
        <Navigator initialRouteName="Welcome">
            <Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
            <Screen name="Sigin" component={SigIn} options={{headerShown: false}} />
            <Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        </Navigator>
    )
}

