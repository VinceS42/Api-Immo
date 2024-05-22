import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

// Exemple de fonction pour sélectionner une photo
const choisirPhoto = async () => {
    let resultat = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(resultat);
};

// Exemple de fonction pour obtenir la géolocalisation
const obtenirPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        console.error("Permission de localisation refusée");
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
};

export { choisirPhoto, obtenirPosition };
