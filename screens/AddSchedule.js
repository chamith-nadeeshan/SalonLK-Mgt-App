import React, { useState } from 'react'
import { TextInput } from 'react-native';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, Button, Alert} from 'react-native'
import { Input } from 'react-native-elements';
import SaveButton from '../components/SaveButton';

export default function AddSchedule({navigation}) {
    // const [activeTab, setActiveTab] = useState('Existing Customers');
    const [form, setForm] = useState({}); 

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/schedule/store', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "customerId": 3,
                "treatmentId": 3,
                "date": form.date,
                "startTime": form.startTime,
                "endTime": form.endTime,
                "price": form.price,
                "staffId": 11,
                "phone": form.phone,
                "name": form.name,
                "salonId": 12
          })
        });
        Alert.alert("Successfull", "Registration succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('ScheduleList'),
            style: 'cancel',
        }
        ]
        )
    };
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            

            {/* Header Tab starts here */}
            {/* <View style={{flexDirection: 'row', backgroundColor: '#D4E4E5', borderRadius: 20, marginRight: 15, marginTop: 15, marginLeft: 15, marginBottom: 20}}>
                <HeaderButton text='Existing Customers' btnColor='black' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeaderButton text='New Customers' btnColor='#D4E4E5' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab} />  
            </View> */}
            {/* Header tab ends here */}

            {/* Input Section */}
            <ScrollView style={{marginTop: 30}} >

            <Input onChangeText={(value) => {
                onChangeText({name:'name', value: value});
                }}  placeholder= 'Name' />    

            <Input onChangeText={(value) => {
                onChangeText({name:'phone', value: value});
                }}  placeholder= 'Phone number' />
            
            <Input onChangeText={(value) => {
                onChangeText({name:'date', value: value});
                }}  placeholder= 'Date' />

            <Input onChangeText={(value) => {
                onChangeText({name:'StartTime', value: value});
                }}  placeholder= 'Start time' />

            <Input onChangeText={(value) => {
                onChangeText({name:'endTime', value: value});
                }}  placeholder= 'End time' />

            <Input onChangeText={(value) => {
                onChangeText({name:'price', value: value});
                }}  placeholder= 'Price' />
            
            
            
            <Button onPress={onSubmit} title="Save" />
            
        </ScrollView>
        </SafeAreaView>
    )
}


const InputName = (props) => <Text
    style={{fontSize: 20, fontWeight: '200', color: '#959595', marginTop: 15 }}>
    {props.text}
</Text>


const HeaderButton = (props) => 
    <View>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab == props.text ? "black" : "#D4E4E5",
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 50,
        
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
        <Text style={{fontSize:14,fontWeight: '600', color: props.activeTab == props.text ? "white" : "black",}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    

const Styles = StyleSheet.create({
    InputBox: {
        shadowRadius: 5, 
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        width: 350,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',

    },

    DateBox: {
        shadowRadius: 5, 
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        width: 170,
        height: 60,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
        marginRight: 5

    },

    TimeBox: {
        shadowRadius: 5, 
        shadowOffset: {width: 0, height: 5},
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        width: 170,
        height: 60,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',

    },


}) 