import React, { useState } from 'react'
import { Button, TextInput } from 'react-native'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import { Input } from 'react-native-elements';
import SaveButton from '../components/SaveButton'


export default function AddStaff({ navigation }) {
    const [form, setForm] = useState({}); 

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/staff/store', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fullName": form.fullName,
                "nic": form.nic,
                "staff_type": 5,
                "salonId": 12
          })
        });

        Alert.alert("Successfull", "Registration succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Staff'),
            style: 'cancel',
        }
        ])
    };

  

    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                 
                </TouchableOpacity>
                
 
            </View>

            <Text style={{fontSize: 20, fontWeight: '300', alignSelf: 'center', margin: 20}}>Add Staff</Text>
            <ScrollView>
                <Input onChangeText={(value)=> {
                    onChangeText({name:'fullName', value: value});
                 }} 
                placeholder= 'Full name' />

                <Input onChangeText={(value) => {
                    onChangeText({name:'nic', value: value});
                 }} 
                 placeholder= 'NIC' />

                {/* <InputSelectBox boxName= 'Staff Type' /> */}
                <Input onChangeText={(value) => {
                    onChangeText({name:'phoneNo', value: value});
                 }}  placeholder= 'Phone No' />

                <Input onChangeText={(value) => {
                    onChangeText({name:'email', value: value});
                 }}  placeholder= 'Email' />

                <Button  onPress={onSubmit} title="Submit"/>
            </ScrollView>
        </SafeAreaView>
    )
}  


const InputSelectBox = (props) => <View style={{
    marginLeft: 15,
    marginBottom: 20
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