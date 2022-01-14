import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert  } from 'react-native'
import SearchBar from '../components/SearchBar'
import { DrawerActions } from '@react-navigation/routers'

export default function TreatmentType({ navigation }) {
    const [treatmentType, setTreatmentType] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const [loading, setLoading] = useState(true)

   

    const Delete = ({item}) => {
        fetch(`https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment_type/delete/${item.treatmentTypeId}`)
        .then((response) => response.json()) 

        Alert.alert("Successfull", "Deleted succesfully!",
        [
            {text: "Ok",
            onPress: () => navigation.navigate('Treatment Type'),
            style: 'cancel',
        }
        ]
        )
    };

    const OnDelete = () => {
        Alert.alert(  
            'Delete',  
            'Are you sure you want to delete',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => {Delete}},  
            ]  
        );  
    }

    const fetchData = () =>{
        fetch('https://managementapi.salons.lk/salonslkMgtAPI/public/api/treatment_type/view/12')
        .then((response) => response.json())
        .then((response) => {
            setTreatmentType(response.lists)
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
                const itemData = item.treatmentTypeName ? 
                    item.treatmentTypeName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setTreatmentType(newData);
            setsearch(text);
        } else {
            setTreatmentType(masterData);
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

            <Text style={{fontSize: 20, fontWeight: '300', alignSelf: 'center', marginTop: 20}}>Tratment Type</Text>
            
            {/* SearchBar starts here */}
            <View style={styles.SearchBar} >
                <View style={{flexDirection: 'row', marginLeft: 15}} >
                    <Image source={require('../assets/icons/search.png')} />
                    <TextInput style={{marginLeft: 10}}  placeholder="Search...." value={search} onChangeText={(text) => searchFilter(text)} />
                </View>
            </View>

             {/* Add Button */}
             <TouchableOpacity onPress={() =>{navigation.navigate('Add Treatment Type');}}>
                <View style={{alignItems: 'flex-end', marginRight: 15, marginBottom: 25}}>
                    <View style={{backgroundColor: 'black', width: 80, height: 36, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{color: 'white', marginRight: 5}}>Add</Text>
                        <Image source={require('../assets/icons/PlusIcon.png')} />
                    </View>
                </View>
            </TouchableOpacity>

            {/* treatment types */}
            
            <FlatList
                    data={treatmentType}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=>{return item.treatmentTypeId}}
                    onRefresh={()=>fetchData()}
                    refreshing={loading}
                    renderItem={({item,index})=>(
                    <View style={styles.showBoxes} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <View style={{width: 73,
                                height: 67,
                                backgroundColor: item.colorCode,
                                borderRadius: 15,
                                marginRight: 15}} >
                            </View>
                            <Text style={{fontWeight: '700'}} >{item.treatmentTypeName}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() =>{navigation.navigate('Edit Treatment Type', {item})}} >
                                <View style={styles.editButton} >
                                    <Text style={{color: "white"}}>Edit</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {navigation.navigate('Delete Treatment Type', {item})} }>
                                <View style={styles.deleteButton} >
                                    <Text style={{color: "white"}} >Delete</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                          
                    )}
                />   
            

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
        width: 65,
        height: 28,
        backgroundColor: '#ED5151',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButton: {
        width: 65,
        height: 28,
        backgroundColor: '#4967E5',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    showBoxes:{
        marginHorizontal: 15,
        backgroundColor: 'white',
        width: 360,
        height: 80,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowRadius: 20, 
        shadowColor: 'black', 
        shadowOpacity: 0.1,
        justifyContent: 'space-between'

    },
    colorBox: {
        width: 73,
        height: 67,
        backgroundColor: 'red',
        borderRadius: 15,
        marginRight: 15

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