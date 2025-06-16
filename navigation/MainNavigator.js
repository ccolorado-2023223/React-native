import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDateilsScreen";

const Stack = createStackNavigator()


const MainStackNavigator = () => {
    return(
        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
            </Stack.Navigator>
        
    )
}

export default MainStackNavigator