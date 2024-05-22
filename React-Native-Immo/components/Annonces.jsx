// Ce composant affiche la liste des annonces récupérées depuis une API.
import { Button, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "@gluestack-ui/themed";

const Annonces = () => {
    const [annonces, setAnnonces] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        // Envoie une requête GET à l'API
        fetch("http://10.0.2.2:3000/annonces")
            .then((response) => response.json())
            .then((data) => setAnnonces(data));
    }, []);

    return (
        <View>
            {annonces.map((annonce) => (
                <Pressable
                    key={annonce._id}
                    onPress={() => {
                        navigation.navigate("DetailAnnonce", {
                            annonceId: annonce._id,
                        });
                    }}
                    p="$5"
                    bg="$primary500"
                    $hover-bg="$primary400"
                >
                    <Text color="white">
                        {annonce.titre}
                    </Text>
                </Pressable>
            ))}
            <Button title="Ajouter une annonce" onPress={() => navigation.navigate('FormAjoutAnnonce')} />
        </View>
    );
};

export default Annonces;
