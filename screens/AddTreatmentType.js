
import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Alert } from 'react-native'
import { Input } from 'react-native-elements';


export default function AddTreatmentType({navigation}) {
    const [form, setForm] = useState({}); 

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    }

    const onSubmit = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment_type/store', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "treatmentTypeName": form.treatmentTypeName,
                "salonId": 12,
                "colorCode": form.colorCode
          })
        });

        Alert.alert("Successfull", "Registration succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatment Type'),
            style: 'cancel',
        }
        ]
        )
    };
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            
            <ScrollView style={{margin: 15}}>
                <Input style={styles.input} onChangeText={(value)=> {
                        onChangeText({name:'treatmentTypeName', value: value})
                    }} 
                    placeholder= 'Treatment Type Name' />

                <Input style={styles.input} onChangeText={(value)=> {
                        onChangeText({name:'colorCode', value: value})
                    }} 
                    placeholder= 'Color Code' />

                <Button  onPress={onSubmit} title="Save" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 360,
        height: 60,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.2,
    }
})