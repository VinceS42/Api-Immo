import { StyleSheet } from "react-native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Annonces from "./components/Annonces";

const Stack = createStackNavigator();

export default function App() {
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Annonce" component={Annonces} />                   
                </Stack.Navigator>
            </NavigationContainer>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
