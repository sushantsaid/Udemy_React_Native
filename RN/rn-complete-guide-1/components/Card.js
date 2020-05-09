import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = props => {

    return (
        <View 
        style={{ ...styles.card, ...props.style }} 
        //take all the styles defined in this component 
        //and then merge it with the styles defined in parent 
        //and apply both the styles to the card
        > 
            {props.children}
        </View>
    );

}

const styles = StyleSheet.create({
    card: {
        //shadow properties only work for IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        //For Android use elevation property
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;