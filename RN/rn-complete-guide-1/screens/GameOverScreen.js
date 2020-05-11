import React from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
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
                <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:10
    },

    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },

    image: {
        width: '100%',
        height: '100%',
    },

    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },

    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },

    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;