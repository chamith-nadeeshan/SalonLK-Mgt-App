import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function SaveButton() {
    return (
        <TouchableOpacity style={Styles.saveButton}>
            <Text style={{fontSize: 18, color: 'white', marginRight: 5}}>Save</Text>
            <Image style={{width: 14, height: 14, marginLeft: 5}} source={require('../assets/icons/saveIcon.png')} />
        </TouchableOpacity>

    )
}

const Styles = StyleSheet.create({
    saveButton: {
        width: 130,
        height: 60,
        backgroundColor: '#4967E5',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50



    }
})
