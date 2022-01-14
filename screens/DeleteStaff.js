import React from 'react'
import { View, Text, Alert, Button } from 'react-native'

function DeleteStaff({navigation, route}) {
    const{item} = route.params
    const Delete = () => {
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/staff/delete/${item.staffId}`)
        .then((response) => response.json()) 

        Alert.alert("Successfull", "Deleted succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Staff'),
            style: 'cancel',
        }
        ]
        )
    };
    return (
        <View style={{backgroundColor: 'white', height: '100%', paddingHorizontal: 15}} >
            <View style={{alignSelf: 'center', alignItems: 'center', marginTop: 25}} >
                <Text style={{fontWeight: '600'}} >{item.fullName}</Text>
                <Text>{item.nic}</Text>
                <Text>{item.typeName}</Text>
                <Button title="Delete" onPress={Delete} />
            </View>
        </View>
    )
}

export default DeleteStaff

