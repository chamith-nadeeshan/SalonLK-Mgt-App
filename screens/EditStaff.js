import React, {Component, useState} from 'react'
import { Text, View, Button, Alert } from 'react-native'
import { Input } from 'react-native-elements';

export default function EditStaff({navigation}) {
    const [form, setForm] = useState({}); 

    const onSubmit = () => {
        console.log('form', form)
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/staff/update/12', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fullName": form.fullName,
                "nic": form.nic,
                "staff_type": 1,
                "salonId": 12
          })
        });

        Alert.alert("Successfull", "Edited succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Staff'),
            style: 'cancel',
        }
        ])
    };

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };
    
    return (
        <View style={{backgroundColor: 'white', height: '100%'}} >
            <Input placeholder="Full name" onChangeText={(value) => {
                    onChangeText({name:'fullName', value: value});
                 }}  />
            <Input placeholder="NIC" onChangeText={(value) => {
                    onChangeText({name:'nic', value: value});
                 }} />
            <Button title="submit" onPress={onSubmit} />
            
        </View>
        
    )
}

