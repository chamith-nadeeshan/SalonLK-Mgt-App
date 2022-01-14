import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'

function ViewStaff({route, navigation}) {
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
        <SafeAreaView>
            <Image style={Styles.img} source={require('../assets/images/profil.jpg')}/>
            <View>
                <Text style={Styles.name} >{item.fullName}</Text>
                <Text style={{ alignSelf: "center", fontSize: 16 }} >{item.typeName}</Text>
                <Text style={{ alignSelf: "center", fontSize: 16 }} >{item.nic}</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 25}} >
                <TouchableOpacity onPress={() =>{navigation.navigate('Edit Staff', {item})}} >
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

export default ViewStaff

const Styles = StyleSheet.create({
    img:{
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 20,
    },

    name:{
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10,

    }
})