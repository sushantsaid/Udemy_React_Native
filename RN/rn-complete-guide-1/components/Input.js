import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return (
        <TextInput
            {...props} //take all the props from parent and apply it here
            style={{ ...styles.input, ...props.style }} //take all the styles from props and merge it with styles defined here
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;