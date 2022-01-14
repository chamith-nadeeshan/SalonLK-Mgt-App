import { DrawerActions, NavigationHelpersContext } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function Admins({navigation}) {
    const[admin, setadmin] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setloading]= useState(true)
    
    const fetchData = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/staff/type/12')
        .then((response) => response.json())
        .then((response) => {
            setadmin(response.type);
            setmasterData(response.type);
            setloading(false)
        }).catch(err=>{
            Alert.alert("Something went wrong")
        })
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return (
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>
            
            <Text style={{fontSize: 20, alignSelf: 'center', margin: 10, fontWeight: '300'}}>Admins</Text>
            <SearchBar />

            {/* Add Button */}
            <TouchableOpacity onPress={() =>{navigation.navigate('Add Admin');}}>
                <View style={{alignItems: 'flex-end', marginRight: 15}}>
                    <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{color: 'white', marginRight: 5}}>Add</Text>
                        <Image source={require('../assets/icons/PlusIcon.png')} />
                    </View>
                </View>
                </TouchableOpacity>

                <FlatList
                    data={admin}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=>{return item.customerId}}
                    onRefresh={() => fetchData()}
                    refreshing={loading}
                    renderItem={({item,index})=>(
                        <View style={Styles.box}>
                            <View>
                                <Text style={{fontWeight: '700', fontSize: 16}}>{item.fullName}</Text>
                                <Text>{item.nic}</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={Styles.edit}>
                                    <Text style={{color: 'white'}}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Styles.delete}>
                                    <Text style={{color: 'white'}}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                            

                                   
                        </View>
                    )}
                    />       
               
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    box:{
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

    edit:{
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