import React, {useState} from 'react'
import {Text, View, Button, Alert} from 'react-native'
import { Input } from 'react-native-elements';

function EditTreatmentType({route, navigation}) {
    const{item} = route.params
    const [form, setForm] = useState({}); 

    const onSubmit = () => {
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment_type/update/${item.treatmentTypeId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "treatmentTypeName": form.Name,
                "salonId": 12
          })
        });
        Alert.alert("Successfull", "Edited succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatment Type'),
            style: 'cancel',
        }
        ]
        )
    };

    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value});
    };
    return (
        <View style={{backgroundColor: 'white', height: '100%'}} >
            <Input placeholder={item.treatmentTypeName} onChangeText={(value) => {
                    onChangeText({name:'Name', value: value});
                }}  />
    
            <Button title="submit" onPress={onSubmit} />
            
        </View>
    )
}

export default EditTreatmentType
