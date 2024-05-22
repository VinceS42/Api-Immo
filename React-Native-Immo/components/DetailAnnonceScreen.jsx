import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const DetailAnnonceScreen = ({ route }) => {
    const { annonceId } = route.params; // Récupère l'ID de l'annonce à partir des paramètres de navigation
    const [annonce, setAnnonce] = useState(null);

    useEffect(() => {
        // Récupère les détails de l'annonce depuis l'API
        const fetchAnnonceDetails = async () => {
            try {
                // Remplace 'http://exemple.com/annonces' par l'URL de ton API
                const response = await fetch(
                    `http://10.0.2.2:3000/annonces/${annonceId}`
                );
                const data = await response.json();
                if (response.ok) {
                    setAnnonce(data);
                } else {
                    // Gère le cas où la requête n'a pas réussi
                    console.log(
                        "Erreur lors de la récupération des détails de l'annonce"
                    );
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAnnonceDetails();
    }, [annonceId]);

    if (!annonce) {
        // Affiche un message de chargement tant que les données ne sont pas prêtes
        return <Text>Chargement...</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            {/* {annonce.photo && (
        <Image source={{ uri: annonce.photo }} style={styles.image} />
      )} */}
            <Text style={styles.titre}>{annonce.titre}</Text>
            <Text style={styles.description}>{annonce.description}</Text>
            {/* Tu peux ajouter d'autres détails ici, comme la localisation, en formatant les données comme souhaité */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    titre: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
    },
});

export default DetailAnnonceScreen;
