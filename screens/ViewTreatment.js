import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

function ViewTreatment({route, navigation}) {
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
        <SafeAreaView>
            <View style={Styles.box} />
            <View style={{alignSelf: 'center', marginTop: 10, alignItems: 'center'}} >
                <Text style={Styles.name}>{item.treatmentName}</Text>
                <Text>Treatment Type - {item.treatmentTypeName}</Text>
                <Text>Description -{item.description}</Text>
                <Text>Price - {item.price}</Text>
                <Text>Cost - {item.cost}</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}} >
                <TouchableOpacity onPress={() =>{navigation.navigate('Edit Treatment', {item})}} >
                    <View style={{width: 100, height: 40, backgroundColor: '#418789', marginRight: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{color: 'white'}}>Edit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Delete} >
                    <View style={{width: 100, height: 40, backgroundColor: '#ED5151', borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{color: 'white'}}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ViewTreatment

const Styles = StyleSheet.create({
    box:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    name:{
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '600',
    }
})