// Ce composant affiche la liste des annonces récupérées depuis une API.
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Pressable, Text } from "@gluestack-ui/themed";

const Annonces = () => {
    const [annonces, setAnnonces] = useState([]);

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
                    onPress={() => console.log(annonce._id)}
                    p="$5"
                    bg="$primary500"
                    $hover-bg="$primary400"
                >
                    <Text key={annonce._id} color="white">
                        {annonce.titre}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

export default Annonces;
