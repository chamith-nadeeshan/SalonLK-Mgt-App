import React, { useState, useEffect } from 'react'
import { View, Text,SafeAreaView, ScrollView, Image, StyleSheet,TouchableOpacity, FlatList } from 'react-native'
import { styles } from 'styled-system';

export default function UserProfil({navigation}) {
    const [product, setproduct] = useState([]);
    const [details, setdetails] = useState([]);

    useEffect(() => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/product/view/12')
        .then((response) => response.json())
        .then((response) => {
            setproduct(response.products);
        })
    }, []);

    useEffect(() => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/salon/details/12')
        .then((response) => response.json())
        .then((response) => {
            setdetails(response.salons);
        })
    }, []);
    return (
        <ScrollView>
            <SafeAreaView style={{backgroundColor: 'white'}}>
                <FlatList
                        data={details}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index)=>{return item.salonId}}
                        renderItem={({item,index})=>(
                            <View>
                                <View>
                                    <Image style={Styles.coverPhoto} source={{ uri: item.SliderImageApp }} />
                                </View>
                                <View>
                                    <Image style={Styles.ProfilImg} source={{ uri: item.logo }} />
                                </View>
                                <Text style={Styles.name} >{item.salonName}</Text>

                                <View style={{alignSelf: 'center', flexDirection: 'row', marginVertical: 20,}} >
                                    <TouchableOpacity style={Styles.SettingsButton}>
                                        <Image style={{width: 16, height: 16}} source={require('../assets/icons/settingIcon.png')} />
                                        <Text style={{color: 'white', fontSize: 14, fontWeight: '600', marginLeft: 5 }}>Settings</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={Styles.EditButton}>
                                        <Image style={{width: 16, height: 16}} source={require('../assets/icons/editIcon.png')} />
                                        <Text style={{color: 'white', fontSize: 14, fontWeight: '600', marginLeft: 5 }}>Edit Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />   
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
                        <Text style={{fontSize: 20}}>Listed Products</Text>
                        <TouchableOpacity onPress={() =>{navigation.navigate('All Products');}}>
                        <Text style={{fontSize: 16, color: '#115B9B'}}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Listing section */}
                    <FlatList
                        data={product}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index)=>{return item.ProductId}}
                        renderItem={({item,index})=>(
                            <View style={Styles.products}>
                                <View>
                                    <Image style={{width: 100, height: 65}} source={require('../assets/images/product1.jpg')} />
                                </View>
                                <View style={Styles.details} >
                                    <Text style={{color: 'white', fontSize: 12, fontWeight: '500'}}>{item.ProductName}</Text>
                                    <Text style={{color: 'white', fontSize: 10}}>{item.RegularPrice}</Text>
                                    <Text style={{color: 'white', fontSize: 10}}>{item.DiscountedPrice}</Text>
                                </View>
                            </View>  
                        )}
                    />   
                        
                </View>

                {/* Help Button */}
                <TouchableOpacity style={Styles.HelpButton}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                        <Image source={require('../assets/icons/helpIcon.png')} />
                        <View style={{marginLeft: 15}}>
                            <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>Help</Text>
                            <Text style={{color: 'white', fontSize: 12, fontWeight: '400'}}>FAQs, Helpdesk</Text>
                        </View>
                    </View>
                    <Image style={{marginRight: 15}} source={require('../assets/icons/rightArrow.png')} />
                </TouchableOpacity>

                {/* Log out Button */}
                <TouchableOpacity style={Styles.logOutButton}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>Log Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center'   
    },

    coverPhoto: {
        height: 149,
        width: 360,
        alignSelf: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    products: {
        width: 100,
        height: 140,
        marginLeft: 15,
        backgroundColor: '#4A0204',
        borderRadius: 15,
    },

    name: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10
    },
    details: {
        paddingHorizontal: 5,
    },

    ProfilImg: {
        height: 146,
        width: 146,
        borderRadius: 100,
        marginTop: -80,
        alignSelf: 'center',
    },

    ProfiladdButton: {
        backgroundColor: 'black',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,
        marginRight: -80,
        borderRadius: 5,
    },

    CoveraddButton: {
        backgroundColor: 'black',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -200,
        marginRight: -310,
        borderRadius: 5,
    },

    ProfilButtons: {
        flexDirection: 'row',
        margin: 20
    },

    SettingsButton: {
        width: 120,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5,
    },

    EditButton: {
        width: 120,
        height: 40,
        backgroundColor: '#418789',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },


    HelpButton: {
        width: 360,
        height: 60,
        backgroundColor: '#418789',
        margin: 15,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        

    },

    logOutButton: {
        width: 360,
        height: 60,
        backgroundColor: 'black',
        margin: 15,
        marginTop: 0,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
        

    }

})

