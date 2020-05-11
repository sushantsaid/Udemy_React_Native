import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    //Dimensions API
    Dimensions, //object (not component)
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);


    useEffect(() => {
        //change layout if there is orientation change
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }

        //Register the upDateLayout function to event listener
        Dimensions.addEventListener("change", updateLayout);
        return () => {
            //remove the event listener
            Dimensions.removeEventListener("change", updateLayout);
        }
    });

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
        //replace something which is not a number with empty string
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert
            Alert.alert(
                "Invalid number!",
                "Number has to be between 1 and 99",
                [{ text: "Okay", style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)} >
                    START GAME
                </MainButton>
            </Card>);
    }

    return (
        //use scrollview so that we can scroll if device orientation is "landscape"
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start A Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a number</BodyText>
                            <Input
                                style={styles.input}
                                //below are the attributes of buil-in TextInput component
                                //these are sent as props to the Input component defined by us
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{ width: buttonWidth }}>
                                    <Button
                                        title="Reset"
                                        color={Colors.primary}
                                        onPress={resetInputHandler} />
                                </View>
                                <View style={{ width: buttonWidth }}>
                                    <Button
                                        title="Confirm"
                                        color={Colors.accent}
                                        onPress={confirmInputHandler} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );

}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
    },

    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },

    // button: {
    //     width: Dimensions.get('window').width / 4
    // },

    input: {
        width: 50,
        textAlign: 'center'
    },

    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },

});

export default StartGameScreen;