import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableWithoutFeedback, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Obtener las dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

const twitter = <Icon name={'twitter'} size={30} color={'black'} />;
const facebook = <Icon name={'facebook'} size={30} color={'black'} />;
const instagram = <Icon name={'instagram'} size={30} color={'black'} />;
const linkedin = <Icon name={'linkedin'} size={30} color={'black'} />;
const tiktok = <Icon name={'sitemap'} size={30} color={'black'} />;

const ProfileCard = () => {
    const user = {
        avatar: "https://wallpapercave.com/uwp/uwp3658047.png",
        coverPhoto: "https://wallpapercave.com/wp/nsu3cSp.jpg",
        name: "Milton"
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://facebook.com/')}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/')}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://instagram.com/')}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://tiktok.com/')}>
                    {tiktok}
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 1,
        height: height * 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Para la sombra en Android
    },
    coverPhoto: {
        width: '100%',
        height: height * 0.35,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -height * 0.2, // Para superponer la foto de perfil sobre la foto de portada
    },
    avatar: {
        width: width * 0.3, 
        height: width * 0.3, 
        borderRadius: (width * 0.3) / 2,
        borderWidth: 10,
        borderColor: 'white',
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '70%',
        justifyContent: 'space-between',
    },
});

export default ProfileCard;
