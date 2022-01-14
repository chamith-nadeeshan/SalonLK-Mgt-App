import React, { useState, useEffect } from 'react'
import { Button, TextInput, Text, SafeAreaView, StyleSheet, ScrollView, Alert} from 'react-native'
import { Input } from 'react-native-elements';


function AddTreatment({ navigation }) {
    const [form, setForm] = useState({}); 

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment/store', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "treatmentName": form.name,
                "treatmentTypeId": 2,
                "price": form.price,
                "cost": form.cost,
                "duration": form.duration,
                "description": form.description,
                "colorCode": "#f10909",
                "salonId": 12,
                "CTid": 3,
                "colorCode": form.colorCode
          })
        });
        Alert.alert("Successfull", "Registration succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatments'),
            style: 'cancel',
        }
        ]
        )
    };
    return (
        <SafeAreaView style={{backgroundColor: 'white'}} >
        <ScrollView style={{marginTop: 30}} >
            <Input onChangeText={(value) => {
                onChangeText({name:'name', value: value});
                }}  placeholder= 'Treatment Name' />

            <Input onChangeText={(value) => {
                onChangeText({name:'price', value: value});
                }}  placeholder= 'Price' />

            <Input onChangeText={(value) => {
                onChangeText({name:'cost', value: value});
                }}  placeholder= 'Cost' />

            <Input onChangeText={(value) => {
                onChangeText({name:'description', value: value});
                }}  placeholder= 'Description' />
            
            <Input onChangeText={(value) => {
                onChangeText({name:'duration', value: value});
                }}  placeholder= 'Duration' />

            <Input onChangeText={(value) => {
                onChangeText({name:'colorCode', value: value});
                }}  placeholder= 'Color Code' />
            
            <Button onPress={onSubmit} title="Save" />
            
        </ScrollView>
        </SafeAreaView>
    )
}

export default AddTreatment
