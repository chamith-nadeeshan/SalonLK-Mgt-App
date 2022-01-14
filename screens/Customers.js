import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert, RefreshControl } from 'react-native'
import SearchBar from '../components/SearchBar'
import { DrawerActions } from '@react-navigation/routers'
import { styles } from 'styled-system';

export default function Customers({navigation}) {
    const[customers, setCustomers] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setloading]= useState(true)
    
    const fetchData = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/customer/view/12')
        .then((response) => response.json())
        .then((response) => {
            setCustomers(response.lists);
            setmasterData(response.lists);
            setloading(false)
        }).catch(err=>{
            Alert.alert("Something went wrong")
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    const searchFilter = (text) => {
        if(text) {
            const newData = masterData.filter((item) => {
                const itemData = item.fullName ? 
                    item.fullName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setCustomers(newData);
            setsearch(text);
        } else {
            setCustomers(masterData);
            setsearch(text);
        }
    }
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>
            
            {/* seach bar */}
            <View style={Styles.SearchBar} >
                <View style={{flexDirection: 'row', marginLeft: 15}} >
                    <Image source={require('../assets/icons/search.png')} />
                    <TextInput style={{marginLeft: 10}}  placeholder="Search...." value={search} onChangeText={(text) => searchFilter(text)} />
                </View>
            </View>

                {/* Add Button */}
                <TouchableOpacity onPress={() =>{navigation.navigate('Add Customer');}}>
                <View style={{alignItems: 'flex-end', marginRight: 15}}>
                    <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{color: 'white', marginRight: 5}}>Add</Text>
                        <Image source={require('../assets/icons/PlusIcon.png')} />
                    </View>
                </View>
                </TouchableOpacity>

            
                <FlatList
                    data={customers}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=>{return item.customerId}}
                    onRefresh={() => fetchData()}
                    refreshing={loading}
                    renderItem={({item,index})=>(
                        <View style={Styles.CustomerBox} >
                            <View style={{flexDirection: 'row', alignItems: 'center'}} >
                                <Image style={Styles.Img} source={require('../assets/images/profil.jpg')} styles={{width: 10}} />
                                <View style={{marginLeft: 10}} >
                                    <Text style={{fontWeight: '700', fontSize: 16}}>{item.fullName}</Text>
                                    <Text>{item.registerDate}</Text>
                                    <Text>{item.gender}</Text>
                                    <Text>{item.mobileNo}</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity style={Styles.info} onPress={() =>{navigation.navigate('Profile', {item})}}>
                                    <Text style={{color: 'white'}}>Info</Text>
                                </TouchableOpacity>
                                {/* <TouchableOpacity style={Styles.delete} onPress={() =>{navigation.navigate('Delete', {item})}}>
                                    <Text style={{color: 'white'}}>Delete</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    )}
                    />       
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    CustomerBox: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        shadowRadius: 10, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        width: 370,
        height: 96,
        paddingHorizontal: 10,
        borderRadius: 15,
        alignSelf: 'center'
    },

    info:{
        width: 65,
        height: 30,
        backgroundColor: "#4967E5",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },

    delete:{
        width: 65,
        height: 30,
        backgroundColor: "#418789",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Img:{
        width: 80,
        height: 80,
        borderRadius: 15

    },

    SearchBar: {
        width: 360,
        height: 50,
        shadowRadius: 5, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 10},
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 25,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },
})

const Button = () => <View><Image 
    source={require('../assets/icons/menuButton.png')} 
    style={{width: 29, height: 29, marginLeft: 15, marginTop: 10,}}
 />
 </View>

const HeaderText = (props) => <Text 
    style={{fontSize: 20, marginTop: 10, marginLeft:0, marginRight: 80, fontWeight: '400'}}>{props.text}</Text>

const Avatar = () => <Image
    source ={{uri: 'https://thumbs.dreamstime.com/b/head-shoulders-portrait-young-african-american-man-71528512.jpg'}}
    style={{width: 31, height: 31, borderRadius: 50, marginTop: 10, marginRight: 15}}
/>