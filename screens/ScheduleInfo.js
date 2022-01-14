import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Image, Text, StyleSheet } from 'react-native'

function ScheduleInfo({route}) {
    const{item} = route.params
    return (
        <SafeAreaView style={{backgroundColor: '#ffffff', height: '100%', alignItems: 'center'}} >
        <Image style={Styles.image} source={require('../assets/images/profil.jpg')} />
            <Text style={Styles.name} >
                {item.fullName}
            </Text>
            <View style={Styles.details} >
                <Text>Treatment -: {item.treatmentName}</Text>
                <Text>Phone -: {item.phone}</Text>
                <Text>Treatment -: {item.treatmentName}</Text>
                <Text>Price -: {item.price}</Text>
                <Text>Date -: {item.date}</Text>
                <Text>Time -: {item.startTime}</Text>
                <Text>Status -: {item.status}</Text>
            </View>
        </SafeAreaView>
    )
}

export default ScheduleInfo

const Styles = StyleSheet.create({
    image:{
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: 25
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
    },
    details:{
        alignItems: 'center',

    }
})