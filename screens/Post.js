import React from 'react'
import { View, Text } from 'react-native'

export default function Post() {
    fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/staff/store', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "fullName": "chamal",
        "nic": "97565656",
        "staff_type": 5,
        "salonId": 12
  })
});
    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}
