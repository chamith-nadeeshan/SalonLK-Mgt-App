import React from 'react'
import { Image } from 'react-native'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function ViewCustomer({route, navigation}) {
    const{item} = route.params
    const Delete = () => {
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
        <View style={{backgroundColor: 'white', height: '100%'}} >
            <View>
                <Image style={Styles.profilePic} source={require('../assets/images/profil.jpg')} />
            </View>
            <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: '700', marginTop: 10}} >{item.fullName}</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}} >
                <TouchableOpacity style={Styles.editBox} onPress={() =>{navigation.navigate('Edit Customer', {item})}} >
                    <Image style={{width: 13, height: 13}} source={require('../assets/icons/editIcon.png')} />
                    <Text style={{color: 'white', fontWeight: '500'}} >Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.DeleteBox} onPress={Delete}>
                    <Text style={{color: 'white', fontWeight: '500'}} >Delete</Text>
                </TouchableOpacity>
            </View> 
            <View style={{marginHorizontal: 15, marginTop: 25}} >
                <Text style={Styles.details} >Mobile no - {item.mobileNo}</Text>
                <Text style={Styles.details}>Email - {item.email}</Text>
                <Text style={Styles.details}>Gender - {item.gender}</Text>
                <Text style={Styles.details}>City - {item.city}</Text>
                <Text style={Styles.details}>Age Range - {item.ageRange}</Text>
                <Text style={Styles.details}>Registered date - {item.registerDate}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    profilePic: {
        width: 140,
        height: 140,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 25
    },

    editBox:{
        marginRight: 10,
        width: 100,
        height: 40,
        backgroundColor: '#418789',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    DeleteBox:{
        width: 100,
        height: 40,
        backgroundColor: '#ED5151',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',

        marginTop: 10,
    },

    details:{
        fontSize: 20,
        marginBottom: 5
    }
})