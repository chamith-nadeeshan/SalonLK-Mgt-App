import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

export default function SearchBar() {
    return (
        <View style={Styles.container}>
            <View style={Styles.search}>
                <Image style={Styles.SearchIcon} source={require('../assets/icons/search.png')}/>
                <TextInput style={Styles.textInput}>Search...</TextInput>
            </View>
            <TouchableOpacity>
            <Image style={Styles.filterIcon} source={require('../assets/icons/filterButton.png')} />
            </TouchableOpacity>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "90%",
        height: 50,
        margin: 15,
        alignSelf: 'center',
        borderRadius: 50,
        shadowRadius: 5, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 10},
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
        search: {
            flexDirection: 'row',
            marginLeft: 15,
        },

    SearchIcon: {
        width: 23,
        height: 23,
    },

    textInput: {
        color: 'black',
        marginLeft: 15,
        

    },

    filterIcon: {
        width: 60,
        height: 50,
    

    }

})