import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, Button, Alert, Picker } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { Input } from 'react-native-elements';

export default function AddCustomer({navigation}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
    const [form, setForm] = useState({});

    const onSubmit = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/customer/store', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "mobileNo": form.mobileNo,
                "fullName": form.fullName,
                "gender": form.gender,
                "city": form.city,
                "ageRange": form.ageRange,
                "email": form.email,
                "salonId": 12
          }),
        });
        Alert.alert("Successfull", "Registration succesfull!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Customers'),
            style: 'cancel',
        } ])
    };
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            

       

        {/* Input Section */}
        <ScrollView style={{margin: 15}} showsVerticalScrollIndicator={false}>
            {/* input box start */}
            <Input onChangeText={(value)=> {
                onChangeText({name:'fullName', value: value});
                }} 
                placeholder= 'Full name' />

            <Input onChangeText={(value) => {
                onChangeText({name:'mobileNo', value: value});
                }} 
                placeholder= 'Mobile number' />

            <Input onChangeText={(value) => {
                onChangeText({name:'gender', value: value});
                }}  
                placeholder= 'Gender' />

            <Input onChangeText={(value) => {
                onChangeText({name:'email', value: value});
                }}  
                placeholder= 'Email' />
                
            <Input onChangeText={(value) => {
                onChangeText({name:'ageRange', value: value});
                }}  
                placeholder= 'Age range' />

             <Input onChangeText={(value) => {
                onChangeText({name:'city', value: value});
                }}  
                placeholder= 'City' />


            <Button  onPress={onSubmit} title="Submit" />
            
            <DropDownPicker
    
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
            
        </ScrollView>
    </SafeAreaView>
)
}


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