import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, Alert } from 'react-native'
import { Input } from 'react-native-elements';

export default function EditCustomers({route, navigation}) {
    const{item} = route.params
    const [form, setForm] = useState({}); 

    const onSubmit = () => {
        console.log('form', form)
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/customer/update/${item.customerId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mobileNo": "01719364099",
                "fullName": form.name,
                "gender": form.gender,
                "city": form.city,
                "ageRange": form.ageRange,
                "email": form.email,
                "salonId": 12
          })
        });

        Alert.alert("Successfull", "Edited succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Customers'),
            style: 'cancel',
        }
        ]
        )
    };

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };
    return (
        <View style={{height: '100%', backgroundColor: 'white', paddingTop: 25}} >
            <Input style={Style.Boxes} placeholder={item.fullName} onChangeText={(value) => {
                    onChangeText({name:'name', value: value});
                 }} />
            <Input style={Style.Boxes} placeholder={item.city} onChangeText={(value) => {
                    onChangeText({name:'city', value: value});
                 }} />
             <Input style={Style.Boxes} placeholder={item.email} onChangeText={(value) => {
                    onChangeText({name:'email', value: value});
                 }}/>
            <Input style={Style.Boxes} placeholder={item.ageRange} onChangeText={(value) => {
                    onChangeText({name:'ageRange', value: value});
                 }}/>
            <Input style={Style.Boxes} placeholder={item.gender} onChangeText={(value) => {
                    onChangeText({name:'gender', value: value});
                 }}/>
        
            
            <Button title="Submit" onPress={onSubmit}  />
        </View>
    )
}

const Style = StyleSheet.create({
    Boxes: {
        
    }
})
