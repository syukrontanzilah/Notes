import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, IndexScreen, Show, Create } from '../pages'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Splash'>
            <Stack.Screen
                name='Splash'
                component={Splash} />
            <Stack.Screen
                name='Home'
                component={Home} />
            <Stack.Screen
                name='IndexScreen'
                component={IndexScreen} />
            <Stack.Screen
                name='Show'
                component={Show} />
            <Stack.Screen
                name='Create'
                component={Create} />

        </Stack.Navigator>
    )
}

export default Router;
