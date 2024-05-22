import { StyleSheet } from "react-native";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";

import Annonces from "./components/Annonces";
import DetailAnnonceScreen from "./components/DetailAnnonceScreen";
import FormAjoutAnnonce from "./components/Form/FormAjoutAnnonce";

const Stack = createStackNavigator();

export default function App() {
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Annonce" component={Annonces} />
                    <Stack.Screen
                        name="DetailAnnonce"
                        component={DetailAnnonceScreen}
                    />
                    <Stack.Screen
                        name="FormAjoutAnnonce"
                        component={FormAjoutAnnonce}
                    />
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
