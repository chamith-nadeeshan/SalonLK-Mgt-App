import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList, StyleSheet, TextInput  } from 'react-native'
import SearchBar from '../components/SearchBar'
import { DrawerActions } from '@react-navigation/routers'
import { style } from 'styled-system';
export default function ScheduleList({navigation}) {
    const [schedule, setschedule] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setloading]= useState(true)

    const fetchData = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/shcedule_view/12')
        .then((response) => response.json())
        .then((response) => {
            setschedule(response.schedule);
            setmasterData(response.schedule);
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
            setschedule(newData);
            setsearch(text);
        } else {
            setschedule(masterData);
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
            
            {/* search bar */}
            <View style={styles.SearchBar} >
                <View style={{flexDirection: 'row', marginLeft: 15}} >
                    <Image source={require('../assets/icons/search.png')} />
                    <TextInput style={{marginLeft: 10}}  placeholder="Search...." value={search} onChangeText={(text) => searchFilter(text)} />
                </View>
            </View>   
                {/* Add Button */}
                <TouchableOpacity onPress={() =>{navigation.navigate('Add Schedule');}}>
                <View style={{alignItems: 'flex-end', marginRight: 15, marginBottom: 15}}>
                    <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{color: 'white', marginRight: 5}}>Add</Text>
                        <Image source={require('../assets/icons/PlusIcon.png')} />
                    </View>
                </View>
                </TouchableOpacity>
                
                    <FlatList
                        data={schedule}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index)=>{return item.sheduleId}}
                        onRefresh={() => fetchData()}
                        refreshing={loading}
                        renderItem={({item,index})=>(
                            <View style={styles.boxes} >
                                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                                    <Image style={styles.image} source={require('../assets/images/profil.jpg')} />
                                    <View style={{marginLeft: 10}} >
                                        <Text style={{fontWeight: '600'}} >{item.fullName}</Text>
                                        <Text>Date - {item.date}</Text>
                                        <Text>Time - {item.startTime}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                                            <Text>Tratment - {item.treatmentName}</Text>
                                            <View style={styles.treatmentColor}></View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{alignItems: 'center'}} >
                                    <TouchableOpacity style={styles.billButton} >
                                        <Text style={{color: 'white'}} >Bill</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.infoButton} onPress={() =>{navigation.navigate('Schedule info', {item})}} >
                                        <Text style={{color: 'white'}} >Info</Text>
                                    </TouchableOpacity>
                                    <Text>{item.price}</Text>
                                </View>
                            </View>  
                        )}
                    />   
                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    boxes:{
        width: 370,
        height: 90,
        backgroundColor: 'white',
        marginBottom: 15,
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        shadowRadius: 10, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        justifyContent: 'space-between'

    },

    image:{
        width: 80,
        height: 80,
        borderRadius: 15
    },

    treatmentColor: {
        width: 12,
        height: 12,
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 5
    },

    billButton:{
        width: 65,
        height: 30,
        backgroundColor: '#4967E5',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },

    infoButton:{
        width: 65,
        height: 30,
        backgroundColor: '#418789',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
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