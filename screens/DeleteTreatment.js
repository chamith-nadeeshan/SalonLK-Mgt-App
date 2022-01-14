import React from 'react'
import { Text, View, Button, Alert } from 'react-native'

function DeleteTreatment({route, navigation}) {
    const{item} = route.params
    const Delete = () => {
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment/delete/${item.treatmentId}`)
        .then((response) => response.json())
        Alert.alert("Successfull", "Deleted Succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatments'),
            style: 'cancel',
        }
        ]
        ) 
    };
    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <Text>{item.treatmentName}</Text>
            <Text>{item.price}</Text>
            <Text>{item.cost}</Text>
            <Button title="Delete" onPress={Delete} />
        </View>
    )
}
export default DeleteTreatment