import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={200}
                    //Loading a local image
                    //(react native automatically understands the dimensions of the image)
                    source={require('../assets/success.png')}

                    //Loading image from internet
                    //(react native doesn't understand dimensions of image so resize it using stylesheet)
                    //source={{ uri: 'https://lh3.googleusercontent.com/proxy/zY6W12MstkMlpvTAevo7VuQHdRlG3hPMWChaVU57d-VhGrNNLKO99UBZFjGPiuGlNgt3oMdlB1Z7wrsd_H43lCwh8nxkOFynhltK' }}
                    style={styles.image}
                    resizeMode="cover" //also try resizeMode="contain" 
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed{' '}
                    <Text style={styles.highlight}>{props.roundsNumber}{' '}</Text>
                    rounds to guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },

    image: {
        width: '100%',
        height: '100%',
    },

    resultContainer: {
        marginHorizontal: 30,
        marginVertical:15
    },

    resultText: {
        textAlign: 'center',
        fontSize:20
    },

    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;