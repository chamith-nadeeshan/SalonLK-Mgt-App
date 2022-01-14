import React from 'react'
import { View, Text, SafeAreaView, TextInput, Image, } from 'react-native'
import SaveButton from '../components/SaveButton'

export default function AddAdmin() {
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            

            <InputSelectBox boxName= 'Staff Name' />
            <InputBox boxName= 'Username' />
            <InputBox boxName= 'Password' />
            <InputBox boxName= 'Confirm Password' />

            <SaveButton />
        </SafeAreaView>
    )
}



const InputBox = (props) => <View style={{
    marginLeft: 15,
    marginBottom: 20,
    }}>
    <Text style={{fontSize: 15, fontWeight: '300'}}>{props.boxName} <Text style={{color: '#F51F1F'}}> *</Text></Text>

    <View style={{
        width: 360,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
        justifyContent: 'center'

        
        }}>
        <TextInput style={{
            fontSize: 16,
            fontWeight: '300',
            marginLeft: 15
        }}>Type here ....</TextInput>

    </View>
</View>


const InputSelectBox = (props) => <View style={{
    marginLeft: 15,
    marginBottom: 20,
    marginTop: 30
    }}>
    <Text style={{fontSize: 15, fontWeight: '300'}}>{props.boxName} <Text style={{color: '#F51F1F'}}> *</Text></Text>

    <View style={{
        width: 360,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

        
        }}>
        <TextInput style={{
            fontSize: 16,
            fontWeight: '300',
            marginLeft: 15
        }}>Type here ....</TextInput>
        <Image style={{width: 16, height: 9, marginRight: 15}} source={require('../assets/icons/downArrowIcon.png')} />

    </View>
</View>