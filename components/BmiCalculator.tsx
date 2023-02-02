import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [bmiResult, setBmiResult] = useState('');

    const calculateBmi = () => {
        const bmi = parseInt(weight) / (parseInt(height) * parseInt(height)) * 10000      
        setBmi(bmi.toFixed(1))

        if (bmi < 18.5) {
            setBmiResult("You're underweight")
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            setBmiResult("You're normalweight")
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            setBmiResult("You're overweight")
        }
        else if (bmi >= 30) {
            setBmiResult("You're obese")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>BMI Calculator</Text>
            </View>
            <TextInput 
                style={styles.input}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                placeholder= "Weight in kg"
                keyboardType= 'numeric'
            />
            <TextInput 
                style={styles.input}
                value={height}
                onChangeText={(text) => setHeight(text)}
                placeholder= "height in cm"
                keyboardType= 'numeric'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={calculateBmi}
            >
                <Text style={styles.buttonText}>Calculate BMI</Text>
            </TouchableOpacity>
            <View style={styles.resultView}>
                <Text style={styles.result}>{bmi}</Text>
                <Text style={styles.result}>{bmiResult}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#e0ecde'
    },
    title: {
        backgroundColor: '#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        height: 55,
        margin: 15,
        borderWidth: 1/2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#cde0c9',
        fontSize: 18
    },
    button: {
        height: 55,
        margin: 15, 
        borderWidth: 1/2,
        borderRadius: 5,
        backgroundColor: '#68b2a0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    resultView: {
        margin: 15,
    },
    result: {
        fontSize: 30,
        color: '#2c6975',
        fontWeight: 'bold'
    }
});

export default BmiCalculator;