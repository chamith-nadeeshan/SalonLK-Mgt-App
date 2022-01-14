import React, {Component, useEffect, useState} from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, FlatList, StyleSheet,TextInput } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'

export default function Staff({navigation}) {
    const [staff, setStaff] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/staff/view/12')
        .then((response) => response.json())
        .then((response) => {
            setStaff(response.staff);
            setmasterData(response.staff);
            setLoading(false)
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
            setStaff(newData);
            setsearch(text);
        } else {
            setStaff(masterData);
            setsearch(text);
        }
    }

   
    return (
  
        <SafeAreaView style={{backgroundColor: 'white'}}>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>
            <Text style={{fontSize: 20, fontWeight: '300', alignSelf: 'center', marginTop: 15}}>Staff</Text>

            {/* SearchBar starts here */}
            <View style={styles.SearchBar} >
                <View style={{flexDirection: 'row', marginLeft: 15}} >
                    <Image source={require('../assets/icons/search.png')} />
                    <TextInput style={{marginLeft: 10}}  placeholder="Search...." value={search} onChangeText={(text) => searchFilter(text)} />
                </View>
            </View>

            {/* Add Button */}
            <TouchableOpacity onPress={() =>{navigation.navigate('Add Staff');}}>
                <View style={{alignItems: 'flex-end', marginRight: 15, marginBottom: 15}}>
                    <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{color: 'white', marginRight: 5}}>Add</Text>
                        <Image source={require('../assets/icons/PlusIcon.png')} />
                    </View>
                </View>
            </TouchableOpacity>

            
                <FlatList
                    data={staff}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=>{return item.staffId}}
                    onRefresh={()=>fetchData()} 
                    refreshing={loading}
                    renderItem={({item,index})=>(
                        <View style={styles.Persons} >
                            <View style={{flexDirection: 'row'}} >
                                <Image style={{width:57,height: 57, borderRadius: 15}} source={require('../assets/images/profil.jpg')} />
                                <View style={{marginLeft: 15}} >
                                    <Text style={{fontWeight: '700'}} >{item.fullName}</Text>
                                    <Text>{item.typeName}</Text>
                                    <Text>{item.nic}</Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() =>{navigation.navigate('View Staff', {item})}}>
                                    <View style={{width: 65, height: 28, backgroundColor: '#4967E5', borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginBottom: 5}} >
                                        <Text style={{color: 'white'}} >View</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={() =>{navigation.navigate('Delete Staff', {item})}} >
                                    <View style={{width: 65, height: 28, backgroundColor: '#418789', borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
                                        <Text style={{color: 'white'}}>Delete</Text>
                                    </View>
                                </TouchableOpacity> */}
                            </View>
                        </View>    
                    )}
                />   

                {/* <StaffBanner Name= 'Rajini Abeygunawardhana' Position= 'Manager' Id='972112918v' />
                <StaffBanner Name= 'Rajini Abeygunawardhana' Position= 'Manager' Id='972112918v' />
                <StaffBanner Name= 'Rajini Abeygunawardhana' Position= 'Manager' Id='972112918v' />
                <StaffBanner Name= 'Rajini Abeygunawardhana' Position= 'Manager' Id='972112918v' /> */}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Persons: {
        width: 380,
        paddingHorizontal: 15,
        height: 80,
        marginBottom: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowRadius: 10, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center'


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

