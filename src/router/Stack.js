import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "../screen/Home/DashBoard";
import Category from "../screen/Category/Category";
import Product from "../screen/Product/Product";


const MainStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={DashBoard} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}

export default Stack = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}