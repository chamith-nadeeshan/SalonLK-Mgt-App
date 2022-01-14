import React from 'react'
import {Text, View, Button, Alert} from 'react-native'
import { Input } from 'react-native-elements';

function DeleteTreatmentType({route, navigation}) {
    const{item} = route.params
    const onSubmit = () => {
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment_type/delete/${item.treatmentTypeId}`)
        .then((response) => response.json()) 

        Alert.alert("Successfull", "Deleted succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatment Type'),
            style: 'cancel',
        }
        ]
        )
    };
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <Input placeholder={item.treatmentTypeName} />
            <Button title="Delete" onPress={onSubmit} />
        </View>
    )
}

export default DeleteTreatmentType
