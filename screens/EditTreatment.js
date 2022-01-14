import React, {useState} from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { Input } from 'react-native-elements';

function EditTreatment({route, navigation}) {
    const{item} = route.params
    const [form, setForm] = useState({}); 

    const onSubmit = () => {
        console.log('form', form)
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment/update/${item.treatmentId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "treatmentName": form.name,
                "treatmentTypeId": 2,
                "price": form.price,
                "cost": form.cost,
                "duration": form.duration,
                "description": form.description,
                "colorCode": form.colorCode,
                "salonId": 12
          })
        });
        Alert.alert("Successfull", "Edited Succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatments'),
            style: 'cancel',
        }
        ]
        )
    };

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };
    
    return (
        <View style={{backgroundColor: 'white', height: '100%', paddingTop: 15}} >
            <Input placeholder={item.treatmentName} onChangeText={(value) => {
                    onChangeText({name:'name', value: value});
                 }} />
            <Input placeholder={item.price} onChangeText={(value) => {
                    onChangeText({name:'price', value: value});
                 }}/>
             <Input placeholder={item.cost} onChangeText={(value) => {
                    onChangeText({name:'cost', value: value});
                 }}/>
            <Input placeholder={item.description} onChangeText={(value) => {
                    onChangeText({name:'description', value: value});
                 }}/>
            <Input placeholder="Duration" onChangeText={(value) => {
                    onChangeText({name:'duration', value: value});
                 }} />
            <Input placeholder="Color Code" onChangeText={(value) => {
                    onChangeText({name:'colorCode', value: value});
                 }} />
            <Button title="Submit" onPress={onSubmit} />
        </View>
    )
}

export default EditTreatment
