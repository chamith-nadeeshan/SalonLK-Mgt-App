import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TextBox, TouchableOpacity } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'
import SaveButton from '../components/SaveButton'

export default function AddWorkingHours({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            
            <View style={{marginTop: '15%'}}>
                <InputDateBox InputBoxName= 'Day' />
                <InputBoxs InputBoxName='Open Time'/>
                <InputBoxs InputBoxName='Close Time'/>
                <SaveButton />
            </View>

            
        </SafeAreaView>
    )
}

const InputDateBox = (props) => <View>
    <Text style={{
        fontSize: 20,
        fontWeight: '300',
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 10
    }}>{props.InputBoxName}</Text>

    <View style={{
        width: 360,
        height: 60,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 10},
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between'

    }}>
        <Text style= {{fontSize: 16, fontWeight: '300', marginLeft: 10}}>Monday</Text>
        <Image style={{tintColor: 'black', marginRight: 10, width: 16, height: 9 }} source= {require('../assets/icons/downArrowIcon.png')} />
        
    </View>
</View>

const InputBoxs = (props) => <View>
    <Text style={{
        fontSize: 20,
        fontWeight: '300',
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 10
    }}>{props.InputBoxName}<Text style={{color: '#F51F1F'}}> *</Text></Text>

    <View style={{
        width: 360,
        height: 60,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 10},
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between'

    }}>
        <Text style= {{fontSize: 16, fontWeight: '300', marginLeft: 10}}>Type Here ....</Text>
        
    </View>
</View>

