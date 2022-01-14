import React from 'react'
import { View, Text, Image } from 'react-native'

function Calender() {
    return (
        <View>
            <Time startTime="8.00 AM" endTime="8.10 AM" />
            <Time  endTime="8.20 AM" />
            <Time  endTime="8.40 AM" />
            <Time  endTime="8.50 AM" />
            <Time  endTime="9.00 AM" />
            <Time  endTime="9.10 AM" />
            <Time  endTime="9.20 AM" />
            <Time  endTime="9.40 AM" />
            <Time  endTime="9.50 AM" />
            <Time  endTime="10.00 AM" />
            <Time  endTime="10.10 AM" />
            <Time  endTime="10.20 AM" />
            <Time  endTime="10.30 AM" />
            <Time  endTime="10.40 AM" />
            <Time  endTime="10.50 AM" />
            <Time  endTime="11.00 AM" />
            <Time  endTime="11.10 AM" />
            <Time  endTime="11.20 AM" />
            <Time  endTime="11.30 AM" />
            <Time  endTime="11.40 AM" />
            <Time  endTime="11.50 AM" />
            <Time  endTime="12.00 PM" />
            <Time  endTime="12.10 PM" />
            <Time  endTime="12.20 PM" />
            <Time  endTime="12.30 PM" />
            <Time  endTime="12.40 PM" />
            <Time  endTime="12.50 PM" />
            <Time  endTime="1.00 PM" />
            <Time  endTime="1.10 PM" />
            <Time  endTime="1.20 PM" />
            <Time  endTime="1.30 PM" />
            <Time  endTime="1.40 PM" />
            <Time  endTime="1.50 PM" />
            <Time  endTime="2.00 PM" />
            <Time  endTime="2.10 PM" />
            <Time  endTime="2.20 PM" />
            <Time  endTime="2.30 PM" />
            <Time  endTime="2.40 PM" />
            <Time  endTime="2.50 PM" />
            <Time  endTime="3.00 PM" />
            <Time  endTime="3.10 PM" />
            <Time  endTime="3.20 PM" />
            <Time  endTime="3.30 PM" />
            <Time  endTime="3.40 PM" />
            <Time  endTime="3.50 PM" />
            <Time  endTime="3.00 PM" />
            <Time  endTime="3.10 PM" />
            <Time  endTime="3.20 PM" />
            <Time  endTime="3.30 PM" />
            <Time  endTime="3.40 PM" />
            <Time  endTime="3.50 PM" />
            <Time  endTime="4.00 PM" />
            <Time  endTime="4.10 PM" />
            <Time  endTime="4.20 PM" />
            <Time  endTime="4.30 PM" />
            <Time  endTime="4.40 PM" />
            <Time  endTime="4.50 PM" />
        </View>
    )
}

export default Calender

const Time = (props) => <View style={{
    flexDirection: 'row', 
    alignItems: 'center'}} 
    >

    <View style={{marginRight: 10}} >
        <Text style={{
            fontSize: 12
        }} >{props.startTime}</Text>
        <Text style={{
            fontSize: 12,
            marginTop: 0,
        }} >{props.endTime}</Text>
    </View>
    <View style={{
        backgroundColor: 'white', 
        borderColor: '#E3E3E3',
        borderWidth: 2,
        width: 100, 
        height: 17,
        marginHorizontal: 5}}
         >

    </View>
    <View style={{
        backgroundColor: 'white', 
        borderColor: '#E3E3E3',
        borderWidth: 2,
        width: 100, 
        height: 17,
        marginHorizontal: 5}}
         >

    </View>
    <View style={{
        backgroundColor: 'white', 
        borderColor: '#E3E3E3',
        borderWidth: 2,
        width: 100, 
        height: 17,
        marginHorizontal: 5}}
         >

    </View>
    
</View>