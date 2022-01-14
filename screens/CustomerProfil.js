import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'



export default function CustomerProfil({
    name = 'Wasantha Kolabage',
    Registered_date = '25.04.2021',
    Phone_no = '0719364099',
    Gender = 'Male',
    Age_range = '31-40',
    Email = 'wasanthakolambage@gmail.com'

}) {
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center', marginTop: 30}}>
                <Profil />

                <Text style={{fontSize: 20, fontWeight: '500', marginTop: 20}}>{name}</Text>
                <Text style={{fontSize: 16, fontWeight: '200', marginTop: 10}}>Edit</Text>

                <View style={{flexDirection: 'row', margin: 15 }}>
                    <TouchableOpacity><Image style={{marginHorizontal: 10}} source={require('../assets/icons/mailIcon.png')} /></TouchableOpacity>
                    <TouchableOpacity><Image style={{marginHorizontal: 10}} source={require('../assets/icons/callIcon.png')} /></TouchableOpacity>
                    <TouchableOpacity><Image style={{marginHorizontal: 10}} source={require('../assets/icons/wtsappIcon.png')} /></TouchableOpacity>
                </View>

                {/* Horzontal Line */}
                <View style={{width: 350, marginBottom: 20 ,backgroundColor: '#C7C7C7', height: 0.5}} /> 
            </View>

            {/* Detail section starts Here */}
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '300'}}>Registered Date -</Text>
                    <Text style={{fontSize: 16, fontWeight: '200', marginLeft: 20}}>{Registered_date}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '300'}}>Phone No -</Text>
                    <Text style={{fontSize: 16, fontWeight: '200', marginLeft: 20}}>{Phone_no}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '300'}}>Gender -</Text>
                    <Text style={{fontSize: 16, fontWeight: '200', marginLeft: 20}}>{Gender}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '300'}}>Age Range -</Text>
                    <Text style={{fontSize: 16, fontWeight: '200', marginLeft: 20}}>{Age_range}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight: '300'}}>Email -</Text>
                    <Text style={{fontSize: 16, fontWeight: '200', marginLeft: 20}}>{Email}</Text>
                </View>
               
            </View>
            {/* Detail section ends here */}

            {/* Horizontal Line */}
            <View style={{width: 350, marginBottom: 20 ,backgroundColor: '#C7C7C7', height: 0.8, alignSelf: 'center', marginVertical: 20}} /> 

            {/* Serivce History setion starts here */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 10, marginBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Service History</Text>
                    <TouchableOpacity><Text style={{fontSize: 16, fontWeight:'300', color: '#115B9B'}}>See all</Text></TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30, justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontWeight: '300'}}>Hair Cut</Text>
                    <Text style={{fontWeight: '300'}}>09.11.2020</Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30, justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontWeight: '300'}}>Foot Massage</Text>
                    <Text style={{fontWeight: '300'}}>09.11.2020</Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30, justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontWeight: '300'}}>Facial</Text>
                    <Text style={{fontWeight: '300'}}>09.11.2020</Text>
                </View>
            {/* Serivce History setion ends here */}

            {/* Product History setion starts here */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 10, marginBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Service History</Text>
                    <TouchableOpacity><Text style={{fontSize: 16, fontWeight:'300', color: '#115B9B'}}>See all</Text></TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30, justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontWeight: '300'}}>Hair Cut</Text>
                    <Text style={{fontWeight: '300'}}>09.11.2020</Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30, justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontWeight: '300'}}>Foot Massage</Text>
                    <Text style={{fontWeight: '300'}}>09.11.2020</Text>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30, justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontWeight: '300'}}>Facial</Text>
                    <Text style={{fontWeight: '300'}}>09.11.2020</Text>
                </View>
            {/* Product History setion ends here */}
            
            </ScrollView>
        </SafeAreaView>

    )
}


const Profil = () => <Image 
    source={require('../assets/images/profil.jpg')} 
    style={{width: 135, height: 135, borderRadius: 100}}
    
    />

