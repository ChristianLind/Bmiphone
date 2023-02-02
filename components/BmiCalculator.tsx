import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

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
            <Text>Enter you weight</Text>
            <TextInput
                style={styles.input}
                placeholder='Input your weight'
                onChangeText={(val) => setWeight(val)}
            ></TextInput>

            <Text>Enter you height</Text>
            <TextInput
                style={styles.input}
                placeholder='Input your height'
                onChangeText={(val) => setHeight(val)}
            ></TextInput>
        
            <Button  title='Calculate' onPress={calculateBmi}/>
        
            <Text>{bmi}</Text>
            <Text>{bmiResult}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 0,
        margin: 10,
        width: 200,
    },
});

export default BmiCalculator;