import React, { useState } from "react";
import { Alert } from "react-native";
import { Button, TextInput, View } from "react-native";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

// Importe les fonctions choisirPhoto et obtenirPosition créées précédemment

const FormAjoutAnnonce = () => {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState(null);
    const [position, setPosition] = useState(null);

    // Fonctions pour gérer les évènements du formulaire ici

    // Exemple de fonction pour sélectionner une photo
    const choisirPhoto = async () => {
        let resultat = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        setPhoto(resultat.assets[0].uri);
        console.log(resultat.assets[0].uri);
    };

    // Exemple de fonction pour obtenir la géolocalisation
    const obtenirPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.error("Permission de localisation refusée");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setPosition(location);
    };

    // Fonction pour gérer la sélection d'une photo

    const soumettreAnnonce = async () => {
        // Assure-toi que les données nécessaires sont disponibles
        if (!titre || !description || !photo || !position) {
            Alert.alert("Erreur", "Tous les champs sont requis");
            return;
        }

        // Prépare les données pour l'envoi
        const formData = new FormData();
        formData.append("titre", titre);
        formData.append("description", description);
        formData.append("photo", photo);

        const latitude = position.coords.latitude.toString();
        const longitude = position.coords.longitude.toString();

        formData.append("latitude", latitude);
        formData.append("longitude", longitude);

        try {
            console.log(formData);
            // Remplace 'http://exemple.com/annonces' par l'URL de ton API
            const response = await fetch("http://10.0.2.2:3000/annonces/create", {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const json = await response.json();

            if (response.ok) {
                Alert.alert("Succès", "Annonce ajoutée avec succès");
                // Réinitialisation des états ou navigation vers un autre écran ici
            } else {
                Alert.alert(
                    "Erreur",
                    json.message || "Quelque chose s'est mal passé"
                );
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Erreur", "Impossible de soumettre l'annonce");
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Titre de l'annonce"
                value={titre}
                onChangeText={setTitre}
            />
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <Button
                title="Choisir une photo"
                onPress={() => {
                    choisirPhoto();
                }}
            />
            <Button
                title="Utiliser ma position"
                onPress={() => {
                    obtenirPosition();
                }}
            />

            <Button
                title="Ajouter l'annonce"
                onPress={() => {
                    soumettreAnnonce();
                }}
            />
        </View>
    );
};

export default FormAjoutAnnonce;
