import React from 'react'
import { View, Text, Button, Alert } from 'react-native'

export default function DeleteCutomers({route, navigation}) {
    const{item} = route.params
    const onSubmit = () => {
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/customer/delete/${item.customerId}`)
        .then((response) => response.json())
        
        Alert.alert("Successfull", "Deleted succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Customers'),
            style: 'cancel',
        }
        ]
        )
    };
    return (
        <View style={{height: '100%', backgroundColor: 'white', paddingHorizontal: 15,}} >
            <View style={{alignSelf: 'center', alignItems: 'center', marginTop: 25}} >
                <Text style={{fontSize: 18, fontWeight: '600'}} >{item.fullName}</Text>
                <Text>{item.mobileNo}</Text>
                <Text>{item.email}</Text>
                <Button title="Delete" onPress={onSubmit} />
            </View>
        </View>
    )
}

