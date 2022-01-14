import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default function HomeTab() {
    const [activeTab, setActiveTab] = useState('Today');
    return (
        <View style={{flexDirection: 'row', alignSelf:'center', marginTop: 42}}>
            <View style={{flexDirection: 'row', backgroundColor: '#D4E4E5', borderRadius: 20, marginRight: 7}}>
                <HeaderButton text='Today' btnColor='black' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeaderButton text='Week' btnColor='#D4E4E5' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeaderButton text='Month' btnColor='#D4E4E5' textColor='black'activeTab={activeTab} setActiveTab={setActiveTab} />
                <HeaderButton text='Year' btnColor='#D4E4E5' textColor='black'activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
            <TouchableOpacity>
                <FilterButton />
            </TouchableOpacity>
        </View>
    );
}

const HeaderButton = (props) => 
    <View>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab == props.text ? "black" : "#D4E4E5",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 50,
        
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
        <Text style={{fontSize:14,fontWeight: '600', color: props.activeTab == props.text ? "white" : "black",}}>{props.text}</Text>
        </TouchableOpacity>
    </View>

const FilterButton = () => <Image
    source={require('../assets/icons/filterButton.png')}
    style={{width: 48, height: 40}} 
/>