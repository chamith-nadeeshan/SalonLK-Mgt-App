import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, StyleSheet, TextInput, RefreshControl } from 'react-native'
import { DrawerActions } from '@react-navigation/routers'

export default function TreatmentList({ navigation }) {
    const [treatment, setTreatment] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment/view/12')
        .then((response) => response.json())
        .then((response) => {
            setTreatment(response.lists)
            setmasterData(response.lists);
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchData()
    }, []) 

    const searchFilter = (text) => {
        if(text) {
            const newData = masterData.filter((item) => {
                const itemData = item.treatmentName ? 
                    item.treatmentName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setTreatment(newData);
            setsearch(text);
        } else {
            setTreatment(masterData);
            setsearch(text);
        }
    }

    // const Delete = () => {
    //     fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment/delete/${item.treatmentId}`)
    //     .then((response) => response.json()) 
    // };
    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Button />
                </TouchableOpacity>
                <HeaderText text='Hi! Salon Premium' />
                <Avatar />
            </View>

            <Text style={{fontSize: 20, marginTop: 25, alignSelf: 'center'}}>Treatment List</Text>
            
            {/* SearchBar starts here */}
            <View style={styles.SearchBar} >
                <View style={{flexDirection: 'row', marginLeft: 15}} >
                    <Image source={require('../assets/icons/search.png')} />
                    <TextInput style={{marginLeft: 10}}  placeholder="Search...." value={search} onChangeText={(text) => searchFilter(text)} />
                </View>
                <View>
                    <Image style={{width: 60, height: 50}} source={require('../assets/icons/filterButton.png')} />
                </View>
            </View>

            {/* Add Button */}
            <TouchableOpacity onPress={() =>{navigation.navigate('Add Treatment');}}>
                <View style={{alignItems: 'flex-end', marginRight: 15, marginBottom: 25}}>
                    <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{color: 'white', marginRight: 5}}>Add</Text>
                        <Image source={require('../assets/icons/PlusIcon.png')} />
                    </View>
                </View>
            </TouchableOpacity>
            
                {/* Treatment banners starts here */}
                <FlatList
                    data={treatment}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=>{return item.treatmentId}}
                    onRefresh={()=>fetchData()}
                    refreshing={loading}
                    renderItem={({item,index})=>(
                        <View style={styles.boxes} >
                            <View style={{flexDirection: 'row', alignItems: 'center'}} >
                                <View style={{ backgroundColor: item.colorCode,
                                            width: 80,
                                            height: 80,
                                            borderRadius: 15,
                                            marginRight: 10}} />
                                <View>
                                    <Text style={{fontWeight: '700'}} >{item.treatmentName}</Text>
                                    <Text>Price - {item.price}</Text>
                                    <Text>Cost - {item.cost}</Text>
                                </View>
                            </View> 
                            <View>
                                <TouchableOpacity onPress={() =>{navigation.navigate('View Treatment', {item})}} >
                                    <View style={styles.editBox} >
                                        <Text style={{color: 'white'}} >View</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* <TouchableOpacity onPress={() =>{navigation.navigate('Delete Treatment', {item})}}>
                                    <View style={styles.deleteBox} >
                                        <Text style={{color: 'white'}}>Delete</Text>
                                    </View>
                                </TouchableOpacity> */}
                            </View>       
                        </View>    
                    )}
                />   
                {/* Treatment banners ends here */}
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    editBox: {
        width: 65,
        height: 28,
        backgroundColor: '#4967E5',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
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

    deleteBox: {
        width: 65,
        height: 28,
        backgroundColor: '#ED5151',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxes: {
        flexDirection: 'row',
        backgroundColor:'white',
        marginBottom: 10,
        width: 360,
        height: 95,
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowRadius: 10, 
        shadowColor: 'black', 
        shadowOpacity: 0.2,
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